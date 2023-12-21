import React from 'react'
import { IconHeart } from './IconHeart'
import { SaleTag } from './SaleTag'
import { ImageOrPlaceHolder } from './ImageOrPlaceHolder'
import { Link } from 'react-router-dom'

export const WishListProduct = ({ product }) => {

  const handleDrawer = () => {
    const wishlist_drawer = document.getElementById('my-drawer-4')
    wishlist_drawer.checked = false
  }

  return (
    <div>
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-32 max-w-sm mx-auto mb-5">



        <div className="absolute inset-0 h-full w-full object-cover" >
          <Link to={`/products/${product.id}`} onClick={handleDrawer}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          </Link>
          <ImageOrPlaceHolder image={product?.photos[0]?.photo} />

          <IconHeart product={product} />
          {product.is_discount &&
            <SaleTag />
          }


        </div>

        <div className="absolute bottom-0 right-0 p-4 ">
          <h3 className="z-10 mt-3 text-md text-right font-bold text-white">{product.name}
            <span className="text-sm text-indigo-500"> ({product.year})</span></h3>
        </div>

      </article>
    </div>
  )
}
