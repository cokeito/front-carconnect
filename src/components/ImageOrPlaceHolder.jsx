import React from 'react'
import { API_URL } from '../api/CarApi'

export const ImageOrPlaceHolder = ({ image }) => {
  return (
    <>
      {image !== undefined
        ? (
          <img src={`${API_URL}${image}`} alt="" className="object-cover w-full lg:h-full rounded-lg" />
        )
        : (
          <img src="/assets/images/no_photo.jpg" alt="" className="object-cover w-full lg:h-full rounded-lg" />
        )
      }
    </>
  )
}
