import React from 'react'

export const TextAreaForm = ({ label, placeholder, type, fontSize = 'text-lg' }) => {
  return (
    <>
      <div className={'mt-2'} >
        <div className="text-sm font-bold text-gray-700 tracking-wide mb-4">{label}</div>
        <textarea className=" focus:outline-none w-full border rounded-lg p-4 text-sm focus:border-indigo-500" placeholder={placeholder}></textarea>
      </div>
    </>
  )
}
