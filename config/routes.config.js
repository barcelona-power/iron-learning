const express = require("express");
const router = express.Router();

const{frontpage, user, definition, database} = require("../controllers");


router.get("/create-definition", definition.formDefinition);
router.post("/create-definition", definition.createDefinition)
router.get("/list/:id", definition.exampleDefinition)
router.post("/list/:id/delete", definition.delete)


router.get("/", frontpage.frontpage)
router.get("/main", database.listOfDatabase)
router.get("/profile", user.profile)
router.get("/list", definition.listOfDefinitions)



module.exports = router;