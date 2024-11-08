import React,{  createContext, useEffect, useState } from "react";

export const  UsersContext = createContext()

 export const UsersProvider = ({children}) => {
    const [users ,setUsers] = useState([])

    useEffect ( ()=>{
        const storedUsers =JSON.parse(localStorage.getItem('users') )|| []
        if (storedUsers) {
            setUsers(storedUsers);

        //          Axios.get(`/${USERS}`).then(res =>{
        //     setUsers(res.data.data)
        //    localStorage.setItem('users', JSON.stringify(res.data.data))
        //   } 
        //   ).catch(err=>console.log(err))
 } } , [] )    
  
  return (
    <div>
    <UsersContext.Provider value={{users , setUsers}}>
        {children}
    </UsersContext.Provider>
      
    </div>
  )
}

