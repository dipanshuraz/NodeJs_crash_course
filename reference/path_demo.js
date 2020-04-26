const path = require('path')

// Base file name
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// extension name
console.log(path.extname(__filename))

// Create Object path
console.log(path.parse(__filename))

// Concatenate path

console.log(path.join(__dirname, 'test', 'test.js'))