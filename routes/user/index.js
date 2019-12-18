var express = require("express");
var router = express.Router();

const { register, updateUser, login, getUser, contactUs} = require("./controllers");

router.post("/", register);
router.post("/authenticated", login);
router.put("/:id", updateUser);
router.get("/", getUser);
router.post("/contact-us", contactUs)

module.exports = router;
