const { Book } = require('../models');

const bookData = [
  {
    book_name: 'The Hobbit',
    author_name: 'J.R.R. Tolkien',  
    category_id: 1,
    price: 14.99,
    review: ''
  },
];

const seedProducts = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
