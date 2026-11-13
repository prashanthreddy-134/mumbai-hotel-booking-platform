
require("dotenv").config();

const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../generated/prisma/client");

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
  max: 3
});

const prisma = new PrismaClient({ adapter });

const hotels = [
  ["Harbour View Boutique", "Comfortable boutique accommodation near the waterfront.", "Colaba", "Colaba, Mumbai, Maharashtra", 4500, 4.5],
  ["Marine Drive Residency", "Modern accommodation with easy access to Marine Drive.", "Marine Drive", "Marine Drive, Mumbai, Maharashtra", 6500, 4.7],
  ["Bandra Urban Suites", "Contemporary suites in a lively neighbourhood.", "Bandra West", "Bandra West, Mumbai, Maharashtra", 5200, 4.4],
  ["Juhu Palm Retreat", "Relaxed accommodation close to Juhu Beach.", "Juhu", "Juhu, Mumbai, Maharashtra", 5800, 4.6],
  ["Andheri Business Stay", "Practical accommodation for business travellers.", "Andheri East", "Andheri East, Mumbai, Maharashtra", 3500, 4.2],
  ["Powai Lake Boutique", "Modern stay near Powai Lake.", "Powai", "Powai, Mumbai, Maharashtra", 4800, 4.5],
  ["Lower Parel Executive", "Premium executive accommodation.", "Lower Parel", "Lower Parel, Mumbai, Maharashtra", 7200, 4.8],
  ["Fort Heritage Suites", "Heritage-inspired boutique accommodation.", "Fort", "Fort, Mumbai, Maharashtra", 5500, 4.6],
  ["Goregaon Comfort Inn", "Comfortable rooms for families and professionals.", "Goregaon", "Goregaon, Mumbai, Maharashtra", 3200, 4.1],
  ["Worli Skyline Stay", "Premium city accommodation with skyline views.", "Worli", "Worli, Mumbai, Maharashtra", 8000, 4.9]
];

const roomTypes = [
  { name: "Standard Room", capacity: 2, multiplier: 1 },
  { name: "Deluxe Room", capacity: 3, multiplier: 1.5 },
  { name: "Family Suite", capacity: 4, multiplier: 2 }
];

async function main() {
  let roomCount = 0;

  console.log("Starting hotel database seed...");

  for (let i = 0; i < hotels.length; i++) {
    const [name, description, location, address, price, rating] = hotels[i];

    const hotelId =
      `10000000-0000-4000-8000-${String(i + 1).padStart(12, "0")}`;

    const hotel = await prisma.hotel.upsert({
      where: { id: hotelId },
      update: {
        name,
        description,
        location,
        address,
        price,
        rating
      },
      create: {
        id: hotelId,
        name,
        description,
        location,
        address,
        price,
        rating
      }
    });

    for (let j = 0; j < roomTypes.length; j++) {
      const room = roomTypes[j];
      const roomNumber = i * 3 + j + 1;

      const roomId =
        `20000000-0000-4000-8000-${String(roomNumber).padStart(12, "0")}`;

      await prisma.room.upsert({
        where: { id: roomId },
        update: {
          name: room.name,
          capacity: room.capacity,
          price: Math.round(price * room.multiplier),
          hotelId: hotel.id
        },
        create: {
          id: roomId,
          name: room.name,
          capacity: room.capacity,
          price: Math.round(price * room.multiplier),
          hotelId: hotel.id
        }
      });

      roomCount++;
    }

    console.log(`Seeded: ${hotel.name}`);
  }

  const hotelCount = await prisma.hotel.count();
  const databaseRoomCount = await prisma.room.count();

  console.log("\n===== SEED VERIFICATION =====");
  console.log("Hotels in database:", hotelCount);
  console.log("Rooms in database:", databaseRoomCount);
  console.log("Rooms processed by seed:", roomCount);

  if (hotelCount < 10 || databaseRoomCount < 30) {
    throw new Error("Seed verification failed: expected at least 10 hotels and 30 rooms.");
  }

  console.log("\nSEED COMPLETED SUCCESSFULLY");
}

main()
  .catch(error => {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
