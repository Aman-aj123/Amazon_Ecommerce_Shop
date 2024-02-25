// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
     const navigate = useNavigate();

     return (
          <div>
               {cartItems.length === 0 &&
                  <div className='empty-cart'>
                    <h1 className="empty-title">Your amazon cart is empty...</h1>
                    <div className="shop-btn">
                    <button onClick={()=> {navigate("/")}}>Shop now</button>
                    </div>
                  </div>
               }
               <ul>
                    {
                         cartItems.map((item, index) => (
                              <div key={index} className='cart-container'>
                                   <div className="cart-wrapper">
                                        <div className="cart-items flex">
                                             <div className="cart-image">
                                                  <img src={item.url} alt={index}></img>
                                             </div>
                                             <div className="cart-content">
                                                  <h2 className="cart-title">{item.title.slice(0, 40)}...</h2>
                                                  <h2 className="cart-price">₹{item.price}</h2>
                                                  <p className="cart-desc">{item.desc.slice(0, 130)}...</p>
                                                  <button className="cart-buy-now">Buy now</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         ))}
               </ul>
          </div>
     );
}

export default Cart;
