import React, { useState } from 'react'
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { GoEyeClosed } from 'react-icons/go';
import Alert from '../../components/alert/Alert';
import Btnloader from '../../components/loader/Btnloader';

const PasswordReset = ({baseUrl}) => {

    const [old_password, setOldPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [loader, setLoader] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))

    async function updatePassword(){
        if(!new_password || !confirm_password || !old_password){
            setMsg("Please fill in the fields")
            setAlertType('error')
        }else if(new_password !== confirm_password){
            setMsg("New Password and confirm password fields must match")
            setAlertType('error')
        }else{
            setLoader(true)
            const res = await fetch(`${baseUrl}/reset-password/dashboard`,{
                method:'POST',
                body: JSON.stringify({old_password, new_password, confirm_password}),
                headers: {
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.data[0].access}`
                }
            })
            const data = await res.json()
            if(res) setLoader(false)
            if(!res.ok){
                setMsg(data.message)
                setAlertType('error')
            }
            if(res.ok){
                setMsg(data.message)
                setAlertType('success')
            }
            console.log(res, data);
        }
    }

    

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 w-full password-reset' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-8 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Password Settings</h1>
                        <div style={{border:"1px solid #CCCCCC"}} className='rounded-[6px] flex items-center justify-between px-4'>
                            <input onChange={e => setOldPassword(e.target.value)} type="text" placeholder='Current Password' className='w-full outline-none py-3 rounded-[6px] text-[#1A1A1A]'/>
                            <GoEyeClosed color='#B6B6B6' fontSize={"24px"}/>
                        </div>
                        <div style={{border:"1px solid #CCCCCC"}} className='rounded-[6px] flex items-center justify-between px-4 my-7'>
                            <input onChange={e => setNewPassword(e.target.value)} type="text" placeholder='New Password' className='w-full outline-none py-3 rounded-[6px] text-[#1A1A1A]'/>
                            <GoEyeClosed color='#B6B6B6' fontSize={"24px"}/>
                        </div>
                        <div style={{border:"1px solid #CCCCCC"}} className='rounded-[6px] flex items-center justify-between px-4'>
                            <input onChange={e => setConfirmPassword(e.target.value)} type="text" placeholder='Confirm Password' className='w-full outline-none py-3 rounded-[6px] text-[#1A1A1A]'/>
                            <GoEyeClosed color='#B6B6B6' fontSize={"24px"}/>
                        </div>
                        {
                            loader ?
                                <div className="mt-7">
                                    <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                    shadow-sm transition-all cursor-not-allowed">
                                        <Btnloader />
                                    </button>
                                </div>
                              :
                              <button onClick={updatePassword} className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Save</button>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PasswordReset