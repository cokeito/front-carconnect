import React from 'react'

import { Layout } from '../layouts/Layout'
import { Title } from '../components/Title'

import InputForm from '../components/forms/InputForm'
import SelectForm from '../components/forms/SelectForm'

import { TextAreaForm } from '../components/forms/TextAreaForm'
import { FileForm } from '../components/forms/FileForm'

export const ProductPublish = () => {

  const carsYear = [
    { value: 2000, label: '2000' },
    { value: 2001, label: '2001' },
    { value: 2002, label: '2002' },
    { value: 2003, label: '2003' },
    { value: 2004, label: '2004' },
    { value: 2005, label: '2005' },
    { value: 2006, label: '2006' },
    { value: 2007, label: '2007' },
    { value: 2008, label: '2008' },
    { value: 2009, label: '2009' },
    { value: 2010, label: '2010' },
    { value: 2011, label: '2011' },
    { value: 2012, label: '2012' },
    { value: 2013, label: '2013' },
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' },
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
  ].reverse()

  const isDiscount = [{
    value: true,
    label: 'Si'
  }, {
    value: false,
    label: 'No'
  }].reverse()

  const categories = [
    { value: 1, label: 'Nuevo' },
    { value: 2, label: 'Usado' }

  ]
  return (

    <Layout>

      <section className="min-h-[200px] overflow-hidden bg-white py-11 font-poppins mt-10">
        <div className="container mx-auto mt-10 px-10">
          <Title title="Publica tu vehículo" />
          <form>
            <div className="grid grid-cols-[4fr,3fr,1fr,2fr] gap-5">
              <InputForm
                label="Marca / Modelo "
                placeholder="Ingresa la Marca Y Modelo de tu vehículo"
                type="text"
                id="product_title"
                fontSize="text-sm"

              />

              <InputForm
                label="Descripción"
                placeholder="Ingresa una pequeña descripción de tu vehículo"
                type="text"
                id="product_description"
                fontSize="text-sm"
              />

              <SelectForm
                label="Año"
                placeholder="Ingresa el año de tu vehículo"
                type="text"
                id="product_ano"
                fontSize="text-sm"
                options={carsYear}
              />

              <InputForm
                label="Precio"
                placeholder="Ingresa el precio"
                type="text"
                id="product_price"
                fontSize="text-sm"
              />

            </div>

            <div className="mt-10 grid grid-cols-[2fr,3fr,3fr] gap-5">
              <SelectForm
                label="Categoria"
                placeholder="Ingresa el año de tu vehículo"
                type="text"
                id="product_category"
                fontSize="text-sm"
                options={categories}
              />

              <SelectForm
                label="Agregamos Descuento?"
                placeholder="Ingresa el año de tu vehículo"
                type="text"
                id="product_discount"
                fontSize="text-sm"
                options={isDiscount}
              />

              <InputForm
                label="Precio (Descuento)"
                placeholder="Ingresa el precio con descuento"
                type="text"
                id="product_discount_price"
                fontSize="text-sm"
              />

            </div>

            <div className="mt-10 grid grid-cols-[1fr] gap-5">

              <TextAreaForm
                label="Descripción de tu vehiculo"
                placeholder="Acá expláyate y escribe todo lo que se te ocurra"
                type="text"
                id="product_description"
                fontSize="text-sm"
              />

            </div>

            <div className="mt-10 grid grid-cols-[1fr] gap-5">
              <FileForm
                label="Imagenes"
                placeholder="Acá expláyate y escribe todo lo que se te ocurra"
                type="text"
                id="product_description"
                fontSize="text-sm"
              />
            </div>

            <div className="mt-24 flex justify-end">
              <button className="bg-yellow-500 text-gray-100 p-4 rounded-lg tracking-wide w-full
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-900
                                shadow-lg px-4"
              >
                Crear Anuncio
              </button>
            </div>
          </form>

        </div >
      </section>

    </Layout>

  )
}
