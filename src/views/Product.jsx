import React, { useContext, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout';

import { API_URL, CarApi } from '../api/CarApi';

import { ImageOrPlaceHolder } from '../components/ImageOrPlaceHolder';
import { ProductStars } from '../components/ProductStars';
import { motion } from 'framer-motion';
import { IconHeart } from '../components/IconHeart';
import { SaleTag } from '../components/SaleTag';
import { BadgeProductType } from '../components/BadgeProductType';
import { UserContext } from '../contexts/user_provider';
import toast from 'react-hot-toast';
import { BadgeCategory } from '../components/BadgeCategory';
import { Loading } from '../components/Loading';

export const Product = () => {
  const { id } = useParams()
  const { isLoadingProduct, formatter, wishlist, product, getProduct, getWishListItems, getWishlist, getProducts } = useContext(ProductContext)
  const { user } = useContext(UserContext)

  const navigate = useNavigate();
  const isInWishlist = wishlist.includes(id)

  const handleDeleteProduct = async () => {

    const res = await CarApi.delete(`/items/${id}`)
    if (res.status == 200) {
      navigate('/products')
      toast.success('Producto eliminado')

      getWishListItems()
      getWishlist()
      getProducts()

    } else {
      toast.error('Se ha producido un error')
    }

  }

  useEffect(() => {
    getProduct(id)
  }, [id])

  console.log('is', isLoadingProduct)
  if (isLoadingProduct) {
    return (
      <Loading />
    )
  }

  return (
    <Layout>

      <section className="min-h-[200px] overflow-hidden bg-white pb-11 font-poppins mt-12">
        {product && (
          <motion.div
            className="container mx-auto lg:py-2 px-6 "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="z-30 overflow-hidden ">

                  <motion.div className="relative mb-6 lg:mb-10 lg:h-2/4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileTap={
                      {
                        scale: 1.04,
                        transition: { duration: 0.2 }
                      }
                    }
                  >
                    <IconHeart product={product} filled={isInWishlist} />
                    {product.is_discount &&
                      <SaleTag />
                    }

                    <ImageOrPlaceHolder image={product?.photos[0]?.photo} />

                  </motion.div>

                  <div className="flex-wrap hidden md:flex ">

                    {product.photos.map((photo, index) => (
                      <div className="w-1/2 p-2 sm:w-1/4" key={index}>
                        <a href="#"
                          className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                          <img src={`${API_URL}${photo.photo}`} alt="" className="object-cover w-full lg:h-20" />
                        </a>
                      </div>
                    ))

                    }


                  </div>
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-8 ">

                    <div className="flex-column justify-between">
                      <BadgeCategory product={product} />
                      <BadgeProductType item_type={product?.item_type} />
                    </div>

                    <div className="mb-3">
                      <h2 className="max-w-xl mt-2 mb-2 text-2xl font-bold md:text-4xl text-indigo-900">
                        {product?.name} <span className="text-base">({product.year})</span>
                      </h2>

                      <p className="text-xs text-indigo-500">{product?.excerpt}</p>
                    </div>

                    <ProductStars currentScore={product?.average_score} itemId={product?.id} />

                    <p className="mb-8 text-gray-700 text-md">
                      {product?.description}
                    </p>
                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700  ">

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

                    </p>

                  </div>


                  <div className="flex flex-wrap items-center -mx-4 ">
                    <div className="w-full px-4 mb-4 lg:mb-0">

                      <button
                        className="flex items-center justify-center w-full p-4 text-white border rounded-md bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
                          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                        <span className="ms-2 "> Comprar </span>
                      </button>

                      {(user.id == product.user_id) &&
                        <button
                          onClick={() => document.getElementById('my_modal_1').showModal()}
                          type="button"
                          className="mt-2 flex items-center justify-center w-full p-4 text-white border rounded-md bg-red-900">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                          <span className="ms-2"> Eliminar</span>
                        </button>
                      }
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        )}
      </section>

      <section className="my-10">
        <div className="container mx-auto px-10">


        </div>
      </section>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirmación</h3>
          <p className="py-4 text-red-800">¿Estás seguro que deseas eliminar este producto?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-md me-2">Cancelar</button>
              <button type="button" onClick={handleDeleteProduct} className="btn btn-md bg-green-800 text-white">Eliminar</button>
            </form>
          </div>
        </div>
      </dialog>

    </Layout>
  )
}
