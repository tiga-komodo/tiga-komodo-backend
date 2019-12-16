const express = require("express");
const router = express.Router();

const { addProducts, getAll } = require("./controllers");

router.get("/", getAll);
router.post("/", addProducts);

module.exports = router;
