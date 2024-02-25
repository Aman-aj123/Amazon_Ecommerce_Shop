import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Fetch_Products from '../Api/Fetch_Products';
import Top_Products from "../components/Top_Products"
import All_products_Info from "../components/images/All_products_Info.json"

const ShowProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { productId } = useParams();

    const fetchData = () => {
        const URL = `${process.env.REACT_APP_API_URL}/products?limit=${All_products_Info.length}`;
        setLoading(true);

        Fetch_Products(URL)
            .then((data) => {
                    setProducts(data.productItems);
                    setLoading(false);
            })
            .catch((error) => console.log(`Error happens while fetching the data with: ${error}`));
    };

    const clickedProduct = products.filter((element) => element.id === parseInt(productId));


    useEffect(() => {
        fetchData();
    }, [productId]);

    const handleAddToCart = () => {
        if(clickedProduct.length !== 0){
            props.addToCart(clickedProduct);
        }
        navigate("/cart");
        window.scroll(0, 0);
    };


    return (
        <div className="show-productArea">
            <div className="show-product-wrapper flex">
                <div className="left">
                    <div className="product-image">
                        <img src={clickedProduct.length !== 0 ? clickedProduct[0].url : "Loading..."} alt="..." />
                    </div>
                    <div className="recommended-images">
                        <img src={clickedProduct.length !== 0 ? clickedProduct[0].url : "Loading..."} alt=".." />
                        <img src={clickedProduct.length !== 0 ? clickedProduct[0].url : "Loading..."} alt=".." />
                        <img src={clickedProduct.length !== 0 ? clickedProduct[0].url : "Loading..."} alt=".." />
                        <img src={clickedProduct.length !== 0 ? clickedProduct[0].url : "Loading..."} alt=".." />
                    </div>
                </div>
                <div className="right">
                    <div className="product-content">
                        <h2 className="product-title">{clickedProduct.length !== 0 ? clickedProduct[0].title : "Loading..."}</h2>
                        <p className="product-desc">{clickedProduct.length !== 0 ? clickedProduct[0].desc : "Loading..."}</p>
                    </div>
                    <h2 className='productPrice'>{clickedProduct.length !== 0 ? `₹${clickedProduct[0].price}` : "Loading..."}</h2>
                    <div className="about-company">
                        {clickedProduct.length !== 0 ? (
                            <>
                                <h3>About our company</h3>
                                <ul>
                                    <li><b>Global Marketplace</b>: Amazon offers a vast global marketplace where millions of sellers connect with customers, providing a diverse array of products from books and electronics to fashion and home goods.</li>
                                    <li><b>Prime Membership</b>: Enjoy exclusive benefits like fast shipping, streaming, and more with Amazon Prime, enhancing the overall shopping and entertainment experience.</li>
                                    <li><b>Innovative Technology</b>: Leveraging cutting-edge technology, Amazon employs advanced algorithms and AI to personalize recommendations, ensuring a tailored shopping journey for each customer.</li>
                                    <li><b>Reliable Customer Reviews</b>: Make informed decisions through authentic customer reviews, fostering transparency and trust in product quality and seller credibility.</li>
                                    <li><b>Eco-friendly Initiatives</b>: Amazon prioritizes sustainability with programs like Amazon Renewed, encouraging the reuse of products, and initiatives to reduce its carbon footprint.</li>
                                    <li><b>Community Engagement</b>: Amazon engages with local communities through programs like AmazonSmile, supporting charitable organizations and fostering a positive impact beyond the realm of online shopping.</li>
                                </ul>
                            </>
                        ) : (
                            <h1>Loading...</h1>
                        )}
                    </div>
                    <div className="product-btn">
                        <button className='buy-now'>{clickedProduct !== 0 ? "Buy now" : "Loading..."}</button>
                        <button className='add-to-cart' onClick={handleAddToCart}>{clickedProduct.length !== 2 ? "Add to cart" : "Loading..."}</button>
                    </div>
                </div>
            </div>
            {/* Render related products */}
            <Top_Products isBorder="true" categoryValue={"allProducts"} topProductTitle="Related items" />
        </div>
    );
}

export default ShowProducts;
