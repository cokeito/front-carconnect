import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Register } from './views/Register'
import { Login } from './views/Login'
import { Dashboard } from './views/Dashboard'
import { Product } from './views/Product'

import './App.css'
import ProductContext from './contexts/product_provider'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products/' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
