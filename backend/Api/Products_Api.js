const express = require('express');
const app = express();
const fs = require('fs');
const port = 5000;

// Enable CORS for all routes
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
     res.header("Access-Control-Allow-Headers", "Content-Type");
     next();
});

let productData = [];

// Function to read product data from file
const readProductDataFromFile = () => {
     fs.readFile('../../frontend/src/components/images/All_products_Info.json', 'utf8', (err, data) => {
          if (err) {
               console.error('Error reading product data:', err);
               return;
          }
          productData = JSON.parse(data);
          console.log('Product data reloaded.');
     });
};

// Read product data from file initially
readProductDataFromFile();

// Watch for changes to the JSON file and reload product data when it changes
fs.watch('../../frontend/src/components/images/All_products_Info.json', (eventType, filename) => {
     console.log(`File ${filename} changed. Reloading product data...`);
     readProductDataFromFile();
});

app.get('/', (req, res) => {
     res.send("Welcome to the API..");
});

// Route for fetching products with pagination
app.get('/api/v1/products', (req, res) => {
     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;
     const startIndex = (page - 1) * limit;
     const endIndex = page * limit;
     const totalPages = Math.ceil(productData.length / limit);
     const currentPage = page;
     const totalResults = productData.length;
     const paginatedProducts = productData.slice(startIndex, endIndex);
     const response = {
          totalPages,
          currentPage,
          totalResults,
          productItems: paginatedProducts
     };
     res.send(response);
});

// Route for fetching products by category with pagination
app.get('/api/v1/products/category/:category', (req, res) => {
     const { category } = req.params;
     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;
     const categoryProducts = productData.filter(product => product.category === category);
     const startIndex = (page - 1) * limit;
     const endIndex = page * limit;
     const totalPages = Math.ceil(categoryProducts.length / limit);
     const currentPage = page;
     const totalResults = categoryProducts.length;
     const paginatedCategoryProducts = categoryProducts.slice(startIndex, endIndex);
     const response = {
          totalPages,
          currentPage,
          totalResults,
          productItems: paginatedCategoryProducts
     };
     res.send(response);
});


// Route for searching products with pagination
app.get("/api/v1/products/query/:productQuery", (req, res) => {
     const { productQuery } = req.params;
     const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;
     const startIndex = (page - 1) * limit;
     const endIndex = page * limit;
     const filteredProducts = productData.filter(product => product.title.toLowerCase().includes(productQuery.toLowerCase()));
     const totalPages = Math.ceil(filteredProducts.length / limit);
     const currentPage = page;
     const totalResults = filteredProducts.length;
     const paginatedFilteredProducts = filteredProducts.slice(startIndex, endIndex);
     const response = {
          totalPages,
          currentPage,
          totalResults,
          productItems: paginatedFilteredProducts
     };
     res.send(response);
});

// Starting the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
