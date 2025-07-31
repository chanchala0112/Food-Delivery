import React from 'react'
import Navbar from './componenets/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'  
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'  

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      
    </div>
  )
}

export default App
