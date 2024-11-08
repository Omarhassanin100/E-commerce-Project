import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {UsersContext} from '../../context/UsersContext'
import { Menu } from '../../context/MenuContext'
import { WindowSize } from '../../context/WindowContext'
// import { Axios } from '../../Api/Axios'
// import { USERS } from './../../Api/Api';

const AddUserPage = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize
  const [form , setForm] = useState({
    id: '',
    email: '',
    first_name: ''
  })
  const { users ,setUsers } = useContext(UsersContext);  // Use context

  const Navigate = useNavigate()

  const handelChange= (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

    const handleSubmit =  async (e)=>{ 
      e.preventDefault()
      const storedUsers = JSON.parse(localStorage.getItem('users')) || []
      const updatedUsers =[ ...storedUsers , form]
      setUsers(updatedUsers)
      localStorage.setItem('users' , JSON.stringify(updatedUsers))
      Navigate("/dashboard/users")
    }
  return (
    <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
<Form onSubmit={handleSubmit} className='bg-white  w-100 p-3'>
<Form.Group  className='mb-3' controlId="exampleForm.ControlInput1">
        <Form.Label>id:</Form.Label>
        <Form.Control type="text"
         placeholder=" Type Your Id ..."
         name='id'
         value={form.id}
         onChange={handelChange}
          />
      </Form.Group>
      <Form.Group className='mb-3'controlId="exampleForm.ControlInput3">
      <Form.Label >E-mail:</Form.Label>
        <Form.Control type="email"
         placeholder=" Enter Your E-mail ..."
         name='email'
         value={form.email}
         onChange={handelChange}
         />
      </Form.Group>
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput2">
        <Form.Label>User Name:</Form.Label>
        <Form.Control type="text"
         placeholder=" Enter Your Name ..."
         name='first_name'
         value={form.first_name}
         onChange={handelChange}
          />
      </Form.Group>
      <Form.Group className='mb-3'controlId="exampleForm.ControlInput4">
      <Form.Label >Password:</Form.Label>
        <Form.Control type="password"
         placeholder=" Enter Your Password ..." 
         name='password'
         value={form.password}
         onChange={handelChange}
         />
      </Form.Group>

      
      <button className='btn btn-primary'>Save</button>
    </Form> 
    </div> 
    )
}

export default AddUserPage
