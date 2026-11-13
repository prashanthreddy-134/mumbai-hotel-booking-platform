const db = require("./src/config/database");

async function test() {
  try {
    await db.$connect();
    console.log("PostgreSQL connected");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await db.$disconnect();
  }
}

test();
