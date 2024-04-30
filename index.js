const express = require('express')
const cors = require('cors')

const userauth = require('./app/route/auth')
const userloan = require('./app/route/loan')
const { coonectdb } = require('./app/core/utils')


const app = express()

app.use(cors())

app.use(cors());
coonectdb()
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const user = '/user'
//for admin
app.use(user, userauth) 
app.use(user, userloan) 
//error handler
app.use((req, res, next) => {
    const error = new Error("api not found");
    error.status = 404;
    res.status(404).json({
      status_code: 404,
      status: false,
      message: error.message,
      data: [],
      error: error.message,
    });
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
  
    res.status(500).json({
      status_code: 500,
      status: false,
      message: error.message,
      data: [],
      error: error.message,
    });
  });
  
  app.listen(5000, () => {
    console.log("server connected", 5000);
  });
