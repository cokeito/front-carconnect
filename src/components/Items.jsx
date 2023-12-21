import React from 'react'
import { Item } from './Item'
import { Title } from './Title'


export const Items = ({ title, products, className = "lg:grid-cols-3 sm:grid-cols-1" }) => {

  return (
    <>
      <div>
        <Title title={title} />
        <div className={`grid gap-10 ${className}`} >
          {
            products.map((product, index) => {
              return <Item key={index} product={product} />
            }
            )
          }
        </div>

      </div>
    </>
  )
}
