import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import styles from './Pages/Website/landing.module.css'
import prod4 from './images/prod4.png'
import slider4 from './images/slider4.png'
import sale from './images/sale.png'
import slider1 from './images/slider1.png'

const LandingPage = () => {
  return (
    <>
    <Carousel data-bs-theme="dark"  className={styles.carouselParent}
      prevIcon={<span className={styles.carouselIcon} >◀</span>}
      nextIcon={<span className={styles.carouselIcon} >▶</span>}
      >
      <Carousel.Item interval={1000}  className={styles.contentParent}>
        <div className={`d-flex felx-row justify-content-around align-items-center h-100 ${styles.contentParent}`} style={{backgroundColor:"linen"}}>
          <img src={prod4} alt='kcc' className={styles.carouselImg} />
          <div className='text-center'>
            <h3 style={{marginBottom:"50px"}}>Discover the Latest Trends and Tech!</h3>
            <p >Explore our exclusive collection of products designed<br/> to elevate your style and upgrade your lifestyle.</p>
            <div className='mx-3 my-3 py-3 px-3'>
            <Link to="" className={`${styles.carouselButto} mx-3 my-3 py-3 px-3 fw-bold text-light`} style={{backgroundColor:"indianred"}}>
              SHOP NOW
            </Link>
            </div>
          </div>
        </div> 
      </Carousel.Item>
      <Carousel.Item interval={1000} className={styles.contentParent}>
        <div className={`d-flex felx-row justify-content-around align-items-center h-100 ${styles.contentParent}`} style={{backgroundColor:"#d5bbec"}}>
          <img src={slider4} alt='kcc' className={styles.carouselImg} />
          <div className='text-center'>
            <h3 style={{marginBottom:"50px"}}> Discover the Future of Tech—Shop Phones, Laptops, and Gadgets!</h3>
            <p>find the perfect tech to elevate your everyday life.<br/> Shop now and stay ahead of the curve.</p>
            <div className='mx-3 my-3 py-3 px-3'>
            <Link to="" className={`${styles.carouselButto} mx-3 my-3 py-3 px-3 fw-bold text-light`} style={{backgroundColor:"rgb(145 93 142)"}}>
              SHOP NOW
            </Link>
            </div>
          </div>
        </div> 
      </Carousel.Item>
      <Carousel.Item interval={1000} className={styles.contentParent}>
        <div className={`d-flex felx-row justify-content-around align-items-center h-100 ${styles.contentParent}`} style={{backgroundColor:"linen"}}>
          <img src={sale} alt='kcc' className={styles.carouselImg}/>
          <div className='text-center'>
            <h3 style={{marginBottom:"50px"}}>Sitewide Mega Sale—Up to 50% Off on All Products!</h3>
            <p >, enjoy unbeatable discounts across every category.<br/> Shop now and save big on everything you love!</p>
            <div className='mx-3 my-3 py-3 px-3'>
            <Link to="" className={`${styles.carouselButto} mx-3 my-3 py-3 px-3 fw-bold text-light`} style={{backgroundColor:"#ec1f27"}}>
            SHOP NOW
            </Link>
            </div>
          </div>
        </div> 
      </Carousel.Item>
      <Carousel.Item interval={1000} className={styles.contentParent}>
        <div className={`d-flex felx-row justify-content-around align-items-center h-100 ${styles.contentParent}`} style={{backgroundColor:"linen"}}>
          <img src={slider1} alt='kcc' className={styles.carouselImg} />
          <div className='text-center'>
            <h3  style={{marginBottom:"50px"}}>Glow Like Never Before—Discover Your Perfect Skincare Routine!</h3>
            <p className='slider-text '> find everything you need for glowing, nourished skin.</p>
            <div className='mx-3 my-3 py-3 px-3'>
            <Link to="" className=' mx-3 my-3 py-3 px-3 fw-bold text-light'style={{textDecoration:"none",borderRadius:"0.375rem",backgroundColor:"#ad295b"}}>
            SHOP NOW
            </Link>
          </div>
          </div>
        </div> 
      </Carousel.Item>
    </Carousel>
      </>
  )
}

export default LandingPage

