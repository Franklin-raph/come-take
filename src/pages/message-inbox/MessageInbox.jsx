import React, { useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { FaEnvelope } from "react-icons/fa";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MessageInbox = () => {

    const [messages, setMessages] = useState(false)
    const [read, setRead] = useState(false)

    const tabsArray = ['Unread','Read']
    const [activeTab, setActiveTab] = useState(tabsArray[0]);
    const navigate = useNavigate()

    function handleTabClick(tab){
        setActiveTab(tab)
        if(tab === 'Unread'){
            setRead(false)
        }
        if(tab === 'Read'){
            setRead(true)
        }
        console.log(tab);
    }

  return (
    <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
        <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
            <ProfileSideNav />
            <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className='flex justify-between items-center mb-5 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                    <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>Inbox <span className='text-[#B6B6B6]'>(3)</span> </h1>
                    <button onClick={() => setMessages(!messages)} className='text-[#FF3030]'>Mark all as read</button>
                </div>
            {messages &&
                <div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                        <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>You do not have any messages yet</p>
                        <p className='text-[#6C6C6C] text-[20px]'>all your conversations will appear here</p>
                    </div>
                </div>
            }

            {!messages &&
            <div>
                <div className='flex items-center gap-[30px] text-[#989898] '>
                    {tabsArray.map(tab => (
                        <p className={`cursor-pointer ${activeTab === tab ? 'active-msg-tab' : ''}`} onClick={() => handleTabClick(tab)}>{tab}</p>
                    ))}
                </div>

                <div>
                    {!read &&
                        <>
                            <div className='flex items-center gap-5 bg-[#EDEDED] mt-[20px] p-4 rounded-[20px]' style={{border: "0.7px solid #003C2F"}}>
                                <div style={{backgroundColor:"#FCF4E6", padding:"11px", borderRadius:"50px"}}>
                                    <FaEnvelope color='#FF9999' fontSize={"22px"}/>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#E4A331] w-[9px] h-[9px] rounded-full'></div>
                                        <p className='text-[20px] text-primary-color'>Ijele Computer Hub</p>
                                    </div>
                                    <p className='text-[#6C6C6C] text-[16px]'>Hello, Mr Anthony, Welcome to our shop.  fermentum diam. Curabitur sit amet purus justo.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 bg-[#EDEDED] mt-[20px] p-4 rounded-[20px]' style={{border: "0.7px solid #003C2F"}}>
                                <div style={{backgroundColor:"#FCF4E6", padding:"11px", borderRadius:"50px"}}>
                                    <FaEnvelope color='#FF9999' fontSize={"22px"}/>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#E4A331] w-[9px] h-[9px] rounded-full'></div>
                                        <p className='text-[20px] text-primary-color'>Ijele Computer Hub</p>
                                    </div>
                                    <p className='text-[#6C6C6C] text-[16px]'>Hello, Mr Anthony, Welcome to our shop.  fermentum diam. Curabitur sit amet purus justo.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 bg-[#EDEDED] mt-[20px] p-4 rounded-[20px]' style={{border: "0.7px solid #003C2F"}}>
                                <div style={{backgroundColor:"#FCF4E6", padding:"11px", borderRadius:"50px"}}>
                                    <FaEnvelope color='#FF9999' fontSize={"22px"}/>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <div className='bg-[#E4A331] w-[9px] h-[9px] rounded-full'></div>
                                        <p className='text-[20px] text-primary-color'>Ijele Computer Hub</p>
                                    </div>
                                    <p className='text-[#6C6C6C] text-[16px]'>Hello, Mr Anthony, Welcome to our shop.  fermentum diam. Curabitur sit amet purus justo.</p>
                                </div>
                            </div>
                        </>
                    }
                    
                    {read && 
                        <div className='flex items-center gap-5 bg-[#EDEDED] mt-[20px] p-4 rounded-[20px]' style={{border: "0.7px solid #003C2F"}}>
                            <div style={{backgroundColor:"#E6ECEA", padding:"11px", borderRadius:"50px"}}>
                                <FaEnvelope color='#989898' fontSize={"22px"}/>
                            </div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-[#989898] w-[9px] h-[9px] rounded-full'></div>
                                    <p className='text-[20px] text-[#989898]'>Ijele Computer Hub</p>
                                </div>
                                <p className='text-[#6C6C6C] text-[16px]'>Hello, Mr Anthony, Welcome to our shop.  fermentum diam. Curabitur sit amet purus justo.</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            }
            </div>

        </div>
    </div>
  )
}

export default MessageInbox