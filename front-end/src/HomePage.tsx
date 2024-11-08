import React from 'react'
import LandingPage from './LandingPage';
import ProductsWithSale from './ProductsWithSale';
import TopRatedProducts from './TopRated';
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
