import React, { useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi2'
import Btnloader from '../loader/Btnloader'
import Alert from '../alert/Alert'

const UpdateUserSocailName = ({baseUrl, setUserSocialLoginModal}) => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')

    async function handleUserNameUpdate(){
        setLoading(true)
        console.log(`Bearer ${JSON.parse(localStorage.getItem('googleAuthToken'))}`);
        const res = await fetch(`${baseUrl}/complete-registration`,{
            method:"POST",
            body: JSON.stringify({first_name,last_name}),
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${JSON.parse(localStorage.getItem('googleAuthToken'))}`
            }
        })
        const data = await res.json()
        if(res) setLoading(false)
        if(!res.ok){
            setMsg(data.message)
            setAlertType('error')
        }
        if(res.ok){
            setUserSocialLoginModal(false)
            localStorage.setItem('user', JSON.stringify(data))
            localStorage.setItem('my-sub', JSON.stringify(data.data[1].subscription_plan))
            localStorage.removeItem('googleAuthToken')
            window.location.href = '/'
          }
        console.log(res, data);
    }

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setUserSocialLoginModal(false)}></div>
        <div className="bg-white w-[90%] sm:w-[450px] fixed top-[50%] left-[50%] pt-[25px] md:pt-[35px] pb-[35px] px-[2rem] rounded-[20px] z-[100]" style={{ transform: "translate(-50%, -50%)" }}>
            <p className='capitalize text-center text-gray-700 font-[600] sm:text-[18px] text-[14px]'>Update first name and last name</p>
            <div className="relative input-container">
                <label>First Name</label>
                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                    <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                    <HiOutlineUser />
                    </div>
                    <input onChange={e => setFirstName(e.target.value)} className="w-full text-lg px-2 focus:outline-none" type="text" placeholder="First Name" />
                </div>
                {/* {nameError && <span className='text-red-500 text-[13px]'>{nameError}</span>} */}
            </div>

            <div className='relative input-container mt-4'>
                <label>Last Name</label>
                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                    <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                    <HiOutlineUser />
                    </div>
                    <input name='last_name' onChange={e => setLastName(e.target.value)} className="w-full text-lg px-2 focus:outline-none" type="text" placeholder="Last Name" />
                </div>
                {/* {nameError && <span className='text-red-500 text-[13px]'>{nameError}</span>} */}
            </div>
            {
                loading ?
                <div className="mt-5">
                <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                shadow-sm transition-all cursor-not-allowed">
                    <Btnloader />
                </button>
                </div> 
            : 
                <div className="mt-5">
                <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                shadow-sm transition-all" onClick={handleUserNameUpdate}>
                    Continue
                </button>
                </div>
            }
        </div>
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
    </div>
  )
}

export default UpdateUserSocailName