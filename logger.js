const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

// To Call

// const Logger = require("./logger");

// const logger = new Logger();

// logger.on("message", (data) => console.log("called Listener", data));

// logger.log("Hello World");
