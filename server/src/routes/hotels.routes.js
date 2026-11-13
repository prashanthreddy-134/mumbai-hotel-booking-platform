
const express = require("express");
const { z } = require("zod");
const prisma = require("../config/database");

const router = express.Router();
const dateSchema = z.string().datetime({ offset: true });

function activeBookingFilter(now) {
  return {
    OR: [
      { status: "CONFIRMED" },
      {
        status: "PENDING",
        OR: [
          { holdExpiresAt: null },
          { holdExpiresAt: { gt: now } }
        ]
      }
    ]
  };
}

router.get("/", async (req, res) => {
  const querySchema = z.object({
    search: z.string().trim().max(100).optional(),
    minPrice: z.coerce.number().min(0).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(50).default(10)
  });

  const parsed = querySchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid search parameters" });
  }

  const { search, minPrice, maxPrice, page, limit } = parsed.data;

  if (minPrice !== undefined && maxPrice !== undefined && minPrice > maxPrice) {
    return res.status(400).json({ error: "minPrice cannot exceed maxPrice" });
  }

  const where = {
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
        { address: { contains: search, mode: "insensitive" } }
      ]
    }),
    ...((minPrice !== undefined || maxPrice !== undefined) && {
      price: {
        ...(minPrice !== undefined && { gte: minPrice }),
        ...(maxPrice !== undefined && { lte: maxPrice })
      }
    })
  };

  const [hotels, total] = await Promise.all([
    prisma.hotel.findMany({
      where,
      include: {
        images: { orderBy: { sortOrder: "asc" }, take: 1 },
        amenities: true,
        _count: { select: { rooms: true } }
      },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit
    }),
    prisma.hotel.count({ where })
  ]);

  return res.json({
    hotels,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

router.get("/:id", async (req, res) => {
  const hotel = await prisma.hotel.findUnique({
    where: { id: req.params.id },
    include: {
      rooms: {
        include: { amenities: true },
        orderBy: { price: "asc" }
      },
      images: { orderBy: { sortOrder: "asc" } },
      amenities: { orderBy: { name: "asc" } },
      policies: { orderBy: { category: "asc" } }
    }
  });

  if (!hotel) {
    return res.status(404).json({ error: "Hotel not found" });
  }

  return res.json({ hotel });
});

router.get("/:id/rooms", async (req, res) => {
  const hotelId = req.params.id;

  const hotel = await prisma.hotel.findUnique({
    where: { id: hotelId },
    select: { id: true }
  });

  if (!hotel) {
    return res.status(404).json({ error: "Hotel not found" });
  }

  const checkInResult = dateSchema.safeParse(req.query.checkIn);
  const checkOutResult = dateSchema.safeParse(req.query.checkOut);

  if (!checkInResult.success || !checkOutResult.success) {
    return res.status(400).json({
      error: "Valid ISO checkIn and checkOut dates are required"
    });
  }

  const checkIn = new Date(checkInResult.data);
  const checkOut = new Date(checkOutResult.data);

  if (checkOut <= checkIn || checkIn <= new Date()) {
    return res.status(400).json({
      error: "Check-in must be in the future and check-out must be after check-in"
    });
  }

  const now = new Date();

  const rooms = await prisma.room.findMany({
    where: {
      hotelId,
      bookings: {
        none: {
          ...activeBookingFilter(now),
          checkIn: { lt: checkOut },
          checkOut: { gt: checkIn }
        }
      }
    },
    include: { amenities: true },
    orderBy: { price: "asc" }
  });

  return res.json({
    hotelId,
    checkIn,
    checkOut,
    count: rooms.length,
    rooms
  });
});

module.exports = router;
