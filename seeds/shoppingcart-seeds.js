const sequelize = require("../config/connection");
const { ShoppingCart } = require("../models");

const shoppingCartData = [
  {
    user_id: 1,
    book_id: 2,
  },

  {
    user_id: 1,
    book_id: 3,
  },
  {
    user_id: 2,
    book_id: 5,
  },
  {
    user_id: 2,
    book_id: 8,
  },
  {
    user_id: 2,
    book_id: 10,
  },
  {
    user_id: 3,
    book_id: 10,
  },
  {
    user_id: 3,
    book_id: 13,
  },
  {
    user_id: 4,
    book_id: 15,
  },
  {
    user_id: 4,
    book_id: 16,
  },
  {
    user_id: 5,
    book_id: 18,
  },
  {
    user_id: 5,
    book_id: 20,
  },
];

const seedShoppingCarts = () => ShoppingCart.bulkCreate(shoppingCartData);
module.exports = seedShoppingCarts;
