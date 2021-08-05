const express = require("express");
const router = express.Router();
const { create, update, deleteToy } = require("../controllers/toy");

router.post("/pupsters/:id/toys", create);
router.put("/toys/:id", update);
router.delete("/toys/:id", deleteToy);

module.exports = router;
