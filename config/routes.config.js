const express = require("express");
const router = express.Router();

const{frontpage, user, definition} = require("../controllers");


router.get("/profile", user.profile)
router.get("/create-definition", definition.createDefinition)
router.post("/create-definition", definition.doCreateDefinition)

// router.get("/profile", user) 



router.get("/", frontpage.frontpage)
router.get("/main", frontpage.mainpage)


module.exports = router;