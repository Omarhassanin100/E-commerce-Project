import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../../../context/ProductsContext';
import SingelProduct from './SingelProduct';
import SingleSkelton from './SingleSkelton';
const ProductsWithSale = () => {
    const { products ,setproducts } = useContext(productsContext);
    const [loading, setLoading]= useState(true)
    const [rated ,setRated] = useState(true)
    useEffect(() => {
      if (products.length > 0) {
          setLoading(false); 
      }
  }, [products]);
    const saleProducts = products.slice(0,4)
    const showSaleProducts = saleProducts?.map((item,index)=>(
        <SingelProduct key={index}
        title={item?.title}
        description={item?.description}
        image={Array.isArray(item.image) ? item?.image[0]:item?.image}
        price={item?.price}
        rating={item?.rating}
        id={item?.id}
        withSale={true}
        />
    )) 
      return (
    <div className='w-100'>
      <h1  style={{margin:"30px"}}>DEAL OF THE DAY</h1>
    <div className=' d-flex align-items-center justify-content-center flex-wrap' style={{gap:"10px",rowGap:"5px",transition:"0.3s"}} >
    {loading? <SingleSkelton length="4" height="300px" classes="col-lg-3"/>:showSaleProducts}
    </div>
    </div>
  )
}

export default ProductsWithSale
