const express = require("express");
const {getingUsers, addingUser,deleteUser,login} = require("../controllers/userController");
const {hashPwd,isNewUser,passwordsMatch,doesUserExist,verifyPassword,auth} = require("../middleware/usersMiddleware");

const router = express.Router();

router.post("/signup",passwordsMatch,isNewUser,hashPwd,  addingUser );

router.get("/signup", getingUsers);

router.delete('/:userId', auth, deleteUser);

router.post("/login",doesUserExist,verifyPassword,login);



module.exports = router;
