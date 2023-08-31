// module wrapper 
// file will running like below wrapper
/* 
    jab v hum require, export yaa console karwate hai tab - tab 
    code ko warp krta hai node niche jese likha hai kuch uss tarh.
    Tab jaa kr humara code run ho pata hai.
*/
( function (exports, require, module, _filename, _dirname) {
    const name = "Abhijeet";
    console.log(name);
}) ();


// iife :- 
( function () {
    const name = "Abhijeet";
    console.log(name);
}) ();