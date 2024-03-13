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


const OTPInput = ({ setForgotPasswordModal, emailForOTP, setResetPasswordModal, email, baseUrl, setLoginModal, setRegisterModal, setOtpInput, setOtpModal, fromRegister }) => {

    const [otp, setOtp] = useState("")
    const [otpError, setOtpError] = useState("")
    const [loading, setLoading] = useState(false)
    const [emailForPasswordReset, setEmailForPasswordReset] = useState('')
    
    const navigate = useNavigate()

    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [accountActivationSuccess, setAccountActivationSuccess] = useState(false)

    useEffect(() => {
        console.log(fromRegister, emailForOTP);
        setEmailForPasswordReset(JSON.parse(localStorage.getItem('emailForPasswordReset')))
    },[])

    async function forgotPasswordOTP(){
        if(!otp){
            setOtpError("Please enter the OTP code sent to your mail")
        }else{
            console.log(`${baseUrl}/reset-password/verify-password-token/${emailForPasswordReset}/${otp}`);
            setLoading(true)
            const res = await fetch(`${baseUrl}/reset-password/verify-password-token/${emailForPasswordReset}/${otp}`, {
                method:"GET",
            })
            const data = await res.json()
            console.log(res, data);
            if(res) setLoading(false)
            if(!res.ok){
                setMsg(data.message)
                setAlertType('error')
            }
            if(res.ok){
                localStorage.setItem('passwordResetDetails', JSON.stringify({email:emailForPasswordReset, otp:otp}))
                setResetPasswordModal(true)
                setOtpInput(false) 
            }
            console.log(res, data);
        }
    }


    async function verifyTokenForAccountActivation(){
        console.log('verifyTokenForAccountActivation called', JSON.parse(localStorage.getItem('signUpEmail')));
        if(!otp){
            setOtpError("Please enter the OTP code sent to your mail")
        }else{
            setLoading(true)
            const res = await fetch(`${baseUrl}/registration/verify-token`, {
                method:"POST",
                // body: JSON.stringify({email:`igboekwulusifranklin@gmail.com`, token:otp}),
                body: JSON.stringify({email:JSON.parse(localStorage.getItem('signUpEmail')), token:otp}),
                headers: {
                    "Content-Type":"application/json"
                }
            })
            const data = await res.json()
            console.log(res, data);
            if(res) setLoading(false)
            if(!res.ok){
                setMsg(data.message)
                setAlertType('error')
            }
            if(res.ok){
                setAccountActivationSuccess(data.message)
                localStorage.removeItem('signUpEmail')
            }
        }
    }


    async function resendTokenForForgotPassword () {
        setLoading(true)
        const res = await fetch(`${baseUrl}/registration/resend-verifcation-token`, {
            method:"POST",
            body: JSON.stringify({email:emailForPasswordReset}),
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
        }
    }


    async function resendTokenForAccountActivation(){
        console.log(JSON.stringify({email:JSON.parse(localStorage.getItem('signUpEmail'))}));
        setLoading(true)
        const res = await fetch(`${baseUrl}/registration/resend-verifcation-token`, {
            method:"POST",
            body: JSON.stringify({email:'igboekwulusifranklin@gmail.com'}),
            headers: {
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        if(res) setLoading(false)
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
        }
        console.log(res, data);
    }


    function resendToken(){
        if(fromRegister === true){
            console.log('From Register');
            resendTokenForAccountActivation()
        }else{
            resendTokenForForgotPassword()
        }
    }

    async function handleUserOTPInput(e) {
        e.preventDefault()
        if(fromRegister === true){
            verifyTokenForAccountActivation()
        }else{
            forgotPasswordOTP()
        }
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
        
        {
          accountActivationSuccess &&
          <div>
            <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setAccountActivationSuccess(false)}></div>
            <div className="bg-white w-[450px] flex items-center justify-center h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
              <div className="">
                  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                {/* <div class="wrapper"> 
                </div> */}
                <p className='text-center text-[#3b4054]'>{accountActivationSuccess}</p>
                <div className="mt-7">
                    <button className="bg-secondary-color text-white px-4 py-3 w-full rounded-sm tracking-wide
                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                    shadow-sm transition-all" onClick={() => {
                        setLoginModal(true)
                        setAccountActivationSuccess(false)
                        setOtpInput(false)
                    }}>
                        Continue to Login
                    </button>
                </div>
              </div>
          </div>
        </div>
        }
    </div>
  )
}

export default OTPInput