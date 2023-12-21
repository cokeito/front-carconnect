import React from 'react'

export const SelectForm = ({ name, label, placeholder, register, fontSize = 'text-lg', options = [], required = true }) => {
  return (
    <>
      <div className={fontSize == 'text-lg' ? 'mt-8' : 'mt-4'} >
        <div className="text-sm font-bold text-gray-700 tracking-wide">{label}</div>
        <select
          className={`w-full ${fontSize} py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 bg-white`}
          placeholder={placeholder}
          {...register(name)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>

      </div>
    </>
  )
}