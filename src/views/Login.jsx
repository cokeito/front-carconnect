import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import InputForm from '../components/forms/InputForm'

export const Login = () => {

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="px-24 py-12 flex items-center justify-center">
            <img src="/assets/images/logo_color.svg" alt="" className="w-[55%]" />
          </div>
          <div className="mt-4 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-5 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-2xl text-indigo-900 font-display font-semibold lg:text-left xl:text-3xl xl:text-bold">
              Bienvenido
            </h2>
            <div className="mt-12">

              <form>
                <InputForm
                  label="Correo Electrónico"
                  placeholder="usuario@correo.com"
                  type="text"
                  id="login_email"
                />

                <InputForm
                  label="Password"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  id="login_form"
                />

                <div className="mt-24">
                  <button className=" bg-yellow-400 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-900
                                shadow-lg"
                    onClick={navigateToDashboard}
                  >
                    Ingresar
                  </button>
                </div>
              </form>

              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                No tienes cuenta ?
                <Link to="/register" className="ms-2 cursor-pointer text-indigo-600 hover:text-indigo-900">Registrarme</Link>
              </div>

            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
          <img src="/assets/images/login_bg2.jpg" alt="" className="object-cover h-full" />
        </div>
      </div>

    </>
  )
}
