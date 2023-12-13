import React from 'react'

export const Title = ({ title = "REPLACE ME" }) => {
  return (
    <div className="font-extrabold uppercase text-xl divider divider-start mb-6">{title}</div>
  )
}
