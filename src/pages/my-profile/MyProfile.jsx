import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { CiUser } from "react-icons/ci";
import { LuMessagesSquare, LuUserX2 } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';
import { BsClock } from "react-icons/bs";
const MyProfile = () => {
  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <div className='flex flex-[0.5] w-[100%] items-center px-5 lg:py-0 h-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                   <div className='my-10'>
                    <div>
                        <div className='flex items-center gap-2 mb-3'>
                            <CiUser color='#292D32' fontSize={"24px"}/>
                            <p className='text-[24px] font-[500]'>My Profile</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            <li className='text-[#6C6C6C] text-[20px]'>Account Information</li>
                            <li className='text-[#6C6C6C] text-[20px]'>Security Settings</li>
                            <li className='text-[#6C6C6C] text-[20px]'>Edit Phone Number</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <LuMessagesSquare color='#292D32' fontSize={"24px"}/>
                            <p className='text-[24px] font-[500]'>Messages</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            <li className='text-[#6C6C6C] text-[20px]'>Inbox</li>
                            <li className='text-[#6C6C6C] text-[20px]'>Sent Messages</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <TiDocumentText color='#292D32' fontSize={"24px"}/>
                            <p className='text-[24px] font-[500]'>My Order</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            <li className='text-[#6C6C6C] text-[20px]'>Order History</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <BsClock color='#292D32' fontSize={"24px"}/>
                            <p className='text-[24px] font-[500]'>Reviews</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            <li className='text-[#6C6C6C] text-[20px]'>Pending Reviews</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <LuUserX2 color='#292D32' fontSize={"24px"}/>
                            <p className='text-[24px] font-[500]'>Delete Account</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            <li className='text-[#6C6C6C] text-[20px]'>Delete Account</li>
                        </ul>
                    </div>


                    
                   </div>
                </div>

                <div className='gap-[0rem] px-5 pb-[3rem] pt-[2.5rem] flex-[2]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <h1 className='text-[#003C2F] text-[24px] font-bold mb-3 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Account Information</h1>

                    <div className="md:w-[55%] mt-[1rem] md:mt-[0]">
                        <p className='text-[24px] leading-[1.5] lg:leading-[1.8]'>
                            Lenovo V15 G3 Iap Laptop (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos) -82tt00juue
                        </p>
                        <p className='text-[#898989] my-3'>Brand: Lenovo</p>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                            </div>
                            <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                        </div>
                        <div className='h-[1px] bg-[#ccc] my-4 md:block hidden'></div>
                        <div className='flex items-center gap-5 justify-between lg:justify-start'>
                            <p className='text-[35px]'>#150,000</p>
                            <p className='text-[#34343457] text-[20px] line-through'>#115,000</p>
                        </div>
                        <p className='text-[#ff3030] lg:block hidden'>Fairly Used</p>
                        <div className='h-[1px] bg-[#ccc] my-4'></div>
                        <div className="flex items-center gap-4 justify-between">
                            <p className='text-[#ff3030] lg:hidden block'>Fairly Used</p>
                            <div className="flex items-center gap-4 mt-2">
                                <p className='text-[#898989]'>Quantity</p>
                                <div className='flex items-center justify-center gap-2 border border-[#B5AEAE] rounded-[4px] w-[120px] text-center h-[30px]'>
                                    <p style={{ borderRight:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>-</p>
                                    <p className='flex-1'>1</p>
                                    <p style={{ borderLeft:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>+</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[15px] mt-6">
                            <button className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%]'>Buy Now</button>
                            <button className='rounded-[5px] text-primary-color border border-primary-color px-[20px] md:px-[35px] py-[8px] w-[50%]'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile