// *********************************************************************************
// shoppingcart-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
const router = require("express").Router();
const { User, Book, ShoppingCart } = require("../../models");
// Import the custom middleware
const withAuth = require("../../utils/auth");

//The `/controllers/api/shoppingCart` routes
// get all shoppingCart items from user session "Admin"
router.get("/", async (req, res) => {
  // find all  books in shoppingcart
  // be sure to include its associated User session and Book data
  await ShoppingCart.findAll({
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      {
        model: Book,
        attributes: ["id", "book_name", "price"],
      },
    ],
  })
    .then((dbShoppingCartData) => {
      console.log("In .get /api/shoppingcart - findAll()");
      console.log("dbShoppingcart: ", dbShoppingCartData);
      res.json(dbShoppingCartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get route for retrieving a single shoppingcart for a user_id
// GET one shopping cart for a user_id
// Use the custom middleware before allowing the user to access the shopping cart
router.get("/:id", withAuth, async (req, res) => {
  try {
    await ShoppingCart.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Book,
          attributes: ["id", "book_name", "price"],
        },
      ],
    }).then((dbShoppingCartData) => {
      if (!dbShoppingCartData) {
        res
          .status(404)
          .json({ message: "No ShoppingCart data available for this userId." });
        return;
      }
      console.log("In .get /api/shoppingcart/user_id - findAll()");
      res.json(dbShoppingCartData);
    });
    //const shoppingcart = shoppingCartData.get({ plain: true });
    // res.render("shoppingcart", {
    //   shoppingcart,
    //   loggedIn: req.session.loggedIn,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST request to save new shopping cart for user in session
router.post("/", async (req, res) => {
  try {
    const dbShoppingCartData = await ShoppingCart.create({
      user_id: req.session.user_id,
      book_id: req.body.book_id,
    });
    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbShoppingCartData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT route for updating the shopping cart data
router.put("/", async (req, res) => {
  try {
    ShoppingCart.update(req.body, {
      where: {
        user_id: req.session.user_id,
      },
    }).then((dbShoppingCartData) => {
      if (!dbShoppingCartData) {
        res.status(404).json({ message: "No Shopping cart data found." });
        return;
      }
      res.json(dbShoppingCartData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err); // 404 error response
  }
});

// DELETE /shoppingCartData/delete with user_id
router.delete("/:user_id", async (req, res) => {
  try {
    ShoppingCart.destroy({
      where: {
        user_id: req.session.user_id,
      },
    }).then((dbShoppingCartData) => {
      if (!dbShoppingCartData) {
        res
          .status(404)
          .json({ message: "No Shopping cart data found for this user_id." });
        return;
      }
      res.json(dbShoppingCartData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err); // 404 error response
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
