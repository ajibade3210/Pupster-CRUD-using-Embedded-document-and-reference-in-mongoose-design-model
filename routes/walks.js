const express = require("express");
const router = express.Router();
const { create, update, deleteWalk } = require("../controllers/walks");

router.post("/pupsters/:id/walks", create);
router.put("/walks/:id", update);
router.delete("/walks/:id", deleteWalk);

module.exports = router;
