// file system - this is a module which we need to import before work on file system.
// fs.writeFileSync()  - Help to write in a file.
// fs.appendFileSync() - Help to add new data in same file.
// fs.readFileSync()   - Help to read file data.
// var.toString()      - Help to convert buffer value.
// fs.renameSync()     - Help to rename the file.


const fs = require("fs");

// 1: creating a new file
fs.writeFileSync("read.txt", "Welcome to Delhi!");

// 2: append the content over same file.
fs.appendFileSync("read.txt", "Delhi is the capital of India.")

// 3: read the file data
/*
    Node js include an additional data type called buffer (not availabe in browser's javascript).
    Note:- Buffer is usually used to store binary data,
    While reading from a file or receiving packets over the network.
*/
const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString(); // this will convery binary data to string.
console.log(org_data);  // print the data

// 4: rename file
fs.renameSync("read.txt", "demo_read.txt");