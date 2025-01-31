import { CiUser } from "react-icons/ci";
import { LuMessagesSquare, LuUserX2 } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';
import { BsClock } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const ProfileSideNav = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [userDetails, setUserDetails] = useState()
    const [vtuServices, setVtuServices] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const [airtimeModal, setAirtimeModal] = useState(false)
    const [vtuServicesLoader, setVtuServicesLoader] = useState(false)

    // Routes where specific sections should be hidden
    const hiddenSectionsRoutes = [
        'vtu', 
        'airtime', 
        'data', 
        'tv-subscription',
        'electricity-bill'
    ];

    // Check if current route matches any hidden routes
    const shouldHideSections = hiddenSectionsRoutes.some(route => 
        location.pathname.includes(route)
    );

    const networks = [
        { img:'mtn.png', label:'MTN' },
        { img:'glo.png', label:'GLO' },
        { img:'9Mobile.png', label:'9Mobile' },
        { img:'airtel.png', label:'airtel' }
    ]

    async function getUserDetails(){
        setVtuServicesLoader(true)
        const res = await fetch(`https://cometakebe.onrender.com/complete-registration`,{
          headers:{
            Authorization:`Bearer ${user?.data[0]?.access}`
          }
        })
        if(res) setVtuServicesLoader(false)
        const data = await res.json()
        setUserDetails(data.data)
    }

    useEffect(() => {
        getUserDetails()
        getVtuServices()
    },[])

    async function getVtuServices(){
        const res = await fetch(`https://cometakebe.onrender.com/vtu/get-services`,{
          headers: {
            Authorization: `Bearer ${user.data[0].access}`
          },
        })
        const data = await res.json()
        setVtuServices(data.data[1].content.slice(0, 4))
    }

    return (
        <div className='flex flex-[0.6] w-[100%] items-center px-5 lg:py-0 h-full profile-side-nav' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
            <div className='my-10 w-full'>
                {!shouldHideSections && (
                    <>
                        <div className="w-full">
                            <div className='flex items-center gap-2 mb-3'>
                                <CiUser color='#292D32' fontSize={"18px"}/>
                                <p className='text-[18px] font-[500]'>My Profile</p>
                            </div>
                            <ul className='ml-3 grid gap-2 w-full'>
                                {location.pathname === "/my-profile" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/my-profile')}>Account Information</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-profile')}>Account Information</li>}
                                {location.pathname === "/password-reset" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/password-reset')}>Security Settings</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/password-reset')}>Security Settings</li>}
                                {location.pathname === "/saved-items" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/saved-items')}>Saved Items</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/saved-items')}>Saved Items</li>}
                                {location.pathname === "/my-wallet" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/my-wallet')}>My Wallet</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-wallet')}>My Wallet</li>}
                            </ul>
                        </div>
                    </>
                )}

                {!shouldHideSections && userDetails && userDetails.is_seller === true && (
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <TiDocumentText color='#292D32' fontSize={"18px"}/>
                            <p className='text-[18px] font-[500]'>My Shop</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            {location.pathname === "/my-shop" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/my-shop')}>My Shop</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-shop')}>My Shop</li>}
                            {location.pathname === "/update-shop" ? <li className='text-[#6C6C6C] text-[16px] cursor-pointer bg-[#D4E5B4] rounded-[5px] px-[10px] w-full py-[7px]' onClick={() => navigate('/update-shop')}>Update Shop</li>:<li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/update-shop')}>Update Shop</li>}
                        </ul>
                    </div>
                )}

                {
                    shouldHideSections &&
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <BsClock color='#292D32' fontSize={"18px"}/>
                            <p className='text-[18px] font-[500]'>VTU Services</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            {
                                vtuServices.map(service => (
                                    <li key={service.identifier} className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate(`/vtu-service/${service.identifier}`)} >{service.name}</li>
                                ))
                            }
                            {
                                vtuServicesLoader && 
                                <p className='mx-auto'>
                                    <img src="./loader.gif" alt="" className="w-5 h-5" />
                                </p>
                            }
                        </ul>
                    </div>
                }

                {!shouldHideSections && (
                    <div className='mt-10'>
                        <div className='flex items-center gap-2 mb-3'>
                            <LuUserX2 color='#292D32' fontSize={"18px"}/>
                            <p className='text-[18px] font-[500]'>Delete Account</p>
                        </div>
                        <ul className='ml-3 grid gap-2'>
                            <li className='text-[#FF0505] text-[16px] cursor-pointer'>Delete Account</li>
                        </ul>
                    </div>
                )}
            </div>
            
            {/* Rest of the existing code remains the same */}
            {airtimeModal && (
                <>
                    <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setAirtimeModal(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Choose Network</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setAirtimeModal(false)}/>
                            </div>
                            <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1 p-5">
                                {networks.map((network, index) => (
                                    <div 
                                        key={index} 
                                        className='flex items-center justify-center cursor-pointer' 
                                        onClick={() => {
                                            setAirtimeModal(false)
                                            navigate(`/airtime-purchase/${network.label}/${network.img}`)
                                        }}
                                    >
                                        <img src={network.img} alt={network.label}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProfileSideNav