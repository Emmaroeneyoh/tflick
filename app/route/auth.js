const { userSignupController, userLoginController } = require("../controller/auth");
const { usersignupValidation, userLoginValidation } = require("../core/validation/auth");

const router = require("express").Router();

router.post("/signup", usersignupValidation, userSignupController);
router.post("/login", userLoginValidation, userLoginController);

module.exports = router