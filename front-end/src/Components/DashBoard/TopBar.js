import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Menu } from '../../context/MenuContext'
import { Dropdown } from 'react-bootstrap'
import { Axios } from '../../Api/Axios'
import { LOGOUT, USER } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import { WindowSize } from '../../context/WindowContext'

const TopBar = () => {
  const  menu = useContext(Menu)
  const setIsOpen = menu.setIsOpen
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize

  const [name , setName] = useState("")
  const Navigate= useNavigate()
  const cookie = new Cookies()
  const handleLogOut = async ()=> {
    try{
         await Axios.get(`/${LOGOUT}`)
        cookie.remove("e-commerce")
        Navigate('/log' ,{replace:true})
    }catch(err){
        console.log(err)
    }
}
useEffect( ()=>{

Axios.get(`${USER}`).then(res=>setName(res.data.data.first_name +" "+ res.data.data.last_name)).catch(err=> console.log(err))
  }, []) 
  console.log(name)
  const toggleOpen = ()=>{
    setIsOpen(prev => !prev);
  }
  return (
   
    <div className={ windowsize > "768" ? ( isOpen ? "top-bar" : "top-bar-isOpen" ):( isOpen ? "top-bar-isOpen" : "top-bar-isClose" )}>
    <div className='d-flex align-items-center  justify-content-between h-100'>
    <div className=' d-flex align-items-center gap-4 '>
       <h2>E-Commerce</h2>
       <FontAwesomeIcon onClick={toggleOpen}  cursor={"pointer"} icon={faBars} style={{fontSize:"25px"}}/>
       </div>
       <div className=''>
       <Dropdown>
      <Dropdown.Toggle style={{fontWeight:"bold"}} variant="primary" id="dropdown-basic">
      {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='text-center' onClick={handleLogOut}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

       </div>
       </div>
    </div>
  )
}

export default TopBar
