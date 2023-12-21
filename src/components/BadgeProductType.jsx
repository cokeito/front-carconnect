import React from 'react'

export const BadgeProductType = ({ item_type }) => {
  console.log(item_type)
  const type = item_type == 1 ? 'Nuevo' : 'Usado'


  return (
    <div className="ms-1 badge rounded-lg bg-pink-800 text-white text-xs p-3 uppercase">
      {type}
    </div>
  )
}
