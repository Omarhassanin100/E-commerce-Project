import React from 'react'
import TopBar from '../../Components/DashBoard/TopBar'
import SideBar from '../../Components/DashBoard/SideBar'
import { Outlet } from 'react-router-dom'
import './dashboard.css'
const DashBoard = () => {
  return (
    <div className='position-relative dashboard d-flex gap-1'>
      <TopBar/>
      <div style={{marginTop:"0"}} className='d-flex gap-2 w-100'>
      <SideBar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default DashBoard
