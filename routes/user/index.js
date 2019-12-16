var express = require("express");
var router = express.Router();

const { register, updateUser, login } = require("./controllers");

/* GET users listing. */

router.post("/", register);
router.put("/:id", updateUser);
router.get("/:id", login);

module.exports = router;
