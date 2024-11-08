import React, {  useContext, useEffect, useState } from 'react'
// import { USERS } from '../../Api/Api'
// import {Axios} from '../../Api/Axios'
import TableShow from '../../Components/Table'
import {  Link } from 'react-router-dom'
import {UsersContext} from '../../context/UsersContext'
import '../../App.css'
import { Menu } from '../../context/MenuContext'
import { WindowSize } from '../../context/WindowContext'
const USersPage = () => {
  const  menu = useContext(Menu)
  const Windowsize = useContext(WindowSize)
  const isOpen = menu.isOpen
  const windowsize = Windowsize.windowSize

  const { users ,setUsers } = useContext(UsersContext);  // Use context
  const [page ,setPage]= useState(1)
  const [limit ,setLimit] = useState(5)
  const header = [
      {
        key:"id",
        Name:"id"
      },
      {
        key:"email",
        Name:"Email"
      },
      {
        key:"first_name" , 
        Name:"UserName"
      }
      
    ]
    useEffect ( ()=>{
      const storedUsers = JSON.parse(localStorage.getItem('users') ) || []
      setUsers(storedUsers)
        //  Axios.get(`/${USERS}`).then(res =>{
        //   setUsers(res.data.data)
        //  localStorage.setItem('users', JSON.stringify(res.data.data))
        // } 
        // ).catch(err=>console.log(err))
        } , [] )    
        const handelDelete  = (id)=>{
          const updatedusers = users.filter(users => users.id !== id);
          setUsers(updatedusers);
          localStorage.setItem('users', JSON.stringify(updatedusers));
        }    
   return (
     <div style={{marginTop:"75px"}} className= {isOpen?' bg-white page-parent p-0 ' : 'bg-white page-parent-isOpen p-0 '}>
    <div className= 'd-flex alaign-items-center justify-content-between'>
    <h1 className='mx-2'>Users  page</h1>
    <Link to={"/dashboard/adduser"} className='btn btn-primary h-50 my-2'>Add User</Link>
    </div>
    <div className='bg-white p-2 w-100'>
    <TableShow search="email" setLimit={setLimit} setPage={setPage } limit={limit} page={page} header={header} data={users} delete={handelDelete}/>
    </div>
    </div>
  )
}

export default USersPage
