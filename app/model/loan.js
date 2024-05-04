const { loanModel } = require("../core/db/loan");



const usercreateloanModel = async (data, res) => {
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
      } = data;
      const form = await new loanModel({
          personnel_info: {
            address , previous_address , current_time ,
            state,
            city,
            ssn,
            dob,
            name,
          }, 
          contact_info: {
            alternative_phone,
            phone,
            email,
          },
          employment_info: {
            employer_address,
            position,
            employer_name,
            employment_status,
            employment_city,
            employment_state,
            employment_zipcode,
            monthly_income,
            length_of_employment,
          },
          financial_info: {
            credit_score,
            total_monthly_debt,
            monthly_expenses,
            rental_payment,
          },
          loan_info: {
            loan_purpose,
            loan_amount,
            desired_loan_term,   
          },
          
          bank_info: {
            account_name,
            bank_name,
            account_number,
            routing_number,   
          },
          document: {
            bussiness_documentation,
            collateral_document,
            proof_of_income,
            identification,   
          }
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