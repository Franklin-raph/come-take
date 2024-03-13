import { useEffect, useState } from 'react'
import { IoMailOutline } from 'react-icons/io5'
import Btnloader from '../loader/Btnloader'
import KeyImg from '../../assets/keylock.png'
import ProgressBar from '../../assets/progressbar3.png'
import { IoArrowBackOutline } from "react-icons/io5";
import Alert from '../alert/Alert'
import { GoEye, GoEyeClosed, GoShieldCheck } from 'react-icons/go'

const ResetPassword = ({ setLoginModal, setOtpInput, setResetPasswordModal, baseUrl }) => {

    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [passwordType, setPasswordType] = useState("password")
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")
    const [passwordError, setPasswordError] = useState()
    const [confirmPasswordError, setConfirmPasswordError] = useState()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [passwordResetDetails, setPasswordResetDetails] = useState({})
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setPasswordResetDetails(JSON.parse(localStorage.getItem('passwordResetDetails')))
      // console.log();
    },[])

    async function handleUserResetPassword(e){
        e.preventDefault()
        if(!password || !confirmPassword){
          setMsg('Please enter the fields')
          setAlertType('error')
        }else if(password !== confirmPassword){
          setMsg('Both fields do not match')
          setAlertType('error')
        }else{
          setLoading(true)
          const res = await fetch(`${baseUrl}/reset-password`, {
              method:"PUT",
              headers:{
                  'Content-Type':'application/json'
              },
              body: JSON.stringify({token:passwordResetDetails.otp, email:passwordResetDetails.email, new_password:password, confirm_password:confirmPassword,})
          })
          const data = await res.json()
          if(res) setLoading(false)
          if(!res.ok){
            setMsg(data.message)
            setAlertType('error')
          }
          if(res.ok){
            localStorage.removeItem('emailForPasswordReset')
            localStorage.removeItem('passwordResetDetails')
            setPasswordResetSuccess(data.message)
          }
          console.log(res, data);
        }
    }

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setLoginModal(false)}></div>
          <div className="bg-white w-[450px] h-[580px] fixed top-[50%] left-[50%] pt-[32px] pb-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="">
                <div className='bg-[#E6ECEA] inline-block p-2 rounded-full cursor-pointer' onClick={() => {
                    setResetPasswordModal(false)
                    setOtpInput(true)
                }}>
                    <IoArrowBackOutline className='text-[#292D32] text-[18px]'/>
                </div>
                <img src={ProgressBar} alt="" className='w-[120px] mx-auto mt-[0.5rem] block' />
                <img src={KeyImg} alt="" className='w-[70px] h-[70px] mx-auto mt-[1.5rem] mb-[1rem]' />
                <p className="text-[18px] md:text-[32px] font-[700] text-center text-[#1C1C1C]">Reset Password</p>
                <p className='text-[#61677D] text-center md:text-[18px] text-[14px]'>
                    Input a new password to access your account. You can write it down to help you remember.
                </p>
            </div>
            <div className="mt-4 px-2">
                <form onSubmit={handleUserResetPassword}>
                  <div className="relative input-container">
                      <label>Password</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center justify-between gap-2'>
                          <div className='w-full p-[2px] flex items-center gap-2'>
                            <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                              <GoShieldCheck />
                            </div>
                            <input name='password' onChange={e => setPassword(e.target.value)} className="w-full text-lg px-2 focus:outline-none" type={passwordType} placeholder="********" />
                          </div>
                          <p className='mr-2'>
                            {passwordType === "password" ?
                              <GoEye color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setPasswordType("text")}/>
                              : 
                              <GoEyeClosed color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setPasswordType("password")}/>
                            }
                          </p>
                        </div>
                        {passwordError && <span className='text-red-500 text-[13px]'>X {passwordError}</span>}
                    </div>

                    <div className="input-container mt-2">
                      <label> Confirm Password</label>
                      <div className='w-full p-[2px] border border-gray-300 flex items-center justify-between gap-2'>
                        <div className='w-full p-[2px] flex items-center gap-2'>
                          <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <GoShieldCheck />
                          </div>
                          <input name='confirmPassword' onChange={e => setConfirmPassword(e.target.value)} className="w-full text-lg px-2 focus:outline-none" type={confirmPasswordType} placeholder="********" />
                        </div>
                        <p className='mr-2'>
                          {confirmPasswordType === "password" ?
                            <GoEye color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setConfirmPasswordType("text")}/>
                            : 
                            <GoEyeClosed color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setConfirmPasswordType("password")}/>
                            }
                        </p>
                      </div>
                      {confirmPasswordError && <span className='text-red-500 text-[13px]'> X {confirmPasswordError}</span>}
                  </div>

                    <div className="mt-7">
                    {
                        loading ?
                            <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                            shadow-sm transition-all cursor-not-allowed">
                                <Btnloader />
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
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
        
        {
          passwordResetSuccess &&
          <div>
            <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setPasswordResetSuccess(false)}></div>
            <div className="bg-white w-[450px] flex items-center justify-center h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
              <div className="">
                  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                {/* <div class="wrapper"> 
                </div> */}
                <p className='text-center text-[#3b4054]'>{passwordResetSuccess}</p>
                <div className="mt-7">
                    <button className="bg-secondary-color text-white px-4 py-3 w-full rounded-sm tracking-wide
                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                    shadow-sm transition-all" onClick={() => {
                        setLoginModal(true)
                        setPasswordResetSuccess(false)
                        setResetPasswordModal(false)
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

export default ResetPassword