import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";

const BottomNav = () => {

    const [categoryNav, setCategoryNav] = useState(false)
    const [singleCategoryNav, setSingleCategoryNav] = useState(false)
    const categoryNavArray = ['Computing','Property','Vehicle','Home and kitchen','Mobile Phones & Tablets','Electronics','Health & Beauty',
    'Fashion','Sports','Pets','Baby Products','Agriculture']
    const computerCategory = ["Laptops","Desktop","Printers","Accessories"]


  return (
    <div className='flex items-center justify-between px-12 py-5 bottom-nav bg-secondary-color text-white bottom-nav relative'>
        <ul className='flex items-center gap-8'>
            <li className='flex items-center' onClick={() => setCategoryNav(!categoryNav)}>
                <RxHamburgerMenu />
                <li className='ml-1'>
                    <p>Categories</p>
                    <IoChevronDown />
                </li>
            </li>
            <li>
                <Link to="/new-listing">New Listing</Link>
            </li>
            <li>
                <Link to="/shop-set-up">Sell Products</Link>
            </li>
            <li>
                <Link to="#">Trending Products</Link>
            </li>
            <li>
                <Link to="#">VTU</Link>
            </li>
        </ul>

        {
            categoryNav &&
            <div className='absolute left-0 bg-white px-12 py-5 w-[25%] top-[65px] z-[9] rounded-[4px] h-[460px]'>
                <p className='text-black font-bold text-[20px] mb-2'>Categories</p>
                {
                    categoryNavArray.map(item => (
                        <p className='text-[#1C1C1C] my-[8px] cursor-pointer' onClick={() => setSingleCategoryNav(!singleCategoryNav)} >{item}</p>
                    ))
                }
            </div>
        }
        {
            singleCategoryNav &&
            <div className='absolute left-[25.1%] bg-white px-12 pb-5 pt-[40px] w-[25%] top-[65px] z-[9] rounded-[4px] h-[460px]'>
                <p className='text-black font-bold text-[20px] mb-2'>Computer</p>
                {
                    computerCategory.map(item => (
                        <p className='text-[#1C1C1C] my-[8px] cursor-pointer'>{item}</p>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default BottomNav