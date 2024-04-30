const { loanModel } = require("../core/db/loan");



const usercreateloanModel = async (data, res) => {
    try {
      const {
        bussiness_documentation,
        collateral_document,
        proof_of_income,
        identification,
      } = data;
      const form = await new loanModel({
        bussiness_documentation,
        collateral_document,
        proof_of_income,
        identification,
      });
  
      const userDetails = await form.save();
     
      return userDetails;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  

module.exports = {
    usercreateloanModel
  }