require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

async function shutdown() {
  server.close(async () => {
    const prisma = require("./config/database");
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
