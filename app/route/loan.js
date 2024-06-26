const { usercreateloancontroller } = require("../controller/loan");
const { user_check_token } = require("../core/authorization");
const { usercreateloanValidation } = require("../core/validation/loan");

const router = require("express").Router();

router.post(
  "/create/loan",
  usercreateloanValidation,
  usercreateloancontroller
);

module.exports = router;
