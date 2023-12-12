import React from 'react'
import { Item } from './Item'

export const Items = ({ title, products }) => {

  console.log('cars_in_item: ', products)

  return (
    <>
      <h2 className="font-extrabold uppercase text-2xl mb-5"> {title} </h2>
      <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1">
        {
          products.map((product, index) => {
            return <Item key={index} product={product} />
          }

          )
        }

      </div>

    </>
  )
}
