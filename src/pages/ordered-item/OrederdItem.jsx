import React, { useState } from 'react'
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import laptop1 from "../../assets/category-product-preview.png"

const OrederdItem = () => {

    const [orderHistory, setOrderHistory] = useState(false)


  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='flex justify-between items-center mb-8 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                        <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>Order</h1>
                    </div>

                    <div className='pb-[1.8rem] pt-[0.5rem] flex-[2] mb-8 flex items-start justify-between' style={{borderBottom:"1px solid #DCDCDC"}}>
                        <div className='flex items-center gap-[20px] w-[70%]'>
                            <img src={laptop1} className='w-[15%]'/>
                            <div>
                                <p className='text-[16px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                <p className='text-[#898989] text-[12px] mt-2'>Quantity: 1</p>
                                <p className='text-[#003C2F] text-[12px] mt-1'>Price:#115,000</p>
                                <div className='flex items-center gap-[8px]'>
                                    <p className='text-[#2B5D52] text-[10px] px-[36px] text-center my-2 py-[5px] rounded-[10px] inline-block' style={{border:"1px solid #2B5D52"}}>Delivered</p>
                                    <p className='text-[10px] px-[36px] text-center my-2 py-[5px] rounded-[10px] inline-block text-[#FF9999]' style={{border:"1px solid #FF9999"}}>Non Refund</p>
                                    <p className='text-[#003C2F] text-[12px]'>On 14/01/2024</p>
                                </div>
                                <p className='text-[#898989] text-[12px]'>03/04/2024</p>
                                <p className='text-[#898989] text-[12px] mt-1'>The return period will end on 17th January 2024. <span className='text-[#FF0505]'>Kindly click to access the return policy</span> </p>
                            </div>
                        </div>
                        <button className='text-[#4E4E4E] text-[12px] rounded-full px-[15px] py-[5px]' style={{border:"1px solid #B6B6B6"}}>View Order Status</button>
                    </div>

                    <div className='flex items-center'>
                        <div>
                            <p className='text-[20px] text-primary-color pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Payment Information</p>
                            <div>
                                <p>Payment Method</p>
                                <p className='text-[#898989]'>Payed with Card</p>
                            </div>
                            <div>
                                <p>Payment Details</p>
                                <p>Item Price: #115,000</p>
                                <p>Delivery: #4500</p>
                            </div>
                            <div>
                                <p>Payment Method</p>
                                <p>Payed with Card</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrederdItem
