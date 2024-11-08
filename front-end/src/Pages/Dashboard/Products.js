import React, { useContext, useEffect, useState } from 'react'
import TableShow from '../../Components/Table';
import { Link } from 'react-router-dom';
// import { Axios } from '../../Api/Axios';
import LodiangSubmit from '../../Components/loading/Loading';
import { productsContext } from '../../context/ProductsContext';
import PaginatedItems from '../../Components/pagination/Pagination';
import { Menu } from '../../context/MenuContext';
import { WindowSize } from '../../context/WindowContext';
import { Axios } from '../../Api/Axios';
const ProductsPage = () => {
    const  menu = useContext(Menu)
    const Windowsize = useContext(WindowSize)
    const isOpen = menu.isOpen
    const windowsize = Windowsize.windowSize
    const [page ,setPage]= useState(1)
    const [limit ,setLimit] = useState(5)  
    const {products ,setProducts} =useContext(productsContext)
    const handleDelete =  async (id)=>{
             try{
                // const res=  await Axios.delete('https://fakestoreapi.com/products/6')
                // console.log(res)
                const updatedProducts = products.filter(product => product.id !== id);
                setProducts(updatedProducts);
                localStorage.setItem('products', JSON.stringify(updatedProducts));
             }catch(err){
                 console.log(err)
             }
           }
     
const header = [

    {
        key:"id",
        Name:"id"
    },
    {
        
        key:"title",
        Name:"title"
    },
    {
        key:"price",
        Name:"price"
    },
    {
        key:"description",
        Name:"description"
    },

    {
        key:"category",
        Name:"category"
    },

    {
        key:"image",
        Name:"image"

    },
]
    useEffect( ()=>{
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    //     console.log(products)
    //     Axios.get('https://fakestoreapi.com/products?limit=20')
    //     .then(res=> {
    //     console.log(res.data)
    //     setProducts(res.data)
    //     console.log(products)
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
    
      
        return (
            <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
    <div className='w-100 bg-white'>
    <div className='d-flex alaign-items-center justify-content-between'>
    <h1 className='mx-2'>ProductsPage</h1>
    <Link to={"/dashboard/Addproducts"} className='btn btn-primary h-50 my-2'>Add product</Link>
    </div>
   <div className='bg-white p-2 w-100'>
  {
    products!== "" ? 
  <TableShow search="title" setLimit={setLimit} setPage={setPage} page={page} limit={limit} header={header} data={products} delete={handleDelete} key={products}/> 
  :<LodiangSubmit/>
  }
   </div>
   </div>
   </div>
  )
}

export default ProductsPage
