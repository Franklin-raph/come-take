import React, { useEffect, useState } from 'react'
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav'
import { IoCloseOutline } from 'react-icons/io5'
import { Link, useNavigate, useParams } from 'react-router-dom'

const VtuService = ({baseUrl}) => {

    const [airtimeModal, setAirtimeModal] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))
    const [vtuService, setVtuService] = useState()
    const [serviceLoader, setServiceLoader] = useState(false)

    const networks = [
        {
          img:'mtn.png',
          label:'MTN'
        },
        {
          img:'glo.png',
          label:'GLO'
        },
        {
          img:'9Mobile.png',
          label:'9Mobile'
        },
        {
          img:'airtel.png',
          label:'airtel'
        }
      ]

  const navigate = useNavigate()
  const { service } = useParams()

  async function getServiceInfo(){
    setServiceLoader(true)
    const res = await fetch(`${baseUrl}/vtu/services/${service}`,{
      headers: {
        Authorization: `Bearer ${user.data[0].access}`
      },
    })
    const data = await res.json()
    if(res) setServiceLoader(false)
    setVtuService(data.data[1].content);
    console.log(data);
  }

  useEffect(() => {
    setAirtimeModal(true)
    getServiceInfo()
    // getVtuServices()
  },[service])
  
  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav setAirtimeModal={setAirtimeModal}/>
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Cometake VTU</h1>
                    </div>
                    {
                      serviceLoader && <img src='./loader.gif' className='h-[50px] w-[50px] mx-auto'/>
                    }
                    <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 grid-cols-2 p-5 place-content-center items-center place-items-center">
                      {
                        vtuService && vtuService.map((network, index) => {
                          return (
                            <Link key={index} className='flex items-center flex-col justify-center cursor-pointer' to={`/${service}/${network.serviceID}`} >
                              <img src={network.image} alt={network.name} className='w-[100px]'/>
                              <p className='text-[12px] text-gray-400 text-center'>{network.name}</p>
                            </Link>
                          )
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setAirtimeModal(false)}></div> */}
        <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
            
        </div>
    </div>
  )
}

export default VtuService