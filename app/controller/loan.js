const { handleError } = require("../core/utils");
const { loanModel, usercreateloanModel } = require("../model/loan");

const usercreateloancontroller = async (req, res, next) => {
  try {
    const {
        address , previous_address , current_time ,
      state,
      city,
      ssn,
      dob,
      name,

      alternative_phone,
      phone,
      email,

      employer_address,
      position,
      employer_name,
      employment_status,
      employment_city,
      employment_state,
      employment_zipcode,
      monthly_income,
      length_of_employment,

      credit_score,
      total_monthly_debt,
      monthly_expenses,
      rental_payment,

      loan_purpose,
      loan_amount,
      desired_loan_term,

      account_name,
      bank_name,
      account_number,
      routing_number,

      bussiness_documentation,
      collateral_document,
      proof_of_income,
      identification,
    } = req.body;

      const data = {
        
        address , previous_address , current_time ,
        state,
        city,
        ssn,
        dob,
        name,
  
        alternative_phone,
        phone,
        email,
  
        employer_address,
        position,
        employer_name,
        employment_status,
        employment_city,
        employment_state,
        employment_zipcode,
        monthly_income,
        length_of_employment,
  
        credit_score,
        total_monthly_debt,
        monthly_expenses,
        rental_payment,
  
        loan_purpose,
        loan_amount,
        desired_loan_term,
  
        account_name,
        bank_name,
        account_number,
        routing_number,
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
  usercreateloancontroller,
};
