const { loanModel, usercreateloanModel } = require("../model/loan");

const usercreateloancontroller = async (req, res, next) => {
  try {
    const {
      bussiness_documentation,
      collateral_document,
      proof_of_income,
      identification,
    } = req.body;

    const data = {
      bussiness_documentation,
      collateral_document,
      proof_of_income,
      identification,
      };
      

    const contactadmin = await usercreateloanModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "loan pending approval",
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};


module.exports = {
    usercreateloancontroller
}