import React, { useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { FaEnvelope } from "react-icons/fa";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MessageContent = () => {

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
                    <h1 className='text-[#B6B6B6] text-[24px] font-bold pb-3'>Inbox <span className='text-[#003C2F]'>Message content</span> </h1>
                    <button onClick={() => setMessages(!messages)} className='text-[#FF3030]'>Mark all as read</button>
                </div>

                <div className='flex items-start flex-col gap-3 bg-[#EDEDED] mt-[50px] px-5 py-7 rounded-[20px]' style={{border: "0.7px solid #003C2F"}}>
                    <div style={{backgroundColor:"#FCF4E6", padding:"11px", borderRadius:"50px"}}>
                        <FaEnvelope color='#FF9999' fontSize={"22px"}/>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <p className='text-[20px] text-[#1C1C1C] font-[700]'>Thank you for your patronage</p>
                        </div>
                        <p className='text-[#6C6C6C] text-[16px]'>Curabitur sit amet purus justo.. Curabitur sit amet purus justo  odales ligula. Pellentesque in odio quam. Sed
                        dapibus justo tincidunt massa eleifend faucibus. Sed tempus sit amet tortor vitae mattis. Nulla</p>
                        <p className='text-[#6C6C6C] mt-2'>2024 / 02 / 02 05:34</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageContent