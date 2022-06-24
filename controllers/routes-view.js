const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("homepage", {
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/logout", (req,res)=>{
  res.render("logout");
})

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/category", (req, res) => {
  res.render("category");
});
module.exports = router;
