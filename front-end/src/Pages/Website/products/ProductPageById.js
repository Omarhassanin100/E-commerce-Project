import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productsContext } from '../../../context/ProductsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as solid } from '@fortawesome/free-solid-svg-icons'
import styles from './productPage.module.css'
import ImageGallery from 'react-image-gallery';
import fav from '../../../images/fav-off.png'
import SingleSkelton from './SingleSkelton';
const ProductPageById = () => {
  const { products ,setproducts } = useContext(productsContext);
  const {id} =useParams()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if (products.length > 0) {
        setLoading(false); 
    }
},[products])
  const singleProduct = products?.find( product => product.id===Number(id) )
  const [image, setImage]= useState(Array.isArray(singleProduct?.image) ? singleProduct?.image[0] : singleProduct?.image)
  const showImages =Array.isArray(singleProduct?.image) ? singleProduct?.image.map((img ,index)=>{
    return{original:img , thumbnail:img}
  }
  ):[{ original: singleProduct?.image, thumbnail: singleProduct?.image }]
 const handleSaveInCart = ()=> {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const existingProductIndex = cart.findIndex((item) => item.id === singleProduct.id);
  if (existingProductIndex !== -1) {
    if (cart[existingProductIndex].count) {
      cart[existingProductIndex].count += 1;
    } else {
      cart[existingProductIndex].count = 2; 
    }
  } else {
    singleProduct.count = 1
    cart.push(singleProduct) 
}
localStorage.setItem('cart', JSON.stringify(cart));
}
  return (
    <div className={styles.parent}>
      <div className={styles.containerParent}>
    {singleProduct ? (
      <container  className={`${styles.container} d-flex flex-wrap  align-items-center justify-content-between  row-gap-3 h-fit-content py-3`} >
      <div className='col-lg-5 col-md-12 col-12 h-100 d-flex flex-row flex-wrap'>
      <div className={styles.imgParent} >
        {loading ?
        <div className='d-flex'>
        <div>
        <SingleSkelton length={1} height={"130px"} width="100px" classes="col-lg-3"/>
        <SingleSkelton length={1} height={"130px"} width="100px" classes="col-lg-3"/>
        <SingleSkelton length={1} height={"130px"} width="100px" classes="col-lg-3"/>
        </div>
        <div>
         <SingleSkelton length={1} height={"400px"} width="300px" classes="col-lg-3"/>
         </div>
         </div>
        :<ImageGallery
        showBullets={true}
        showFullscreenButton={false}
        thumbnailPosition='left' 
        disableThumbnailScroll
        items={showImages} 
        className={styles.productImg}/>}
      </div>
      <div className='w-100 d-flex align-items-center gap-2 my-3'>
      <div className={styles.buttonParent}>
      <button onClick={handleSaveInCart}  className={`${styles.addButton} btn btn-primary`}>Add To Cart</button>
      </div>
      <div className={styles.favImgParent}>
      <img className={styles.favImg} src={fav} alt='img'/>
      </div>
      </div>
      </div>
      <div className='col-lg-5 col-md-12 col-12 h-100'>
      {singleProduct.rating.rate>=4?
      <div className={styles.bestSeller}>Best Seller</div>:""}
      <div className={styles.productCategory}>{singleProduct.category}</div>
        <h1 className={styles.productTitle}>{singleProduct.title}</h1>
        <p className={styles.productDescription}>{singleProduct.description}</p>
      <div className={`${styles.ratingParent} d-flex gap-3`}>
        <p className={styles.rating}>
        {singleProduct.rating.rate}
        <FontAwesomeIcon className={styles.ratingIcon}  icon={solid} />
        </p>
        <p className={styles.count}>
        ({singleProduct.rating.count})
        </p>
        </div>
        <div className={`${styles.saleParent} d-flex align-items-center`}>
        <span className={styles.span}>
          Was:
        </span>
        <span style={{textDecoration:"line-through",fontSize:'20px'}}>{(singleProduct.price) + 100}  $</span>
      </div>
      <div className={` ${styles.priceParent} d-flex align-items-center`} >
       <span className={styles.span}>
        Now:
        </span>
        <span className='d-flex gap-3 align-items-center'>
        <span className={styles.priceSpan}>{Number(singleProduct.price)}  $ </span>
        <span style={{color:"#404553"}}>Inclusive of VAT</span>
        </span>
      </div>
      <div className={` ${styles.savingParent} d-flex align-items-center`} >
      <span className={styles.span}>
      Saving:
      </span>
      <span className={styles.savingSpan}>{((singleProduct.price)+100)-(singleProduct.price)}  $</span>
      </div>
      </div>
      
      </container>
    ) : (
      <p>Product not found</p>
    )}
  </div>  
  </div>
  )
}

export default ProductPageById
