import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ".././css/utility.css"
import All_products_Info from "./images/All_products_Info.json"

import Fetch_Producs from "../Api/Fetch_Products";
import Fetch_Products from '../Api/Fetch_Products';


const Header = () => {


     const navigate = useNavigate();

     const [searchKeyword, setSearchKeyword] = useState('');
     const [loading, setLoading] = useState(true);
     const [suggestions, setSuggestions] = useState([]);

     // State for sideBar class
     const [classValue, setClass] = useState('');

     // Adding the class

     const [categoryValue, setCategoryValue] = useState("All");

     const uniqueCategories = [...new Set(All_products_Info.map(product => product.category))];

     // Handling the search bar for queries
     const handleSearchInputChange = (e) => {
          setSearchKeyword(e.target.value);
     };

     // Redirecting to the search page
     const handleSearch = () => {
          if (searchKeyword.trim() !== '') {
               window.scroll(0, 0);
               navigate(`/search/${searchKeyword.trim().toLowerCase()}`);
               setSearchKeyword("");
          }
     };


     const handleKey = () => {
          window.addEventListener("keyup", (e) => {
               if (e.key === "Enter") {
                    handleSearch();
               }
          });
     }



     const handleCategoryChange = (e) => {
          window.scroll(0, 0);

          const selectedCategory = e.target.value;
          setCategoryValue(selectedCategory);
          if (selectedCategory === "All") {
               navigate("/allProducts");
          } else {
               navigate(`/${selectedCategory.toLowerCase()}`);
          }
     };


     const handleSearchSuggestion = () => {
          const URL = `${process.env.REACT_APP_API_URL}/products/query/${searchKeyword}`
          Fetch_Products(URL)
               .then((data) => {
                    setSuggestions(data.productItems);
                    setLoading(false);
               }).catch((error) => console.log(`Error happens while fetching with: ${error}`))
     }



     const navigateCategory = (element) => {
          window.scroll(0, 0);
          navigate(`/${element}`);
     }

     // changing the class on the click of crossIcon
     const handleCrossIcon = () => {
          setClass("");
     };
     const handleHamBurger = () => {
          setClass("display_Sidebar");
     }


     return (
          <>
               <div className="body-overlay"></div>
               {/* <!-- Starting Header Section  --> */}
               <div className="header-wrapper">
                    <header id="header">
                         <div id="top-header" className="flex flex-center">
                              <div className="main-item-hdr align-items flex" style={{ gap: '10px' }}>
                                   <div className="main-hrd-lgo flex flex-between align-items" style={{ gap: '6px' }}>
                                        <div className="amazon-logo flex-box">
                                             <Link onClick={() => { window.scroll(0, 0) }} to='/'>  <img src="https://pngimg.com/d/amazon_PNG11.png" alt="amazon_logo" /> </Link>
                                        </div>
                                        <div className="location">
                                             <p>Delievery to</p>
                                             <i className="fa-solid fa-location-dot"></i> <span>India</span>
                                        </div>
                                   </div>
                                   <div className="search_bar flex">
                                        <div className="select">
                                             <select value={categoryValue} onChange={handleCategoryChange}>
                                                  <option value="All">All</option>
                                                  {uniqueCategories.map((category, index) => (
                                                       <option key={index} className="c-box flex-box">
                                                            {category.charAt(0).toUpperCase() + category.slice(1,)}
                                                       </option>
                                                  ))}
                                             </select>
                                        </div>
                                        <div className="input-box">
                                             <input
                                                  type="text"
                                                  placeholder="Search Amazon"
                                                  value={searchKeyword}
                                                  onChange={handleSearchInputChange}
                                                  onKeyUp={handleKey}
                                             />
                                        </div>
                                        <div className="search-icn flex-box" onClick={handleSearch}>
                                             <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                   </div>
                              </div>
                              <div className="coutry-lgo flex-box">
                                   <div className="country-icn">
                                        <img src="" />
                                   </div>
                                   <h4>EN</h4>
                                   <i className="fa-solid fa-caret-down down-icn"></i>
                              </div>
                              <div className="account-list">
                                   <p>Hello, sign in</p>
                                   <span>Account & Lists</span>
                                   <i className="fa-solid fa-caret-down down-icn"></i>
                              </div>
                              <div className="return-order">
                                   <p>returns</p>
                                   <h4>& Orders</h4>
                              </div>
                              <div className="cart" onClick={() => { navigate('/cart') }}>
                                   <img src="https://icon-library.com/images/shopping-icon-on-amazon/shopping-icon-on-amazon-15.jpg"
                                        alt=".." /><span>Cart</span>
                              </div>
                         </div>

                         <div id="bottom-header" className=" flex align-items">
                              <div className="c-box flex-box bar bar-icn" onClick={handleHamBurger}>
                                   <i className="fa-solid fa-bars"></i>
                              </div>
                              {/* <!-- sidebar  --> */}
                              <div className={`side-bar ${classValue}`}>
                                   <div className="cross-icn" onClick={handleCrossIcon}>
                                        <i className="fa-solid fa-xmark"></i>
                                   </div>
                                   <div className="account-area flex align-items">
                                        <i className="fa-solid fa-user"></i> <span>Hellow, sign in</span>
                                   </div>
                                   <div className="side-bar-content">
                                        <div className="cont-box">
                                             <h3>Digital Content & Devices</h3>
                                             <div className="si-option flex flex-between">
                                                  <p>Amazon Music</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Kindle E-readers & Books</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Amazon Playstore</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Amazon Music</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                        </div>

                                        <div className="cont-box">
                                             <h3>Shop by department</h3>
                                             <div className="si-option flex flex-between">
                                                  <p>Electronics</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Computers</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Smart Home</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Art and Crafts</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex" style={{ gap: '5px' }}>
                                                  <p className="see-all">See All</p>
                                                  <i className="fa-solid fa-caret-down"></i>
                                             </div>
                                        </div>


                                        <div className="cont-box ">
                                             <h3>Programs & Features</h3>
                                             <div className="si-option flex flex-between">
                                                  <p>Gifts Cards</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Shop By Interests</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Amazon Live</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>International Shopping</p>
                                                  <i className="fa-solid fa-caret-right"></i>
                                             </div>
                                             <div className="si-option flex see-all" style={{ gap: '5px' }}>
                                                  <p>See All</p>
                                                  <i className="fa-solid fa-caret-down"></i>
                                             </div>
                                        </div>

                                        <div className="cont-box last">
                                             <h3>Helps & Settings</h3>
                                             <div className="si-option flex flex-between">
                                                  <p>Your Account</p>
                                             </div>
                                             <div className="si-option flex" style={{ gap: '5px' }}>
                                                  <i className="fa-solid fa-globe"></i>
                                                  <p>English</p>
                                             </div>
                                             <div className="si-option flex" style={{ gap: '5px' }}>
                                                  <i className=" fa-solid fa-flag"></i>
                                                  <p>United States</p>
                                             </div>
                                             <div className="si-option flex flex-between">
                                                  <p>Customer's Service</p>
                                             </div>
                                             <div className="si-option flex see-all" style={{ gap: '5px' }}>
                                                  <p>Sign In</p>
                                             </div>
                                        </div>

                                   </div>
                              </div>
                              {/* <!-- End side bar  --> */}
                              <div className="c-box flex-box" onClick={() => { navigateCategory("allProducts") }}>
                                   All
                              </div>
                              {uniqueCategories.map((category, index) => (
                                   <div key={index} className="c-box flex-box" onClick={() => { navigateCategory(category) }}>
                                        {category.charAt(0).toUpperCase() + category.slice(1,)}
                                   </div>
                              ))}
                         </div>
                    </header >
               </div>
               {/* <!-- Ending Header Section  --> */}
          </>
     )
}

export default Header
