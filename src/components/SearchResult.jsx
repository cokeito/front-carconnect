import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/product_provider'
import { BadgeProductType } from './BadgeProductType'
import { BadgeCategory } from './BadgeCategory'

export const SearchResult = ({ product, index }) => {
  console.log(product);
  const { formatter } = useContext(ProductContext)
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
          <div className=" bg-pink-400 py-2 px-3 bg-opacity-5 flex justify-between items-center gap-9 flex-col lg:flex-row">
            <div className="py-1">
              <div className="text-lg font-extrabold text-yellow-500 mb-2 flex items-center flex-col lg:flex-row">
                <span className="me-2">{product.name}</span>
                <div>
                  <BadgeCategory product={product} />
                  <BadgeProductType item_type={product.item_type} />
                </div>
              </div>

              <p className="text-xs mt-3 lg:mt-1"> {product.excerpt}</p>
            </div>
            <div>
              <div className="font-bold text-lg"> {formatter.format(product.price)}</div>
            </div>
          </div>

        </div>

      </motion.div>
    </Link>
  )
}
