import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../contexts/user_provider'
import { CarApi } from '../api/CarApi'
import { ProductContext } from '../contexts/product_provider'

export const IconHeart = ({ product }) => {

  const { user } = useContext(UserContext)
  const { wishlist, getWishlist, getWishListItems } = useContext(ProductContext)

  const isInWishlist = wishlist.includes(product.id)

  const handleLike = async (product, user) => {
    try {
      const data = {
        user_id: user.id,
      }

      const res = !isInWishlist ? await CarApi.post(`/items/${product.id}/wishlist`, data) : await CarApi.delete(`/items/${product.id}/wishlist`, { data })

      if (res.status == 200) {
        console.log(res.data);
        //refresh wishlist state
        getWishlist()
        getWishListItems()
      }
    } catch (error) {

    }

  }

  return (
    <div className="absolute top-0 right-0 p-4 ">
      <motion.div
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.7 }}
      >

        <div className="bg-black p-2 rounded-full shadow-lg cursor-pointer" onClick={() => handleLike(product, user)}>
          <svg width="40px" viewBox="0 0 24 24" className="h-6 w-6" >
            <path
              fill={isInWishlist ? "red" : "white"}
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
