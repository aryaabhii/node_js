/*
    if we want to create package then first need to run 
     node init :- It will create a package.json which will carry all information about module.

    now we are going to work with chalk module which is used here for colorful outputs.

    Chalk helps to styling.

    install varsion @4.1.2 for proper work
    command: npm i chalk@4.1.2
*/

const chalk = require("chalk");

console.log(chalk.red.underline.inverse("Abhijeet Kumar"));
console.log(chalk.blue('Hello world!'));
console.log(chalk.green('Hello world!'));
console.log(chalk.bold('Hello world!'));
console.log(chalk.underline('Hello world!'));
console.log(chalk.italic('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.bgBlue('Hello world!'));
console.log(chalk.bgGreen('Hello world!'));
