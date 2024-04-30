import React, { useEffect, useState } from 'react'
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav'
import { IoCloseOutline } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../../components/alert/Alert'
import Btnloader from '../../components/loader/Btnloader'
import { GoChevronDown } from "react-icons/go";


const ServicePurchase = ({baseUrl}) => {

    const [dataModal, setDataModal] = useState(null)
    const [tvSubModal, setTvSubModal] = useState(null)
    const [phone, setPhone] = useState('')
    const [amount, setAmount] = useState('')
    const { network, service } = useParams()
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [dataPlans, setDataPlans] = useState()
    const [tvPlans, setTvPlans] = useState()
    const [tvSubType, setTvSubType] = useState(false)
    const tvSubTypeArray = ['change', 'renew']
    const [electricitySubType, setElectricitySubType] = useState(false)
    const electricitySubTypeArray = ['prepaid', 'postpaid']
    const [subscription_type, setSubscription_type] = useState('')
    const [billersCode, setBillersCode] = useState('')
    const [meterNumber, setMeterNumber] = useState('')
    const [quantity, setQuantity] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [verifyMeterLoader, setVerifyMeterLoader] = useState(false)
    

    const networks = [
        {
          img:'/mtn.png',
          label:'MTN'
        },
        {
          img:'/glo.png',
          label:'GLO'
        },
        {
          img:'/9Mobile.png',
          label:'9Mobile'
        },
        {
          img:'/airtel.png',
          label:'airtel'
        }
      ]

      const navigate = useNavigate()

      const user = JSON.parse(localStorage.getItem('user'))

      useEffect(() => {
        if(network.includes('data') || network.includes('spectranet') || network.includes('smile-direct')){
          getVtuDataServices()
        }
        if(network.includes('tv') || network.includes('startimes') || network.includes('showmax')){
          getVtuTVServices()
        }
        // getVtuTVServices()
        // setAirtimeModal(false)
      },[])

      async function getVtuDataServices(){
        
        const res = await fetch(`${baseUrl}/vtu/services/data/${network}`,{
          headers: {
            Authorization: `Bearer ${user.data[0].access}`
          },
        })
        const data = await res.json()
        
        console.log(data.data.content.varations);
        setDataPlans(data.data.content.varations)
      }

      async function getVtuTVServices(){
        console.log('called');
        const res = await fetch(`${baseUrl}/vtu/services/tv-sub/${network}`,{
          headers: {
            Authorization: `Bearer ${user.data[0].access}`
          },
        })
        const data = await res.json()
        console.log(data, data.data.content.varations);
        setTvPlans(data.data.content.varations)
      }

      async function purchaseService(){
        let endpoint;
        const servicesEndpoint = ['vtu/service/airtime/purchase', `vtu/services/data/${network}`]
        if(service === 'airtime'){
          endpoint = servicesEndpoint[0]
        }else if(service === 'data'){
          endpoint = servicesEndpoint[1]
        }
        console.log(JSON.stringify({
          service_id:network,
          phone,
          amount
        }));
        if(!phone || !amount){
          setMsg("Please fill in all fields")
          setAlertType('error')
        }else{
          setLoader(true)
          console.log(`${baseUrl}/${endpoint}`);
          const res = await fetch(`${baseUrl}/${endpoint}`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              Authorization:`Bearer ${user?.data[0]?.access}`
            },
            body:JSON.stringify({
              service_id:network,
              phone,
              amount
            })
          })
          if(res) setLoader(false)
          const data = await res.json()
          console.log(res, data);
          if(res.ok){
            setMsg(data.message)
            setAlertType('success')
            // navigate('/my-wallet')
          }else{
            setMsg(data.message)
            setAlertType('error')
          }
        }
      }

      async function purchaseData(plan){
        console.log(plan);
        console.log(JSON.stringify({
          service_id:network,
          phone,
          variation_code:plan.variation_code
        }));
        const res = await fetch(`${baseUrl}/vtu/services/data/${network}`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${user?.data[0]?.access}`
          },
          body:JSON.stringify({
            service_id:"etisalat-data",
            phone,
            variation_code:plan.variation_code
          })
        })
        const data = await res.json()
        console.log(res, data);
        console.log(plan);
      }

      async function purchaseTvSub(plan){
        const res = await fetch(`${baseUrl}/vtu/services/tv-sub/${network}`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${user?.data[0]?.access}`
          },
          body:JSON.stringify({phone, amount, subscription_type, quantity, billersCode, variation_code:plan.variation_code})
        })
        const data = await res.json()
        console.log(res, data);
        console.log(JSON.stringify({phone, amount, subscription_type, quantity, billersCode, variation_code:plan.variation_code}));
        console.log(plan);
      }
      // 0202301004893

      async function verifyMeterNumber(){
        setAddress()
        setMeterNumber()
        setCustomerName()
        // if(!subscription_type || !meterNumber){
        //   setMsg("Please fill in all fields")
        //   setAlertType('error')
        // }else{
        // }
        setVerifyMeterLoader(true)
        const res = await  fetch(`${baseUrl}/vtu/services/electric-sub/verify-meter-number/${network}`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${user?.data[0]?.access}`
          },
          body:JSON.stringify({billersCode, subscription_type})
        })
        const data = await res.json()
        console.log(data);
        if(res) setVerifyMeterLoader(false)
        if(res.ok){
          setMsg("Valid Meter Number")
          setAlertType('success')
          setMeterNumber(billersCode)
          setCustomerName(data.data.content.Customer_Name)
          setAddress(data.data.content.Address)
        }
        if(!res.ok){
          setMsg(data.data.content.error)
          setAlertType('error')
        }
        console.log(res, data.data.content);
        console.log(JSON.stringify({billersCode, subscription_type}));
        
      }

      async function purchaseElectricSub(){
        setLoader(true)
        console.log(({phone, amount, variation_code:subscription_type, billersCode:meterNumber}));
        const res = await fetch(`${baseUrl}/vtu/services/electric-sub/purchase/${network}`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${user?.data[0]?.access}`
          },
          body:JSON.stringify({phone, amount, variation_code:subscription_type, billersCode:meterNumber})
        })
        const data = await res.json()
        console.log(data);
        if(res) setLoader(false)
        if(res.ok){
          setMsg(data.data.token)
          setAlertType('success')
        }
        if(!res.ok){
          setMsg(data.data.content.error)
          setAlertType('error')
        }
        console.log(res, data);
        console.log(JSON.stringify({phone, amount, variation_code:subscription_type, billersCode:meterNumber}));
        // console.log(plan);
      }

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                {/* {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> } */}
                <div className='gap-[0rem] px-[20px] md:px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Cometake VTU</h1>
                    </div>
                    <div className='flex item-center justify-between'>
                      <div className='w-[75%] flex items-center gap-[1.5rem]'>
                        {/* <img src={networkLogo} alt="" className='w-[130px]'/> */}
                        <div className='mb-10'>
                            <p className='font-[700] text-[30px] md:text-[40px] text-primary-color capitalize'>{network} VTU</p>
                            <p className='text-[#434343]'>
                                {network} - Get instant top up
                            </p>
                        </div>
                      </div>
                    </div>
                    {
                      service === 'airtime' &&
                      <>
                        <div className='flex flex-col md:flex-row items-center gap-[2rem] mt-10'>
                            <div className='w-full'>
                                <p className='mb-[5px]'>Phone<sup className='text-red-500'>*</sup></p>
                                <input type="text" onChange={e => setPhone(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Phone Number' />
                            </div>
                            <div className='w-full'>
                                <p className='mb-[5px]'>Amount<sup className='text-red-500'>*</sup></p>
                                <input type="text" onChange={e => setAmount(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Amount' />
                            </div>
                        </div>
                        {
                            loader ?
                                <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-full sm:w-[201px] rounded-[6px] tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                shadow-sm transition-all cursor-not-allowed">
                                    <Btnloader />
                                </button>
                            : 
                            <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px]' onClick={purchaseService}>Continue</button>
                        }
                      </>
                    }

                    {/* DATA SUB FOR DESKTOP SCREEN BEGINS */}
                    <div className='hidden md:block'>
                      {
                        dataPlans &&
                        <table class="w-full text-sm text-left rtl:text-left shoppingCartTable mt-5">
                            <thead class="text-[14px] bg-[#D4E5B4]" style={{boxShadow:"0 11px 40px -17px #00000024", borderRadius:"10px"}}>
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Service Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                dataPlans.map(plan => (
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                        <td class="px-6 py-6">
                                            {plan.name}
                                        </td>
                                        <td class="px-6 py-6 text-[#434343]">
                                          ₦{plan.variation_amount}
                                        </td>
                                        <td class="px-6 py-3 my-3 text-white rounded-sm mx-6 cursor-pointer bg-primary-color inline-block" onClick={() => setDataModal(plan)}>
                                          Buy
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                      }
                    </div>
                    {/* DATA SUB FOR DESKTOP SCREEN ENDS */}

                    {/* DATA SUB FOR MOBILE SCREEN BEGINS */}
                    <div className='md:hidden block'>
                    {
                      dataPlans &&
                      dataPlans.map(plan => (
                        <div className='border-t py-3'>
                          <p>{plan.name}</p>
                          <div className='flex items-center justify-between text-[#434343]'>
                            <p>₦{plan.variation_amount}</p>
                            <button class="px-6 py-1 text-white rounded-sm mx-6 cursor-pointer bg-primary-color inline-block" onClick={() => setDataModal(plan)}>Buy</button>
                          </div>
                        </div>
                      ))
                    }
                    </div>
                    {/* DATA SUB FOR MOBILE SCREEN ENDS */}

                    {/* TV SUB FOR DESKTOP SCREEN BEGINS */}
                    <div className='hidden md:block'>
                      {
                        tvPlans &&
                        <table class="w-full text-sm text-left rtl:text-left shoppingCartTable">
                            <thead class="text-[14px] bg-[#D4E5B4]" style={{boxShadow:"0 11px 40px -17px #00000024", borderRadius:"10px"}}>
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Service Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                tvPlans.map(plan => (
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                        <td class="px-6 py-6">
                                            {plan.name}
                                        </td>
                                        <td class="px-6 py-6">
                                            {plan.variation_amount}
                                        </td>
                                        <td class="px-6 py-3 my-3 text-white rounded-sm mx-6 cursor-pointer bg-primary-color inline-block" onClick={() => setTvSubModal(plan)}>
                                          Buy
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                      }
                    </div>
                    {/* TV SUB FOR DESKTOP SCREEN BEGINS */}

                    {/* TV PLAN FOR MOBILE SCREEN BEGINS */}
                    <div className='md:hidden block'>
                      {
                        tvPlans &&
                        tvPlans.map(plan => (
                          <div className='border-t py-3'>
                            <p>{plan.name}</p>
                            <div className='flex items-center justify-between text-[#434343]'>
                              <p>₦{plan.variation_amount}</p>
                              <button class="px-6 py-1 text-white rounded-sm mx-6 cursor-pointer bg-primary-color inline-block" onClick={() => setTvSubModal(plan)}>Buy</button>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    {/* TV PLAN FOR MOBILE SCREEN ENDS */}

        {
          network.includes('electric') &&
            <>
                <div className="flex items-center justify-center">
                    <div className="bg-white w-[100%] pb-7 h-auto rounded-[8px]">
                        <div className="flex items-center justify-center flex-col">
                          <div className='w-[100%]'>
                                  <div style={{border:"1px solid #DCDCDC"}} className='w-full mt-8 p-2 rounded-[6px] flex items-center justify-between'>
                                  <input type="text" value={subscription_type} onChange={e => subscription_type(e.target.value)} className='outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Subscription Type' />
                                    <GoChevronDown onClick={() => setElectricitySubType(!electricitySubType)} cursor={'pointer'}/>
                                  </div>
                                  {electricitySubType &&
                                    <div style={{border:"1px solid #DCDCDC"}} className='mt-2  rounded-[6px] px-2'>
                                      {
                                        electricitySubTypeArray.map(type => (
                                          <p onClick={() =>{ 
                                            setSubscription_type(type)
                                            setElectricitySubType(false)
                                          }} className='cursor-pointer my-1 capitalize'>{type}</p>
                                        ))
                                      }
                                    </div>
                                  }
                                </div>
                          <input type="text" onChange={e => setBillersCode(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[100%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Meter Number' />
                          {
                              verifyMeterLoader ?
                                  <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-full sm:w-[201px] rounded-[6px] tracking-wide
                                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                  shadow-sm transition-all cursor-not-allowed">
                                      <Btnloader />
                                  </button>
                              : 
                              <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px] w-[100%]' onClick={() => verifyMeterNumber()}>Verify Meter Number</button>
                          }
                          
                          {
                            address &&
                            <>
                              <p className='my-5 text-left self-start'> <span className='text-gray-400'>Address:</span> {address}</p>
                              <div className="flex items-center jsutify-between w-full flex-col gap-5 md:flex-row md:gap-9">
                                <div className="flex w-full gap-2">
                                  <p className='text-gray-400'>Customer Name:</p>
                                  <p className=''>{customerName}</p>
                                </div>
                                <div className="flex w-full gap-2">
                                  <p className='text-gray-400'>Meter Number:</p>
                                  <p className=''>{meterNumber}</p>
                                </div>
                              </div>
                              <input type="number" onChange={e => setPhone(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[100%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Phone' />
                              <input type="number" onChange={e => setAmount(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[100%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Amount (Optional)' />
                              {
                                  loader ?
                                      <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-full sm:w-[201px] rounded-[6px] tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                      shadow-sm transition-all cursor-not-allowed">
                                          <Btnloader />
                                      </button>
                                  : 
                                  <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px] w-[100%]' onClick={() => purchaseElectricSub()}>Continue</button>
                              }
                            </>
                          }
                          
                        </div>
                    </div>
                </div>
            </>
        }

                </div>
            </div>
        </div>
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
        
        {
          dataModal &&
          <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setDataModal(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Input Number</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setDataModal(false)}/>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                              <input type="number" onChange={e => setPhone(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Phone' />
                                {
                                    loader ?
                                        <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-full sm:w-[201px] rounded-[6px] tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                        shadow-sm transition-all cursor-not-allowed">
                                            <Btnloader />
                                        </button>
                                    : 
                                    <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px] w-[80%]' onClick={() => purchaseData(dataModal)}>Continue</button>
                                }
                            </div>
                        </div>
                    </div>
            </>
        }

        {
          tvSubModal &&
          <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setTvSubModal(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] pb-7 h-auto rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Subscribe TV</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setTvSubModal(false)}/>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                              <input type="number" onChange={e => setPhone(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Phone' />
                              <input type="text" onChange={e => setBillersCode(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Biller Code' />
                              <div className='w-[80%]'>
                                <div style={{border:"1px solid #DCDCDC"}} className='w-full mt-8 p-2 rounded-[6px] flex items-center justify-between'>
                                <input type="text" value={subscription_type} onChange={e => subscription_type(e.target.value)} className='outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Subscription Type' />
                                  <GoChevronDown onClick={() => setTvSubType(!tvSubType)} cursor={'pointer'}/>
                                </div>
                                {tvSubType &&
                                  <div style={{border:"1px solid #DCDCDC"}} className='mt-2  rounded-[6px] px-2'>
                                    {
                                      tvSubTypeArray.map(type => (
                                        <p onClick={() =>{ 
                                          setSubscription_type(type)
                                          setTvSubType(false)
                                        }} className='cursor-pointer my-1 capitalize'>{type}</p>
                                      ))
                                    }
                                  </div>
                                }
                              </div>
                              <input type="number" onChange={e => setAmount(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Amount (Optional)' />
                              {
                                subscription_type === "renew" &&
                                <input type="number" onChange={e => setQuantity(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Duration (Months)' />
                              }
                              {
                                  loader ?
                                      <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-full sm:w-[201px] rounded-[6px] tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                      shadow-sm transition-all cursor-not-allowed">
                                          <Btnloader />
                                      </button>
                                  : 
                                  <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px] w-[80%]' onClick={() => purchaseTvSub(tvSubModal)}>Continue</button>
                              }
                            </div>
                        </div>
                    </div>
            </>
        }

        {/* {
          network.includes('electric') &&
          <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setTvSubModal(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] pb-7 h-auto rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Subscribe TV</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setTvSubModal(false)}/>
                            </div>
                            <div className="flex items-center justify-center flex-col">
                              <input type="number" onChange={e => setPhone(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Phone' />
                              <input type="text" onChange={e => setBillersCode(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Biller Code' />
                              <div className='w-[80%]'>
                                <div style={{border:"1px solid #DCDCDC"}} className='w-full mt-8 p-2 rounded-[6px] flex items-center justify-between'>
                                <input type="text" value={subscription_type} onChange={e => subscription_type(e.target.value)} className='outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Subscription Type' />
                                  <GoChevronDown onClick={() => setTvSubType(!tvSubType)} cursor={'pointer'}/>
                                </div>
                                {tvSubType &&
                                  <div style={{border:"1px solid #DCDCDC"}} className='mt-2  rounded-[6px] px-2'>
                                    {
                                      tvSubTypeArray.map(type => (
                                        <p onClick={() =>{ 
                                          setSubscription_type(type)
                                          setTvSubType(false)
                                        }} className='cursor-pointer my-1 capitalize'>{type}</p>
                                      ))
                                    }
                                  </div>
                                }
                              </div>
                              <input type="number" onChange={e => setAmount(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Amount (Optional)' />
                              {
                                subscription_type === "renew" &&
                                <input type="number" onChange={e => setQuantity(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-8 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Duration (Months)' />
                              }
                              {
                                  loader ?
                                      <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-full sm:w-[201px] rounded-[6px] tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                      shadow-sm transition-all cursor-not-allowed">
                                          <Btnloader />
                                      </button>
                                  : 
                                  <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px] w-[80%]' onClick={() => purchaseTvSub(tvSubModal)}>Continue</button>
                              }
                            </div>
                        </div>
                    </div>
            </>
        } */}
    </div>
  )
}

export default ServicePurchase