import React, { useContext } from 'react'
import { WishListProduct } from './WishListProduct'
import { Title } from './Title'
import { ProductContext } from '../contexts/product_provider'

export const WishlistDrawer = () => {

  const { wishlistItems } = useContext(ProductContext)

  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="p-6 w-96 min-h-full bg-white text-base-content mt-[50px]">
          <div className="mt-10">

            <Title title="Favoritos" />

            {wishlistItems.map((product) => (
              <WishListProduct key={product.id} product={product} />
            ))}


          </div>

        </div>
      </div>
    </div>
  )
}
