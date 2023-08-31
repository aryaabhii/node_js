/*
    Streams:
        # realtime me jo bhi server pe file hai usse real time me read and write kr skte hai streams ke through.
        
        # Streams are objects that let you read data from a source or write data to a destination in continous fashion.
          In node.js, there are four types of streams.
        
        # Streaming means listening to music or watching video in 'real time;, instead of downloading a file to your computer and watching it later.
        
            # Readable  :- Stream which is used to read operation.
            # Writable  :- Stream which is used for write operation.
            # Duplex    :- Stream which can be used for both read and write operation.
            # Transform :- A type of duples stream where the output is computed based on input.
        
        # Each type of stream is an EventEmitter instance and throws several events at different instance of times.
          For example, some of the commonly used events are:

          # data   :- This event is fired when there is data is available to read.
          # end    :- This event is fired when there is no more data to read.
          # error  :- This event is fired when there is any error receiving or writing data.
          # finish :- This event is fired when all the data has been flushed to underlying syste.


*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    /*
        this is not streaming .
        var data = fs.readFile('file.txt', (err, data) => {
            if (err) return console.log(err);
            res.end(data.toString());
        });
    */

    // readable stream
    const readStream = fs.createReadStream("file.txt");

    // chunk data jo hai yaha jo hai ek ek krke data ko get krega.
    readStream.on("data", (chunkData) => {
        res.write(chunkData);
    });
    readStream.on("end", () => {
        res.end();
    });
    // if the file not found then get the below msg.
    readStream.on("error", (err) => {
        console.log(err);
        res.end("404! file not found.");
    })
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server stared at port : 8000")
});
