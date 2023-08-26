// import http module.
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url); // this will help us to get the url.

    if (req.url == "/") {
        res.end("<h1>Home page</h1>")
    } else if (req.url == "/about") {
        res.end("<h1>About page</h1>");
    } else if (req.url == "/contact") {
        res.end("<h1>Contact page</h1>");
    } else {
        res.writeHead(404, {"content-type" : "text/html"}); // it will send status code
        res.end("<h1>404! error</h1>");
    }

});

// here we need to define port number.
server.listen(8000, "127.0.0.1", () => {
    console.log("server stared at port : 8000")
});


