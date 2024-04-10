import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";
import { CiBellOn, CiHeart } from "react-icons/ci";
import { PiWarningCircle } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import BottomNav from '../bottom-nav/BottomNav';
import { IoCubeOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import { BsCart, BsClock } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { TbHome } from "react-icons/tb";
import { LuMessagesSquare, LuUserX2 } from "react-icons/lu";
import { IoTriangleSharp } from "react-icons/io5";
import { IoChevronDown, IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { CiShop } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoDownloadOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { GrVirtualStorage } from "react-icons/gr";


const UnAuthenticatedNavabar = ({ setLoginModal, setRegisterModal, baseUrl }) => {

    const [desktopAccountDropDown, setDesktopAccountDropDown] = useState(false)
    const [mobileAccountDropDown, setMobileAccountDropDown] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))
    const [mobileNav, setMobileNav] = useState(false)
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState()

    async function getUserDetails(){
        const res = await fetch(`${baseUrl}/complete-registration`,{
          headers:{
            Authorization:`Bearer ${user.data[0].access}`
          }
        })
        const data = await res.json()
        setUserDetails(data.data)
        console.log(res, data);
      }
    
      useEffect(() =>{
        // alert("helo")
        getUserDetails()
      },[])

  return (
    <div>
        <nav className='flex items-center justify-between py-5 px-8 lg:px-12 bg-primary-color text-white text-[15px] fixed top-0 w-full self-start z-50'>
            <div className='flex items-center justify-start gap-8 w-full'>
                <Link to="/" className='block'>Logo</Link>
                {/* <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[70%] search-bar'>
                    <input type="text" placeholder='Find Products' className='w-full pr-5 outline-none text-primary-color'/>
                    <button className='rounded-full py-2 px-6 bg-secondary-color'>Search</button>
                </div> */}
            </div>
            <div className="mobile-nav flex items-center gap-5">
                {/* <IoIosSearch cursor={"pointer"}/> */}
                <IoNotificationsOutline cursor={"pointer"} fontWeight={"bold"} onClick={() => navigate('/messages')}/>
                <FaRegCircleUser cursor={"pointer"} onClick={() => {
                    if(!user){
                        setLoginModal(true)
                    }else{
                        setMobileAccountDropDown(!mobileAccountDropDown)
                    }
                    }}/>
                <MdMenu cursor={"pointer"} onClick={() => setMobileNav(true)}/>
            </div>
            <div className='nav-right w-full'>
                {
                user ? 
                <li className='relative' onClick={() => {
                    setDesktopAccountDropDown(!desktopAccountDropDown)
                }}>
                    <FaRegCircleUser fontSize={"20px"}/>
                    <Link to="#">Account</Link>
                    <IoChevronDown fontSize={"20px"} />

                    { desktopAccountDropDown &&
                        <ul className='fixed bg-white z-50 top-[57px] translate-x-[-20px] rounded-md mt-[10px]' style={{ border:"1px solid #DCDCDC" }}>
                            <div className='flex items-center justify-center mt-[-18px]'>
                                <IoTriangleSharp color='white' fontSize={"20px"}/>
                            </div>
                            <p className='text-[#333333] text-[14px] text-center mt-2 pb-1' style={{ borderBottom:"1px solid #DCDCDC" }}>Hi, {userDetails && userDetails.first_name} {userDetails && userDetails.last_name}</p>
                            <li onClick={() => navigate('/my-profile')} className='mt-4 px-[15px]'>
                                <div className='cursor-pointer flex items-center gap-3 justify-center text-center'>
                                    <FaRegCircleUser fontSize={"20px"} color='#434343'/>
                                    <p className='text-[#434343] text-[14px]'>My Account</p>
                                </div>
                            </li>
                            <li onClick={() => navigate('/saved-items')} className='my-3 px-[15px]'>
                                <div className='cursor-pointer flex items-center gap-3'>
                                    <CiHeart color='#FF3030' fontSize={"20px"}/>
                                    <p className='text-[#434343] text-[14px]'>Saved Item</p>
                                </div>
                            </li>
                            <li className='inline-flex items-center gap-3 cursor-pointer mb-4 text-center justify-center px-[15px]' onClick={() => {
                                localStorage.clear()
                                location.href = "/"
                            }} >
                                <TbLogout2 className='text-[#292D32] text-[20px] font-[700]'/>
                                <p className='text-[14px] text-[#434343]'>Logout</p>
                            </li>
                        </ul>
                    }

                </li> 
                :
                <li onClick={() => {
                    setLoginModal(true)
                    setRegisterModal(false)
                }}>
                    <Link to="#">Login</Link>
                    <FaRegCircleUser fontSize={"20px"}/>
                </li>
                }
                <li className='help flex items-center'>
                    <PiWarningCircle fontSize={"20px"}/>
                    <Link to="/help">Help</Link>
                    <IoChevronDown fontSize={"20px"} />
                </li>
                <li onClick={() => navigate('/saved-items')}>
                    <div className='cursor-pointer flex'>
                        <p>Saved</p>
                        <CiHeart color='#FF3030' fontSize={"20px"}/>
                        <p>(0)</p>
                    </div>
                </li>
                <li>
                    <CiBellOn fontSize={"20px"} onClick={() => navigate('/messages')}/>
                </li>
                <li className='bg-secondary-color px-3 py-1 rounded-full getApp'>
                    <HiOutlineDevicePhoneMobile />
                    <Link to="/get-app">Get App</Link>
                </li>
            </div>
        </nav>

        {
            mobileNav &&
            <div className='fixed z-[999] w-full h-full' style={{ background:"rgba(0, 0, 0, 0.7)" }}>
                <ul className='bg-white w-[50%] px-5 py-[20px] flex flex-col gap-[.8rem]'>
                    <li className='flex items-center justify-between mb-6'>
                        <p>Logo</p>
                        <MdClose color='#797979' fontSize={"25px"} cursor={"pointer"} onClick={() => setMobileNav(false)}/>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="/" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <TbHome fontSize={"20px"} color='#797979'/>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="/categories" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <BiCategory fontSize={"20px"} color='#797979'/>
                            <p>Categories</p>
                        </Link>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="/saved-items" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <CiHeart fontSize={"20px"} color='#797979'/>
                            <p>Saved Items</p>
                        </Link>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="#" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <GrVirtualStorage fontSize={"20px"} color='#797979'/>
                            <p>VTU</p>
                        </Link>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="/shop-set-up" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <IoCubeOutline fontSize={"20px"} color='#797979'/>
                            <p>Sell Product</p>
                        </Link>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="/shop-set-up" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <CiShop fontSize={"20px"} color='#797979'/>
                            <p>My Shop</p>
                        </Link>
                    </li>
                    <li className='text-[15px] mb-3'>
                        <Link to="/shop-set-up" onClick={() => setMobileNav(false)} className='flex items-center gap-3 text-[#333333]'>
                            <IoDownloadOutline fontSize={"20px"} color='#797979'/>
                            <p>Download App</p>
                        </Link>
                    </li>
                    <li className='text-[15px]'>
                        <Link to="#" onClick={() => setMobileNav(false)}  className='flex items-center gap-3 text-[#333333]'>
                            <PiWarningCircleLight fontSize={"22px"} color='#797979' style={{ transform:"rotate(180deg)" }}/>
                            <p>About Us</p>
                        </Link>
                    </li>
                </ul>
            </div>
        }

        {/* {accountDropDown && 
            <div className='fixed right-0 bg-white top-[63px] z-[999] border'>
                <div className='p-5'>
                    <div className='flex items-center gap-[25px] mb-7'>
                        <div className="p-7 bg-gray-500 rounded-full"></div>
                        <div className='flex items-center gap-2'>
                            <div>
                                <h1 className='text-bold text-primary-color'>Anthony Egolum...</h1>
                                <p className='text-[#6C6C6C] cursor-pointer' onClick={() => {
                                    navigate("/my-profile")
                                    setAccountDropDown(!accountDropDown)
                                }}>View Profile</p>
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
        } */}

        

        {mobileAccountDropDown && 
            <div className='fixed right-0 bg-white top-[63px] z-[999] border w-full'>
                <div className='p-5'>
                    <div className='flex items-start gap-[20px] mb-7'>
                        <div className="p-2 rounded-full text-[30px]" style={{ border:"1px solid #6C6C6C" }}>
                            <HiOutlineUser color='#6C6C6C'/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='cursor-pointer' onClick={() => {
                                    navigate("/my-profile")
                                    setMobileAccountDropDown(!mobileAccountDropDown)
                                }}>
                                <h1 className='text-bold text-primary-color'>{userDetails && userDetails.first_name} {userDetails && userDetails.last_name}</h1>
                                <p className='text-[#6C6C6C] mt-[-5px]'>{userDetails && userDetails.email}</p>
                                <p className='text-secondary-color font-[700]'>Account Settings</p>
                            </div>
                            {/* <CiPlay1 /> */}
                        </div>
                    </div>
                    <div className='grid gap-4 grid-cols-2'>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => {
                            navigate("/saved-items")
                            setMobileAccountDropDown(!mobileAccountDropDown)
                        }}>
                            <CiHeart className='text-[21px] text-[#FF0505]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Saved Items</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => {
                            setMobileAccountDropDown(!mobileAccountDropDown)
                            navigate('/messages')
                        }}>
                            <CiBellOn className='text-[#292D32] text-[20px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Notifications</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <BsClock className='text-[#292D32] text-[18px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Pending Reviews</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <CiShop className='text-[#292D32] text-[20px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>List Product</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer' onClick={() => {
                            setMobileAccountDropDown(!mobileAccountDropDown)
                            navigate('/my-shop')
                        }}>
                            <CiShop className='text-[#292D32] text-[20px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>My Shop</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <BiSolidPhoneCall className='text-[#292D32] text-[20px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Contact Us</p>
                        </div>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            <LuUserX2 className='text-[#292D32] text-[20px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Delete Account</p>
                        </div>
                        <div className='inline-flex items-center gap-3 cursor-pointer' onClick={() => {
                            localStorage.clear()
                            location.href = "/"
                        }} >
                            <TbLogout2 className='text-[#292D32] text-[20px] font-[700]'/>
                            <p className='text-[16px] text-[#6C6C6C]'>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div className="bg-white pb-[62px] lg:pb-[70px]"></div>
        <BottomNav />
        {/* <div className='bg-secondary-color py-5 mobile-search'></div> */}
        {/* <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[90%] mx-auto my-5 mobile-search'>
            <input type="text" placeholder='Find Products' className='w-full pr-5 outline-none text-primary-color'/>
            <button className='rounded-full py-2 px-6 bg-secondary-color text-white'>Search</button>
        </div> */}
    </div>
  )
}

export default UnAuthenticatedNavabar