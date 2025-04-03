import { GoEye, GoEyeClosed, GoShieldCheck } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from "react";
import { IoCloseOutline, IoMailOutline } from "react-icons/io5";
import Btnloader from "../loader/Btnloader";

const Login = ({ setLoginModal, setRegisterModal, baseUrl, setForgotPasswordModal, setUserSocialLoginModal }) => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [loading, setLoading] = useState(false)
  const [passwordType, setPasswordType] = useState("password")

  async function handleUserSignIn(e){
    e.preventDefault()
    if(!email){
      setEmailError("Please enter your email")
      return;
    }else if(!password){
      setPasswordError("Please enter your password")
    }else if(email || password){
      console.log(emailError, passwordError);
      setEmailError("")
      setPasswordError("")
      setLoading(true)
      const res = await fetch(`${baseUrl}/login`, {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password})
      })
      const data = await res.json()
      console.log(res, data);
      if(res) setLoading(false)
      if(!res.ok){
        setEmailError(data.detail)
      }
      if(res.ok){
        setLoginModal(false)
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('my-sub', JSON.stringify(data.data[1].subscription_plan))
        window.location.href = '/'
      }
    }
  }

  function googleResponseMessage(response){
    console.log("Google response ============ ", response);
    
    if(response.credential){
      handleGoogleSignIn(response.credential)
    }
  }

  async function handleGoogleSignIn(jwt){
    console.log(jwt);
    const res = await fetch('https://cometakebe-4t5h.onrender.com/social-login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        social_type:"google",
        token:jwt
      })
    })
    const data = await res.json()
    console.log(data.data[0].completed);
    console.log(res, data.data[1]);
    if(data.data[0].completed === false){
      localStorage.setItem('googleAuthToken', JSON.stringify(data.data[1].token.access))
      setUserSocialLoginModal(true)
      setLoginModal(false)
    }
    if(data.data[0].completed === true){
      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('my-sub', JSON.stringify(data.data[1].subscription_plan))
      // window.location.href = '/'
    }
  }

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setLoginModal(false)}></div>
          <div className="bg-white w-[450px] h-[600px] fixed top-[50%] left-[50%] pt-[25px] md:pt-[35px] pb-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="flex items-center justify-between">
              <p className="text-[22px]">Welcome</p>
              <div  className="border border-gray-300 rounded-full p-1 flex items-center justify-center">
                <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setLoginModal(false)}/>
              </div>
            </div>
            <div className="">
                <div className="mt-4 px-2">
                  <div className='text-center'>
                    <div className="mt-2 flex items-center gap-5">
                      <p className="text-primary-color pr-2 cursor-pointer" style={{ borderBottom:"2px solid #003C2F" }} onClick={() => {
                        setLoginModal(true)
                        setRegisterModal(false)
                      }}>Sign in</p>
                      <p className="text-[#B6B6B6] cursor-pointer pr-2" onClick={() => {
                        setLoginModal(false)
                        setRegisterModal(true)
                      }}>Register</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full rounded text-sm mt-7 py-[9px] justify-center">
                    <GoogleLogin
                      onSuccess={googleResponseMessage}
                      onError={() => {
                          console.log('Login Failed');
                      }}
                      />
                  </div>

                  {/* <button className="flex items-center gap-3 border border-gray-300 hover:bg-gray-200 w-full rounded text-sm mt-7 py-[9px] justify-center">
                    <FcGoogle fontSize={"22px"}/>
                    Continue with Google
                  </button> */}
                  <p className="text-center text-[#B6B6B6] mt-5">Or</p>
                    <div className="">
                        <form onSubmit={handleUserSignIn}>
                            <div className="relative input-container">
                                <label className="email-label text-[14px]">Email Address</label>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                                    <IoMailOutline />
                                  </div>
                                  <input onChange={e => setEmail(e.target.value)} className="w-full text-lg px-2 outline-none" type="email" placeholder="Email Address" />
                                </div>
                                {emailError && <span className='text-red-500 text-[12px]'>{emailError}</span>}
                            </div>

                            <div className="relative input-container mt-4">
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
                                <div className="flex flex-row-reverse justify-between mt-1" onClick={() => {
                                  setForgotPasswordModal(true)
                                  setLoginModal(false)
                                  }}>
                                    <p className="text-xs text-right font-display text-secondary-color hover:text-primary-color
                                    cursor-pointer">
                                        Forgot Password?
                                    </p>
                                    {passwordError && <span className='text-red-500 text-[12px]'>{passwordError}</span>}
                                </div>
                                {passwordError && <span className='text-red-500 text-[13px]'>{passwordError}</span>}
                            </div>

                            {/* <div className="mt-4 relative input-container">
                                <label className="password-label text-[14px]">Password</label>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                                    <GoShieldCheck />
                                  </div>
                                  <input onChange={e => setPassword(e.target.value)} type="password" className="w-full text-lg px-2 focus:outline-none" placeholder="Password" />
                                </div>
                                <div className="flex flex-row-reverse justify-between mt-1" onClick={() => {
                                  setForgotPasswordModal(true)
                                  setLoginModal(false)
                                  }}>
                                    <p className="text-xs text-right font-display text-secondary-color hover:text-primary-color
                                    cursor-pointer">
                                        Forgot Password?
                                    </p>
                                    {passwordError && <span className='text-red-500 text-[12px]'>{passwordError}</span>}
                                </div>
                            </div> */}

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
                                shadow-sm transition-all" type="submit">
                                    Login
                                </button>
                              </div>
                            }
                        </form>
                        <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ? <button className="cursor-pointer text-secondary-color hover:text-green-800" onClick={() => {
                              setLoginModal(false)
                              setRegisterModal(true)
                            }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
          {/* </div> */}
        </div>
    </div>
  )
}

export default Login