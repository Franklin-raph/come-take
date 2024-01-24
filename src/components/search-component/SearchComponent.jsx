import React from 'react'
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";

const SearchComponent = () => {
  return (
    <div className='flex items-center justify-between px-12 py-5 bottom-nav bg-secondary-color text-white'>
        <ul className='flex items-center gap-8'>
            <RxHamburgerMenu />
            <li>
                <Link to="/categories">Categories</Link>
                <IoChevronDown />
            </li>
            <li>
                <Link to="/new-listing">New Listing</Link>
            </li>
            <li>
                <Link to="/sell-products">Sell Products</Link>
            </li>
            <li>
                <Link to="#">Trending Products</Link>
            </li>
            <li>
                <Link to="#">VTU</Link>
            </li>
        </ul>
    </div>
  )
}

export default SearchComponent