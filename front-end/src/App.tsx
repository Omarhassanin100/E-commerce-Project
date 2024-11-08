import './App.css';
import { Route, Routes} from 'react-router-dom'
// import LoginPage from './Pages/Auth/LoginPage';
// import Register from './Pages/Auth/Register';
// import USersPage from './Pages/Dashboard/Users';
// import DashBoard from './Pages/Dashboard/DashBoard';
// import RequairedAuth from './Pages/Auth/RequairedAuth';
// import UserPage from './Pages/Dashboard/User';
// import AddUserPage from './Pages/Dashboard/AddUser';
// import CategoriesPage from './Pages/Dashboard/Categories';
// import AddCategory from './Pages/Dashboard/AddCategory';
// import EditCategoryPage from './Pages/Dashboard/Editategory';
// import ProductsPage from './Pages/Dashboard/Products'
// import AddProducts from './Pages/Dashboard/AddProducts';
// import EditProuduct from './Pages/Dashboard/EditProuduct';
// import { UsersProvider } from './context/UsersContext';
import HomePage from './HomePage';
import { CategoriesProvider } from './CategoriesContext';
import ProductsProvider from './ProductContext';
import CategoriesShow from'./CategoriesShow';
import Website from './Website';
import ProductPageById from './ProductPageById';
import CartPage from './Cartpage';
import React from 'react';
function App() {
  return (
    <div className="App">
    <ProductsProvider>
    {/* <UsersProvider> */}
    <CategoriesProvider>
      <Routes>
      <Route element={<Website/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/showCategories' element={<CategoriesShow id={''} name={''}/>}/>
        <Route path='/product/:id' element={<ProductPageById/>}/>
        <Route path='/cart' element={<CartPage/>} />
        </Route>
        {/* <Route path='/log' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} /> */}
        {/* <Route element={<RequairedAuth/>}>
        <Route path='/dashboard' element={<DashBoard/>}>
          <Route path='users' element={<USersPage/>}/>
          <Route path='adduser' element={<AddUserPage/>}/>
          <Route path='users/:id' element={<UserPage/>}/>
          <Route path='categories' element={<CategoriesPage/>}/>
          <Route path='AddCategory' element={<AddCategory/>}/>
          <Route path='categories/:id' element={<EditCategoryPage/>}/>
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='Addproducts' element={<AddProducts/>}/>
          <Route path='products/:id' element={<EditProuduct/>}/>
        </Route>
        </Route> */}
      </Routes>
      </CategoriesProvider>
      {/* </UsersProvider> */}
      </ProductsProvider>
    </div>
  );
}

export default App;
