import { useEffect, useState } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import Btnloader from '../loader/Btnloader'
import EnvelopeImg from '../../assets/envelope.png'
import ProgressBar from '../../assets/progressbar2.png'
import { IoArrowBackOutline } from "react-icons/io5";
import { LuKeyRound } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import Alert from '../alert/Alert'


const OTPInput = ({ setForgotPasswordModal, setConfirmActivateAccountModal, baseUrl, setLoginModal, setRegisterModal, setOtpInput, setOtpModal, fromRegister }) => {

    const [otp, setOtp] = useState("")
    const [otpError, setOtpError] = useState("")
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()

    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    useEffect(() => {
        console.log(fromRegister);
    },[])

    async function handleUserOTPInput (e) {
        e.preventDefault()
        let endpoint;
        fromRegister === true ? endpoint = 'registration/verify-token' : endpoint = 'account-activation'
        if(!otp){
            setOtpError("Please enter the OTP code sent to your mail")
        }else{
            setLoading(true)
            console.log(`${baseUrl}/${endpoint}`, JSON.stringify({email:"igboekwulusifranklin@gmail.com", token:otp}));
            const res = await fetch(`${baseUrl}/${endpoint}`, {
                method:"POST",
                body: JSON.stringify({email:"igboekwulusifranklin@gmail.com", token:otp}),
                headers: {
                    "Content-Type":"application/json"
                }
            })
            const data = await res.json()
            if(res) setLoading(false)
            if(!res.ok){
                setMsg(data.message)
                setAlertType('error')
            }
            if(res.ok){
                setMsg(data.message)
                setAlertType('success')
                setConfirmActivateAccountModal(true)
                setRegisterModal(false)
                // toast.success(data.message)
                
            }
            console.log(res, data);
        }
    }

    async function resendToken () {
        let endpoint;
        fromRegister === true ? endpoint = 'registration/resend-verifcation-token' : endpoint = 'account-activation'
        setLoading(true)
        console.log(`${baseUrl}/${endpoint}`, JSON.stringify({email:"igboekwulusifranklin@gmail.com"}));
        const res = await fetch(`${baseUrl}/${endpoint}`, {
            method:"POST",
            body: JSON.stringify({email:"igboekwulusifranklin@gmail.com"}),
            headers: {
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        if(res) setLoading(false)
        if(!res.ok){
            // toast.error(data.message)
            setMsg(data.message)
            setAlertType('error')
        }
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
            
            // setLoginModal(true)
        }
        console.log(res, data);
    }



  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setLoginModal(false)}></div>
          <div className="bg-white w-[450px] h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="">
                {
                    fromRegister === true ?
                    <div className='bg-[#E6ECEA] inline-block p-2 rounded-full cursor-pointer' onClick={() => {
                        setRegisterModal(true)
                        setOtpModal(false)
                    }}>
                        <IoArrowBackOutline className='text-[#292D32] text-[18px]'/>
                    </div>
                    :
                    <div className='bg-[#E6ECEA] inline-block p-2 rounded-full cursor-pointer' onClick={() => {
                        setForgotPasswordModal(true)
                        setOtpInput(false)
                    }}>
                        <IoArrowBackOutline className='text-[#292D32] text-[18px]'/>
                    </div>
                }
                
                {fromRegister === true ? "" : <img src={ProgressBar} alt="" className='w-[120px] mx-auto mt-[1rem] block' />  }
                <img src={EnvelopeImg} alt="" className='w-[70px] h-[70px] mx-auto mt-[2.5rem] mb-[2rem]' />
                <p className="text-[18px] md:text-[32px] font-[700] text-center text-[#1C1C1C]">Enter OTP</p>
                <p className='text-[#61677D] text-center mt-4 md:text-[18px] text-[14px]'>
                    Enter the OTP code we just sent you on your registered Email/Phone number
                </p>
            </div>
            <div className="mt-4 px-2">
                <form onSubmit={handleUserOTPInput}>
                    <div className="relative input-container">
                        <label className="email-label text-[14px]">Token</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                            <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <LuKeyRound />
                            </div>
                            <input onChange={e => setOtp(e.target.value)} className="w-full text-lg px-2 outline-none" type="text" placeholder="123456" />
                        </div>
                        <small className='text-[#3B4054] block'>Didn't get OTP? <span className='text-secondary-color cursor-pointer' onClick={() => resendToken()}>Resend</span> </small>
                        {otpError && <span className='text-red-500 text-[13px]'>X {otpError}</span>}
                    </div>

                    {
                        loading ?
                        <div className="mt-7">
                        <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                        font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                        shadow-sm transition-all cursor-not-allowed">
                            <Btnloader />
                        </button>
                        </div> 
                    : 
                        <div className="mt-7">
                        <button className="bg-secondary-color text-white px-4 py-3 w-full rounded-sm tracking-wide
                        font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                        shadow-sm transition-all" type="submit">
                            Continue
                        </button>
                        </div>
                    }
                </form>
            </div>
        </div>
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType}/>}
    </div>
  )
}

export default OTPInput