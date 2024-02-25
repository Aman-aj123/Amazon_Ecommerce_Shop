// Categories.js
import React from 'react';
import All_Products from './All_Products';
import { useParams } from 'react-router-dom';

const Categories = (props) => {
     const { category } = useParams();


 


     return (
          <>
               <All_Products productCategory={category} />
          </>
     );
}

export default Categories;
