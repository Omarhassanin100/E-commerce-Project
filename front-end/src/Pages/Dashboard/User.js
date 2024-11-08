import React, {  useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Axios } from '../../Api/Axios'
import { USERS } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'
import LodiangSubmit from '../../Components/loading/Loading'
import { Menu } from '../../context/MenuContext'
import { WindowSize } from '../../context/WindowContext'
const UserPage = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize
  const id = Number(window.location.pathname.replace("/dashboard/users/",""))
  const [name, setName] = useState('')
  const [email ,setEmail] = useState('')
  const [disable , setDisable] = useState(true)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    Axios.get(`/${USERS}/${id}`).then(res=>{
     setName(res.data.data.first_name +" " + res.data.data.last_name)
     setEmail(res.data.data.email)
    }).then(()=> setDisable(false))
  },[])
  const handleSubmit =  async (e)=> {
    setLoading(true)
    e.preventDefault()
    try{
    const res =  await Axios.put(`/${USERS}/${id}`, {name:name , email:email})
    console.log(res)
setName(res.data.name)
setEmail(res.data.email)
    navigate("/dashboard/users")
    setLoading(false)
  }catch(err){
    setLoading(false)
    console.log(err)
  }
  }
  return (
    <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
<Form onSubmit={handleSubmit} className='bg-white  w-100 p-3'>
{loading && <LodiangSubmit/>}
      <Form.Group  className='mb-3' controlId="exampleForm.ControlInput1">
        <Form.Label>User Name:</Form.Label>
        <Form.Control type="text"
         placeholder=" Enter Your Name ..."
         value={name}
         onChange={(e)=>setName(e.target.value)}
          />
      </Form.Group>
      <Form.Group className='mb-3'controlId="exampleForm.ControlInput2">
      <Form.Label >E-mail:</Form.Label>
        <Form.Control type="email"
         placeholder=" Enter Your E-mail ..." 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         />
      </Form.Group>
      <button disabled={disable} className='btn btn-primary'>Save</button>
    </Form>
    </div>
      )
}

export default UserPage