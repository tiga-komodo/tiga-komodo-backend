var express = require("express");
var router = express.Router();

const { getOrder, addOrder, deleteOrder, updateOrder } = require("./controller");

router.get("/", getOrder);
router.post("/", addOrder)
router.delete("/:id", deleteOrder)
router.put("/:id", updateOrder)

module.exports = router;
