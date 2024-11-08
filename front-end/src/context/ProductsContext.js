import {  createContext, useEffect, useState } from "react";
import React from 'react'
import { Axios } from "../Api/Axios";
export const productsContext= createContext()

const ProductsProvider = ({children}) => {
    const [products ,setProducts] =useState([])
useEffect( ()=>{
    const storedProducts =JSON.parse(localStorage.getItem('products') )
    if (storedProducts) {
        setProducts(storedProducts); 
      }
//           Axios.get('https://fakestoreapi.com/products?limit=20')
//           .then(res=> {
//     console.log(res.data)
//     setProducts(res.data)
//     localStorage.setItem('products', JSON.stringify(res.data))
// }
// )
// .catch(err=>console.log(err))
}
,[])
useEffect(() => {
    if (products) { 
        console.log(products);
    }
}, [products])
console.log(products)
  return (
    <div>
    <productsContext.Provider value={{ products, setProducts }}>
        {children}
    </productsContext.Provider>
      
    </div>
  )
}

export default ProductsProvider

