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

//shopping cart belongs to User
ShoppingCart.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  // onDelete: function () {
  //   return this.delete();
  // }, // TODO: remove this when we remove the association from  the models.
  // onUpdate: function () {
  //   return this.update();
  // }, // TODO: remove this when we remove the association from the models.
});

// shopping cart belongs to Books
ShoppingCart.belongsTo(Book, {
  foreignKey: "book_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
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
