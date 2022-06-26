// import models
const Book = require("./Book");
const Category = require("./Category");
const User = require("./User");
const ShoppingCart = require("./ShoppingCart");

// Book belongsTo Category
Book.belongsTo(Category, {
  foreignKey: "category_id",
});

// Category have many Books
Category.hasMany(Book, {
  foreignKey: "category_id",
});

ShoppingCart.belongsTo(User, {
  foreignKey: "user_id",
});

ShoppingCart.belongsTo(Book, {
  foreignKey: "book_id",
});

// Book belongToMany User (through ShoppingCart)
Book.belongsToMany(User, {
  through: ShoppingCart,
  foreignKey: "book_id",
});

// User belongToMany Books(through ShoppingCart)
User.belongsToMany(Book, {
  through: ShoppingCart,
  foreignKey: "user_id",
});

module.exports = {
  Book,
  Category,
  User,
  ShoppingCart,
};
