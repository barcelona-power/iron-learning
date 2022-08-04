const express = require("express");
const router = express.Router();
//const upload = multer({ dest: 'uploads/' })
const upload = require("../config/multer.config")

const{frontpage, user, definition, database, auth } = require("../controllers");

router.get("/create-definition", definition.formDefinition);
router.post("/create-definition", upload.single('image'), definition.createDefinition)
router.get("/list/:id", definition.exampleDefinition)
router.post("/list/:id/delete", definition.delete)


router.get("/main", database.listOfDatabase)
router.get("/profile", user.profile)
router.get("/list", definition.listOfDefinitions)

router.get("/", auth.register);
router.post("/", auth.doRegister);





module.exports = router;