export const BadgeProductType = ({ item_type }) => {
  console.log('item_type', item_type)
  const type = parseInt(item_type) == 1 ? 'Nuevo' : 'Usado'
  const bg_color = parseInt(item_type) == 1 ? 'bg-pink-500' : 'bg-pink-800'

  return (
    <div className={`ms-1 badge rounded-lg ${bg_color} text-white text-xs p-3 uppercase border-none`}>
      {type}
    </div>
  )
}
