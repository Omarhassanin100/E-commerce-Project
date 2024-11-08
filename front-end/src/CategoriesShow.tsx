import React, { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from './CategoriesContext';
import { Container } from 'react-bootstrap';
import SingleSkelton from './SngileSkelton';

interface CatShow {
  id:number | string;
  name:string
}
const CategoriesShow:React.FC<CatShow>= () => {
  interface CategoriesContextType{
    categories:CatShow[];
    setCategories:React.Dispatch<React.SetStateAction<CatShow[]>>
  }
    const { categories ,setCategories } = useContext(CategoriesContext) as CategoriesContextType;
    const [loading , setLoading] =useState<boolean>(true)
useEffect(()=>{
  if(categories.length>0){
    setLoading(false)
  }
},[categories])
    const catAll:React.JSX.Element[] = categories.map(item=> (
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
    <SingleSkelton width='' height="70px" length={categories.length} classes="col-lg-2 col-md-6 col-12"/>
    :catAll}
    </div>
    </Container>
    </div>
  )
}
export default CategoriesShow
