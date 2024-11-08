import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { baseUrl , REGISTER } from '../../Api/Api'
import LodiangSubmit from '../../Components/loading/Loading';
import { Cookies } from 'react-cookie';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [form , setForm] = useState({
    name:'',
    email:'',
    password:'',

  })
  const navigate = useNavigate()
  const cookie = new Cookies()
  const [err ,setErr]=useState("")
  const [loading , setLoading] =useState(false)
  const focusRef = useRef("")
  console.log(focusRef)
  useEffect(()=>{
    if (focusRef.current) {
      focusRef.current.focus();
    }} ,[])

  const handleChange =(e)=>{
   setForm({...form , [e.target.name] : e.target.value})
  } 
  const handleSubmit =async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
    const res = await axios.post(`${baseUrl}/${REGISTER}`, form) 
   setLoading(false)
   const token = res.data.token
   cookie.set('e-commerce' , token)
   navigate('/dashboard/users' , {replace:true})
  }catch(err){
      setErr("this email already taken")
      setLoading(false)
    
    }
  }
  console.log (form)
  return (
    <div>
    { loading && <LodiangSubmit/> }
    <div className="container">
    <div className='row' style={{height:"100vh"}}>
    <Form onSubmit={handleSubmit} className='form'>
    <div className='custom-form'>
    <h1 className='head'>Register Now</h1>
    <Form.Group className="form-access" controlId="exampleForm.ControlInput0" >
        <Form.Control ref={focusRef} type="text" placeholder="Enter Your UserName ..." value={form.name} onChange={handleChange} required  name="name"/>
        <Form.Label>UserName:</Form.Label>
      </Form.Group>
    <Form.Group className="form-access" controlId="exampleForm.ControlInput1" >
        <Form.Control type="email" placeholder="Enter Your Email ..." value={form.email} onChange={handleChange} required  name="email"/>
        <Form.Label>Email:</Form.Label>
      </Form.Group>
        <Form.Group className="form-access" controlId="exampleForm.ControlInput2">
        <Form.Control type="password" placeholder="Enter Your Password" value={form.password} onChange={handleChange} name="password" required minLength={6} />
        <Form.Label >password:</Form.Label>
      </Form.Group>
    <div className='form-access btn-parent'>
      <button className='btno btno-primary '>Register</button>
    </div>
    {err !== "" && <span className="error">{err}</span>}
    </div>
    </Form>
    </div>
    </div>
    </div>

  )
}

export default Register
