/*
    if we want to create package then first need to run 
     node init :- It will create a package.json which will carry all information about module.

    now we are going to work with validator for validate.

    Validator.

    command: npm i validator
*/

const chalk     = require("chalk");
const validator =  require("validator");
const myEmail   = validator.isEmail("abc@gmail.com");
console.log(myEmail ? chalk.green.inverse(myEmail) : chalk.red.inverse(myEmail));

/*  
    If we want to run live changes then we need nodemon.
    command: npm i nodemon -g (here g for global)  

    want to run validator file the first need to run 
    -> nodemon validator.js

*/