const router = require("express").Router();
const { response } = require("express");
const { Category, Book } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: true });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/logout", (req, res) => {
  res.render("logout");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

// DISPLAY ALL Categories
router.get("/category", (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name", "category_image"],
  }).then((dbCategoryData) => {
    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render("category", { categories });
  });
});

// DISPLAY SINGLE Categories
router.get("/category/:id", (req, res) => {
  console.log(req.params.id);
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category_name"],
    include: [
      {
        model: Book,
        attributes: ["id", "book_name", "price", "image_url"],
      },
    ],
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res
          .status(404)
          .json({ message: "No Category with that id was found." });
        return;
      }
      const category = dbCategoryData.get({ plain: true });
      console.log(category.books);
      res.render("single-category", { category });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
