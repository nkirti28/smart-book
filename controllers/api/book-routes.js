const router = require("express").Router();
const { Book, Category } = require("../../models");

router.get("/", (req, res) => {
  Book.findAll({
    attributes: [
      "id",
      "book_name",
      "author_name",
      "description",
      "category_id",
      "price",
      "image_url",
      "review",
    ],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "book_name",
      "author_name",
      "description",
      "category_id",
      "price",
      "image_url",
      "review",
    ],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No book found with this id" });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new book
  Book.create({
    book_name: req.body.book_name,
    author_name: req.body.author_name,
    description: req.body.description,
    category_id: req.body.category_id,
    price: req.body.price,
    image_url: req.body.image_url,
    review: req.body.review,
  })
    .then((dbBookData) => res.json(dbBookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Book.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData[0]) {
        res.status(404).json({ message: "No Book found with this id" });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookData) => {
      if (!dbBookData) {
        res.status(404).json({ message: "No Book found with this id!" });
        return;
      }
      res.json(dbBookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
