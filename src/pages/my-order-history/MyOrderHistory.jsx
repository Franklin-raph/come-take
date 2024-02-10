import React, { useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import laptop1 from "../../assets/category-product-preview.png"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SlTrash } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {

    const [orderHistory, setOrderHistory] = useState(false)
    const navigate = useNavigate()

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='flex justify-between items-center mb-8 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                        <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>Order</h1>
                        <button onClick={() => setOrderHistory(!orderHistory)}>Click me</button>
                    </div>
                {orderHistory &&
                    <div>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                            <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Item Here yet</p>
                            <p className='text-[#6C6C6C] text-[20px]'>all your Listed Items will appear here</p>
                        </div>
                    </div>
                }

                {!orderHistory &&
                <div>
                    <div className='pb-[0.5rem] flex-[2] mb-8 flex items-start justify-between' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div className='flex items-start justify-between w-full'>
                                <div>
                                    <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                    <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                    <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-2 py-1 px-2 rounded-full' style={{border:"1px solid #B6B6B6"}}>
                                            <RiVerifiedBadgeFill color='#DF9007'/>
                                            <p className='text-[#4E4E4E] text-[12px]'>Advertise Item</p>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}}>Unlist Item</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3 justify-end'>
                                        <AiOutlineEdit fontSize={"24px"} color='#292D32'/>
                                        <SlTrash fontSize={"18px"} color='#FF0505'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] flex-[2] mb-8 flex items-start justify-between' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div className='flex items-start justify-between w-full'>
                                <div>
                                    <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                    <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                    <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-2 py-1 px-2 rounded-full' style={{border:"1px solid #B6B6B6"}}>
                                            <RiVerifiedBadgeFill color='#DF9007'/>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}}>List Item</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3 justify-end'>
                                        <AiOutlineEdit fontSize={"24px"} color='#292D32'/>
                                        <SlTrash fontSize={"18px"} color='#FF0505'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] flex-[2] mb-8 flex items-start justify-between' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div className='flex items-start justify-between w-full'>
                                <div>
                                    <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                    <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                    <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-2 py-1 px-2 rounded-full' style={{border:"1px solid #B6B6B6"}}>
                                            <RiVerifiedBadgeFill color='#DF9007'/>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}}>List Item</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3 justify-end'>
                                        <AiOutlineEdit fontSize={"24px"} color='#292D32'/>
                                        <SlTrash fontSize={"18px"} color='#FF0505'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] flex-[2] mb-8 flex items-start justify-between' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div className='flex items-start justify-between w-full'>
                                <div>
                                    <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                    <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                    <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center gap-2 py-1 px-2 rounded-full' style={{border:"1px solid #B6B6B6"}}>
                                            <RiVerifiedBadgeFill color='#DF9007'/>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}}>List Item</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3 justify-end'>
                                        <AiOutlineEdit fontSize={"24px"} color='#292D32'/>
                                        <SlTrash fontSize={"18px"} color='#FF0505'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                }
                </div>

            </div>
        </div>
    </div>
  )
}

export default MyOrder