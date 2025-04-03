import React, { useState, useRef, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoShieldCheck } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import SignInuserImg from "../../assets/Sign in user img.png"
import { IoCloseOutline, IoMailOutline } from "react-icons/io5";
import { RiLoader4Line } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import OTPInput from '../otp-input/OTPInput'
import loaderImg from '../../assets/loader.gif'
import Alert from '../alert/Alert'
import { GoogleLogin } from '@react-oauth/google';

const Register = ({ setLoginModal, setRegisterModal, baseUrl, setUserSocialLoginModal }) => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [otpModal, setOtpModal] = useState(false)
  const [passwordType, setPasswordType] = useState("password")
  const [confirmPasswordType, setConfirmPasswordType] = useState("password")
  const [passwordError, setPasswordError] = useState()
  const [confirmPasswordError, setConfirmPasswordError] = useState()
  const [emailError, setEmailError] = useState("")
  const [nameError, setNameError] = useState("")
  const [fromRegister, setFromRegister] = useState(false)
 

  const [msg, setMsg] = useState(false)
  const [alertType, setAlertType] = useState('')

  // const App = () => {
    const [userData, setUserData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    const handleInputChange = event => {
        const target = event.currentTarget
        setUserData({
            ...userData,
            [target.name] : target.value
          })
    }

    async function handleUserSignUp(e){
      e.preventDefault()
      console.log("line 42 ====> ", userData);
      setConfirmPasswordError("")
      setPasswordError("")
      setEmailError("")
      setNameError("")
      const validate = validateInputFields(Object.values(userData))
      if(validate === true){
        return
      }else{
        localStorage.setItem('signUpEmail', JSON.stringify(userData.email))
        setLoading(true)
        const res = await fetch(`${baseUrl}/registration/customer`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(userData)
        })
        const data = await res.json()
        console.log(res, data);
        if(res) setLoading(false)
        if(!res.ok){
          setEmailError(data.message.email)
          setPasswordError(data.message.password)
        }
        if(res.ok){
          setMsg(data.message)
          setAlertType('success')
          setFromRegister(true)
          setOtpModal(true)
        }
        console.log(res, data.message.email);
        console.log(data.message);
      }
      // console.log(validateInputFields(errors, Object.values(userData)));
      
      // setLoggedIn(true)
      // navigate("/")
    }

  function validateInputFields(inputFieldValue){
      console.log(inputFieldValue);
      for(let i = 0; i <= inputFieldValue.length; i++){
        console.log(inputFieldValue[i]);
        if(inputFieldValue[i] === ""){
          setEmailError("Please fill in the field")
          setConfirmPasswordError("Please fill in the field")
          setPasswordError("Please fill in the field")
          setNameError("Please fill in the field")
          return true
        }
      }

      inputFieldValue.forEach(value => {
        if(value === ""){
          setMsg("Please fill in all fields")
          setAlertType('error')
        }
      })
      
      if(userData.password.length < 8){
        setMsg("Password length must be equal or greater than 8 characters")
        setAlertType('error')
        return true
      }
      
      if(userData.password !== userData.confirmPassword){
        setConfirmPasswordError("Both password fields must match")
        setPasswordError("Both password fields must match")
        setMsg("Please both password fields must match")
        setAlertType('error')
        return true
      }
    }

    function googleResponseMessage(response){
      if(response.credential){
        handleGoogleSignIn(response.credential)
      }
    }
  
    async function handleGoogleSignIn(jwt){
      // console.log(jwt);
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
        setRegisterModal(false)
      }
      if(data.data[0].completed === true){
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('my-sub', JSON.stringify(data.data[1].subscription_plan))
        window.location.href = '/'
      }
    }

  return (
  <div>
    <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setRegisterModal(false)}></div>
    <div className="bg-white w-[450px] h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] register-modal z-[100]" style={{ transform: "translate(-50%, -50%)" }}>
      <div className="flex items-center justify-between">
        <p className="text-[22px]">Welcome</p>
        <div  className="border border-gray-300 rounded-full p-1 flex items-center justify-center">
          <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setRegisterModal(false)}/>
        </div>
      </div>
        <div className="mt-4 px-2">
          <div className='text-center'>
            <div className="mt-2 flex items-center gap-5">
              <p className="text-primary-color pr-2 cursor-pointer" onClick={() => {
                setLoginModal(true)
                setRegisterModal(false)
              }}>Sign in</p>
              <p className="text-[#B6B6B6] cursor-pointer pr-2" style={{ borderBottom:"2px solid #003C2F" }} onClick={() => {
                setLoginModal(false)
                setRegisterModal(true)
              }}>Register</p>
            </div>
          </div>
            <div className="">
                <form onSubmit={handleUserSignUp}>
                <div className="flex items-center gap-3 w-full rounded text-sm mt-7 py-[9px] justify-center">
                    <GoogleLogin
                      onSuccess={googleResponseMessage}
                      onError={() => {
                          console.log('Login Failed');
                      }}
                      />
                  </div>
                  <div className="relative input-container">
                    <label>First Name</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                          <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <HiOutlineUser />
                          </div>
                          <input name='first_name' onChange={handleInputChange} className="w-full text-lg px-2 focus:outline-none" type="text" placeholder="First Name" />
                        </div>
                        {nameError && <span className='text-red-500 text-[13px]'>{nameError}</span>}
                    </div>

                    <div className='relative input-container mt-4'>
                      <label>Last Name</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                          <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <HiOutlineUser />
                          </div>
                          <input name='last_name' onChange={handleInputChange} className="w-full text-lg px-2 focus:outline-none" type="text" placeholder="Doe" />
                        </div>
                        {nameError && <span className='text-red-500 text-[13px]'>{nameError}</span>}
                    </div>

                    <div className='relative input-container mt-4'>
                      <label>Email Address</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                          <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <IoMailOutline />
                          </div>
                          <input name='email' onChange={handleInputChange} className="w-full text-lg px-2 focus:outline-none" type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        {emailError && <span className='text-red-500 text-[13px]'>{emailError}</span>}
                    </div>

                    <div className="relative input-container mt-4">
                      <label>Password</label>
                        <div className='w-full p-[2px] border border-gray-300 flex items-center justify-between gap-2'>
                          <div className='w-full p-[2px] flex items-center gap-2'>
                            <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                              <GoShieldCheck />
                            </div>
                            <input name='password' onChange={handleInputChange} className="w-full text-lg px-2 focus:outline-none" type={passwordType} placeholder="********" />
                          </div>
                          <p className='mr-2'>
                            {passwordType === "password" ?
                              <GoEye color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setPasswordType("text")}/>
                              : 
                              <GoEyeClosed color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setPasswordType("password")}/>
                            }
                          </p>
                        </div>
                        {passwordError && <span className='text-red-500 text-[13px]'>{passwordError}</span>}
                    </div>

                    <div className="input-container mt-4">
                      <label> Confirm Password</label>
                      <div className='w-full p-[2px] border border-gray-300 flex items-center justify-between gap-2'>
                        <div className='w-full p-[2px] flex items-center gap-2'>
                          <div className="bg-primary-color p-2 rounded-sm text-2xl text-white">
                            <GoShieldCheck />
                          </div>
                          <input name='confirmPassword' onChange={handleInputChange} className="w-full text-lg px-2 focus:outline-none" type={confirmPasswordType} placeholder="********" />
                        </div>
                        <p className='mr-2'>
                          {confirmPasswordType === "password" ?
                            <GoEye color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setConfirmPasswordType("text")}/>
                            : 
                            <GoEyeClosed color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setConfirmPasswordType("password")}/>
                            }
                        </p>
                      </div>
                      {confirmPasswordError && <span className='text-red-500 text-[13px]'> {confirmPasswordError}</span>}
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
                        <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                        shadow-sm transition-all" type="submit">
                            Create Account
                        </button>
                      }
                    </div>
                </form>
                <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
                    Already have an account ? <button className="cursor-pointer text-secondary-color hover:text-green-800" onClick={() => {
                      setLoginModal(true)
                      setRegisterModal(false)
                    }}>Sign in</button>
                </div>
            </div>
        </div>
    </div>
    {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
    
    {otpModal && <OTPInput setLoginModal={setLoginModal} baseUrl={baseUrl} setOtpModal={setOtpModal} setRegisterModal={setRegisterModal} fromRegister={fromRegister}/> }
  </div>
  )
}

export default Register