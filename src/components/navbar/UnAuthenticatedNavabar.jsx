import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import BottomNav from '../bottom-nav/BottomNav';
import { BsCart3 } from 'react-icons/bs';
import { MdMenu } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { PiWarningCircleThin } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";

const UnAuthenticatedNavabar = ({ setLoginModal, setRegisterModal }) => {

    const [accountDropDown, setAccountDropDown] = useState(false)



  return (
    <div>
        <nav className='flex items-center justify-between py-5 px-8 lg:px-12 bg-primary-color text-white text-[15px] fixed top-0 w-full self-start z-50'>
            <div className='flex items-center justify-start gap-8 w-full'>
                <Link to="/" className='block'>Logo</Link>
                <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[70%] search-bar'>
                    <input type="text" placeholder='Find Products' className='w-full pr-5 outline-none text-primary-color'/>
                    <button className='rounded-full py-2 px-6 bg-secondary-color'>Search</button>
                </div>
            </div>
            <div className="mobile-nav flex items-center gap-5">
                {/* <IoIosSearch cursor={"pointer"}/> */}
                <FaRegCircleUser cursor={"pointer"} onClick={() => setAccountDropDown(!accountDropDown)}/>
                <BsCart3 cursor={"pointer"}/>
                <MdMenu cursor={"pointer"}/>
            </div>
            <div className='nav-right w-full'>
                <li onClick={() => {
                    setLoginModal(true)
                    setRegisterModal(false)
                }}>
                    <Link to="#">Login</Link>
                    <FaRegCircleUser fontSize={"20px"}/>
                </li>
                <li className='help'>
                    <Link to="/help">Help</Link>
                    <PiWarningCircle fontSize={"20px"}/>
                </li>
                <li>
                    <div className='cursor-pointer flex'>
                        <p>Cart</p>
                        <BsCart3 color='#08A805' fontSize={"20px"}/>
                        <p>(0)</p>
                    </div>
                </li>
                <li className='bg-secondary-color px-3 py-1 rounded-full getApp'>
                    <HiOutlineDevicePhoneMobile />
                    <Link to="/get-app">Get App</Link>
                </li>
            </div>
        </nav>

        {accountDropDown && 
            <div className='fixed right-0 bg-white top-[63px] z-[999] border'>
                <div className='p-5'>
                    <div className='flex items-center gap-[25px] mb-7'>
                        <div className="p-7 bg-gray-500 rounded-full"></div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <h1 className='text-bold text-primary-color'>Anthony Egolum...</h1>
                                <p className='text-[#6C6C6C]'>View Profile</p>
                            </div>
                            <CiPlay1 />
                        </div>
                    </div>
                    <div className='grid gap-4'>
                        <div className='flex items-center gap-3'>
                            <CiHeart className='text-primary-color text-[21px]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Wishlist</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <BsCart className='text-primary-color text-[20px]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Shopping Cart</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <LuMessagesSquare className='text-primary-color text-[20px]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Messages</p>
                        </div><div className='flex items-center gap-3'>
                            <TiDocumentText className='text-primary-color text-[20px]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Order History</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiWarningCircleThin className='text-primary-color text-[20px]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Get Help</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <TbSettings2 className='text-primary-color text-[20px]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Settings</p>
                        </div>
                        <div className='flex items-center gap-3 text-[#FF0505]'>
                            <TbLogout2 className='text-[20px]'/>
                            <p className='text-[16px]'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div className="bg-red-500 pb-[62px] lg:pb-[85px]"></div>
        <BottomNav />
        {/* <div className='bg-secondary-color py-5 mobile-search'></div> */}
        <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[90%] mx-auto my-5 mobile-search'>
            <input type="text" placeholder='Find Products' className='w-full pr-5 outline-none text-primary-color'/>
            <button className='rounded-full py-2 px-6 bg-secondary-color text-white'>Search</button>
        </div>
    </div>
  )
}

export default UnAuthenticatedNavabar