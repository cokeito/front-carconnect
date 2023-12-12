import React from 'react'

const InputForm = ({ label, placeholder, type, fontSize = 'text-lg' }) => {
  return (
    <>
      <div className={fontSize == 'text-lg' ? 'mt-8' : 'mt-4'} >
        <div className="text-sm font-bold text-gray-700 tracking-wide">{label}</div>
        <input className={`w-full ${fontSize} py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500`}
          type={type}
          placeholder={placeholder} />
      </div>
    </>
  )
}

export default InputForm