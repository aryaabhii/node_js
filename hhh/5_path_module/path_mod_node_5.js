// Path module

const path = require("path");

// for directory name
console.log(path.dirname("Directory name : " + "F:/node/path_module/path_mod_node_5.js"));
// for extension name
console.log(path.extname("Extension name : " +"F:/node/path_module/path_mod_node_5.js"));
// for file name
console.log(path.basename("File name     : " +"F:/node/path_module/path_mod_node_5.js"));
// for all detail of our file
console.log(path.parse("F:/node/path_module/path_mod_node_5.js"));
// for get data using object
const myPath = path.parse("F:/node/path_module/path_mod_node_5.js");
console.log(myPath.root);