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

//User belongsTo shopping cart associated
ShoppingCart.belongsTo(User, {
  allowNull: true,
});

// User belongsToMany Books (through ShoppingCart)
Book.belongsToMany(User, {
  through: ShoppingCart,
  foreignKey: "book_id",
});

//Books belongsToMany Users (through ShoppingCart)
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
