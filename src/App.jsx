import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Register } from './views/Register'
import { Login } from './views/Login'
import { Dashboard } from './views/Dashboard'
import { Product } from './views/Product'
import { Profile } from './views/Profile'

import './App.css'

import ScrollToTop from './components/ScrollToTop'
import { ProductPublish } from './views/ProductPublish'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-sans">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/' element={<Dashboard />} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/publish/' element={<ProductPublish />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
