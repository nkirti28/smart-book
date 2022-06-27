const router = require("express").Router();
const sequelize = require("../config/connection");

const { User, Book, Category, ShoppingCart } = require("../models");

router.get("/", (req, res) => {
  res.render("shoppingcart", {loggedIn: true });
});

module.exports = router;
