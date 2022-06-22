const router = require("express").Router();

const categoryRoutes = require("./category-routes");
const userRoutes = require("./user-routes");

// prefix routes
router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);

module.exports = router;
