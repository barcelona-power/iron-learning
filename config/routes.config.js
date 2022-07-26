const express = require("express");
const router = express.Router();

const{frontpage, user, definition} = require("../controllers");


router.get("/create-definition", definition.formDefinition);
router.get("/create-definition", definition.listOfDefinitions);
router.post("/create-definition", definition.createDefinition)
router.get("/list/:id", definition.exampleDefinition)
router.post("/list/:id/delete", definition.delete)




router.get("/", frontpage.frontpage)
router.get("/main", frontpage.mainpage)
router.get("/profile", user.profile)
router.get("/list", definition.listOfDefinitions)

module.exports = router;