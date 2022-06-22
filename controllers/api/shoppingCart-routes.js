const router = require('express').Router();
const { ShoppingCart } = require('../../models');


router.get('/', (req, res) => {
    ShoppingCart.findAll()
      .then(dbShoppingCartData => res.json(dbShoppingCartData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });







module.exports = router;