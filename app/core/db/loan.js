const mongoose = require("mongoose");
const schema = mongoose.Schema;

const loanschema = new schema({
  personnel_info: {
    name: {
      type: String,
    },
    dob: {
      type: String,
    },
    ssn: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },

    previous_address: {
      type: String,
      default: "",
    },
    address : {
      type: String,
      default: "",
    },
    current_time: {
      type: Number,
    },
  },

  contact_info: {
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    alternative_phone: {
      type: String, default : ''
    },
  },


  employment_info: {
    employment_status: {
      type: String,
    },
    employer_name: {
      type: String,
    },
    position: {
      type: String,
    },
    employer_address: {
      type: String,
    },
    employment_city: {
      type: String,
    },
    employment_state: {
      type: String,
    },
    employment_zipcode: {
      type: String,
    },
    length_of_employment: {
      type: Number,
    },
    monthly_income: {
      type: Number,
    },
  },

  financial_info: {
    rental_payment: {
      type: Number,
    },
    monthly_expenses: {
      type: Number,
    },
    total_monthly_debt: {
      type: Number,
    },
    credit_score: {
      type: Number,  default : 0
    },
  },

  loan_info: {
    loan_amount: {
      type: Number,
    },
    loan_purpose: {
      type: String,
    },
    desired_loan_term: {
      type: Number,
    },
  },

  bank_info: {
    bank_name: {
      type: String,
    },
    account_name : {
      type: String,
    },
    account_number: {
      type: String,
    },
    routing_number: {
      type: String,
    },
  },

  document: {
    proof_of_income: {
      type: String,
    },
    collateral_document: {
      type: String,
    },
    identification: {
      type: String,
    },
    bussiness_documentation: {
      type: String,
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const loanModel = mongoose.model("loan", loanschema);
module.exports = {
  loanModel,
};
