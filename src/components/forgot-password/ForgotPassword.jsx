import { useState } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import Btnloader from '../loader/Btnloader'
import EnvelopeImg from '../../assets/envelope.png'
import ProgressBar from '../../assets/progressbar1.png'
import { IoArrowBackOutline } from "react-icons/io5";
import loaderImg from '../../assets/loader.gif'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


const ForgotPassword = ({ setForgotPasswordModal, setLoginModal, setOtpInput, baseUrl }) => {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleUserForgotPassword(e){
        e.preventDefault()
        if(!email){
            toast.error("Please enter your email or phone number")
            setEmailError("Please enter your email or phone number")
        }else{
            setLoading(true)
            const res = await fetch(`${baseUrl}/reset-password`,{
                method:"POST",
                body: JSON.stringify({email}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if(res) setLoading(false)
            const data = await res.json()
            console.log(res, data);
            if(!res.ok){
                setEmailError(data.message)
                toast.error(data.message)
            }
            if(res.ok){
                toast.success()
                setOtpInput(true)
                setForgotPasswordModal(false)
            }
            console.log(res, data);
        }
    }

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setLoginModal(false)}></div>
          <div className="bg-white w-[450px] h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="">
                <div className='bg-[#E6ECEA] inline-block p-2 rounded-full cursor-pointer' onClick={() => {
                    setForgotPasswordModal(false)
                    setLoginModal(true)
                }}>
                    <IoArrowBackOutline className='text-[#292D32] text-[18px]'/>
                </div>
                <img src={ProgressBar} alt="" className='w-[120px] mx-auto mt-[1rem] block' />
                <img src={EnvelopeImg} alt="" className='w-[70px] h-[70px] mx-auto mt-[2.5rem] mb-[2rem]' />
                <p className="text-[18px] md:text-[32px] font-[700] text-center text-[#1C1C1C]">Forgot Password</p>
                <p className='text-[#61677D] text-center mt-4 md:text-[18px] text-[14px]'>
                    Input the email/phone number you registered this account with to be able to receive a reset pin.
                </p>
            </div>
            <div className="mt-4 px-2">
                <form onSubmit={handleUserForgotPassword}>
                    <div className="relative input-container">
                        <label className="email-label text-[14px]">Email Address</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                            <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <IoMailOutline />
                            </div>
                            <input onChange={e => setEmail(e.target.value)} className="w-full text-lg px-2 outline-none" type="email" placeholder="Email / Phone" />
                        </div>
                        {emailError && <span className='text-red-500 text-[13px]'>X {emailError}</span>}
                    </div>

                    <div className="mt-7">
                    {
                        loading ?
                            <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                            shadow-sm transition-all cursor-not-allowed">
                                <img src={loaderImg} className='h-6 w-6 mx-auto'/>
                            </button>
                        :
                            <button className="bg-secondary-color text-white px-4 py-3 w-full rounded-sm tracking-wide
                            font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                            shadow-sm transition-all" type="submit">
                                Continue
                            </button>
                    }
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default ForgotPassword