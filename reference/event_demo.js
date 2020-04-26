const EventEmmiter = require("events");

// Create class
class MyEmmiter extends EventEmmiter {}

// InitObj
const myEmmiter = new MyEmmiter();

// Event Listener
myEmmiter.on("event", () => console.log("Event fired"));

// Init event
myEmmiter.emit("event");
