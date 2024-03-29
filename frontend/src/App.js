// App.js

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './pages/Categories';
import ShowProducts from './pages/showProducts';
import Cart from './pages/Cart';
import SearchResults from './pages/SearchResults';
import All_products_Info from './components/images/All_products_Info';
import ProductsState from './context/ProductsState';


function App() {

    const [cartItems, setCartItems] = useState([]);
    const allFilters = All_products_Info.map((element) => {
        return element;
    });



    return (
        <>
            <BrowserRouter>
                <Header />
                <ProductsState>
                    <Routes>
                        <Route path="/" element={<Shop />} />


                        <Route path="/search/:keyword" element={<SearchResults />} />

                        <Route path="/:category" element={<Categories productCategory={allFilters} />} />

                        <Route
                            path="/:category/:productId"
                            element={<ShowProducts />}
                        />

                        <Route path="/cart" element={<Cart />} />

                    </Routes>
                    <Footer />
                </ProductsState>
            </BrowserRouter>
        </>
    );
}

export default App;
