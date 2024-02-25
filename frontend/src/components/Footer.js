import React from 'react'
import "../css/utility.css"

const Footer = () => {


     return (
          <>
               {/* <!-- Starting Footer section --> */}
               <div id="back-to-top" className="flex-box" onClick={() => { window.scroll(0,0)}}>
                    <p style={{ textDecoration: 'none' }}>Back to Top</p>
               </div >
               <footer>
                    <div className="flex flex-around flex-wrap" style={{ rowGap: "24px" }}>
                         <div className="f-items">
                              <h4>Get to Know Us</h4>
                              <li>Careers</li>
                              <li>Blog</li>
                              <li>About Amazon Investor Relations</li>
                              <li>Amazon Devices</li>
                              <li>Amazon Science</li>
                         </div>

                         <div className="f-items">
                              <h4>Make Money with Us</h4>
                              <li>Sell products on Amazon</li>
                              <li>Sell on Amazon Business</li>
                              <li>Sell apps on Amazon</li>
                              <li>Become an Affiliate</li>
                              <li>Advertise Your Products</li>
                              <li>Self-Publish with Us</li>
                              <li>Host an Amazon Hub</li>
                              <li>See More Make Money with Us</li>
                         </div>

                         <div className="f-items">
                              <h4>Amazon Payment Products</h4>
                              <li>Amazon Business Card</li>
                              <li>Shop with Points</li>
                              <li>Reload Your Balance</li>
                              <li>Amazon Currency Converter</li>
                         </div>

                         <div className="f-items">
                              <h4>Let Us Help You</h4>
                              <li>Amazon and COVID-19</li>
                              <li>Your Accounts</li>
                              <li>Your Orders</li>
                              <li>Shipping Rates & Policies</li>
                              <li>Returns & Replacements</li>
                              <li>Manage Your Content and Devices</li>
                              <li>Amazon Assistant</li>
                              <li>Help</li>
                         </div>
                    </div>
                    <p className="dev-info">Copyright &copy; 2023 Designed by Developer Aman Raj From Aurangabad (Bihar)</p>
               </footer>
               {/* <!-- Ending Footer section --> */}

          </>
     )
}

export default Footer
