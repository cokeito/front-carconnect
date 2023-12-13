import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Items } from '../components/Items';
import { Footer } from '../components/Footer';

import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout';

export const Product = () => {
  const { id } = useParams()
  const { products } = useContext(ProductContext)
  console.log('**', id, products);


  const [productData, setProductData] = useState({})

  const getProductData = (products) => {
    console.log('products: ', products)
    const searched_product = products.find(car => parseInt(car.id) === parseInt(id))

    console.log('s:', searched_product);

    setProductData(searched_product)


  }

  useEffect(() => {
    console.log('products: ', products)
    console.log('id: ', id)
    getProductData(products)
  }), [products, id]

  console.log('productData: ', productData)
  return (
    <Layout>

      <section className="min-h-[200px] overflow-hidden bg-white py-11 font-poppins mt-10">
        {productData && (
          <div className="container py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-30 overflow-hidden ">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <img src={productData.image} alt="" className="object-cover w-full lg:h-full rounded-lg" />
                  </div>
                  <div className="flex-wrap hidden md:flex ">
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-blue-300 hover:border-blue-300">
                        <img src={productData.image} alt="" className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={productData.image} alt="" className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={productData.image} alt="" className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                    <div className="w-1/2 p-2 sm:w-1/4">
                      <a href="#"
                        className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                        <img src={productData.image} alt="" className="object-cover w-full lg:h-20" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-8 ">

                    <div className="flex-column justify-between">
                      {productData.categories?.map((category, index) => (
                        <div key={index} className="badge bg-indigo-800 text-white text-xs p-3">{category}</div>
                      ))}
                    </div>



                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">
                      {productData.title}
                    </h2>

                    <div className="flex items-center mb-6">
                      <ul className="flex mr-2">
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-yellow-500  bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-yellow-500  bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-yellow-500  bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor"
                              className="w-4 mr-1 text-yellow-500  bi bi-star "
                              viewBox="0 0 16 16">
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                          </a>
                        </li>
                      </ul>


                    </div>

                    <p className="max-w-md mb-8 text-gray-700 ">
                      {productData.description}
                    </p>
                    <p className="inline-block mb-8 text-4xl font-bold text-gray-700  ">
                      <span>$23.000.000</span>
                      <span
                        className="text-base font-normal text-gray-500 line-through ">$32.000.000</span>
                    </p>

                  </div>


                  <div className="flex flex-wrap items-center -mx-4 ">
                    <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                      <button
                        className="flex items-center justify-center w-full p-4 text-white border rounded-md bg-green-600">
                        Comprar
                      </button>
                    </div>
                    <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                      <button
                        className="flex items-center justify-center w-full p-4 text-white border rounded-md bg-indigo-950">
                        Agregar a Favoritos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
      </section>
      <section className="my-10">
        <div className="container mx-auto px-10">

          <Items title="Destacados" products={products.slice(-4)} />
        </div>
      </section>

    </Layout>
  )
}
