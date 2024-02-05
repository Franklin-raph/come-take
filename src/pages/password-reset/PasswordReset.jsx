import React from 'react'
import { IoMdStar } from 'react-icons/io'
// import { GoEyeClosed } from "react-icons/ci";
import { LuMessagesSquare, LuUserX2 } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';
import { BsClock } from "react-icons/bs";
import { IoChevronDown } from 'react-icons/io5';
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { GoEyeClosed } from 'react-icons/go';

const PasswordReset = () => {
  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-8 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Password Settings</h1>
                        <div style={{border:"1px solid #CCCCCC"}} className='rounded-[6px] flex items-center justify-between px-4'>
                            <input type="text" placeholder='Current Password' className='w-full outline-none py-3 rounded-[6px] text-[#1A1A1A]'/>
                            <GoEyeClosed color='#B6B6B6' fontSize={"24px"}/>
                        </div>
                        <div style={{border:"1px solid #CCCCCC"}} className='rounded-[6px] flex items-center justify-between px-4 my-7'>
                            <input type="text" placeholder='New Password' className='w-full outline-none py-3 rounded-[6px] text-[#1A1A1A]'/>
                            <GoEyeClosed color='#B6B6B6' fontSize={"24px"}/>
                        </div>
                        <div style={{border:"1px solid #CCCCCC"}} className='rounded-[6px] flex items-center justify-between px-4'>
                            <input type="text" placeholder='Confirm Password' className='w-full outline-none py-3 rounded-[6px] text-[#1A1A1A]'/>
                            <GoEyeClosed color='#B6B6B6' fontSize={"24px"}/>
                        </div>
                        <button className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PasswordReset