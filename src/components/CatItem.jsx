import React from 'react'

export const CatItem = ({ category }) => {
  return (
    <div className="cat-slide px-2 relative h-[200px]">
      <div className="absolute bottom-5 left-5 z-20 uppercase">
        <span className="bg-indigo-950 text-white inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
          {category.name}
        </span>
      </div>
      <div className="filter brightness-75 w-[280px] h-[200px]">
        <img src={`/public/assets/images/categories/${category.photo}`} alt={category.name} className="rounded-lg h-full object-cover" />
      </div>
    </div>
  )
}
