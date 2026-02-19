import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import Orders from './Pages/Orders'
import './index.css'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gradient-to-tr
   from-[#c4a462] via-[#fcedbb] to-[#faae16] min-h-screen'>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>




    </div>
  )
}

export default App