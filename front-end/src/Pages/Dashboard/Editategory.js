import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from '../../context/MenuContext';
import { WindowSize } from '../../context/WindowContext';
import { CategoriesContext } from '../../context/CategoriesContext';

const EditCategoryPage = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize
  const [form, setForm] = useState({
    id:'',
    name:''
  })
    const { categories, setCategories } = useContext(CategoriesContext);  
  const Navigate = useNavigate()
  const { id } = useParams();
  const handleSubmit = async(e)=> {
    e.preventDefault()
    const categoryIndex = categories.findIndex(category => category.id === id )
    console.log(categoryIndex)
    const updatedCategory = {...categories[categoryIndex] , ...form }
    const updatedcategories = [...categories ];
    console.log(updatedcategories)
    updatedcategories[categoryIndex] = updatedCategory;
    localStorage.setItem('categories', JSON.stringify(updatedcategories));
    setCategories(updatedcategories);
    Navigate("/dashboard/categories")
 }
const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
  console.log(form)
}
  
  return (
    <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
<Form onSubmit={handleSubmit} className='bg-white  w-100 p-3'>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput1">
        <Form.Label>id:</Form.Label>
        <Form.Control type="text"
         placeholder=" Enter Your Name ..."
         name="id"
         value={form.id}
         onChange={handleChange}
          />
      </Form.Group>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput1">
        <Form.Label>name:</Form.Label>
        <Form.Control type="text"
         placeholder=" Enter Your Name ..."
         name="name"
         value={form.name}
         onChange={handleChange}
          />
      </Form.Group>

      <button className='btn btn-primary'>Save</button>
      </Form>
      </div>
  )
}

export default EditCategoryPage
