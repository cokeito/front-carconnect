import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Register } from './views/Register'
import { Login } from './views/Login'
import { Dashboard } from './views/Dashboard'
import { Product } from './views/Product'
import { Profile } from './views/Profile'
import { PrivateRoute } from './routes/PrivateRoute'

import './App.css'

import ScrollToTop from './components/ScrollToTop'
import { ProductPublish } from './views/ProductPublish'
import { Toaster } from 'react-hot-toast'

function App() {

  return (

    <BrowserRouter>
      <Toaster />
      <div className="font-sans">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<PrivateRoute> <Dashboard /> </PrivateRoute>}
          />
          <Route path='/products/:id' element={<PrivateRoute><Product /></PrivateRoute>} />
          <Route path='/products/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/profile/' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/publish/' element={<PrivateRoute><ProductPublish /></PrivateRoute>} />
        </Routes>
      </div>
      <ScrollToTop />

    </BrowserRouter>

  )
}

export default App
