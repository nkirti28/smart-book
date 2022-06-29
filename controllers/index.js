const router = require("express").Router();

const apiRoutes = require("./api");
const routesView = require("./routes-view");
const shoppingcartRoutes = require("./shoppingcartview-routes"); //

router.use("/api", apiRoutes);
router.use("/", routesView);
router.use("/shoppingcart", shoppingcartRoutes);

// if a request not an endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
