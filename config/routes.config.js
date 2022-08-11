const express = require("express");
const router = express.Router();
//const upload = multer({ dest: 'uploads/' })
const upload = require("../config/multer.config")

const{ user, definition, database, auth } = require("../controllers");

const secure = require('../middlewares/secure.mid');

router.get("/create-definition", secure.isAuthenticated, definition.formDefinition);
router.post("/create-definition", upload.single('image'), secure.isAuthenticated, definition.createDefinition)

router.get("/list", secure.isAuthenticated, definition.listOfDefinitions)
router.get("/list/:id", secure.isAuthenticated, definition.exampleDefinition)
router.post("/list/:id/delete",secure.isAuthenticated, definition.delete)


router.get("/main", database.listOfDatabase)
router.get("/profile", secure.isAuthenticated, user.profile)
router.post("/profile/:id/delete", secure.isAuthenticated, user.delete)
router.get("/profile/:id/edit",  secure.isAuthenticated, definition.edit)
router.post("/profile/:id",  secure.isAuthenticated, definition.doEdit)




router.get("/register", auth.register);
router.post("/register",auth.doRegister);


router.get("/", auth.login);
router.post("/", auth.doLogin);



module.exports = router;