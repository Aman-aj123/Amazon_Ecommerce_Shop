const axios = require("axios")
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./Amazon_Products.html");

const query = "mouse";
const page = 8;

const URL = `https://www.amazon.com/s?k=${query}&page=${page}`

axios.get(URL).then((response) => {
     console.log(response.data);
     fs.writeFileSync(filePath, response.data);
     console.log("Source code added sucessfully...");
});    