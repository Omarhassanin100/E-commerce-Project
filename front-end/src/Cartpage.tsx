import React, { useEffect, useState } from 'react'
import CartProduct from './CartProduct';
interface Product {
  category?:string;
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
const CartPage = () => {
  const [cart , setCart]=useState<Product[]>([])
  useEffect(()=>{
    // localStorage.setItem('cart', JSON.stringify([]))
    const storerdCart  = localStorage.getItem('cart')
    if (storerdCart) {
      setCart(JSON.parse(storerdCart) as Product[]);
    } else {
      setCart([]); 
    }
  },[])   
      const handleDelete = (id:number):void=>{
      const updatedCart:Product[] = cart.filter((product:Product )=> product.id !== id);
      setCart(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    const showProductsInCart:React.JSX.Element[]= cart.map((item,index)=> (
        <CartProduct
        key={index}
        title={item?.title}
        description={item?.description}
        image={Array.isArray(item.image) ? item?.image[0] : item?.image}
        price={item?.price}
        id={item?.id}
        rating={item?.rating}
        count={item?.count}
        delete={handleDelete} 
        category={''}        />
    ))
  return (
    <div className='py-3'>
    <div>
    {showProductsInCart}
    </div>
    <div className=' d-flex align-items-center justify-content-between bg-black w-100 mt-8 py-3 px-3 rounded ' >
    <div>
      <p style={{color:"white", fontWeight:"bold" ,fontSize:"24px",margin:"0" }}>Total:50000$</p>
      <p className='text-sm' style={{color:"white",margin:"0",marginLeft:"10px"}}>* Taxes and shipping calculated at checkout</p>
      </div>
      <button className='btn btn-primary p-2'>CheckOut</button>
    </div>
    </div>
  )
}

export default CartPage
