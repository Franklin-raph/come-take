import { CiUser } from "react-icons/ci";
import { LuMessagesSquare, LuUserX2 } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';
import { BsClock } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileSideNav = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [userDetails, setUserDetails] = useState()
    const user = JSON.parse(localStorage.getItem('user'))

    async function getUserDetails(){
        const res = await fetch(`https://api.yamltech.com/complete-registration`,{
          headers:{
            Authorization:`Bearer ${user?.data[0]?.access}`
          }
        })
        const data = await res.json()
        setUserDetails(data.data)
        // console.log(res, data);
      }

    useEffect(() => {
        getUserDetails()
    },[])

  return (
        <div className='flex flex-[0.6] w-[100%] items-center px-5 lg:py-0 h-full profile-side-nav' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
            <div className='my-10 w-full'>
                <div className="w-full">
                    <div className='flex items-center gap-2 mb-3'>
                        <CiUser color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>My Profile</p>
                    </div>
                    <ul className='ml-3 grid gap-2 w-full'>
                        {location.pathname === "/my-profile" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/my-profile')}>Account Information</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-profile')}>Account Information</li>}
                        {location.pathname === "/password-reset" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/password-reset')}>Security Settings</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/password-reset')}>Security Settings</li>}
                        {location.pathname === "/saved-items" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/saved-items')}>Saved Items</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/saved-items')}>Saved Items</li>}
                        {location.pathname === "/messages" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/messages')}>Notification</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/messages')}>Notification</li>}
                    </ul>
                </div>
                {
                    userDetails && userDetails.is_seller === true ?
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <TiDocumentText color='#292D32' fontSize={"18px"}/>
                            <p className='text-[18px] font-[500]'>My Shop</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            {location.pathname === "/my-shop" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/my-shop')}>My Shop</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-shop')}>My Shop</li>}
                            {location.pathname === "/update-shop" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/update-shop')}>Update Shop</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/update-shop')}>Update Shop</li>}
                        </ul>
                    </div>
                    :
                    ""
                }

                {/* <div className='mt-10'>
                    <div className='flex items-center gap-2 mb-3'>
                        <BsClock color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>Reviews</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer'>Pending Reviews</li>
                    </ul>
                </div> */}
                <div className='mt-10'>
                    <div className='flex items-center gap-2 mb-3'>
                        <LuUserX2 color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>Deactivate Account</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#FF0505] text-[16px] cursor-pointer'>Deactivate Account</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ProfileSideNav