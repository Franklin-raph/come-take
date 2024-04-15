import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";
import Alert from '../alert/Alert';

const BottomNav = () => {

    const [categoryNav, setCategoryNav] = useState(false)
    const [singleCategoryNav, setSingleCategoryNav] = useState(false)
    const categoryNavArray = ['Computing','Property','Vehicle','Home and kitchen','Mobile Phones & Tablets','Electronics','Health & Beauty',
    'Fashion','Sports','Pets','Baby Products','Agriculture']
    const computerCategory = ["Laptops","Desktop","Printers","Accessories"]
    const user = JSON.parse(localStorage.getItem('user'))
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [userDetails, setUserDetails] = useState()
    const navigate = useNavigate()

    async function getUserDetails(){
        const res = await fetch(`https://api.yamltech.com/complete-registration`,{
          headers:{
            Authorization:`Bearer ${user?.data[0]?.access}`
          }
        })
        const data = await res.json()
        setUserDetails(data.data)
        console.log(res, data);
      }

    useEffect(() => {
        getUserDetails()
    },[])

    function checkIsSellerVerified(){
        if(!user){
            setMsg("You have to be logged in to perform this operation")
        }
        if(userDetails.kyc_status === 'pending'){
            navigate('/verify-id')
        }else if(userDetails.kyc_status === 'rejected'){
            navigate('/verify-id')
        }else{
            navigate('/shop-set-up')
        }
    }

    function checkSellersSub(){
        console.log(userDetails);
        if(!user){
            setMsg("You have to be logged in to perform this operation")
        }
        if(userDetails.subscription_plan === null){
            setMsg("You don't have an active subscription plan at the moment, please subscribe in order to continue with this operation")
            navigate('/subscription-plan')
        }else{
            navigate('/list-product')
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
            <li onClick={() => checkIsSellerVerified()}>
                Sell Products
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
            <div className='absolute left-0 bg-white px-12 py-5 w-[25%] top-[65px] z-[90] rounded-[4px] h-[460px]'>
                <p className='text-black font-bold text-[20px] mb-2'>Categories</p>
                {
                    categoryNavArray.map(item => (
                        <p className='text-[#1C1C1C] my-[8px] cursor-pointer' onClick={() => setSingleCategoryNav(!singleCategoryNav)} >{item}</p>
                    ))
                }
            </div>
        }
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType}/>}
        {
            singleCategoryNav &&
            <div className='absolute left-[25.1%] bg-white px-12 pb-5 pt-[40px] w-[25%] top-[65px] z-[90] rounded-[4px] h-[460px]'>
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