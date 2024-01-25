import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import BottomNav from '../bottom-nav/BottomNav';

const AuthenticatedNavbar = () => {

    const user = localStorage.getItem("user")


    useEffect(() => {
        // const 
    },[])

    async function handleUserSignOut(){
        localStorage.clear()
    }

  return (
    <>
        <nav className='flex items-start justify-between py-7 px-12 bg-primary-color text-white text-[15px] relative z-[99]'>
            <div className='flex items-start justify-between gap-8'>
                <Link to="/">Logo</Link>
                <ul className='flex items-center gap-8'>
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
                        <Link to="#">VTT</Link>
                    </li>
                </ul>
            </div>
            <div className='nav-right'>
                <li onClick={handleUserSignOut}>
                    <Link to="/login">Logout</Link>
                    <FaRegCircleUser />
                </li>
                <li>
                    <Link to="/help">Help</Link>
                    <PiWarningCircle />
                </li>
                <li className='bg-secondary-color px-3 py-1 rounded-full'>
                    <HiOutlineDevicePhoneMobile />
                    <Link to="/get-app">Get App</Link>
                </li>
            </div>
        </nav>
        <BottomNav />
    </>
  )
}

export default AuthenticatedNavbar