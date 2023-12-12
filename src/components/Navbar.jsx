import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-indigo-950  fixed top-0 z-50 shadow-lg">
      <div className="flex-1 p-3">
        <Link to="/dashboard">
          <img src="/assets/images/logo_color.svg" alt="" className="w-[100px]" />
        </Link>
      </div>
      <div className="flex-none gap-2">

        <div className="form-control">
          <input type="text" placeholder="Busca tu vehiculo" className="input input-bordered w-24 md:w-auto" />
        </div>

        <div className="form-control">
          <Link to="/" className="btn bg-yellow-400 border-none">Publicar Auto</Link>
        </div>

        <div className="form-control">
          <Link to="/dashboard" className="btn bg-yellow-400 border-none">MarketPlace</Link>
        </div>
        <div className="dropdown dropdown-end">

          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Perfil
              </a>
            </li>
            <li><a>Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar