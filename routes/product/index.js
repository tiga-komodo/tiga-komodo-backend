const express = require("express");
const router = express.Router();

const { addProducts, getAll } = require("./controllers");

router.get("/:id", getAll);
router.post("/", addProducts);

module.exports = router;
