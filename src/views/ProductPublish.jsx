import React, { useContext, useState } from 'react'

import { Layout } from '../layouts/Layout'
import { Title } from '../components/Title'

import { InputForm } from '../components/forms/InputForm'
import { SelectForm } from '../components/forms/SelectForm'

import { TextAreaForm } from '../components/forms/TextAreaForm'
import { FileForm } from '../components/forms/FileForm'
import { useForm } from 'react-hook-form'
import { CarApi } from '../api/CarApi'

import { ProductContext } from '../contexts/product_provider'
import { useNavigate } from 'react-router-dom'
import { RequiredValidation } from '../components/forms/RequiredValidation'
import { CurrencyForm } from '../components/forms/CurrencyForm'


export const ProductPublish = () => {

  const navigate = useNavigate();
  const { itemCategories, getProducts } = useContext(ProductContext)

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const [addDiscount, setAddDiscount] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

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

  const types = [
    { value: 1, label: 'Nuevo' },
    { value: 2, label: 'Usado' }

  ]

  const categories = itemCategories.map(category => {
    return {
      value: category.id,
      label: category.name
    }
  })

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const arr = Array.from(data.photos)
      const promises = arr.map(file => getBase64(file));
      data.photos = await Promise.all(promises);

      const res = await CarApi.post('/items/', data)

      if (res.status == 200) {
        console.log(res.data);
        //update get_products_state
        getProducts()
        navigate(`/products/${res.data.id}`, { state: { message: res.data.message } })
      }
    } catch (error) {

    }


  }

  return (
    <Layout>
      <section className="min-h-[200px] overflow-hidden bg-white py-3 font-poppins">
        <div className="container mx-auto mt-10 px-10">
          <Title title="Publica tu vehículo" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-[4fr,3fr,1fr,2fr] gap-5">
              <div>
                <InputForm
                  label="Marca / Modelo "
                  placeholder="Ingresa la Marca Y Modelo de tu vehículo"
                  type="text"
                  id="product_title"
                  fontSize="text-sm"
                  name="name"
                  register={register}
                />
                {errors.name && <RequiredValidation msg={errors.name.message} />}
              </div>

              <div>
                <InputForm
                  label="Descripción"
                  placeholder="Ingresa una pequeña descripción de tu vehículo"
                  type="text"
                  id="product_description"
                  fontSize="text-sm"
                  name="excerpt"
                  register={register}
                />
                {errors.excerpt && <RequiredValidation msg={errors.excerpt.message} />}
              </div>

              <div>
                <SelectForm
                  label="Año"
                  placeholder="Ingresa el año de tu vehículo"
                  type="text"
                  id="product_ano"
                  fontSize="text-sm"
                  options={carsYear}
                  name="year"
                  register={register}
                />
                {errors.year && <RequiredValidation msg={errors.year.message} />}
              </div>

              <div>
                <CurrencyForm
                  label="Precio"
                  placeholder="Ingresa el precio"
                  type="text"
                  id="product_price"
                  fontSize="text-sm"
                  name="price"
                  register={register}
                />
                {errors.price && <RequiredValidation msg={errors.price.message} />}
              </div>

            </div>

            <div className="mt-10 grid grid-cols-[2fr,2fr,2fr,2fr] gap-5">
              <div>
                <SelectForm
                  label="Estado de tu vehículo"
                  placeholder="Estado de tu vehículo"
                  type="text"
                  id="product_type"
                  fontSize="text-sm"
                  options={types}
                  name="item_type"
                  register={register}
                />
              </div>

              <div>
                <SelectForm
                  label="Categoria"
                  placeholder="Categoria"
                  type="text"
                  id="product_category"
                  fontSize="text-sm"
                  options={categories}
                  name="item_category_id"
                  register={register}
                />
              </div>

              <div>
                <SelectForm
                  label="Agregamos Descuento?"
                  placeholder="Ingresa el año de tu vehículo"
                  type="text"
                  id="product_discount"
                  fontSize="text-sm"
                  options={isDiscount}
                  name="is_discount"
                  register={register}
                  setAddDiscount={setAddDiscount}
                  watch={watch('is_discount')}
                />
              </div>

              {addDiscount && (
                <div>
                  <CurrencyForm
                    label="Precio"
                    placeholder="Ingresa el precio"
                    type="text"
                    id="product_price"
                    fontSize="text-sm"
                    name="discount_price"
                    required={false}
                    register={register}
                  />
                  {errors.discount_price && <RequiredValidation msg={errors.discount_price.message} />}
                </div>
              )}


            </div>

            <div className="mt-10 grid grid-cols-[1fr] gap-5">
              <div>
                <TextAreaForm
                  label="Descripción de tu vehiculo"
                  placeholder="Acá expláyate y escribe todo lo que se te ocurra"
                  type="text"
                  id="product_description"
                  fontSize="text-sm"
                  name="description"
                  register={register}
                />
                {errors.description && <RequiredValidation msg={errors.description.message} />}
              </div>


            </div>

            <div className="mt-10 grid grid-cols-[1fr] gap-5">
              <div>
                <FileForm
                  label="Imagenes"
                  placeholder="Acá expláyate y escribe todo lo que se te ocurra"
                  id="product_description"
                  fontSize="text-sm"
                  name="photos[]"
                  register={register}
                />
                {errors.photos && <RequiredValidation msg={errors.photos.message} />}
              </div>
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
