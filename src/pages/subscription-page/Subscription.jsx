import React from 'react'

const Subscription = () => {
  return (
    <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
      <div className='text-center'>
        <p className='text-[40px]'>Welcome to ComeTake stores subscription</p>
        <p className='text-[20px] text-[#6C6C6C]'>Select one of the subscription option that suits your store</p>
      </div>
      <div className='flex items-center justify-center text-center mt-[60px] gap-[30px]'>
        <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"2px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
          <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3'>Basic Plan</p>
          <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>Free (No Payment)</p>
          <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5'>
            <li>Free For one month</li>
            <li>Maximum of 20 monthly product listing</li>
          </ul>
          <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]'>Select Plan</button>
        </div>
        <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"2px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
          <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3'>Premium Plan</p>
          <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>N10,000/Per Month</p>
          <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5' style={{ listStyleType:"inherit !important" }}r>
            <li>Unlimited Listing of Products</li>
            <li>10 Days of Onsite Ad</li>
          </ul>
          <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]'>Make Payment</button>
        </div>
      </div>
    </div>
  )
}

export default Subscription