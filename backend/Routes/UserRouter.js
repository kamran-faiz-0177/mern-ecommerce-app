const router = require("express").Router();
const { Signup, Signin } = require("../Controllers/UserController");

router.post("/signup",Signup);
router.post("/signin",Signin);

module.exports = router;