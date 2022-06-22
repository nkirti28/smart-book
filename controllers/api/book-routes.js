const router = require('express').Router();
const { Book, Category } = require('../../models');


router.get('/', (req, res) => {

  Book.findAll({
    attributes: ['id', 'book_name', 'author_name', 'description', 'category_id', 'price', 'image_url', 'review'],
    include: [
        {
            model: Category,
            attributes: ['id', 'category_name']
        },
    ]
})
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {

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
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;