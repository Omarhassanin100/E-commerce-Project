import React, { useContext, useEffect, useState } from 'react'
import  logo  from '../../images/logo.png'
import styles from './NavBar.module.css'
import { Col,  Container,  FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import Skeleton from 'react-loading-skeleton';
import SingleSkelton from './products/SingleSkelton';
const NavBar = () => {
  const { categories ,setCategories } = useContext(CategoriesContext);
  const [loading,setloading] =useState(true)
  const catsliced = categories.slice(0 , 8)
  useEffect(()=>{
    if (catsliced.length>0){
      setloading(false)
    }
  },[catsliced])
  const catShow = catsliced.map((item,index) => (
    <Link  key={index} className={styles.catTitle}>
    {item.name}
    </Link>
  ))
  return (
    <nav className='w-100 '>
    <container>
    <row className={`${styles.NavBarRow} justifay-content-md-center justify-content-around`}>
    <Col  xs={0} sm={0} md={3}>
    <Link to="/">
      <img className={styles.logoImg} src={logo} alt='logo'/>
      </Link>
       </Col>
       <Col  xs={10} sm={10} md={6} className='order md-2 order-3 mt-md-4 m-4 postion-relative d-flex'>
       <FormControl
        type='search'
        className={styles.customSearch}
        placeholder='Search Form Products'
       />
       <h3 className='btn btn-primary positon-absolute top-0 end-0 rounded-0 line-height d-flex align-items-center justifay-content-center  px-4 m-0'>
        Search
       </h3>
       </Col>
       <Col  xs={0} sm={0} md={2} className='order-md-3 order-1'>
       <div style={{display:"flex",alignItems:"center",justifyContent:"end", gap:"30px"}}>
       <Link to="log">
        <Button variant="primary">login</Button>
       </Link>
       <Link  to="/cart">
       <FontAwesomeIcon  fontSize={24} icon={faCartShopping} />
       </Link>
      <FontAwesomeIcon fontSize={24} icon={faUser} />
      </div>
       </Col>
    </row>
    </container>
    <Container>
    <div className={styles.catParent}>
    { loading?
      <SingleSkelton width="100px" height="65px" length="8"/>:catShow}
     {loading ?<SingleSkelton width="100px" height="65px" length="1"/>:
     <Link to="/showCategories" className={styles.catTitle}>
      Show All
    </Link>
}
    </div>
    </Container>
    </nav>
      
  )
}

export default NavBar
