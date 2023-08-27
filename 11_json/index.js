/*
    JSON: 
        JSON stads for Javascript Object Notation. 
        Json is a lightweight format for storing and tranporting data.
        Json is often used when data is sent from a server to a web page.
*/

const bioData = {
    name    : "Abhijeet Kumar",
    email   : "aryaabhi84@gmail.com",
    age     : 21,
    channel : "TechnoAbhijeeT"
}

// console.log(bioData.name);

/* 
   # jab object ko json me convert karna ho tb stringify use krnege.
   
        const jsonData = JSON.stringify(bioData);
        console.log(jsonData);
        
   # jab json ko object me convert karna ho tb parse use krnege.

        const objData = JSON.parse(jsonData);
        console.log(objData);

*/

/*
    TASK

    1: Convert into json
    2: Add in another file
    3: Read file
    4: Convert json to obj
    5. console.log
*/
const fs = require("fs");

/* 
    #1 yaha pe maine json ke data ko ek file me store kiya jo ki json1.json ke naam se bana file system ki help se.
*/
const jsonData = JSON.stringify(bioData); // obj to json
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});

/* 
    #2 uske baad maine use again convert kr diye object ke form aur fir console pe dikaya.
*/
fs.readFile("json1.json", "UTF-8", (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data); // json to obj
    console.log(orgData);
});