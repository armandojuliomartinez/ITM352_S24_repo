// const users_reg_data = require(__dirname + '/user_data.json'); used this for EX1a
const fs = require('fs'); // ex1b
const user_data_file = __dirname + '/user_data.json';
const users_reg_data = JSON.parse(data)
const data = fs.readFileSync(user_data_file, 'utf-8')
//this exercise helps to understand how to implment somthing in assignment 2
let username = "kazman";
console.log('Password: ' + users_reg_data[username].password);