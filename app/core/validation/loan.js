
const joi = require("joi");


const usercreateloanValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required().length(24),
    bussiness_documentation: joi.array().required(),
    collateral_document: joi.array().required(),
    proof_of_income: joi.string().required(),
    identification: joi.string().required(),
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

module.exports = {
    usercreateloanValidation
}