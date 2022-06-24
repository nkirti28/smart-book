const seedCategories = require("./category-seeds");
const seedBooks = require("./book-seeds");
const seedUsers = require("./user-seeds");
// const seedShoppingCart = require("./shoppingCart-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedBooks();
  console.log("\n----- BOOKS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  // await seedShoppingCart();
  // console.log('\n----- SHOPPING CART SEEDED -----\n');

  process.exit(0);
};

seedAll();
