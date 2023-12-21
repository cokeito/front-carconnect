import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { Items } from '../components/Items';

import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout';

import { API_URL, CarApi } from '../api/CarApi';
import toast, { Toaster } from 'react-hot-toast';
import { ImageOrPlaceHolder } from '../components/ImageOrPlaceHolder';
import { ProductStars } from '../components/ProductStars';
import { motion } from 'framer-motion';
import { IconHeart } from '../components/IconHeart';
import { SaleTag } from '../components/SaleTag';
import { BadgeProductType } from '../components/BadgeProductType';

export const Product = () => {
  const { id } = useParams()
  const { formatter, wishlist, product, getProduct } = useContext(ProductContext)
  console.log('** aca', id);

  const isInWishlist = wishlist.includes(id)

  useEffect(() => {
    getProduct(id)
  }, [id])

  return (
    <Layout>
      <section className="min-h-[200px] overflow-hidden bg-white pb-11 font-poppins mt-12">
        {product && (
          <motion.div
            className="container mx-auto lg:py-2 md:px-6"
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
                      <div className="badge rounded-md bg-indigo-800 text-white text-xs p-3 uppercase">
                        {product?.category_name}
                      </div>

                      <BadgeProductType item_type={product?.item_type} />
                    </div>

                    <div className="mb-3">
                      <h2 className="max-w-xl mt-2 mb-2 text-2xl font-bold md:text-4xl text-indigo-900">
                        {product?.name}
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
                        Comprar
                      </button>
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

    </Layout>
  )
}
