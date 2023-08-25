// Question

// 1: Create a folder name it as your own.
// 2: Create a file in it and name that as your own and data in it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data withour getting the buffer data at first.
// file encdoing
// 5: Rename the file name to mybio.txt.
// 6: Now delete both file and folder.

const fs = require("fs");

// create a directory/folder using below command.
fs.mkdirSync("techAbhi");

// fs.writeFileSync("techAbhi/bio.txt", "My name is Abhijeet Kr.");

// concat content in same file.
fs.appendFileSync("techAbhi/bio.txt", " Welcome");

// help to get data without buffer
const data  = fs.readFileSync("techAbhi/bio.txt", "utf8"); // here utf8 help to encode the buffer data.
console.log(data);

// help to rename file.
fs.renameSync("techAbhi/bio.txt", "techAbhi/bio_new.txt");

// Help to delete file.
fs.unlinkSync("techAbhi/bio_new.txt");

// Help to delete folder.
fs.rmdirSync("techAbhi");