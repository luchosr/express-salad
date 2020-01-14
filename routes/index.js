var express = require("express");
var router = express.Router();

/* GET home page. */

// res.sendfile() se puede usar para mandar imágenes.
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
