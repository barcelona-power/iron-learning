const express = require("express");
const router = express.Router();

const{frontpage} = require("../controllers")

router.get("/", frontpage.frontpage)


module.exports = router;