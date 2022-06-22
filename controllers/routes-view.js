const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("homepage", {
   loggedIn: true,
   userName:"john doe"
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});
module.exports = router;
