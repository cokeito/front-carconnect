import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/product_provider.jsx'
import UserProvider from './contexts/user_provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </UserProvider>
)
