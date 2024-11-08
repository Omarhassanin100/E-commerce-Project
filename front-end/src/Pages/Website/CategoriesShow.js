import React, { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext';
import { Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import SingleSkelton from './products/SingleSkelton';

const CategoriesShow = () => {
    const { categories ,setCategories } = useContext(CategoriesContext);
    const [loading , setLoading] =useState(true)
useEffect(()=>{
  if(categories.length>0){
    setLoading(false)
  }
},[categories])
    const catAll = categories.map(item=> (
        <div className='col-lg-2 col-md-6 col-12 bg-transparent border-0 '>
        <div className='m-1 bg-white border d-flex align-items-center justifay-content-start gap-3 rounded py-2 h-100'>
        <p className='m-2' style={{backgroundColor:"#ccc", width:"40px" ,height:"40px",textAlign:"center", fontSize:"16px",lineHeight:'40px'}}>{item.id}</p>
        <p className='m-0'>{item.name}</p>
        </div>
        </div>
    ))
  return (
    <div className=' py-5'>
    <Container>
    <div className='d-flex align-items-stretch justifay-content-center flex-wrap row-gap-2'>
    {loading?
    <SingleSkelton height="70px" length="30" classes="col-lg-2 col-md-6 col-12"/>
    :catAll}
    </div>
    </Container>
    </div>
  )
}
export default CategoriesShow
