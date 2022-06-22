const router = require("express").Router();

// const categoryRoutes = require("./category-routes");
// const userRoutes = require("./user-routes");
const pageRoutes = require("./routes-view")
// prefix routes
// router.use("/categories", categoryRoutes);
// router.use("/users", userRoutes);
router.use('/', pageRoutes)
module.exports = router;