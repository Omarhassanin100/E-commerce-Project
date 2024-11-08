import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from './ProductContext'
import SingleSkelton from './SngileSkelton';
import land14 from './images/land14.avif'
import SingelProduct from './SingleProduct';
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
const TopRatedProducts:React.FC = () => { 
    interface ProductContext {
        products:Product[]
        setProducts:React.Dispatch<React.SetStateAction<Product[]>>
    }
    const {products, setProducts} =useContext(productsContext) as unknown as ProductContext
    const highRatedProducts = products?.filter(product => product.rating.rate >= 4)
    console.log(highRatedProducts)
    const [loading,setLoading] = useState(true)
    const topRatedShow = highRatedProducts?.map((item,index)=>(
        <SingelProduct key={index}
        title={item?.title}
        description={item?.description}
        image={Array.isArray(item.image) ? item?.image[0] : item?.image}
        price={item?.price}
        rating={item?.rating}
        id={item?.id}
        withSale={false} count={0}        />
    ))
    useEffect(()=>{
        if (products.length > 0) {
            setLoading(false); 
        }
    },[products])
    console.log(products)
    console.log(loading)
    return (
    <div className='w-100'>
    <div className='w-100' style={{height:"200px",marginBottom:"50px"}}>
        <img style={{width:"100%"}} src={land14} alt='img'/>
    </div>
      <h1  style={{margin:"30px"}}>THE BEST SALER </h1>
    <div className=' d-flex align-items-center justify-content-center flex-wrap' style={{gap:"10px",rowGap:"5px",transition:"0.3s"}} >
    {loading? <SingleSkelton width='' length={topRatedShow.length} height="300px" classes="col-lg-3"/>:topRatedShow}
    </div>
    </div>
  )
}

export default TopRatedProducts
