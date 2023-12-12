import React from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/forms/InputForm'

export const Register = () => {
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="px-24 py-6 flex items-center justify-center">
            <img src="/assets/images/logo_color.svg" alt="" className="w-[55%]" />
          </div>
          <div className="mt-4 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-5 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-xl text-indigo-900 font-display font-semibold lg:text-left xl:text-2xl xl:text-bold">
              Registrate!
            </h2>
            <div className="mt-12">

              <form>

                <InputForm
                  label="Nombre"
                  placeholder="John Smith"
                  type="text"
                  id="login_name"
                  fontSize='text-sm'
                />

                <InputForm
                  label="Correo Electrónico"
                  placeholder="usuario@correo.com"
                  type="text"
                  id="login_email"
                  fontSize='text-sm'
                />

                <InputForm
                  label="Password"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  id="login_form"
                  fontSize="text-sm"
                />

                <InputForm
                  label="Repetir Contraseña"
                  placeholder="Repite tu contraseña"
                  type="password"
                  id="login_form_confirm"
                  fontSize="text-sm"
                />

                <InputForm
                  label="Teléfono"
                  placeholder="+56 9 1234 5678"
                  type="phone"
                  id="login_phone"
                  fontSize='text-sm'
                />

                <div className="mt-24">
                  <button className=" bg-yellow-400 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-900
                                shadow-lg">
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

