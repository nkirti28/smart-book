const { ShoppingCart } = require('../models');

const ShoppingCartData = [
  {
    user_id: 9,
    ShoppingCart_id: 19
  },

];

const seedShoppingCart = () => ShoppingCart.bulkCreate(ShoppingCartData);

module.exports = seedShoppingCart;
