import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'

const Website = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Website
