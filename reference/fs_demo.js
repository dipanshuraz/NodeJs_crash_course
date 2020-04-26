const path = require("path");
const fs = require("fs");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created !");
});

// Create File
fs.writeFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File Created !");
  }
);

// Append to FIle
fs.appendFile(
  path.join(__dirname, "/test", "Hello.txt"),
  " I am New  Here!",
  (err) => {
    if (err) throw err;
    console.log("File Created !");
  }
);

// Read File
fs.readFile(
  path.join(__dirname, "/test", "Hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename File
fs.rename(
  path.join(__dirname, "/test", "Hello.txt"),
  path.join(__dirname, "/test", "Rename.txt"),
  (err) => {
    if (err) throw err;
  }
);
