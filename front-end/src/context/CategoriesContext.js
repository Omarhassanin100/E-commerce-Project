// CategoriesContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const CategoriesContext = createContext();

// Create a provider component
export const CategoriesProvider = ({ children }) => {
    const [categories  , setCategories] = useState([
        {id:"1" , name:"electronics"},
        { id:"2",name:"jewelery"},
        { id:"3",name:"men's clothing"},
        { id:"4" ,name: "women's clothing"}
        ])
  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
