const url = require("url");
const myUrl = new URL(
  "https://codersadhu.tech:5555/project?id=100&status=active"
);

// Serialize Url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host or root domain
console.log(myUrl.host);

// Host name - doesnt include port name
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialize query
console.log(myUrl.search);

// Query Obj
console.log(myUrl.searchParams);

// Add params
console.log(myUrl.searchParams.append("abc", 123));

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name} : ${value}`);
});
