// *********************************************************************************
// shoppingcart-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
const router = require("express").Router();
const { User, Book, ShoppingCart } = require("../../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

//The `/controllers/api/shoppingCart` routes

// get all shoppingCart items from user session "Admin"
router.get("/api/shoppingcart", (req, res) => {
  // find all  books in shoppingcart
  // be sure to include its associated User session and Book data
  ShoppingCart.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "user_name"],
      },
      {
        model: Book,
        attributes: ["id", "book_name", "price"],
      },
    ],
  })
    .then((dbShoppingCartData) => res.json(dbShoppingCartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get route for retrieving a single shoppingcart for a user_id
router.get("/api/shoppingcart/:user_id", withAuth, async (req, res) => {
  // GET one shopping cart for a user_id
  // Use the custom middleware before allowing the user to access the shopping cart
  try {
    const shoppingCartData = await ShoppingCart.find(req.params.user_id, {
      include: [
        {
          model: User,
          attributes: ["id"],
        },
        {
          model: Book,
          attributes: ["id", "book_name", "price"],
        },
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
