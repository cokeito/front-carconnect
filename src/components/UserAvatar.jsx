import React from 'react'
import { API_URL } from '../api/CarApi'

export const UserAvatar = ({ user }) => {
  return (
    <>
      {
        user?.avatar != null
          ?
          (
            <img
              className="object-cover object-center h-32"
              src={`${API_URL}${user?.avatar}`}
              alt={user?.name}
            />
          )
          :
          (
            <img
              className="object-cover object-center h-32"
              src="/assets/images/default_avatar.jpg"
              alt={user?.name}
            />
          )

      }
    </>
  )
}
