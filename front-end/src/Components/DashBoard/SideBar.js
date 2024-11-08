import React, { useContext } from 'react'
import "./Bars.css"
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAdd, faBraille,  faList,  faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../context/MenuContext';
import { WindowSize } from '../../context/WindowContext';
const SideBar = () => {
  
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const windowsize = Windowsize.windowSize 
  console.log(windowsize)
  const isOpen = menu.isOpen
  console.log(isOpen)
  return (
        <div className='pt-3 side-bar' style={{
          left : windowsize < "768" ? (isOpen ? 0 : "-100%") : 0 ,
          transition: windowsize < "768" ? "0.3s" : " 0.7s",
          width: isOpen ?  (windowsize < "768" ? "50px" : "220px") :  "fit-content" ,
          position: windowsize <"768" ? "fixed" : "sticky" 
          }}>
    <NavLink to={"users"} className="d-flex align-items-center gap-3 side-bar-link">
    <FontAwesomeIcon icon={faUsers} />
    <p className='m-0' style={{display: isOpen ? (windowsize < "768" ? "none" : "block"): 'none' ,}}>Users</p>
    </NavLink>
    <NavLink to={"adduser"} className="d-flex align-items-center gap-3 side-bar-link">
    <FontAwesomeIcon icon={faUserPlus} />
    <p className='m-0' style={{display: isOpen ? (windowsize < "768" ? "none" : "block"): 'none' ,}}>Add User</p>
    </NavLink>
    <NavLink to={"categories"} className="d-flex align-items-center gap-3 side-bar-link">
    <FontAwesomeIcon icon={faList} />
    <p className='m-0' style={{display: isOpen ? (windowsize < "768" ? "none" : "block"): 'none' ,}}>categories</p>
    </NavLink>
    <NavLink to={"AddCategory"} className="d-flex align-items-center gap-3 side-bar-link">
    <FontAwesomeIcon icon={faAdd} />
    <p className='m-0' style={{display: isOpen ? (windowsize < "768" ? "none" : "block"): 'none' , fontSize:"20px"}}>Add Category</p>
    </NavLink>
    <NavLink to={"products"} className="d-flex align-items-center gap-3 side-bar-link">
    <FontAwesomeIcon icon={faBraille} />
        <p className='m-0' style={{display: isOpen ? (windowsize < "768" ? "none" : "block"): 'none' , fontSize:"20px"}}>products</p>
    </NavLink>
    <NavLink to={"Addproducts"} className="d-flex align-items-center gap-3 side-bar-link">
    <FontAwesomeIcon icon={faAdd} />
    <p className='m-0' style={{display: isOpen ? (windowsize < "768" ? "none" : "block"): 'none' , fontSize:"20px"}}>Add products</p>
    </NavLink>


    </div>
  )
}     
export default SideBar
