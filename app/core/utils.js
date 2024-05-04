const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');



const age = 1 * 24 * 60 * 60;
const create_user_token = (user) => {
  return jwt.sign({ user }, 'useruworld', {
    expiresIn: age,
  });
};




const base = 'mongodb+srv://emmaro:1234@tutorial.klpqo.mongodb.net/tflick?retryWrites=true&w=majority'
const coonectdb = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(base)
.then((result) => console.log('base connetced'))
.catch((err) => console.log(err))
}

const handleError = (err) => res => {
    return res.status(400).json({
        status_code: 400,
        status: false,
        message: err,
        data: [],
        error: err,
    });

}

module.exports = {
    create_user_token , coonectdb , handleError 
}