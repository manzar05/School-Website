import React from 'react'

const CardButton = ({title}) => {
  return (
    <div>
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-[0.425rem] px-6 rounded-full">{title}</button>
    </div>
  )
}

export default CardButton