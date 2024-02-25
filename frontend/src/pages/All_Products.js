import React, { useState } from 'react';
import All_Product_Items from '../components/All_Product_Items';
import All_products_Info from '../components/images/All_products_Info';



const All_Products = (props) => {

  return (
    <>
      <All_Product_Items productCategory={props.productCategory} />
    </>
  );
};

export default All_Products;
