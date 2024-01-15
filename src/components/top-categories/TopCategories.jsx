import React from 'react'

const TopCategories = ({categoryArray}) => {
  return (
    <div className='flex items-center justify-between gap-6'>
        {categoryArray && categoryArray.map(item => (
            <div className='relative w-[18%] h-[40vh] mb-5 category-section rounded-[6px]'>
                <div className='h-[100%] w-[100%] absolute top-category-overlay rounded-[6px]'></div>
                <img className='h-[100%] w-[100%] object-cover rounded-[6px]' src={item.img} alt="" />
                <p className='absolute top-0 text-white text-center'>{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default TopCategories