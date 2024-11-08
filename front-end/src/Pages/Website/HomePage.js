import React from 'react'
import LandingPage from '../Website/LandingPage';
import ProductsWithSale from '../Website/products/ProductsWithSale';
import TopRatedProducts from './products/TopRatedProducts';
const HomePage = () => {
  return (
    <div>
    <LandingPage/>
    <ProductsWithSale/>
    <TopRatedProducts/>
    </div>
  )
}
export default HomePage
