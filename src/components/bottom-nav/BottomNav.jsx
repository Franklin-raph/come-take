import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";
import Alert from '../alert/Alert';
import { IoIosArrowForward } from "react-icons/io";


const BottomNav = () => {

    const [categoryNav, setCategoryNav] = useState(false)
    const [singleCategoryNav, setSingleCategoryNav] = useState(false)
    // const categoryNavArray = ['Computing','Property','Vehicle','Home and kitchen','Mobile Phones & Tablets','Electronics','Health & Beauty',
    // 'Fashion','Sports','Pets','Baby Products','Agriculture']
    // const computerCategory = ["Laptops","Desktop","Printers","Accessories"]
    const user = JSON.parse(localStorage.getItem('user'))
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [userDetails, setUserDetails] = useState()
    const navigate = useNavigate()
    const [allCategoryArray, setAllCategoryArray] = useState([])

    async function getUserDetails(){
        const res = await fetch(`https://cometakebe-4t5h.onrender.com/complete-registration`,{
          headers:{
            Authorization:`Bearer ${user?.data[0]?.access}`
          }
        })
        const data = await res.json()
        setUserDetails(data.data)
        console.log(res, data);
      }

      async function getCatgories(){
        const res = await fetch(`https://cometakebe-4t5h.onrender.com/categories`,{
            headers:{
                Authorization:`Bearer ${user.data[0].access}`,
            },
        })
        const data = await res.json()
        setAllCategoryArray(data.data)
        // console.log(data);
      }

    useEffect(() => {
        getUserDetails()
        getCatgories()
    },[])

    function checkIsSellerVerified(){
        if(!user){
            setMsg("You have to be logged in to perform this operation")
        }if(userDetails.kyc_status === 'not_set'){
            setMsg("You have to be verified as a seller to continue with this operation")
            navigate('/verify-id')
        }else if(userDetails.kyc_status === 'pending'){
            navigate('/verify-id')
        }else if(userDetails.kyc_status === 'rejected'){
            navigate('/verify-id')
        }else{
            if(JSON.parse(localStorage.getItem('my-sub')) === null){
                setMsg("You don't have an active subscription plan at the moment, please subscribe in order to continue with this operation")
                navigate('/subscription-plan')
            }else{
                navigate('/shop-set-up')
            }
        }
    }

    function checkSellersSub(){
        if(!user){
            setMsg("You have to be logged in to perform this operation")
        }if(userDetails.kyc_status === 'not_set'){
            setMsg("You have to be verified as a seller to continue with this operation")
            navigate('/verify-id')
        }else if(userDetails.kyc_status === 'pending'){
            navigate('/verify-id')
        }else if(userDetails.kyc_status === 'rejected'){
            navigate('/verify-id')
        }else{
            if(JSON.parse(localStorage.getItem('my-sub')) === null){
                setMsg("You don't have an active subscription plan at the moment, please subscribe in order to continue with this operation")
                navigate('/subscription-plan')
            }else if(userDetails.updated_store === false){
                setMsg("You have to set up your shop before you can list a product..")
                navigate('/shop-set-up')
            }else{
                navigate('/list-product')
            }
        }
    }


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
            <li onClick={() => checkSellersSub()}>
                List Product
            </li>
            {userDetails &&
                <>
                    {userDetails?.subscription_plan !== null &&
                        <>
                            {
                                userDetails?.updated_store === true ?
                                ""
                                :
                                <li onClick={() => checkIsSellerVerified()}>
                                    Sell Products
                                </li>
                            }
                        </>
                    }
                </>
            }
            {/* <li>
                <Link to="#">Trending Products</Link>
            </li> */}
            <li onClick={() => {
                if(!user){
                    setMsg("You have to be logged in to perform this operation")
                    return;
                }else{
                    navigate("/vtu-services")
                }
            }}>
                VTU
            </li>
        </ul>
{/* top-[135px] */}
        {
            categoryNav &&
            <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setCategoryNav(false)}></div>
                <div className='fixed left-0 bg-white px-12 py-5 w-[35%] top-[0] z-[100] rounded-[4px] h-[100vh] overflow-y-scroll'>
                    <p className='text-black font-bold text-[20px] mb-2'>Categories</p>
                    {
                        allCategoryArray && allCategoryArray.map(item => (
                            <div className='flex items-center justify-between hover:bg-gray-300 px-3 py-2 my-[16px] cursor-pointer w-full' onClick={() => {
                                navigate(`/search-product-category?product_category=${item.name}`)
                                setCategoryNav(false)
                            }}>
                                <p className='text-[#1C1C1C]'>{item.name}</p>
                                <IoIosArrowForward className='text-primary-color'/>
                            </div>
                        ))
                    }
                </div>
            </>
        }
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType}/>}
        {/* {
            singleCategoryNav &&
            <div className='absolute left-[25.1%] bg-white px-12 pb-5 pt-[40px] w-[25%] top-[65px] z-[90] rounded-[4px] h-[460px]'>
                <p className='text-black font-bold text-[20px] mb-2'>Computer</p>
                {
                    computerCategory.map(item => (
                        <p className='text-[#1C1C1C] my-[8px] cursor-pointer'>{item}</p>
                    ))
                }
            </div>
        } */}
    </div>
  )
}

export default BottomNav