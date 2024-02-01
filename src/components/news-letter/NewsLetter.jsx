import React from 'react'

const NewsLetter = () => {
  return (
    <div className='h-[314px] bg-primary-color flex flex-col mb-9 items-center justify-center text-center'>
        <p className='text-[32px] text-white font-[600]'>Subscribe to our newsletter</p>
        <p className='mt-2 mb-5 text-[#ccc]'>Subscribe to our newsletter to get firsthand information on our latest offers</p>
        <div className='rounded-full py-1 px-1 bg-white flex items-center w-[80%] md:w-[50%]'>
            <input type="text" placeholder='Email Address'className='w-full pl-3 outline-none'/>
            <button className='bg-secondary-color rounded-full py-2 px-9 text-white'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter