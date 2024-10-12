import React from 'react'

const SimpleCards = ({data}) => {
  return (
    <div className='flex items-start flex-grow border py-[1.5rem] rounded-md shadow-md bg-[#f9f6f6]'>
        <div className='w-[8rem] px-4 flex items-center justify-center'>
            {/* <MdFence className='text-[32px] text-[#17a2b8]'/> */}
            {data.icon}
        </div>
        <div className="flex flex-col items-start justify-start gap-2 pe-2">
            <h1 className="text-2xl font-normal header text-[#00394f]">{data.title}</h1>
            <h1 className="text-md font-normal text-[#939393] leading-snug">{data.description}</h1>
        </div>
    </div>
  )
}

export default SimpleCards