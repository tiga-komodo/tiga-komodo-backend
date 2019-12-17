var express = require("express");
var router = express.Router();

const { register, updateUser, login, getUser } = require("./controllers");

router.post("/", register);
router.post("/authenticated", login);
router.put("/:id", updateUser);
router.get("/", getUser);

module.exports = router;
