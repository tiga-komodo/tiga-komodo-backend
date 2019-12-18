const express = require("express");
const router = express.Router();

const { addOrder, getOrder } = require("./controller");

router.post("/:id", addOrder);
router.get("/", getOrder);
module.exports = router;
