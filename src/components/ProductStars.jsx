import React from 'react'
import { Star } from './Star'

export const ProductStars = ({ itemId, currentScore }) => {

  return (
    <div className="flex items-center mb-6">
      <ul className="flex mr-2">
        <Star score={1} itemId={itemId} currentScore={currentScore} />
        <Star score={2} itemId={itemId} currentScore={currentScore} />
        <Star score={3} itemId={itemId} currentScore={currentScore} />
        <Star score={4} itemId={itemId} currentScore={currentScore} />
        <Star score={5} itemId={itemId} currentScore={currentScore} />
      </ul>

    </div>
  )
}
