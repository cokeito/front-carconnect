import React from 'react'

export const FileForm = ({ label, placeholder }) => {

  return (
    <div className={'mt-2 w-full'} >
      <div className="text-sm font-bold text-gray-700 tracking-wide mb-4">{label}</div>
      <input type="file" className="file-input file-input-bordered file-input-primary w-full text-sm" multiple />
    </div>


  )
}
