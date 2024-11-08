import React, { useContext, useEffect, useState } from 'react'
import {faStar as solid } from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { productsContext } from '../../context/ProductsContext';
import styles from './cart.module.css'
const CartProduct = (props) => {
  const { products ,setproducts } = useContext(productsContext);
  const [cart , setCart]=useState([])
  const [count , setCount] = useState(0)
  useEffect(()=>{
    // localStorage.setItem('cart', JSON.stringify([]))
    const storerdCart = localStorage.getItem('cart')
    setCart(JSON.parse(storerdCart))
    setCount(props?.count)
  },[])
  // const  handleChange = (e)=>{
  //   setCount(e.target.value)
  //   const cart =JSON.parse(localStorage.getItem('cart')) || []
  //   const existingProduct = cart.find((item) => item.id === props.id);
  //   console.log(existingProduct)    
  //   if (existingProduct.count) {
  //     existingProduct.count = count;
  //   }
  // }
  const handleIncrease = ()=> {
    const cart =JSON.parse(localStorage.getItem('cart')) || []
    const existingProduct = cart.find((item) => item.id === props.id);
    console.log(existingProduct)    
    if (existingProduct.count) {
      existingProduct.count += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
     const newCart  = JSON.parse(localStorage.getItem('cart')) || [];
     const newProduct = newCart.find((item) => item.id === props.id)
    setCount(newProduct.count) 
    setCart(newProduct)
  }
  const handleDecrease = ()=>{
    const cart =JSON.parse(localStorage.getItem('cart')) || []
    const existingProduct = cart.find((item) => item.id === props.id);
    console.log(existingProduct)   
    if (existingProduct.count) {
      existingProduct.count -= 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    const newCart  = JSON.parse(localStorage.getItem('cart')) || [];
    const newProduct = newCart.find((item) => item.id === props.id)
   setCount(newProduct.count) 
   setCart(newProduct)
 }
    return (
    <Card className={`${styles.productParent}  col-lg-10 col-md-10 col-10 p-3 `} >
    <div className='d-flex align-items-center justify-content-between px-3 flex-wrap flex-row w-100'>
    <div className='col-lg-2 col-md-2 col-5'>
    <Card.Img variant="top" src={props?.image} className={styles.cardImg} />
    </div>
    <div className='col-lg-9 col-md-9 col-12'>
    <Card.Body>
    <div>
    <Card.Title>{props?.title}</Card.Title>
      <Card.Text>
      {props.description.slice(0,100) + "..." }
      </Card.Text>
      </div>
      <div className='d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center justify-content-between flex-row gap-3 '>
        <h5 className={styles.cardPrice}>{props?.price}$</h5>
        <h5 className={styles.cardDescount}>{Math.round((props?.price +50))}$</h5>
      </div>
      <div className= 'd-flex align-items-center justify-content-end'>
      <button onClick={handleDecrease}  className={`${styles.cardButtons} btn btn-danger`}>-</button>
      <input value={count}  className={styles.cardInput}/>
      <button onClick={handleIncrease}  className={`${styles.cardButtons} btn btn-primary`}>+</button>
      <button onClick={() => props?.delete(props?.id)}  className={`${styles.cardButtons} btn btn-danger`}>delete</button>
      </div>
      </div>
    </Card.Body>
    </div>
    </div>
  </Card>
  )
}

export default CartProduct
