 import React, {useState} from "react";

 import ProductsContext from "./ProductsContext";


const ProductsState = (props) => {
     const [productsState, setProductsState] = useState([]);

     return (
          <ProductsContext.Provider value={{ productsState, setProductsState }}>
               {props.children}
          </ProductsContext.Provider>
     );
}



export default ProductsState;