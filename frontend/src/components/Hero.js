import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  ".././css/utility.css"
// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper modules
import { Navigation, Pagination , A11y } from 'swiper/modules';


import { Link, useNavigate } from 'react-router-dom'




const Hero = () => {

  const navigate = useNavigate();



  return (
    // < !--Starting main area-- >
    <div id="hero" className="flex-box">
      <div className="swiper">
        <div className="swiper-wrapper">
          <Swiper
            className="mySwiper"
            modules={[ Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/women's clothing") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                    
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <Link to="/"> Click here to go to amazon.in</Link> </p>
                  </div>
                  <div className="hide-txt"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/home") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                   
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <Link to="/"> Click here to go to amazon.in</Link> </p>
                  </div>
                  <div className="hide-txt second"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/allProducts") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/61USQwqEHkL._SX1500_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                 
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <Link to="/"> Click here to go to amazon.in</Link> </p>
                  </div>
                  <div className="hide-txt third"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/gadgets") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="hero-image" />
                  <div className="hero-txt">
                   
                  </div>
                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <Link to="/"> Click here to go to amazon.in</Link> </p>
                  </div>
                  <div className="hide-txt fourth"></div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/toys") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="hero-image" />

                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <Link to="/"> Click here to go to amazon.in</Link> </p>
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide" onClick={() => { navigate("/gadgets") }} >
                <div className="hero-img">
                  <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" alt="hero-image" />

                  <div className="hero-para">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with
                      fast
                      local
                      delivery. <Link to="/"> Click here to go to amazon.in</Link> </p>
                  </div>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="swiper-pagination"></div>

        <div className="slider-btn"></div>
        <div className="slider-btn"></div>

      </div>
    </div >
  )
}




export default Hero
