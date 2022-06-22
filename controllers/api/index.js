const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const bookRoutes = require('./book-routes');
const userRoutes = require('./user-routes');
const shoppingCartRoutes = require('./shoppingCart-routes');

router.use('/categories', categoryRoutes);
router.use('/books', bookRoutes);
router.use('/user', userRoutes);
router.use('./shoppingCart', shoppingCartRoutes);

module.exports = router;