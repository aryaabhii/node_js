/*
    Pipe method: 
        stream.pipe(), the method used to take readable strram and connect it to a writeable stream.

*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    const readStream = fs.createReadStream("file.txt");
    readStream.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server stared at port : 8000"); 
});
