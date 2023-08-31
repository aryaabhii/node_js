// These are worked on Asyncronous file system.

const fs = require("fs"); // it will import file system module.

// 1: Below code help us to create file
fs.writeFile("async_doc.txt", "This is an example of asyncronous file system.", (err) => {
    console.log("Your file created successfully");
    console.log(err);
});

// 2: Below code will help to append content on same file.
fs.appendFile("async_doc.txt", "Hie, there welcome to node js progromming.", (err) => {
    console.log("Your file had been updated.");
    console.log(err);
});

// 3: Below code will help us to read the file content.
// below code will print binary code.
fs.readFile("async_doc.txt", (err, data) => {
    console.log(data);
    console.log(err);
});

// 4: this will print original content using UTF-8
fs.readFile("async_doc.txt", "UTF-8", (err, data) => {
    console.log(data);
    console.log(err);
});




