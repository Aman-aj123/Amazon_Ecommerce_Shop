
/* const fs = require("fs"); 


const path = require('path');

const All_products_Info = path.resolve(__dirname, "../../frontend/src/components/images/All_products_Info.json");

const existingData = JSON.parse(fs.readFileSync(All_products_Info, "utf-8"));

const fetchProducts = async () => {
     const URL = "https://fakestoreapi.com/products";
     const data = await fetch(URL);
     const response = await data.json();


     const storeProducts = [...existingData, ...response];

     const allProducts = storeProducts.map((element, index) => {
          if (element.hasOwnProperty('image')) {
               element.url = element.image;
               delete element.image;
          }
          element.id = index;
          return element;
     });

     const finalProducts = allProducts.reverse();

     fs.writeFileSync(All_products_Info, JSON.stringify(finalProducts));
     console.log(finalProducts);

}

fetchProducts();

*/