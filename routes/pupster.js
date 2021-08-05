var express = require("express");
var router = express.Router();
const {
  create,
  index,
  update,
  deletePupster,
  show,
} = require("../controllers/pupsters");

router.get("/", index);
router.get("/:id", show);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deletePupster);

module.exports = router;
