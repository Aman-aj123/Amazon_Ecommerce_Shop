import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fetch_Products from "../Api/Fetch_Products";

const All_Product_Items = (props) => {
  const { category } = useParams();

  // Define state variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  // Fetch data from the API when the component mounts
  const fetchData = async () => {

    const limit = process.env.REACT_APP_API_LIMIT;
    const URL = category === "allProducts" ? `${process.env.REACT_APP_API_URL}/products?page=${page}&limit=${limit}` : `${process.env.REACT_APP_API_URL}/products/category/${category}?page=${page}&limit=${limit}`

    setLoading(true);

    Fetch_Products(URL)
      .then((data) => {
        setTimeout(() => {
          setProducts(data?.productItems);
          setTotalPages(data?.totalPages);
          setCurrentPage(data?.currentPage);
          setTotalProducts(data?.totalResults);
          setLoading(false);
        }, 1000);
      }).catch((error) => {
        console.log(`Error happens in fetching the data with: ${error}`)
      })

  };


  useEffect(() => {

    fetchData();
  }, [category, page]);




  // Handling the next page
  const handleNextPage = () => {
    window.scroll(0, 0);
    setPage(page + 1);

  }

  // Handling the Previous page
  const handlePrevPage = () => {
    window.scroll(0, 0);
    setPage(page - 1);
  }
  // Handling the other page
  const handleOtherPage = (element) => {
    window.scroll(0, 0);
    setPage(element);
  }

  // Handling the last page
  const handleLastPage = () => {
    window.scroll(0, 0);
    setPage(totalPages);
  }

  const storePages = [];
  for (let i = page; i <= totalPages; i++) {
    storePages.push(i);
  }

  const slicedPages = storePages.slice(0, 3);




  if (!products) {
    return null;
  }






  return (
    <div className="flex flex-wrap" id="productContainer">
      {loading &&
        <div className="main-loading-wrapper flex-box">
          <img src="https://assets-v2.lottiefiles.com/a/53b80118-1161-11ee-b538-4f02e47c3050/EtQmNhvlO1.gif" />
        </div>}

      <h4 className='result-title'>{totalProducts} Results</h4>
      <div className="allProduct-wrapper">
        {products.length !== 0 &&
          products.map((element, index) => (
            <Link onClick={() => { window.scroll(0, 0) }} to={`/${element.category}/${element.id}`} className="productItems" key={index}>
              <div className="product-image">
                <img src={element.url} alt={`Product ${index}`} />
              </div>
              <div className="product-text">
                <h2 className="product-title">{element.title.slice(0, 30)}...</h2>
                <h3 className="product-price">₹ {element.price}</h3>
                <p className="product-desc">{element.title.slice(0, 80)}...</p>
              </div>
            </Link>
          ))
        }
      </div>

      {/* Pagination  */}
      <div className='pagination'>
        <h4 className="pagination-title">Pagination</h4>
        <div className="pagination-wrapper">
          <button disabled={page <= 1 ? true : false} className={`pagination-btn next ${page <= 1 ? "disabled-btn" : ""}`} onClick={handlePrevPage}><i className="fas fa-angle-left"></i></button>
          {slicedPages.map((element, index) => (
            <button onClick={() => { handleOtherPage(element) }} className={`pagination-btn ${element === currentPage ? "active-page" : ""}`} key={index}>{element}</button>
          ))
          }
          <button onClick={handleLastPage} className='pagination-btn'>... {totalPages}</button>
          <button disabled={page >= totalPages ? true : false} className={`pagination-btn next ${page >= totalPages ? "disabled-btn" : ""}`} onClick={handleNextPage}><i className="fas fa-angle-right"></i></button>
        </div>
      </div>


    </div>
  );
};

export default All_Product_Items;
