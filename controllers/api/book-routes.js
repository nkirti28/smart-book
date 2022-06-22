const router = require('express').Router();
const { Book } = require('../../models');


router.get('/', (req, res) => {

  Book.findAll()
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});






module.exports = router;