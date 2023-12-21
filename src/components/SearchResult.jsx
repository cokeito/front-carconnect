import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const SearchResult = ({ product, index }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <motion.div className="flex flex-col justify-center items-center w-full"
        initial={{ x: -30, opacity: 0, }}
        animate={{ x: 0, opacity: 1, }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        whileHover={{
          scale: 1.04,
          transition: { duration: 0.2 }
        }}


      >

        <div className="w-full mb-2 ">
          <div className=" bg-pink-400 py-2 px-3 bg-opacity-5">
            <h2 className="text-sm font-extrabold text-yellow-500">{product.name}</h2>
            <p className="text-xs"> {product.excerpt}</p>
          </div>

        </div>

      </motion.div>
    </Link>
  )
}
