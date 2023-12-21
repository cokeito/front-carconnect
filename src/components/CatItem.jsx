import React from 'react'

export const CatItem = ({ photo_url }) => {
  return (
    <div className="cat-slide px-2 relative">
      <div className="absolute bottom-5 left-5  z-50 uppercase">
        <span className="bg-indigo-950 text-white inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Badge</span>
      </div>
      <div className="filter brightness-50">
        <img src={photo_url} alt="Photo" className="rounded-lg aspect-video" />
      </div>
    </div>
  )
}
