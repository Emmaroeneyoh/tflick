const mongoose = require('mongoose')
const schema = mongoose.Schema

const userschema = new schema({

        email: {
            type:String,
        },
        password:{
            type:String
        },
        firstname :{
            type:String
        },
        lastname:{
            type:String
        },
       
        address:{
            type:String
        },
        phone:{
            type:String
        },
        country:{
            type:String
        },
        account_type:{
            type:String
        },
      
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const userModel = mongoose.model('user', userschema )
module.exports = {
    userModel
}