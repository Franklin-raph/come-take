import React, { useEffect, useState } from 'react'
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav'
import { IoCloseOutline } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import { LuMenuSquare } from 'react-icons/lu'


const VtuServices = () => {

  const [airtimeModal, setAirtimeModal] = useState(false)
  const [vtuServiceSideBar, setVtuServiceSideBar] = useState(false)
  const [vtuServices, setVtuServices] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))

  async function getVtuServices(){
    const res = await fetch(`https://cometakebe.onrender.com/vtu/get-services`,{
      headers: {
        Authorization: `Bearer ${user.data[0].access}`
      },
    })
    const data = await res.json()
    setVtuServices(data.data[1].content.slice(0, 4))
    console.log(data.data[1].content.slice(0, 4));
  }

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
  useEffect(() => {
    getVtuServices()
  },[])

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav setAirtimeModal={setAirtimeModal}/>
                {/* {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> } */}
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className='relative'>
                      <div className='flex items-center justify-between mb-5 pb-1' style={{borderBottom:"1px solid #E6ECEA"}}>
                          <h1 className='text-[#003C2F] text-[24px] font-bold'>Cometake VTU</h1>
                          <LuMenuSquare className='text-[22px] text-primary-color cursor-pointer lg:hidden' onClick={()=> setVtuServiceSideBar(!vtuServiceSideBar)}/>
                      </div>
                        {vtuServiceSideBar &&
                          <ul className='ml-3 grid gap-2 absolute bg-white z-[99] right-0 p-3 border'>
                            {
                                vtuServices.map(service => (
                                    <li key={service.identifier} className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => {
                                      navigate(`/vtu-service/${service.identifier}`)
                                      setVtuServiceSideBar(false)
                                    }} >{service.name}</li>
                                ))
                            }
                        </ul>
                          }
                      </div>
                    <div className='flex item-center justify-between flex-col-reverse md:flex-row'>
                      <div className='w-[100%] md:w-[45%]'>
                        <div className='h-[18px] w-[306px] bg-secondary-color rounded-full mt-[3rem] mb-[10px]'></div>
                        <p className='font-[700] text-[40px] md:text-[30px] text-primary-color '>
                          Enjoy seamless and easy bills payment on COMETAKE VTU
                        </p>
                        <p className='text-[#434343]'>
                          Top up phone airtime or internet data. Pay electricity bills; renew TV subscriptions and lots more on our platform
                        </p>
                      </div>
                      <img src="/vtu.png" alt="" className='w-auto'/>
                    </div>
                </div>
            </div>
        </div>
        {
          airtimeModal &&
          <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setAirtimeModal(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Choose Network</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setAirtimeModal(false)}/>
                            </div>
                            <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1 p-5">
                              {
                                networks.map((network, index) => {
                                  return (
                                    <div key={index} className='flex items-center justify-center cursor-pointer' onClick={() => {
                                      // setChosenNetwork(network.label)
                                      setAirtimeModal(false)
                                      navigate(`/airtime-purchase/${network.label}/${network.img}`)
                                    }}>
                                      <img src={network.img} alt={network.label}/>
                                    </div>
                                  )
                                })
                              }
                            </div>
                        </div>
                    </div>
            </>
        }
    </div>
  )
}

export default VtuServices