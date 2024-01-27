import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopCategories = ({categoryArray}) => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 items-center justify-between gap-3'>
        {categoryArray && categoryArray.map(item => (
            <div className='relative h-[40vh] category-section rounded-[6px] overflow-hidden' onClick={() => navigate('/categories')}>
                <img className='h-[70%] md:h-[100%] w-[100%] object-cover rounded-[6px]' src={item.img} alt="" />
                <div className='h-[70%] md:h-[100%] w-[100%] absolute top-category-overlay rounded-[6px]'>
                  <p className='absolute text-white text-center'>{item.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TopCategories