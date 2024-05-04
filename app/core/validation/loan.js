
const joi = require("joi");




const usercreateloanValidation = (req, res, next) => {
    try {
        const schema = joi.object({
            userid: joi.string().required().length(24),
      
            //  bank info info 
            account_name: joi.string().required() ,
            bank_name: joi.string().required() ,
            account_number: joi.string().required() ,
            routing_number: joi.string().required() ,
      
            //  financial info info 
            credit_score: joi.number().required() ,
            total_monthly_debt: joi.number().required() ,
            monthly_expenses: joi.number().required() ,
            rental_payment: joi.number().required() ,
      
            //  loan info 
            loan_purpose: joi.string().required() ,
            loan_amount: joi.number().required() ,
            desired_loan_term: joi.number().required() ,
      
             //  perosnnel info 
             
          state: joi.string().required() ,
          city: joi.string().required() ,
          ssn: joi.string().required() ,
          dob: joi.string().required() ,
          name: joi.string().required() ,
          address: joi.string().required() ,
          previous_address: joi.string().optional().allow('') ,
          current_time: joi.number().required() ,
      
             //  contactinfo 
          email: joi.string().required() ,
          phone: joi.string().required() ,
          alternative_phone: joi.string().optional().allow('') ,
            
          //   employer 
          employer_address: joi.string().required() ,
          position:joi.string().required() ,
          employer_name: joi.string().required() ,
          employer_status: joi.string().required() ,
          employer_zipcode: joi.string().required() ,
          employer_city: joi.string().required() ,
          employer_state: joi.string().required() ,
          monthly_income: joi.number().required() ,
          length_of_employment: joi.number().required() ,
      
          bussiness_documentation: joi.string().required(),
          collateral_document: joi.string().required(),
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
    } catch (error) {
        console.log(error)
        
}
};

module.exports = {
    usercreateloanValidation
}