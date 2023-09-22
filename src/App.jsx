import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component /Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Products from '../Pages/Products/Products'
import ProductDet from '../Pages/ProductsDetails/ProductDetails'
import About from '../Pages/About /About'
import Home from '../Pages/Home/Home'



function App() {
const NavbarElem=[{name:"Home",url:"/"},{name:"Products",url:"/Products"},{name:"About us",url:"/About"}]
  return (
    <>
    <Navbar NavbarElem={NavbarElem} Logo={"/Logo.png"}/>
    <Routes>
      <Route element={<About/>} path='/About'/>
      <Route element={<Products/>} path='/Products'/>
      <Route element={<ProductDet/>} path='/Products/:id'/>
      <Route element={<Home/>} path='/'/>
    </Routes>
  </>)
}

export default App
