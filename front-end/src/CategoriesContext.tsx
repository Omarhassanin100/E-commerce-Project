// CategoriesContext.js
import React, { createContext, useState, useEffect } from "react";

interface Cat {
    id:number |string;
    name:string
    
}
interface CategoriesContextType {
    categories: Cat[]; // Example type: array of category names
    setCategories: React.Dispatch<React.SetStateAction<Cat[]>>; // Function to update categories
  }// Create the context
export const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

// Create a provider component
interface ComponentProps {
    children: React.ReactNode; 
    
}

export const CategoriesProvider:React.FC<ComponentProps> = ({ children}) => {
    const [categories  , setCategories] = useState<Cat[]>([
        {id:"1" , name:"electronics"},
        { id:"2",name:"jewelery"},
        { id:"3",name:"men's clothing"},
        { id:"4" ,name: "women's clothing"}
        ])
  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories) as Cat[]);
    }
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
