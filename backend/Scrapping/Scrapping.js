const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");

const allProductsFilePath = "../../frontend/src/components/images/All_products_Info.json";
const amazonFilePath = path.join(__dirname, "./Amazon_Products.html");

const existingData = JSON.parse(fs.readFileSync(allProductsFilePath));

const mappedColors = existingData.map((element) => {
     return element.color ? element.color : "white";
});

const uniqueColors = [...new Set(mappedColors)];

const mappedCategories = existingData.map((element) => {
     return element.category ? element.category : "gadgets";
});

const uniqueCategories = [...new Set(mappedCategories)];




const productScrapper = () => {
     const storeScrappedProducts = [];

     const htmlContent = fs.readFileSync(amazonFilePath);

     const $ = cheerio.load(htmlContent);

     $(".s-result-item").each((index, element) => {
          const title = $(element).find(".a-text-normal").text().trim().replace(/\s+/g, ' ');
          const price = $(element).find(".a-price-whole").text().replace(/\$|\./g, '');
          const ratings = $(element).find(".a-icon-alt").text();
          const url = $(element).find(".s-image").attr('src');

          const products = {
               title: title,
               price: price * 60,
               desc: title,
               category: uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)],
               url: url,
               ratings: ratings,
               color: uniqueColors[Math.floor(Math.random() * uniqueColors.length)]
          }

          storeScrappedProducts.push(products);

     });

     const finalProducts = storeScrappedProducts.filter((element) => {
          return element.title && element.desc && element.category && element.color && element.ratings && element.price;
     });

     console.log(finalProducts);

     return finalProducts;
}



const mainProducts = productScrapper();

const allMainProducts = [...existingData, ...mainProducts];



allMainProducts.forEach((element, index) => {
     element.id = index;

     if (element.title.toLowerCase().includes("Programmer") || element.title.toLowerCase().includes("coding") || element.title.toLowerCase().includes("Engineer")) {
          element.category = "programming"
     }


     else if (element.title.toLowerCase().includes("coffee mug") || element.title.toLowerCase().includes("mug") || element.title.toLowerCase().includes("cup")) {
          element.category = "mugs"
     }

     else if (element.title.toLowerCase().includes("health") || element.title.toLowerCase().includes("welness")) {
          element.category = "health"
     }

     else if (element.title.toLowerCase().includes("men's") || element.title.toLowerCase().includes("mens") || element.title.toLowerCase().includes("boys") || element.title.toLowerCase().includes("boy's")) {
          element.category = "men's clothing"
     }

     else if (element.title.toLowerCase().includes("women's") || element.title.toLowerCase().includes("womens") || element.title.toLowerCase().includes("girls's") || element.title.toLowerCase().includes("girl")) {
          element.category = "women's clothing"
     }

     else if (element.title.toLowerCase().includes("kids") || element.title.toLowerCase().includes("kid's") || element.title.toLowerCase().includes("toys") || element.title.toLowerCase().includes("toy")) {
          element.category = "Toys"
     }

     else if ( element.title.toLowerCase().includes("electric") || element.title.toLowerCase().includes("electronics") || element.title.toLowerCase().includes("electrics") || element.title.toLowerCase().includes("gadget")  || element.title.toLowerCase().includes("gadgets")) {
          element.category = "gadgets"
     }

     else {
          element.category = uniqueCategories[Math.floor(Math.random() * uniqueCategories.length)];
     }


     return element;

});


fs.writeFileSync(allProductsFilePath, JSON.stringify(allMainProducts.reverse(), null, 2));
console.log("Products updated successfully.");
