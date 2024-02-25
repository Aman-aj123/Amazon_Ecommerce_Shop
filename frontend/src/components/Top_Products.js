import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Fetch_Products from "../Api/Fetch_Products";

const Top_Products = (props) => {


     const { isBorder, categoryValue, topProductTitle } = props;

     // Define state variables
     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [page, setPage] = useState(1);
     const [currentPage, setCurrentPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);

     // Fetch data from the API when the component mounts
     const limit = 15;
     const fetchData = async () => {
          const URL = categoryValue === "allProducts" ? `${process.env.REACT_APP_API_URL}/products?page=${page}&limit=${limit}` : `${process.env.REACT_APP_API_URL}/products/category/${categoryValue}?page=${page}&limit=${limit}`
          setLoading(true);

          Fetch_Products(URL)
               .then((data) => {
                    setTimeout(() => {
                         setProducts(data?.productItems);
                         setCurrentPage(data?.currentPage);
                         setTotalPages(data?.totalPages);
                         setLoading(false);
                    }, 1000);
               }).catch((error) => console.log(`Error happens while fetching data with: ${error}`))

     };


     useEffect(() => {
          fetchData();
     }, [page]);


     const handleNextPage = () => {
          setPage(page + 1);
     }
     const handlePrevPage = () => {
          setPage(page - 1);
     }



     if (!products) {
          return null;
     }





     const borderStyle = {
          border: '1px solid gray'
     }

     const topProductStyle = {
          marginBottom: '14px',
          paddingLeft: '13px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#161616'
     }

     const storeLoading = [];
     for (let i = 0; i <= limit; i++) {
          storeLoading.push(i);
     }

     return (
          <div className='top-products'>
               <h3 style={topProductStyle}>{topProductTitle}</h3>
               {/* loading  */}

               {loading &&
                    <div className="loading-wrapper flex">
                         {storeLoading.map((element, index) => (
                              <img key={index} src="https://assets-v2.lottiefiles.com/a/53b80118-1161-11ee-b538-4f02e47c3050/EtQmNhvlO1.gif" />
                         ))}
                    </div>
               }

               {/* Slider buttons  */}
               { !loading &&
               <div className="slider-btn-wrapper">
                    <button className={`slider-btn prev ${page <= 1 ? "disabled-btn" : ""}`} disabled={page <= 1 ? true : false} onClick={handlePrevPage}><i className="fas fa-angle-left"></i></button>
                    <button className={`slider-btn next ${page >= totalPages ? "disabled-btn" : ""}`} disabled={page >= totalPages ? true : false} onClick={handleNextPage}><i className="fas fa-angle-right"></i></button>
               </div>
               }

               {!loading &&
                    <div className="products-wrapper flex">
                         {products.length !== 0 &&
                              products.map((itm, index) => (
                                   <Link onClick={() => { window.scroll(0, 0) }} to={`/${itm.category}/${itm.id}`} key={index} className="top-product-items" style={!isBorder ? borderStyle : {}}>
                                        <div className="top-product-img">
                                             <img src={itm.url} alt=".." />
                                        </div>
                                        <div className="top-title">
                                             <p>{itm.title.slice(0, 30)}...</p>
                                        </div>
                                        <h3 className="top-price">₹{itm.price}</h3>
                                        <div className="top-desc">
                                             <p>{itm.desc.slice(0, 80)}...</p>
                                        </div>
                                   </Link>
                              ))


                         }
                    </div>
               }
          </div >
     )
}

export default Top_Products
