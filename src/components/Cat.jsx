import React from 'react'
import Flickity from 'react-flickity-component'
import { CatItem } from './CatItem'
import { Title } from './Title'

const flickityOptions = {
  initialIndex: 0,
  contain: true,
  cellAlign: 'left',
  prevNextButtons: false,
  pageDots: false
}

export const Cat = () => {

  return (
    <>
      <Title title="Categorias" />
      <div className="w-full grid gap-5">
        <Flickity
          className={'main-carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <CatItem photo_url="/assets/images/cat_placeholder.webp" />
          <CatItem photo_url="/assets/images/car_placeholder.webp" />
          <CatItem photo_url="/assets/images/login_bg.webp" />
          <CatItem photo_url="/assets/images/login_bg2.webp" />
          <CatItem photo_url="/assets/images/cat_placeholder.webp" />


        </Flickity >
      </div >
    </>
  )
}
