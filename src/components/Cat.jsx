import React, { useContext, useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import { CatItem } from './CatItem'
import { Title } from './Title'
import { ProductContext } from '../contexts/product_provider'


const flickityOptions = {
  cellAlign: 0.001,
  contain: true,
  prevNextButtons: true,
  pageDots: false,
  lazyLoad: false,
  autoPlay: true,
  wrapAround: true,
  draggable: false
}

export const Cat = () => {


  const { itemCategories } = useContext(ProductContext)

  return (
    <>
      <Title title="Categorias" />
      <div className="w-full grid gap-5">
        <Flickity
          className={'main-carousel-cat'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {itemCategories.map((category, index) => (
            <CatItem key={index} category={category} />
          ))}
        </Flickity >
      </div >
    </>
  )
}
