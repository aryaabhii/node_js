const fun = require("./operate");

/*
    if we accessing mutliple function then we need to access like this 
    {
        for ex: 
            1: func.add();
            2: func.sub();
    } because these all are in object form which are comming from operate.js

*/
// example 
console.log("Sum : " + fun.add(10, 20));
console.log("Sub : " + fun.sub(10, 20));
console.log("Mult: " + fun.mult(10, 20));

console.log("\n")

// object destruct example.
console.log("Object Destructring Example:")
const { add, sub, mult, name } = require("./operate"); 
console.log("Sum : " + add(10, 20));
console.log("Sub : " + sub(10, 20));
console.log("Mult: " + mult(10, 20));
console.log("Name: " + name);
