// import models
const Book = require('./Book');
const Category = require('./Category');
const User = require('./User');
const ShoppingCart = require('./ShoppingCart');

// Book belongsTo Category
Book.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Books
Category.hasMany(Book, {
  foreignKey: 'category_id'
});

//User has one shopping cart associated
User.hasOne(ShoppingCart, {
  allowNull: true,
});

Book.belongsToMany(User, {
  through: ShoppingCart,
  foreignKey: 'book_id'
});

//Users belongToMany Books (through ShoppingCart)

User.belongsToMany(Book, {
  through: ShoppingCart,
  foreignKey: 'user_id'
});

module.exports = {
  Book,
  Category,
  User,
  ShoppingCart,
};
