const mongoose = require('mongoose')
const schema = mongoose.Schema

const loanschema = new schema({

        identification: {
            type:String,
        },
        proof_of_income:{
            type:String
        },
        collateral_document :{
            type:Array , default :[]
        },
        bussiness_documentation:[],
       
        
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const loanModel = mongoose.model('loan', loanschema )
module.exports = {
    loanModel
}