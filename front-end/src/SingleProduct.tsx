import React, { useContext } from 'react'
import { productsContext } from './ProductContext';
import {faStar as solid } from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import styles from './Pages/Website/products/SingleProduct.module.css' 
// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string | string[];
//   price: number;
//   rating:{
//     rate?:number | string ,
//     count: number | string
//   }
//   count:number
// }
interface Productprops{
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
  withSale:boolean
  }
    
  const SingelProduct:React.FC<Productprops > = (props:Productprops) => {

    if (!props) return null; // Ensure props is defined

      interface ProductContextType{
        products:Productprops[];
        setProducts:React.Dispatch<React.SetStateAction<Productprops[]>>
      }
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { products ,setProducts } = useContext(productsContext) as unknown as ProductContextType;
      const ratingStars = Math.trunc(props.rating.rate)
    const solidStars = Array.from({length : ratingStars}).map(( item, index)=>(
      <FontAwesomeIcon style={{color:"gold"}} key={index} icon={solid} />
    ))
    const regularstars = Array.from({length :5- ratingStars}).map(( item, index)=>(
      <FontAwesomeIcon  key={index} icon={faStar} />
    ))

  
    const singleProduct  = products?.find( product => product.id===(props.id) )
      
    const handleSaveInCart :()=> void = ()=> {
      if (!singleProduct) {
        throw Error (" product not found ")
      }
    
      const cart:Productprops[]  =JSON.parse(localStorage.getItem('cart') || "[]")
      const existingProductIndex: number = cart?.findIndex((item) => item.id === singleProduct?.id);
      if (existingProductIndex !== -1) {
        console.log("Product already in the cart");
        if (cart[existingProductIndex].count) {
          cart[existingProductIndex].count += 1;
        } else {
          cart[existingProductIndex].count = 2; // Set count to 2 if it wasn't previously set
        }
      } else {

        singleProduct.count = 1
        cart.push(singleProduct) 
        console.log("Product added to cart")
        ;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
        }
  return (
    <NavLink to={`/product/${props.id}`} className={styles.nav}>
    <Card className={`${styles.productParent} col-lg-3 col-md-6 col-12`} >
    {props.withSale ?
      <div className=' d-flex justify-content-between align-items-center m-2'>
    <div className={`${styles.saleSginParent} py-3 mx-2 position-relative`} >
    <p className={styles.saleSgin}>SALE</p> 
    </div>
    <div className={`${styles.cardImgParent} d-flex justify-content-center align-items--center mt-3 ` }>
    <Card.Img variant="top"   src={Array.isArray(props.image) ? props.image[0] : props.image}  className={styles.cardImg} />
    </div>
    </div>
     :
     <div className=' d-flex justify-content-center align-items--center m-2'>
    <div className={`${styles.cardImgParent} d-flex justify-content-center align-items--center mt-3 ` }>
    <Card.Img variant="top"   src={Array.isArray(props.image) ? props.image[0] : props.image}  className={styles.cardImg} />
    </div>
    </div>

     }
    <Card.Body>
    <Card.Title>{props?.title.slice(0,23) + "..." }</Card.Title>
      <Card.Text>
      {props.description.slice(0,50) + "..." }
      </Card.Text>
      <div className='d-flex align-items-center justify-content-between '>
        <h5 className={styles.priceElement}>{props?.price}$</h5>
        <h5 className={styles.descountElement}>{Math.round((props?.price +50))}$</h5>
      </div>
      <div className='d-flex align-items-center justify-content-start p-3 my-2 '>
      {solidStars}
      {regularstars}
      </div>
      <div  className= {`${styles.cardButtonsParent} d-flex align-items-center justify-content-between`}>
      <Link to={`/product/${props.id}`}  className={`${styles.cardButtons} text-decoration-none btn btn-primary`} >View Details</Link>
      <Link onClick={handleSaveInCart} className={`${styles.cardButtons} text-decoration-non btn btn-danger`} to={''}  >Add To Cart</Link>
      </div>
    </Card.Body>
  </Card>
  </NavLink>
  )
}

export default SingelProduct
