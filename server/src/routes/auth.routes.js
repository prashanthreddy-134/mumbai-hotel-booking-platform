const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const prisma = require("../config/database");
const authenticate = require("../middleware/auth");

const router = express.Router();

const registerSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().transform(v => v.toLowerCase()),
  password: z.string().min(8).max(72)
});

const loginSchema = z.object({
  email: z.string().trim().email().transform(v => v.toLowerCase()),
  password: z.string().min(1).max(72)
});

function createToken(user) {
  return jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
  );
}

router.post("/register", async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid registration details" });
  }

  try {
    const { name, email, password } = parsed.data;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    return res.status(201).json({
      message: "Registration successful",
      user,
      token: createToken(user)
    });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Email already registered" });
    }
    throw error;
  }
});

router.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid login details" });
  }

  const { email, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const { password: ignored, ...safeUser } = user;

  return res.json({
    message: "Login successful",
    user: safeUser,
    token: createToken(user)
  });
});

router.get("/me", authenticate, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.sub },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });

  if (!user) {
    return res.status(401).json({ error: "User no longer exists" });
  }

  return res.json({ user });
});

module.exports = router;
