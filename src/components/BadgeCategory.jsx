import React from 'react'

export const BadgeCategory = ({ product }) => {
  return (
    <div className="badge rounded-lg bg-indigo-800 text-white text-xs p-3 border-none uppercase">
      {product.category_name}
    </div>
  )
}
