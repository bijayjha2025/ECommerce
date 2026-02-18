import React from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
      </Routes>




    </div>
  )
}

export default App