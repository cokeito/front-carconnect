import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAvatar } from './UserAvatar'
import { UserContext } from '../contexts/user_provider'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const Navbar = ({ handleSearchBar }) => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
    toast.success('Sesión cerrada')
  }

  return (
    <div className="navbar bg-indigo-950 z-50 shadow-xl">
      <div className="flex-1 p-3">
        <Link to="/dashboard">
          <img src="/assets/images/logo_color.svg" alt="" className="w-[100px]" />
        </Link>
      </div>
      <div className="flex-none gap-2">

        <motion.div className="form-control cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-search me-4"
            viewBox="0 0 16 16"
            onClick={handleSearchBar}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </motion.div>

        <div className="form-control">
          <Link to="/publish" className="btn btn-sm md:btn-md lg:btn-md bg-yellow-400 border-none">Publicar Auto</Link>
        </div>

        <div className="form-control">
          <Link to="/dashboard" className="btn btn-sm md:btn-md lg:btn-md bg-yellow-400 border-none">MarketPlace</Link>
        </div>

        <label htmlFor="my-drawer-4" className="drawer-button btn btn-sm md:btn-md lg:btn-md btn-primary">Favoritos</label>

        <div className="dropdown dropdown-end">

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <UserAvatar user={user} />
            </div>
          </div>

          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/profile" className="">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                </span>Mi Perfil
              </Link>
            </li>
            <li><a onClick={logout}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02Z" />
                <path d="M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732z" />
              </svg>Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar