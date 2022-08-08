const express = require("express");
const router = express.Router();
//const upload = multer({ dest: 'uploads/' })
const upload = require("../config/multer.config")

const{ user, definition, database, auth } = require("../controllers");

const secure = require('../middlewares/secure.mid');

router.get("/create-definition",  definition.formDefinition);
router.post("/create-definition", upload.single('image'),  definition.createDefinition)
router.get("/list/:id", definition.exampleDefinition)
router.post("/list/:id/delete", definition.delete)


router.get("/main", database.listOfDatabase)
router.get("/profile", secure.isAuthenticated, user.profile)
router.get("/list", secure.isAuthenticated, definition.listOfDefinitions)

router.get("/register", auth.register);
router.post("/register",auth.doRegister);


router.get("/", auth.login);
router.post("/", auth.doLogin);



module.exports = router;