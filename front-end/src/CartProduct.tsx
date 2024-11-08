import React, {  useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
// import styles from './cart.module.css'
// import { productsContext } from './../context/ProductsContext';
import styles from './Pages/Website/cart.module.css'
interface CartProductProps {
  category:string
  title: string;
  description?: string;
  image?: string;
  price: number | undefined ;
  id: number;
  rating:{
    rate:number  ,
    count: number 
  }
  count?: number | undefined;
  delete: (id: number) => void; // Type for the delete function
}

const CartProduct:React.FC<CartProductProps> = (props:CartProductProps) => {
  // interface ProductsContextType {
  //   products: CartProductProps[];
  //   setProducts: React.Dispatch<React.SetStateAction<CartProductProps[]>>;
  // }
  // const { products ,setProducts } = useContext(productsContext) as ProductsContextType;
  const [cart , setCart]=useState<CartProductProps[] | undefined>([])
  const [count , setCount] = useState<number | undefined>(0)
  useEffect(()=>{
    // localStorage.setItem('cart', JSON.stringify([]))
    const storerdCart = localStorage.getItem('cart')
    if (storerdCart) {
      setCart(JSON.parse(storerdCart) as CartProductProps[]);
    } else {
      setCart([]);
    }    
    setCount(props.count)
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
    const cart:CartProductProps[] =JSON.parse(localStorage.getItem('cart')|| "[]") 
    const existingProduct:CartProductProps |undefined = cart.find((item:CartProductProps) => item.id === props.id);
    console.log(existingProduct)    
    if (existingProduct?.count) {
      existingProduct.count += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    const newCart: CartProductProps[] | undefined  = JSON.parse(localStorage.getItem('cart') || "[]") ;
    const newProduct:CartProductProps | undefined = newCart?.find((item:CartProductProps) => item.id === props.id)
   setCount(newProduct?.count) 
   setCart(newCart)
  }
  const handleDecrease = ()=>{
    const cart:CartProductProps[] =JSON.parse(localStorage.getItem('cart')|| "[]") 
    const existingProduct:CartProductProps |undefined = cart.find((item:CartProductProps) => item.id === props.id);
    console.log(existingProduct)   
    if (existingProduct?.count) {
      existingProduct.count -= 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    const newCart: CartProductProps[] | undefined  = JSON.parse(localStorage.getItem('cart') || "[]") ;
    const newProduct:CartProductProps | undefined = newCart?.find((item:CartProductProps) => item.id === props.id)
   setCount(newProduct?.count) 
   setCart(newCart)
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
      {props.description?.slice(0,100) + "..." }
      </Card.Text>
      </div>
      <div className='d-flex align-items-center justify-content-between'>
      <div className='d-flex align-items-center justify-content-between flex-row gap-3 '>
        <h5 className={styles.cardPrice}>{props?.price}$</h5>
        <h5 className={styles.cardDescount}>{Math.round((props?.price ?? 0 +50))}$</h5>
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
