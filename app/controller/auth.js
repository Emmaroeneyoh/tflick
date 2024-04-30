const bcrypt = require("bcrypt");
const { userModel } = require("../core/db/user");
const { userSignupModel, userLoginModel } = require("../model/auth");

const userSignupController = async (req, res, next) => {
  const {
    lastname,
    firstname,
    email,
    password,
    address,
    phone,
    account_type, country
  } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const salt = await bcrypt.genSalt();
    const Harshpassword = await bcrypt.hash(password, salt);
    const customer = await userModel.findOne({ email: userEmail });
    if (customer) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "email already exist",
        data: [],
        error: "email already exist",
      });
    }

    const data = {
      userEmail,
      address,
      phone,
      lastname,
      firstname,
      Harshpassword, account_type, country
    };

    let trainee = await userSignupModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "signup process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const userLoginController = async (req, res, next) => {
  const { email, password } = req.body;
  const userEmail = email.toLowerCase();
  try {
    const userDetails = await userModel.findOne({ email: userEmail });
    if (!userDetails) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "user dont exist on our application",
        data: [],
        error: "user dont exist on our application",
      });
    }

    const checkPassword = await bcrypt.compare(password, userDetails.password);
    if (!checkPassword) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "incorrect password",
        data: [],
        error: "incorrect password",
      });
    }
    const data = {
      userEmail,
      password,
    };

    let trainee = await userLoginModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


module.exports = {
    userLoginController ,  userSignupController
}