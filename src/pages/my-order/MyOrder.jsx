import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { CiUser } from "react-icons/ci";
import { LuMessagesSquare, LuUserX2 } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';
import { BsClock } from "react-icons/bs";
import { IoChevronDown } from 'react-icons/io5';
import orderHistoryImage from "../../assets/history.png"

const MyOrder = () => {

    const [orders, setOrders] = useState(false)

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <div className='flex flex-[0.6] w-[100%] items-center px-5 lg:py-0 h-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
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

                {!orders &&
                    <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                        <div>
                            <h1 className='text-[#003C2F] text-[24px] font-bold mb-8 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Order</h1>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                                <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Transaction History</p>
                                <p className='text-[#6C6C6C] text-[20px]'>You have not made any purchase recently</p>
                            </div>
                        </div>
                    </div>
                }

                {orders &&
                    <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                        <div>
                            <h1 className='text-[#003C2F] text-[24px] font-bold mb-8 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Order</h1>
                            <div className='flex items-center justify-center flex-col'>
                                <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                                <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Transaction History</p>
                                <p className='text-[#6C6C6C] text-[20px]'>You have not made any purchase recently</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default MyOrder