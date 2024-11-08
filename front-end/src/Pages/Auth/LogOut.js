import React from 'react'
import {  LOGOUT } from '../../Api/Api'
import  {Cookies}  from 'react-cookie'
import { useNavigate } from 'react-router-dom';
import { Axios } from '../../Api/Axios';

const LogOut = () => {
    const cookie = new Cookies()
    const Navigate = useNavigate()
    const handleLogOut = async ()=> {
        try{
             await Axios.get(`/${LOGOUT}`)
            cookie.remove("e-commerce")
            Navigate('/log' ,{replace:true})
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
    <button onClick={handleLogOut}>LOGOUT</button>
    </div>
  )
}

export default LogOut
