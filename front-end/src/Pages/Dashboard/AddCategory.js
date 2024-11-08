import React, {  useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
// import { Axios } from '../../Api/Axios'
// import { CAT } from '../../Api/Api'
import {  useNavigate } from 'react-router-dom'
import { CategoriesContext } from '../../context/CategoriesContext'
import { Menu } from '../../context/MenuContext'
import { WindowSize } from '../../context/WindowContext'

const AddCategory = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize
  const [form, setForm]= useState("")
  const Navigate = useNavigate()
  const { categories, setCategories } = useContext(CategoriesContext);  
  const handleSubmit = async(e)=> {
    e.preventDefault()
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || []
    const updatedCategories  = [...storedCategories , form]
        setCategories(updatedCategories);
    localStorage.setItem('categories' , JSON.stringify(updatedCategories))
    Navigate("/dashboard/categories")
 }
  return ( 
    <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
<Form onSubmit={handleSubmit} className='bg-white  w-100 p-3'>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text"
         placeholder=" Enter Your Name ..."
         name='name'
         value={form.name}
         onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})}
          />
      </Form.Group>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput2">
        <Form.Label>id:</Form.Label>
        <Form.Control type="text"
         placeholder=" Type Your Category Id ..."
         name='id'
         value={form.id}
         onChange={(e)=>setForm({...form,[e.target.name]:e.target.value})
        }
          />
      </Form.Group>

      <button className='btn btn-primary'>Save</button>
      </Form>
      </div>
  )
}

export default AddCategory
