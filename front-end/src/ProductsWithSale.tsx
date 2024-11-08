import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from './ProductContext';
import SingelProduct from './SingleProduct';
import SingleSkelton from './SngileSkelton';
interface Product {
  id: number;
  title: string;
  description: string;
  image: string | string[];
  price: number;
  rating:{
    rate:number  ,
    count: number 
  }
  count:number
  withSale?:boolean
}
const ProductsWithSale:React.FC = () => {
  interface ProductContextType{
    products:Product[];
    setProducts:React.Dispatch<React.SetStateAction<Product[]>>
  }

    const { products ,setProducts } = useContext(productsContext) as unknown as ProductContextType;
    const [loading, setLoading]= useState<boolean>(true)
    useEffect(() => {
      if (products.length > 0) {
          setLoading(false); 
      }
  }, [products]);
    const saleProducts = products.slice(0,4)
    const showSaleProducts:React.JSX.Element[] = saleProducts?.map((item,index)=>(
        <SingelProduct key={index}
      title={item.title}
      description={item.description}
      image={Array.isArray(item.image) ? item.image[0] : item.image}
      price={item.price}
      rating={item.rating}
      id={item.id}
      withSale={true} 
      count={0}/>
    )) 
      return (
    <div className='w-100'>
      <h1  style={{margin:"30px"}}>DEAL OF THE DAY</h1>
    <div className=' d-flex align-items-center justify-content-center flex-wrap' style={{gap:"10px",rowGap:"5px",transition:"0.3s"}} >
    {loading? <SingleSkelton width='' length={showSaleProducts.length} height="300px" classes="col-lg-3"/>:showSaleProducts}
    </div>
    </div>
  )
}

export default ProductsWithSale
