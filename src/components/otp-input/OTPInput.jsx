import { useState } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import Btnloader from '../loader/Btnloader'
import EnvelopeImg from '../../assets/envelope.png'
import ProgressBar from '../../assets/progressbar2.png'
import { IoArrowBackOutline } from "react-icons/io5";
import { LuKeyRound } from "react-icons/lu";


const OTPInput = ({ setForgotPasswordModal, baseUrl, setOtpInput }) => {

    const [otp, setOtp] = useState("")
    const [otpError, setOtpError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleUserOTPInput () {
        if(!otp){
            setOtpError("Please enter the OTP code sent to your mail")
        }
    }

  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setLoginModal(false)}></div>
          <div className="bg-white w-[450px] h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="">
                <div className='bg-[#E6ECEA] inline-block p-2 rounded-full cursor-pointer' onClick={() => {
                    setForgotPasswordModal(true)
                    setOtpInput(true)
                }}>
                    <IoArrowBackOutline className='text-[#292D32] text-[18px]'/>
                </div>
                <img src={ProgressBar} alt="" className='w-[120px] mx-auto mt-[1rem] block' />
                <img src={EnvelopeImg} alt="" className='w-[70px] h-[70px] mx-auto mt-[2.5rem] mb-[2rem]' />
                <p className="text-[18px] md:text-[32px] font-[700] text-center text-[#1C1C1C]">Enter OTP</p>
                <p className='text-[#61677D] text-center mt-4 md:text-[18px] text-[14px]'>
                    Enter the OTP code we just sent you on your registered Email/Phone number
                </p>
            </div>
            <div className="mt-4 px-2">
                <form onSubmit={handleUserOTPInput}>
                    <div className="relative input-container">
                        <label className="email-label text-[14px]">Email Address</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                            <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <LuKeyRound />
                            </div>
                            <input onChange={e => setOtp(e.target.value)} className="w-full text-lg px-2 outline-none" type="email" placeholder="123456" />
                        </div>
                        <small className='text-[#3B4054] block'>Didn't get OTP? <span className='text-secondary-color cursor-pointer' onClick={() => handleUserOTPInput()}>Resend</span> </small>
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
                        <button className="bg-secondary-color text-white px-4 py-3 w-full rounded-[10px] tracking-wide
                        font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                        shadow-sm transition-all" type="submit">
                            Continue
                        </button>
                        </div>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default OTPInput