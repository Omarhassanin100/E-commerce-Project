

import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { baseUrl, LOGIN } from '../../Api/Api'
import LodiangSubmit from '../../Components/loading/Loading'
import  { Cookies } from 'react-cookie'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const [form ,setForm] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate()
  const cookie = new Cookies()
  const [err , setErr] = useState("")
  const [loading , setLoading] = useState (false)
  const focusRef = useRef("")
  console.log(focusRef)
  useEffect(()=>{
    if (focusRef.current) {
      focusRef.current.focus();
    }} ,[])
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
       const res =await axios.post(`${baseUrl}/${LOGIN}` , form)
      setLoading(false)
      const token = res.data.token
      console.log(res)
      cookie.set('e-commerce' , token)
      navigate('/dashboard/users' , {replace:true})
  }catch(err){
    setLoading(false)
    setErr(" Wrong Email or Password ")
  }
}
  const handleChange = (e)=>{
    setForm({...form , [e.target.name]:e.target.value})
    console.log(form)
  }
      return(
  <div>

        {loading && <LodiangSubmit/>}

        <div className="container">
        <div className='row' style={{height:"100vh"}}>
        <Form onSubmit={handleSubmit} className='form'>
        <div className='custom-form'>
        <h1 className='head'>logain Now</h1>
        <Form.Group className="form-access" controlId="exampleForm.ControlInput0" >
        <Form.Control ref={focusRef} type="email" placeholder="Enter Your Email ..." value={form.email} onChange={handleChange} required  name="email" />
        <Form.Label>Email:</Form.Label>
      </Form.Group>
        <Form.Group className="form-access" controlId="exampleForm.ControlInput2">
        <Form.Control type="password" placeholder="Enter Your Password ..." value={form.password} onChange={handleChange} name="password" required minLength={6} />
        <Form.Label >password:</Form.Label>
      </Form.Group>
        <div className='form-access btn-parent'>
      <button className='btno btno-primary '>sign in</button>
      </div>
      {err !== "" && <span className="error">{err}</span>}
      </div>
        </Form>
        </div>
        </div>
     </div>
        
 
      )
      
    }
    
  


export default LoginPage
