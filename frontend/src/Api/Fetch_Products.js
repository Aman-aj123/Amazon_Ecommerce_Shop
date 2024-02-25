const Fetch_Products = async (url) => {
     try {
          const data = await fetch(url);
          const response = await data.json();
          
          return response;
     } catch (error) {
          console.log(`Error happens while fetching the products with: ${error}`);
     }

};

export default Fetch_Products;