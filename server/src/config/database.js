
require("dotenv").config();

const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../../generated/prisma/client");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing. Check your environment configuration.");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 15000,
  idleTimeoutMillis: 10000,
  max: 10
});

const prisma = new PrismaClient({ adapter });

module.exports = prisma;
