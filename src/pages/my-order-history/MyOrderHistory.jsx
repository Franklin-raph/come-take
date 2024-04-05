import React, { useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import laptop1 from "../../assets/category-product-preview.png"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SlTrash } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";

const MyOrder = () => {

    const [orderHistory, setOrderHistory] = useState(false)
    const [deleteItem, setDeleteItem] = useState(false)
    const navigate = useNavigate()

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='flex justify-between items-center mb-8 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                        <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>My Shop</h1>
                        <button onClick={() => setOrderHistory(!orderHistory)}>Click me</button>
                    </div>
                {orderHistory &&
                    <div>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                            <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Item Here yet</p>
                            <p className='text-[#6C6C6C] text-[20px] text-center'>all your Listed Items will appear here</p>
                        </div>
                    </div>
                }

                {!orderHistory &&
                <div>
                    <div className='pb-[0.5rem] flex-[2] mb-8 items-start justify-between hidden md:flex' style={{borderBottom:"1px solid #DCDCDC"}}>
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
                                        <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(true)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] mb-8 md:hidden' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div>
                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full mt-5'>
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
                                <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(true)}/>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] flex-[2] mb-8 items-start justify-between hidden md:flex' style={{borderBottom:"1px solid #DCDCDC"}}>
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
                                        <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(true)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] mb-8 md:hidden' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div>
                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full mt-5'>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center gap-2 py-1 px-2 rounded-full' style={{border:"1px solid #B6B6B6"}}>
                                    <RiVerifiedBadgeFill color='#DF9007'/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}}>Unlist Item</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-3 justify-end'>
                                <AiOutlineEdit fontSize={"24px"} color='#292D32'/>
                                <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(true)}/>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] flex-[2] mb-8 items-start justify-between hidden md:flex' style={{borderBottom:"1px solid #DCDCDC"}}>
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
                                        <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(true)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-[0.5rem] mb-8 md:hidden' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-full'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div>
                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                <p className='text-[#898989] text-[12px] my-2'>Date Listed : 03/04/2024</p>
                                <p className='text-[#898989] text-[12px]'>Price; #115,000</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full mt-5'>
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
                                <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(true)}/>
                            </div>
                        </div>
                    </div>

                </div>
                }
                </div>
            </div>
        </div>

            {/* DELETE ITEM MODAL */}
            {deleteItem &&
                <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
                    <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                        <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                            <p className='text-[#333333] text-[20px]'>Delete Product</p>
                            <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setDeleteItem(false)}/>
                        </div>
                        <p className='text-[#5C5C5C] md:m-8 m-4 text-center md:text-left text-[14px] md:text-[16px]'>
                            Are you sure you want to permanently remove this Product from your Product List?. Remember that this action cannot be reversed
                        </p>
                        <div className='flex items-center justify-start md:ml-8 md:gap-[40px] md:flex-row flex-col-reverse gap-[10px]'>
                            <button className='text-secondary-color px-8 py-2 rounded-full border border-secondary-color' onClick={() => setDeleteItem(false)}>No, Cancel</button>
                            <button className='text-white bg-[#FF0000] px-8 py-2 rounded-full border-secondary-color'>Yes, Delete</button>
                        </div>
                    </div>
                </div>
            }
    </div>
  )
}

export default MyOrder