const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const proPic = require("../config/multer.config");

const { user, definition,  database,  auth,  newexample,  database2,  database1,} = require("../controllers");

const secure = require("../middlewares/secure.mid");

router.get("/create-definition",  secure.isAuthenticated,  definition.formDefinition);
router.post("/create-definition", upload.single("file"),  secure.isAuthenticated,  definition.createDefinition);

router.get("/list", secure.isAuthenticated, definition.listOfDefinitions);
router.post("/list/:id/delete", secure.isAuthenticated, definition.delete);

router.get("/never", user.never);

router.get("/profile", secure.isAuthenticated, user.profile);
router.post("/profile/:id", secure.isAuthenticated, definition.doEdit);
router.get("/profile/:id/edit", secure.isAuthenticated, definition.edit);
router.post("/profile/:id/delete", secure.isAuthenticated, user.delete);

router.get("/register", auth.register);
router.post("/register", proPic.single("profilePic"), auth.doRegister);

router.get("/", auth.login);
router.post("/", auth.doLogin);
router.get("/logout", auth.logOut);

router.get("/main", database.listOfDatabase);
router.get("/main/:id/newexample/:categoryexample",secure.isAuthenticated,newexample.new);
router.post("/main/:id/newexample", secure.isAuthenticated, newexample.doNew);
router.post(  "/main/:id/delete",secure.isAuthenticated,  newexample.deleteNewExample);

router.get("/next", database2.listOfDatabase2);
router.get("/next/:id/newexample/:categoryexample",  secure.isAuthenticated,  newexample.new);
router.post("/next/:id/newexample", secure.isAuthenticated, newexample.doNew);
router.post("/next/:id/delete",  secure.isAuthenticated,  newexample.deleteNewExample);

router.get("/begin", database1.listOfDatabase1);

router.get("/next", database2.listOfDatabase2);

module.exports = router;
