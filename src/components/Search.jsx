import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CarApi } from '../api/CarApi'
import { SearchResult } from './SearchResult'

export const Search = ({ handleSearchBar }) => {

  const [searched, setSearched] = useState()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data.search)
    try {
      if (data.search.length > 3) {
        const res = await CarApi.post('/search', data)

        if (res.status == 200) {
          setSearched(res.data)
        }

      }
    } catch (error) {
      toast.error('search_error')
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-bl from-indigo-800 to-indigo-950 h-[420px] w-full"
      initial={{ x: 0, opacity: 1, height: 0 }}
      animate={{ x: 0, opacity: 1, height: 420 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      exit={{
        transition: { duration: 0.3 },
        animate: { x: -10 },
        height: 0
      }}
    >
      <motion.div
        onClick={handleSearchBar}
        className="p-4 cursor-pointer absolute top-0 right-0 "
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3
        }}
        whileHover={{ rotate: 90, delay: 0.1 }}
        whileTap={{
          scale: 1.5,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" labelledby="svg-title-close-search">
          <path fill="white" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
      </motion.div>

      <div className="h-full flex text-white items-center justify-center w-full flex-col">
        <div className="w-4/5 lg:w-2/4 flex">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full" autoComplete='off'>
            <div className="flex">
              <input
                type="text"
                placeholder="¿Qué quieres buscar?"
                className="input input-ghost w-full input-md rounded-tr-none rounded-br-none focus:bg-opacity-10 focus:text-white"

                {...register("search", { required: true })}
              />
              <button className="rounded-tl-none rounded-bl-none btn bg-indigo-600 border-none text-md text-white w-1/5 hover:bg-yellow-400 hover:text-black">Buscar</button>
            </div>
            {errors.search &&
              <motion.div
                className="font-mono text-yellow-500 text-xs pt-2 ps-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Campo requerido
              </motion.div>
            }
          </form>

        </div>
        {searched && searched.length > 0 &&
          (
            <motion.div
              className=" w-4/5 lg:w-2/3 mt-4 h-60 overflow-y-scroll p-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {
                searched.map((car, index) => (
                  <SearchResult product={car} key={car.id} index={index} />
                ))

              }
            </motion.div>
          )}
        {searched && searched.length == 0 &&
          (
            <motion.div
              className="w-4/5 lg:w-2/4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >

              <p className="mt-2 text-red-500 text-xs text-left">No se encontraron resultados</p>

            </motion.div>

          )
        }

      </div >
    </motion.div >
  )
}
