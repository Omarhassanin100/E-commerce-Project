import React, { useContext, useEffect, useState  } from 'react'
import TableShow from '../../Components/Table'
import { Link } from 'react-router-dom'
// import { Axios } from '../../Api/Axios'
// import { CAT, SingleCat, } from '../../Api/Api'
// import axios from 'axios'
import { CategoriesContext } from './../../context/CategoriesContext';
import PaginatedItems from '../../Components/pagination/Pagination';
import { Menu } from '../../context/MenuContext';
import { WindowSize } from '../../context/WindowContext';
const CategoriesPage = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize
  const { categories ,setCategories } = useContext(CategoriesContext);  // Use context
  const [page ,setPage]= useState(1)
  const [limit ,setLimit] = useState(5)
    const header = [
        {
            key:"id",
            Name:"id"
        },
        {
            key:"name",
            Name:"name"
        }
      ]
          const handleDelete =async (id)=>{
            const updatedCategories = categories.filter(categories => categories.id !== id);
            localStorage.setItem('categories', JSON.stringify(updatedCategories));
            setCategories(updatedCategories);
          }
          useEffect(()=>{
            const storedCategories = localStorage.getItem('categories')
            setCategories(JSON.parse(storedCategories))
            // localStorage.setItem('categories',  JSON.stringify(categories))
          },[])
  return (
    <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
    <div className='w-100 bg-white'>
    <div className='d-flex alaign-items-center justify-content-between'>
    <h1 className='mx-2'>categories  page</h1>
    <Link to={"/dashboard/AddCategory"} className='btn btn-primary h-50 my-2'>Add category</Link>
    </div>
   <div className='bg-white p-2 w-100'>
   <TableShow search="name" setLimit={setLimit} setPage={setPage} page={page} limit={limit} header={header} data={categories} delete={handleDelete}/>
   </div>
   </div>
   </div>
  )
}

export default CategoriesPage
