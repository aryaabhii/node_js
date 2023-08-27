/*
    API: 
        api software ko help krti hai apas me communicate karne me. 

        Yeh ek service ki tarh work krta hai jaha se hum request krenge aur fir badle me response milega.
*/



const fs = require("fs");

// import http module.
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url); // this will help us to get the url.

    const data = fs.readFileSync(`${__dirname}/user.json`, "utf-8");
    const objData = JSON.parse(data);

    if (req.url == "/") {
        res.end("<h1>Home page</h1>")
    } else if (req.url == "/user_api") {
        // here getting data from user.json
        res.writeHead(200, {"content-type" : "application/json"}); // it will send status code
        res.end(objData[2].username);
    } else {
        res.writeHead(404, {"content-type" : "text/html"}); // it will send status code
        res.end("<h1>404! error</h1>");
    }

});

// here we need to define port number.
server.listen(8000, "127.0.0.1", () => {
    console.log("server stared at port : 8000")
});


