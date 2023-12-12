import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../contexts/product_provider'

export const Item = ({ product }) => {
  const { formatter } = useContext(ProductContext)
  return (
    <>
      <div className="card lg:w-auto bg-base-100 shadow-xl sm:w-auto">
        <figure className="h-64">
          <img
            src={product.image}
            alt="Car "
            className="object-cover w-full h-full"
          />

        </figure>

        <div className="card-body">

          <div className="flex-column w-100 justify-between">
            <div>
              <h2 className="card-title">
                {product.title}
              </h2>
            </div>

            <div>
              {formatter.format(product.price * Math.floor(Math.random() * 10))}
            </div>

          </div>

          <div className="flex-column justify-between">
            {product.categories?.map((category, index) => (
              <div className="badge bg-indigo-800 text-white text-xs p-3" key={index}>{category}</div>
            ))}
          </div>

          <p className="py-5">
            {product.description}
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
      </div >
    </>
  )
}
