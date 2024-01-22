import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import SearchComponent from '../search-component/SearchComponent';
import { BsCart3 } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';

const UnAuthenticatedNavabar = ({ setLoginModal }) => {
  return (
    <div>
        <nav className='flex items-center justify-between py-5 px-12 bg-primary-color text-white text-[15px]'>
            <div className='flex items-center justify-start gap-8 w-full'>
                <Link to="/" className='block'>Logo</Link>
                <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[70%]'>
                    <input type="text" placeholder='Find Products' className='w-full pr-20 outline-none text-primary-color'/>
                    <button className='rounded-full py-2 px-6 bg-secondary-color'>Search</button>
                </div>
                
            </div>
            <div className='nav-right w-full'>
                <li onClick={() => setLoginModal(true)}>
                    <Link to="#">Login</Link>
                    <FaRegCircleUser />
                </li>
                <li>
                    <Link to="/help">Help</Link>
                    <PiWarningCircle />
                </li>
                <li>
                    <div className='cursor-pointer flex'>
                        <p>Cart</p>
                        <BsCart3 color='#08A805' fontSize={"20px"}/>
                        <p>(0)</p>
                    </div>
                </li>
                <li className='bg-secondary-color px-3 py-1 rounded-full'>
                    <HiOutlineDevicePhoneMobile />
                    <Link to="/get-app">Get App</Link>
                </li>
            </div>
        </nav>
        <SearchComponent />
    </div>
  )
}

export default UnAuthenticatedNavabar