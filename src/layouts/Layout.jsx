import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { WishlistDrawer } from '../components/WishlistDrawer'
import { Search } from '../components/Search'
import { AnimatePresence } from 'framer-motion'
import { checkToken } from '../api/CarApi'
import { UserContext } from '../contexts/user_provider'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


export const Layout = ({ children }) => {

  const { setUser } = useContext(UserContext)
  const [isSearch, setIsSearch] = useState(false)

  const navigate = useNavigate()

  const handleSearchBar = () => {
    console.log('search bar')
    setIsSearch((isSearch) => !isSearch)
  }


  useEffect(() => {
    checkToken(setUser, navigate, toast)
  })

  return (
    <>

      <WishlistDrawer />
      <div id="car_page" className="relative">
        <div className="sticky top-0 flex flex-col w-full z-50">
          <AnimatePresence>
            {isSearch &&
              <Search setIsSearch={setIsSearch} handleSearchBar={handleSearchBar} />
            }
          </AnimatePresence>
          <Navbar setIsSearch={setIsSearch} handleSearchBar={handleSearchBar} />
        </div>


        {children}
        <Footer />
      </div>

    </>
  )
}
