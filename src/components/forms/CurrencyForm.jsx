import React from 'react'
import CurrencyInput from 'react-currency-input-field';

export const CurrencyForm = ({ name, register, label, placeholder, type, fontSize = 'text-lg', required = true }) => {
  return (
    <>
      <div className={fontSize == 'text-lg' ? 'mt-8' : 'mt-4'} >
        <div className="text-sm font-bold text-gray-700 tracking-wide">{label}</div>

        <CurrencyInput
          prefix="$"
          className={`w-full ${fontSize} py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500`}
          type={type}
          groupSeparator="."
          decimalSeparator=','
          decimalsLimit={0}
          placeholder={placeholder}
          {...register(name, { required: required })}
        />

      </div>
    </>
  )
}
