import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/product_provider'
import { ImageOrPlaceHolder } from './ImageOrPlaceHolder'
import { motion } from 'framer-motion'
import { IconHeart } from './IconHeart'
import { SaleTag } from './SaleTag'
import { BadgeProductType } from './BadgeProductType'
import { BadgeCategory } from './BadgeCategory'

export const Item = ({ product }) => {
  const { formatter } = useContext(ProductContext)

  return (
    <>
      <motion.div
        className="card lg:w-auto bg-base-100 shadow-xl sm:w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <figure className="h-64 relative">
          <IconHeart product={product} />
          {product.is_discount &&
            <SaleTag />
          }
          <Link
            to={`/products/${product.id}`}>
            <ImageOrPlaceHolder image={(product?.photos.length > 0) ? product?.photos[0].photo : undefined} alt="Car" />
          </Link>
        </figure>

        <div className="card-body">

          <div className="flex-column w-100 justify-between">
            <div>
              <h2 className="card-title text-indigo-950">
                {product.name} ({product.year})
              </h2>
            </div>

            <div>
              {!product?.is_discount
                ? (
                  <span>
                    {formatter.format(product?.price)}
                  </span>
                )
                : (
                  <>
                    <span>
                      {formatter.format(product?.discount_price)}
                    </span>
                    <span
                      className="text-base font-normal text-gray-500 line-through ms-2">
                      {formatter.format(product?.price)}
                    </span>

                  </>
                )
              }
            </div>

          </div>

          <div className="flex-column justify-between">
            <BadgeCategory product={product} />
            <BadgeProductType item_type={product.item_type} />

          </div>

          <p className="py-5 text-sm">
            {product.excerpt}
          </p>
          <div className="card-actions justify-end mt-5">
            <Link
              to={`/products/${product.id}`}
              className="btn bg-yellow-400 hover:bg-indigo-800 hover:text-white"
              onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })}
            >Ver Vehiculo</Link>
          </div>
        </div>
      </motion.div >
    </>
  )
}
