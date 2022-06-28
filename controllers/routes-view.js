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

// DISPLAY ALL Books
router.get("/book", (req, res) => {
  Book.findAll({
    attributes: ["id", "book_name", "price", "image_url"],
  }).then((dbBookData) => {
    const books = dbBookData.map((book) =>
      book.get({ plain: true })
    );
    res.render("book", { books });
  });
});


// DISPLAY Single book
router.get("/book/:id", (req, res) => {
  console.log(req.params.id);
  Book.findOne({
    where: {
        id: req.params.id
    },
    attributes: ['id', 'book_name', 'author_name', 'description', 'category_id', 'price', 'image_url', 'review'],
    include: [
        {
            model: Category,
            attributes: ['id', 'category_name']
        },
    ]
  })
  .then((dbBookData) => {
    if (!dbBookData) {
      res
        .status(404)
        .json({ message: "No Book with that id was found." });
      return;
    }
    const book = dbBookData.get({ plain: true });
    console.log(book)
    res.render("single-book", { book });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});







module.exports = router;
