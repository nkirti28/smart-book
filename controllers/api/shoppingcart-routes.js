// *********************************************************************************
// shoppingcart-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
const router = require("express").Router();
const { User, Book, ShoppingCart } = require("../../models");
// Import the custom middleware
//const withAuth = require("../../utils/auth");

//The `/controllers/api/shoppingCart` routes
// get all shoppingCart items from user session "Admin"
// router.get("/api/shoppingcart", async (req, res) => {
//   // find all  books in shoppingcart
//   // be sure to include its associated User session and Book data
//   await ShoppingCart.findAll({
//     include: [
//       {
//         model: User,
//         attributes: ["id", "username"],
//       },
//       {
//         model: Book,
//         attributes: ["id", "book_name", "price"],
//       },
//     ],
//   })
//     .then((dbShoppingCartData) => {
//       console.log("In .get /api/shoppingcart - findAll()");
//       console.log("req.body: ", req.body);
//       console.log("dbShoppingcart: ", dbShoppingcart);
//       res.json(dbShoppingCartData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// Get route for retrieving a single shoppingcart for a user_id
// router.get("/api/shoppingcart/:user_id", async (req, res) => {
//   // GET one shopping cart for a user_id
//   // Use the custom middleware before allowing the user to access the shopping cart
//   try {
//     const shoppingCartData = await ShoppingCart.find(req.params.user_id, {
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username"],
//         },
//         {
//           model: Book,
//           attributes: ["id", "book_name", "price"],
//         },
//       ],
//     });
//     const shoppingcart = shoppingCartData.get({ plain: true });
//     res.render("shoppingcart", {
//       shoppingcart,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// POST request to save new shopping cart for user in session

// router.post("/", async (req, res) => {
//   try {
//     const dbShoppingCartData = await ShoppingCart.create({
//       user_id: req.session.user_id,
//       book_id: req.body.book_id,
//     });

//     // Set up sessions with a 'loggedIn' variable set to `true`
//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbShoppingCartData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // get login page
// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("login");
// });

router.get("/", function (req, res) {
  db.Shoppingcart.findAll({
    include: [
      {
        model: Book,
        attributes: ["id", "book_name", "price"],
      },
    ],
  }).then(function (dbShoppingcart) {
    console.log("In .get /api/shoppingcart - findAll()");
    console.log("req.body: ", req.body);
    console.log("dbShoppingcart: ", dbShoppingcart);
    res.json(dbShoppingcart);
  });
});

// Get route for retrieving a single shoppingcart for a Userid
router.get("/api/shoppingcart/:UserId", function (req, res) {
  db.Shoppingcart.findOne({
    where: {
      UserId: req.params.UserId,
    },
    // include: [db.Author]
  }).then(function (dbShoppingcart) {
    console.log("In .get /api/shoppingcart - findOne()");
    console.log("req.params.UserId: ", req.params.UserId);
    console.log("dbShoppingcart: ", dbShoppingcart);
    res.json(dbShoppingcart);
  });
});
module.exports = router;
