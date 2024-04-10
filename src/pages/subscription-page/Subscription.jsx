import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PaystackPop from "@paystack/inline-js"
import LoaderImage from '../../assets/loader.gif'
import Alert from "../../components/alert/Alert";

const Subscription = ({baseUrl}) => {

  const user = JSON.parse(localStorage.getItem('user'))
  const [userDetails, setUserDetails] = useState()
  const [availableSubs, setAvailableSubs] = useState([])
  const [loader, setLoader] = useState(false)
  const [msg, setMsg] = useState(false)
  const [alertType, setAlertType] = useState('')

  useEffect(() => {
    getSubscriptionPlans()
    getMySubscriptionPlan()
    getUserDetails()
  },[])

  async function getSubscriptionPlans(){
    const res = await fetch(`${baseUrl}/subscription/plans`,{
      headers: {
        Authorization: `Bearer ${user.data[0].access}`
      },
    })
    const data = await res.json()
    console.log(res, data.data);
    setAvailableSubs(data.data)
  }

  async function getMySubscriptionPlan(){
    const res = await fetch(`${baseUrl}/seller/subscription/my-plan`,{
      headers: {
        Authorization: `Bearer ${user.data[0].access}`
      },
    })
    const data = await res.json()
    console.log(res, data);
  //   setAvailableSubs(data.data)
  }

  async function getUserDetails(){
    const res = await fetch(`${baseUrl}/complete-registration`,{
      headers:{
        Authorization:`Bearer ${user.data[0].access}`
      }
    })
    const data = await res.json()
    setUserDetails(data.data)
    console.log(res, data);
  }

  function subscribe(subTitle, id, price) {
    console.log(subTitle, id, price);
    if(subTitle === 'basic'){
      subscribeUser(id, price, 6)
    }else{
      payWithPayStack(id, price, 6)
    }
  }

  function payWithPayStack(id, amount, duration){
    const payStack = new PaystackPop()
    payStack.newTransaction({
      key:"pk_test_12420d20e0b354e9670266456195a13f3a03ec68",
      amount:amount * 100,
      email:userDetails.email,
      onSuccess(transaction){
        console.log(transaction)
        subscribeUser(id, amount, duration)
        // setFundAccountModal(false)
        // setVerifyPaymentModal(true)
        // handleVerifyAccountFund(transaction.reference, (+amount/750).toFixed(2))
      },
      oncancel(){
        console.log("Failed Transaction")
      }
    })
  }

  async function subscribeUser (plan, amount, duration) {
    console.log(JSON.stringify({plan, amount, duration}));
    setLoader(true)
    const res = await fetch(`${baseUrl}/seller/subscription/my-plan`,{
      method:'POST',
      body: JSON.stringify({amount_paid:amount, subscription_duration_months:duration, subscription_plan:plan}),
      headers: {
        Authorization: `Bearer ${user.data[0].access}`,
        'Content-Type':'application/json'
      },
    })
    const data = await res.json()
    if(res) setLoader(false)
    if(res.ok){
      setMsg(data.message)
      setAlertType('success')
    }
    if(!res.ok){
      setMsg(data.message)
      setAlertType('error')
    }
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

      <div className='grid grid-cols-1 md:grid-cols-2 text-center mt-[60px] gap-[30px]'>
        {
          availableSubs && availableSubs.map(sub => (
            <div className={ sub.title === 'basic' ? `py-5 px-[36px] rounded-[10px] w-[265px] border-2 border-solid border-[#96BF47]` : `py-5 px-[36px] rounded-[10px] w-[265px] border border-solid border-[#96BF47]` } style={{ boxShadow:"0 11px 40px -17px #00000024" }}>
              <p className='text-[#1C1C1C] font-[700] text-[22px] mb-3 capitalize'>{sub.title}</p>
              <p className='text-[#1C1C1C] font-[700] text-[16px] py-4' style={{ borderTop:"1px solid #DCDCDC", borderBottom:"1px solid #DCDCDC" }}>#{sub.price}</p>
              <ul className='text-left grid gap-2 text-[#6C6C6C] pt-5 sub_list'>
                <p>{sub.plan_description}</p>
              </ul>
              {
                sub.title === 'basic' ? 
                <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]' onClick={() => subscribe(sub.title, sub.id, 0)}>Select Plan</button>
                : 
                <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]' onClick={() => subscribe(sub.title, sub.id, sub.price)}>Make Payment</button>
              }
              
            </div>
          ))
        }
                {/* <button className='bg-secondary-color text-white mt-5 w-[140px] rounded-[10px] h-[49px]' onClick={() => setOpenSubscriptionModal(true)}>Make Payment</button> */}

        {/* <div className='py-5 px-[36px] rounded-[10px] w-[265px]' style={{ border:"1px solid #96BF47", boxShadow:"0 11px 40px -17px #00000024" }}>
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
        </div> */}

      </div>

      {loader &&
        <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
          <div className="bg-white  rounded-[6px] text-xl p-[3rem]">
            <img src={LoaderImage} className='h-[4rem] w-[4rem] mx-auto mb-5'/>
            <p>Please wait while we confirm your subscription</p>
          </div>
        </div>
      }

      {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }

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
              <p className="text-[#1C1C1C] text-[40px] text-center font-[700] my-3">N100,000</p>
              <p className="text-center text-[10px] mb-3 text-[#989898]">Premium plan 1 month payment ( 30 Days )</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <button onClick={() => payWithPayStack()} className="text-white bg-secondary-color px-3 py-[10px] rounded md:w-[287px] w-[180px]">Pay Now</button>
            </div>
          </div>
        </div>
      }
      

    </div>
  )
}

export default Subscription