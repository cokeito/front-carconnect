import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputForm } from '../components/forms/InputForm'
import { useForm } from 'react-hook-form'
import { RequiredValidation } from '../components/forms/RequiredValidation'
import { CarApi } from '../api/CarApi'
import toast, { Toaster } from 'react-hot-toast'

export const Register = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await CarApi.post('/auth/register', data)
      switch (res.status) {
        case 200:
          navigate('/login', { state: { message: res.data.message } })
          break;
        default:
          toast.info(res?.data?.message)
          break;
      }
      return response

    } catch (error) {
      console.dir(error.response.data);
      toast.error(error?.response?.data?.message)
    }
  }

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

              <form onSubmit={handleSubmit(onSubmit)}>

                <InputForm
                  label="Nombre"
                  placeholder="John Smith"
                  type="text"
                  id="login_name"
                  fontSize='text-sm'
                  register={register}
                  name="name"
                />
                {errors.name && <RequiredValidation />}

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
                  fontSize="text-sm"
                  register={register}
                  name="password"
                />

                <InputForm
                  label="Repetir Contraseña"
                  placeholder="Repite tu contraseña"
                  type="password"
                  id="login_form_confirm"
                  fontSize="text-sm"
                  register={register}
                  name="password_confirm"
                />

                <InputForm
                  label="Teléfono"
                  placeholder="+56 9 1234 5678"
                  type="phone"
                  id="login_phone"
                  fontSize='text-sm'
                  name="phone"
                  register={register}
                />
                {errors.phone && <RequiredValidation />}

                <div className="mt-24">
                  <button className=" bg-yellow-400 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-900
                                shadow-lg">
                    Registrar
                  </button>
                </div>
              </form>

              <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                Ya tengo cuenta !
                <Link to="/login" className="ms-2 cursor-pointer text-indigo-600 hover:text-indigo-900">Ingresar</Link>
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

