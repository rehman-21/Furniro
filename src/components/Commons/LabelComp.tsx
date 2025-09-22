import React from 'react'
interface LabelProps{
    htmlFor:string
    LabelTag:string
}

export const LabelComp:React.FC<LabelProps>=({htmlFor, LabelTag})=> {
  return (
    <>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-600">{LabelTag}</label>

    </>
  )
}

