import { FiArrowLeft } from "react-icons/fi";

const Subscription = () => {
  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-center justify-center mx-auto mt-[5rem] py-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className='text-center w-[60%]'>
        <p className='text-[30px]'>Welcome to ComeTake stores subscription</p>
        <p className='text-[20px] text-[#6C6C6C]'>Select one of the subscription option that suits your store</p>
      </div>
      <div className='flex items-center justify-center text-center mt-[60px] gap-[30px]'>
        <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"2px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
          <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3'>Basic Plan</p>
          <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>Free (No Payment)</p>
          <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5 sub_list'>
            <li>Free For one month</li>
            <li>Maximum of 20 monthly product listing</li>
          </ul>
          <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]'>Select Plan</button>
        </div>
        <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"1px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
          <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3'>Premium Plan</p>
          <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>N10,000/Per Month</p>
          <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5 sub_list'>
            <li>Unlimited Listing of Products</li>
            <li>10 Days of Onsite Ad</li>
          </ul>
          <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]'>Make Payment</button>
        </div>
      </div>
      <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
        <div className="bg-white w-[544px] h-[485px] rounded-[23.93px]">
          <div className="flex items-center justify-between mt-[3rem] px-[2rem] mb-[2rem]">
            <FiArrowLeft color="#292D32" fontSize={"22px"}/>
            <p className="text-[24px]">Store Subscription</p>
            <p></p>
          </div>
          <p className="text-[#1C1C1C] text-[40px] text-center font-[700] my-3" style={{ borderTop:"1px solid #E6ECEA", borderBottom:"1px solid #E6ECEA" }}>Premium Plan</p>
          <p className="text-center text-[20px]">Select Period of Payment</p>
          <div className="flex items-center justify-center gap-[20px]">
            <p className="text-[#1C1C1C] bg-secondary-color">1 Month</p>
            <p className="text-[#1C1C1C]">3 Months</p>
            <p className="text-[#1C1C1C]">6 Months</p>
            <p className="text-[#1C1C1C]">1 Year</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription