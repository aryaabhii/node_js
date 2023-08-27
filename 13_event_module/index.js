/*
    # Event module:
        Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- yout own events.

        Example:

            1: Registering for the event to be fired only one time using once.

            2: Create an event emitter instance and register a couple of callbacks

            3: Registering for the evnt with callback parameters.
*/


// 1: Registering for the event to be fired only one time using once.
const EventEmitter = require("events");

const event = new EventEmitter();  // creating object


// 2: Create an event emitter instance and register a couple of callbacks
// 1. call back fnc.
event.on("callMyName", () => {
    console.log("Your name is Abhijeet");
});

// 2. call back fnc.
event.on("callMyName", () => {
    console.log("Your name is Kumar");
});

// 3. call back fnc.
event.on("callMyName", () => {
    console.log("Your name is Sharma");
});

// event
event.emit("callMyName"); 

/* -----------------------------------------------------------------------------------  */

// 3: Registering for the evnt with callback parameters.
event.on("checkMyStatus", (statusCode, msg) => {
    console.log(`Status code is ${statusCode} and your page is ${msg}!` );
});


// callback parameters.
event.emit("checkMyStatus", 200, "OK");
/*
    Ek event ki help se multiple call back function ko call kara skte hai.
*/