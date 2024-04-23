import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Alert from "../../../components/alert/Alert";
import Btnloader from "../../../components/loader/Btnloader";

const ShopSetUp = ({baseUrl}) => {

  const navigate = useNavigate()
  const [storename, setStoreName] = useState('')
  const [store_address_1, setStoreAddress1] = useState('')
  const [store_address_2, setStoreAddress2] = useState('')
  const [store_description, setStoreDescription] = useState('')
  const [store_city, setStoreCity] = useState('')
  const [store_state, setStoreState] = useState('')
  const [store_address_postal_code, setStoreAddressPostalCode] = useState('')

  const [allStates, setAllStates] = useState()
  const [showStates, setShowStates] = useState(false)

  const [allCities, setAllCities] = useState()
  const [showCities, setShowCities] = useState(false)

  const [msg, setMsg] = useState(false)
  const [alertType, setAlertType] = useState('')
  const [loader, setLoader] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'))

  async function shopSetUp(){
    console.log(JSON.stringify({storename, store_address_1, store_address_2, store_description, store_city, store_state, store_address_postal_code}));
    if(!storename || !store_address_1 || !store_address_2 || !store_address_postal_code || !store_city || !store_state || !store_description){
      setMsg('Please fill in all fields')
      setAlertType('error')
      return
    }else{
      setLoader(true)
      const res = await fetch(`${baseUrl}/seller/dashboard/mystore/`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${user.data[0].access}`,
        },
        body: JSON.stringify({storename, store_address_1, store_address_2, store_description, store_city, store_state, store_address_postal_code})
      })
      const data = await res.json()
      console.log(data);
      if(res) setLoader(false)
      if(!res.ok){
        setMsg(data.message)
        setAlertType('error')
      }
      if(res.ok){
        setMsg('Success')
        setAlertType('success')
        navigate('/list-product')
      }
    }
  }

  async function getMyShop(){
    const res = await fetch(`${baseUrl}/seller/dashboard/my-products`,{
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        }
    })
    const data = await res.json()
    // setSelectedImage(data.data.product_image[0].media)
    // setAllMyProducts(data.data)
    console.log(data.data);
}

  useEffect(() => {
    getStates()
    getMyShop()
  },[])

  async function getStates(){
    const res = await fetch('https://nigeria-states-towns-lga.onrender.com/api/states')
    const data = await res.json()
    setAllStates(data)
  }

  async function getCities(city){
    const res = await fetch(`https://nigeria-states-towns-lga.onrender.com/api/${city}/towns`)
    const data = await res.json()
    setAllCities(data);
    console.log(city);
  }

  return (
    <div className="w-[100%] lg:w-[845px] flex items-center justify-center mx-auto mt-[5rem] py-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className='w-full px-[1rem] lg:px-[3rem]'>
        <div>
          <p className='text-[28px] text-primary-color text-center'>Set Up Your Shop</p>
          <div>
            <p className='text-[20px] text-black mt-[2rem] pb-1' style={{borderBottom:"1px solid #DCDCDC"}}>Shop Details</p>
            <div className='mt-5'>
              <p className='mb-[5px]'>Shop Name</p>
              <input type="text" onChange={e => setStoreName(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Shop Name' />
            </div>
            <div className='mt-5'>
              <p className='mb-[5px]'>About Shop</p>
              <input type="text" onChange={e => setStoreDescription(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='About Shop' />
            </div>
          </div>
          <div>
            <p className='text-[20px] text-black mt-[2rem] pb-1' style={{borderBottom:"1px solid #DCDCDC"}}>Store Address</p>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>Country</p>
                <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#000]'>Nigeria</p>
                </div>
              </div>
              <div className='w-full'>
                <p className='mb-[5px]'>Address Line 1</p>
                <input type="text" onChange={e => setStoreAddress1(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Floor, House, Apartment Number' />
              </div>
            </div>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>Address Line 2</p>
                <input type="text" onChange={e => setStoreAddress2(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Street, Block Number' />
              </div>
              <div className='w-full'>
                <p className='mb-[5px]'>Postal Code</p>
                <input type="text" onChange={e => setStoreAddressPostalCode(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='332345' />
              </div>
            </div>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              {/* <div className='w-full'>
                <p className='mb-[5px]'>City</p>
                <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#B6B6B6]'>Anambra</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
              </div> */}
              <div className='w-full relative'>
                <p className='mb-[5px]'>State</p>
                <div onClick={e => setShowStates(!showStates)} className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#000]'>{store_state ? store_state : 'Anambra'}</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
                {
                  showStates &&
                  <div className="h-[400px] bg-white w-full overflow-y-scroll p-2 rounded-[6px] mt-3 absolute" style={{border:"1px solid #DCDCDC"}}>
                    {
                      allStates && allStates.map(state => (
                        <p className="cursor-pointer my-1" onClick={e => {
                          getCities(state.state_code)
                          setStoreState(state.name)
                          setShowStates(false)
                        }}>{state.name}</p>
                      ))
                    }
                  </div>
                }
              </div>

              <div className='w-full relative'>
                <p className='mb-[5px]'>City</p>
                <div onClick={e => setShowCities(!showCities)} className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#000]'>{store_city ? store_city : 'Awka'}</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
                {
                  showCities &&
                  <div className="h-[400px] bg-white w-full overflow-y-scroll p-2 rounded-[6px] mt-3 absolute" style={{border:"1px solid #DCDCDC"}}>
                    {
                      allCities && allCities.map(city => (
                        <p className="cursor-pointer my-1" onClick={e => {
                          setStoreCity(city.name)
                          setShowCities(false)
                        }}>{city.name}</p>
                      ))
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        {
              loader ?
                  <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-10 w-full rounded-sm tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                  shadow-sm transition-all cursor-not-allowed">
                      <Btnloader />
                  </button>
              : 
                <button className="bg-secondary-color py-[12px] mt-10 rounded-[5px] text-white w-full" onClick={shopSetUp}>Save Details</button>
          }
      </div>
      {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
    </div>
  )
}

export default ShopSetUp