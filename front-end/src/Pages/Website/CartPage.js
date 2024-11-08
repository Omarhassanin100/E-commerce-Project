import React, { useEffect, useState } from 'react'
import CartProduct from './CartProduct';
const CartPage = () => {
  const [cart , setCart]=useState([])
    useEffect(()=>{
      // localStorage.setItem('cart', JSON.stringify([]))
      const storerdCart = localStorage.getItem('cart')
      setCart(JSON.parse(storerdCart))
    },[])
    const handleDelete = (id)=>{
      const updatedCart = cart.filter(product => product.id !== id);
      setCart(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    const showProductsInCart  = cart.map((item,index)=> (
        <CartProduct key={index}
        title={item?.title}
        description={item?.description}
        image={Array.isArray(item.image) ? item?.image[0]:item?.image}
        price={item?.price}
        id={item?.id}
        rating={item?.rating}
        count={item?.count}
        delete={handleDelete}
        />
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
