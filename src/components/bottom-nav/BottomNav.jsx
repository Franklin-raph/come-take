import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";

const BottomNav = () => {

    const [categoryNav, setCategoryNav] = useState(false)

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
            <div className='fixed left-0'>
                <p>Caegories</p>
            </div>
        }

    </div>
  )
}

export default BottomNav