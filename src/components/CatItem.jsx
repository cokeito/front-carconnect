import { useContext, useEffect, useState } from 'react'

import { ProductContext } from '../contexts/product_provider'

export const CatItem = ({ category }) => {

  const [isSelected, setIsSelected] = useState(false)
  const { searchIds, setSearchIds } = useContext(ProductContext)

  const handleCatClick = (category_id) => {

    setSearchIds((searchIds) => {
      if (searchIds.includes(category_id)) {
        console.log('remove')
        setIsSelected(false)
        return searchIds.filter(id => id !== category_id)
      } else {
        console.log('add');
        setIsSelected(true)
        return [...searchIds, category_id]
      }
    })

    console.log(isSelected)
  }

  useEffect(() => {
    console.log(searchIds)
    if (searchIds.includes(category.id)) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [searchIds])

  return (
    <div className="w-72 h-48 px-2 cursor-pointer" onClick={() => { handleCatClick(category.id) }} >
      <div className="absolute bottom-5 left-5 z-20 uppercase">
        <span className={`${!isSelected ? 'bg-pink-950' : 'bg-green-600'} text-white inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10`}>
          {category.name}
        </span>
      </div>

      <img src={`/assets/images/categories/${category.photo}`} alt={category.name} className="rounded-lg h-full w-full object-cover " />
    </div>
  )
}
