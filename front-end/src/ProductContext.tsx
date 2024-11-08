import {  createContext, useEffect, useState } from "react";
import React from 'react'
import axios from 'axios'
interface Product {
    id: number;
    title: string;
    description?: string;
    image?: string | string[];
    price?: number;
    rating:{
      rate:number  ,
      count: number 
    }
      count?: number;
  }
  interface ProductContextType{
    products:Product[];
    setProducts:React.Dispatch<React.SetStateAction<Product[]>>
  }
  interface ComponentProps{
    children:React.ReactNode
  }
export const productsContext= createContext<ProductContextType | undefined>(undefined)
const ProductsProvider:React.FC<ComponentProps>= ({children}) => {
    const [products ,setProducts] =useState<Product[]>([])
useEffect( ()=>{
    const storedProducts =JSON.parse(localStorage.getItem('products') || "[]" )
    if (storedProducts) {
        setProducts(storedProducts) ; 
      }
//           axios.get('https://fakestoreapi.com/products?limit=20')
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

