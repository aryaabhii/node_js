/*
    # web server: 
        jab v kisi web page ko access karna chahte hai tb hume web server ki need hoti hai. 
        Aur jitne v https request hai un sabhi ko access karne me help krti hai.
    
    # jese hum sab php me apache use krte hai ussi tarh node js me v server ki need hoti hai. 
       And most intresting part ye hai ki node js ki help se hum khud kaa web server bana kr skte hai.

       
    # The http.createServer() metghod includes request and response parameters which is supplied by nodejs.

    # The request object can be used to get information about the current HTTP request.
      e.g., url, request, header, and data.

    # The response object can be used to send a response for a current HTTP request.

    # If the response fo rthe HTTP server is supposed to be displayed as HTML, 
      we should include an HTTP header with the correct content type.
*/

// import http module.
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello! Mr Abhijeet.");

});

// here we need to define port number.
server.listen(8000, "127.0.0.1", () => {
    console.log("server stared at port : 8000")
});




