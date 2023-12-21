import React, { useContext, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { InputForm } from '../components/forms/InputForm'
import { useForm } from 'react-hook-form';
import { CarApi } from '../api/CarApi'
import toast, { Toaster } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

import { UserContext } from '../contexts/user_provider'
import { RequiredValidation } from '../components/forms/RequiredValidation';


export const Login = () => {

  const navigate = useNavigate();
  let location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const { setUser } = useContext(UserContext)

  useEffect(() => {
    if (location.state) {
      toast.success(location.state.message)
    }
  }, [location.state])

  const onSubmit = async (data) => {

    try {
      const res = await CarApi.post('/auth/login', data)

      if (res.status == 200) {
        const token = res.data.token
        localStorage.setItem('token', token)
        const logged_user = jwtDecode(token)
        setUser(logged_user)
        toast.success('Usuario logueado correctamente')
        navigate('/dashboard', { state: { message: res.data.message } })
      }
    } catch (error) {
      toast.error('Error al iniciar sesión')
    }

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

              <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                  label="Correo Electrónico"
                  placeholder="usuario@correo.com"
                  type="text"
                  id="login_email"
                  fontSize='text-sm'
                  register={register}
                  name="email"
                />
                {errors.email && <RequiredValidation />}

                <InputForm
                  label="Password"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  id="login_form"
                  fontSize='text-sm'
                  register={register}
                  name="password"
                />
                {errors.password && <RequiredValidation />}

                <div className="mt-24">
                  <button className="bg-yellow-400 text-gray-100 p-4 w-full rounded-full tracking-wide
    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-900
    shadow-lg"
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
          <img src="/assets/images/login_bg2.webp" alt="" className="object-cover h-full" />
        </div>
      </div>
    </>



  )
}
