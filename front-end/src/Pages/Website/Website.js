import React from 'react'
import NavBar from './NavBar'
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
