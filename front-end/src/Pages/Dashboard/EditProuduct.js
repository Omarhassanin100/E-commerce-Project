import React, { useContext, useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
// import { Axios } from '../../Api/Axios'
import {faUpload} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { productsContext } from '../../context/ProductsContext';
import { Menu } from '../../context/MenuContext';
import { WindowSize } from '../../context/WindowContext';

const AddProducts = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize
  const [categories  , setCategories] = useState(  [
    {id:"1" , name:"electronics"},
    { id:"2",name:"jewelery"},
    { id:"3",name:"men's clothing"},
    { id:"4" ,name: "women's clothing"}
    ])
    const {products ,setProducts} =useContext(productsContext)

  const [form ,setForm ] =useState( 
    { id: '',
    title: '',
    price: '',
    description: '',
    category: 'select category',
   })
  const [image , setImage  ]= useState([])
  const Navigate = useNavigate()
  const handleChange=(e)=> {
    setForm({...form,[e.target.name]:e.target.value})
    setSent(true)
  }
   const handleImageChange = (e)=> {
    if (image) {
      setImage((prev)=>[...prev,...e.target.files])
      return
    }
    console.log(e.target.files)
    console.log([...image, ...e.target.files]) 
    }  
   useEffect(()=>{
    console.log(image)
   },[image])
   const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  useEffect(()=>{
  const storedCategories = localStorage.getItem('categories')
  setCategories(JSON.parse(storedCategories))
  }, [])
  const categoriesShow = categories.map((item , index)=> <option key={index}>{item.name}</option>)
  const imagesShow = image?.map((img , index) => 
    <div key={index} className='d-flex align-items-start justify-content-start gap-2 border w-100'>
      <img style={{width:"80px" , height:"80px"}} src={URL.createObjectURL(img)} alt='mmm'/>
      <p>{img.name}</p>
      <p>{(img.size / (1024 )).toFixed(2)} mb</p>
    </div>
  )
  const [sent , setSent] = useState(false)
  const openImage = useRef(null)
  const handleClick = ()=>{
  openImage.current.click()
  }
  const { id } = useParams()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const data = new FormData()
    data.append("id", form.id)
    data.append("title", form.title)
  data.append("price", form.price)
  data.append("description", form.description)
  data.append("category", form.category)
  for (let i = 0 ; i < image.length ; i++){
      data.append("image[]" , image[i])
    }
    const base64Images = await Promise.all(
 image.map((img) => fileToBase64(img))
);
    const storedProducts = JSON.parse(localStorage.getItem('products')) || []
    let updatedProducts;

    if (id) {
      // Editing an existing product
      updatedProducts = storedProducts.map((prod) =>
        prod.id === id ? { ...form, image: base64Images } : prod
      );
      
    } else {
      // Adding a new product
      updatedProducts = [...storedProducts, { ...form, image: base64Images }];
    }    setProducts(updatedProducts)
      localStorage.setItem('products', JSON.stringify(updatedProducts));
Navigate("/dashboard/products" , {replace:true})
}
//  axios.post('https://fakestoreapi.com/products' , data)
//  .then(res=>console.log(res.data))
//  .catch(err=>console.log(err))
//   }
  return (
    <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
<Form  className='bg-white  w-100 p-3' onSubmit={handleSubmit}>

      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput">
        <Form.Label>Category:</Form.Label>
        <Form.Select type="text"
         placeholder=" select your category ..."
         value={form.category}
         onChange={handleChange}
         name="category">
         <option disabled> select category </option>
         {categoriesShow}
         </Form.Select>
      </Form.Group>
      <Form.Group  className='mb-3' controlId="title">
        <Form.Label>id:</Form.Label>
        <Form.Control type="text"
          placeholder=" Enter Your id ..."
          value={form.id}
          onChange={handleChange}
          name="id"
          disabled={!sent}
          />
      </Form.Group>

      <Form.Group  className='mb-3' controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text"
          placeholder=" Enter Your title ..."
          value={form.title}
          onChange={handleChange}
          name="title"
          disabled={!sent}
          />
      </Form.Group>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput3">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="text"
        placeholder=" type the price  ..."
        value={form.price}
        onChange={handleChange}
        name="price"
        disabled={!sent}

         />
      </Form.Group>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput4">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text"
         placeholder=" Enter Your description ..."
         value={form.description}
         onChange={handleChange}
         name="description"
        disabled={!sent}

         />
      </Form.Group>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput5">
        <Form.Label>Image:</Form.Label>
        <Form.Control type="file"
         placeholder=" upload your image  ..."
        multiple
        hidden
        ref={openImage}
         onChange={handleImageChange}
        disabled={!sent}
          />
      </Form.Group>
        <div  onClick={handleClick} className='d-flex flex-column gap-2 justify-content-center
      py-3 align-items-center rounded '
       style={{border: !sent ?  "2px dashed gray" : "2px dashed #038edc"}}>
    <FontAwesomeIcon size='5x' icon={faUpload} style={{  color: !sent ?  "gray": "#038edc"}} />
    <p style={{color: !sent ?  "gray": "#038edc",margin:"0",fontWeight:"bold" }}>upload images</p>
      </div>
      <div className='d-flex align-items-start  flex-column gap-2 m-2 '>{imagesShow}</div>
      <button className='btn btn-primary'>Save</button>
      </Form>
      </div>
  )
 }


export default AddProducts
