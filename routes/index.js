const router = require("express").Router();
const bookrouter = require("./book.route");
const indexbook = "/api/v1";
router.get("/", (req, res) => {
  res.json({ msg: "hello from prs" });
});
router.use(`${indexbook}`, bookrouter);
module.exports = router;
