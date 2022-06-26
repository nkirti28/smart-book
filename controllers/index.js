const router = require("express").Router();

// const categoryRoutes = require("./category-routes");
const apiRoutes = require("./api");
const pageRoutes = require("./routes-view")
// prefix routes
// router.use("/categories", categoryRoutes);
router.use("/api", apiRoutes);
router.use('/', pageRoutes)
module.exports = router;