import React from 'react'

export const UserAvatar = (user) => {
  return (
    <>
      {
        user?.avatar
          ?
          (
            <img
              className="object-cover object-center h-32"
              src={user?.avatar}
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
