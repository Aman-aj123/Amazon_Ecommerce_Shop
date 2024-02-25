const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.static("../Admin"));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const filePath = "../../frontend/src/components/images/All_products_Info.json";

// Read existing data and parse it into an array
const existingFile = fs.readFileSync(filePath, "utf8");
const products = JSON.parse(existingFile || '[]');

app.post("/adminPannel", (req, res) => {
     const { productTitle, productDesc, productUrl, productCategory, productPrice, productColor } = req.body;

     // Check if a product with the same title already exists
     const existingProductIndex = products.findIndex(product => product.title === productTitle);

     if (existingProductIndex !== -1) {
          // Update the existing product
          products[existingProductIndex] = {
               ...products[existingProductIndex],
               url: productUrl,
               desc: productDesc,
               category: productCategory,
               price: parseInt(productPrice)
          };
     } else {
          // Add a new product to the beginning of the array
          const newProduct = {
               "id": products.length,
               "url": productUrl,
               "title": productTitle,
               "desc": productDesc,
               "category": productCategory,
               "color": productColor.toLowerCase(),
               "price": parseInt(productPrice)
          };

          products.unshift(newProduct);
     }

     // Update the file with the modified products array
     fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

     // Send a response
     res.json({ success: true, message: "Product added or updated successfully" });
});

app.get("/", (req, res) => {
     res.send("Successfully Node.js");
});

app.get("/adminPannel", (req, res) => {
     res.sendFile(path.join(__dirname, "adminPannel.html"));
});

app.listen(4000, () => {
     console.log(`Server is running on http://localhost:4000`);
});
