const joi = require("joi");
const { handleError } = require("../utils");


const usersignupValidation = (req, res, next) => {
  const schema = joi.object({
    // userId: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    lastname: joi.string().required(),
   firstname: joi.string().required(),
   country: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required(),
    account_type: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    let errlen = err.split(" ");
   
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: err,
      data: [],
      error: err,
    });
  }
  return next();
};

const userLoginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    return res.status(400).json({
        status_code: 400,
        status: false,
        message: err,
        data: [],
        error: err,
      });
  }
  return next();
};

module.exports = {
    usersignupValidation ,   userLoginValidation
}