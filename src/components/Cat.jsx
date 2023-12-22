import React, { useContext } from 'react'
import Flickity from 'react-flickity-component'
import { CatItem } from './CatItem'
import { Title } from './Title'
import { ProductContext } from '../contexts/product_provider'

const flickityOptions = {
  cellAlign: 'right',
  contain: false,
  prevNextButtons: true,
  pageDots: false,
  autoPlay: 2000,
  lazyLoad: true
}

export const Cat = () => {

  const { itemCategories } = useContext(ProductContext)
  console.log(itemCategories)


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
            <div className="w-72 h-48  px-2" key={index}>
              <div className="absolute bottom-5 left-5 z-20 uppercase">
                <span className="bg-indigo-950 text-white inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                  {category.name}
                </span>
              </div>

              <img src={`/public/assets/images/categories/${category.photo}`} alt={category.name} className="rounded-lg h-full w-full object-cover " />
            </div>
          ))}




        </Flickity >
      </div >
    </>
  )
}
