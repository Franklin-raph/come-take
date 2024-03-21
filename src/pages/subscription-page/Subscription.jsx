import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Subscription = ({baseUrl}) => {

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    getSubscriptionPlans()
  },[])

  async function getSubscriptionPlans(){
    const res = await fetch(`${baseUrl}/subscription/plans`,{
      headers: {
        Authorization: `Bearer ${user.data[0].access}`
      },
    })
    const data = await res.json()
    console.log(res, data);
  }

  const [openSubscriptionModal, setOpenSubscriptionModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)

  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-center justify-center mx-auto mt-[5rem] py-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className='text-center md:w-[60%] w-[90%]'>
        <p className='text-[24px] md:text-[32px]'>Welcome to ComeTake stores subscription</p>
        <p className='text-[15px] md:text-[20px] text-[#6C6C6C]'>Select one of the subscription option that suits your store</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center text-center mt-[60px] gap-[30px]'>
        <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"2px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
          <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3'>Basic Plan</p>
          <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>Free (No Payment)</p>
          <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5 sub_list'>
            <li>Free For one month</li>
            <li>Maximum of 20 monthly product listing</li>
          </ul>
          <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]' onClick={() => setOpenSubscriptionModal(true)}>Select Plan</button>
        </div>
        <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"1px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
          <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3'>Premium Plan</p>
          <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>N10,000/Per Month</p>
          <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5 sub_list'>
            <li>Unlimited Listing of Products</li>
            <li>10 Days of Onsite Ad</li>
          </ul>
          <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]'onClick={() => {
                setPaymentModal(true)
                setOpenSubscriptionModal(false)
                }}>Make Payment</button>
        </div>
      </div>

      {
        openSubscriptionModal &&
        <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
          <div className="bg-white md:w-[450px] w-[300px] md:h-[430px] h-[380px] rounded-[23.93px]">
            <div className="flex items-center justify-between mt-[3rem] px-[2rem] mb-[2rem]">
              <FiArrowLeft color="#292D32" fontSize={"22px"} cursor={"pointer"} onClick={() => setOpenSubscriptionModal(false)}/>
              <p className="text-[16px] md:text-[24px]">Store Subscription</p>
              <IoIosCloseCircleOutline className="text-[20px] cursor-pointer mt-[-50px]" onClick={() => setOpenSubscriptionModal(false)}/>
            </div>
            <p className="text-[#1C1C1C] text-[24px] md:text-[32px] text-center font-[700] my-3 py-3" style={{ borderTop:"1px solid #E6ECEA", borderBottom:"1px solid #E6ECEA" }}>Premium Plan</p>
            <p className="text-center text-[12px] md:text-[20px] mb-[2rem]">Select Period of Payment</p>
            <div className="flex items-center justify-center gap-[20px]">
              <p className="text-[#1C1C1C] bg-secondary-color px-2 py-[6px] rounded text-[10px] md:text-[16px]">1 Month</p>
              <p className="text-[#1C1C1C] text-secondary-color border border-black px-2 py-1 rounded  text-[10px] md:text-[16px]">3 Months</p>
              <p className="text-[#1C1C1C] text-secondary-color border border-black px-2 py-1 rounded  text-[10px] md:text-[16px]">6 Months</p>
              <p className="text-[#1C1C1C] text-secondary-color border border-black px-2 py-1 rounded  text-[10px] md:text-[16px]">1 Year</p>
            </div>
            <div className="flex items-center justify-center mt-[2.5rem] gap-6">
              <button className="text-secondary-color border border-black px-8 text-[14px] md:text-[20px] py-[10px] rounded" onClick={() => setOpenSubscriptionModal(false)}>Cancel</button>
              <button className="text-white bg-secondary-color px-3 py-[10px] rounded text-[14px] md:text-[20px]" onClick={() => {
                setPaymentModal(true)
                setOpenSubscriptionModal(false)
                }}>Make Payment</button>
            </div>
          </div>
        </div>
      }

      {
        paymentModal &&
        <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
          <div className="bg-white md:w-[450px] w-[300px] h-[350px] rounded-[23.93px]">
            <div className="flex items-center justify-between mt-[3rem] px-[2rem] mb-[2rem]">
              <FiArrowLeft color="#292D32" fontSize={"22px"} cursor={"pointer"}  className="mt-[-40px] md:mt-0" onClick={() => setPaymentModal(false)}/>
              <p className="text-[16px] md:text-[24px]">You are almost there</p>
              <IoIosCloseCircleOutline className="text-[20px] cursor-pointer mt-[-50px]" onClick={() => setPaymentModal(false)}/>
            </div>
            <div style={{ borderTop:"1px solid #E6ECEA", borderBottom:"1px solid #E6ECEA" }} className="mb-8">
              <p className="text-[#1C1C1C] text-[40px] text-center font-[700] my-3">N10,000</p>
              <p className="text-center text-[10px] mb-3 text-[#989898]">Premium plan 1 month payment ( 30 Days )</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <button className="text-white bg-secondary-color px-3 py-[10px] rounded md:w-[287px] w-[180px]">Pay Now</button>
            </div>
          </div>
        </div>
      }
      

    </div>
  )
}

export default Subscription