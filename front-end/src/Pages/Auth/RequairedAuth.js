import React, { useEffect, useState } from 'react'
import { Cookies } from 'react-cookie'
import { Outlet, useNavigate } from 'react-router-dom'
import { USER } from '../../Api/Api'
import LodiangSubmit from '../../Components/loading/Loading'
import { Axios } from '../../Api/Axios'

const RequairedAuth = () => {
    const [ user , setUser] = useState("")
    const Navigate = useNavigate()
    const cookie = new Cookies()
    const token = cookie.get ("e-commerce")
    useEffect( ()=>{
       Axios.get(`${USER}`).then(data => setUser(data.data)).catch(()=>Navigate('/log' ,{replace:true}))
    } , [])
    
    return token===`QpwL5tke4Pnpja7X4`    ? user === "" ? <LodiangSubmit/> :  <Outlet/> :Navigate('/log' ,{replace:true});
} 
export default RequairedAuth
