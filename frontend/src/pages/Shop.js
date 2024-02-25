import React from 'react'
import '../css/style.css';
import '../css/responsive.css'


import Header from '../components/Header';
import Hero from '../components/Hero.js';
import ProductArea from '../components/Product_sect/ProductArea';
import Footer from "../components/Footer.js"
const Shop = () => {
  return (
    <>
      <Hero/>
      <ProductArea/>
    </>
  )
}

export default Shop
