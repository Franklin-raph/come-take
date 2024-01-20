import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoShieldCheck } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import SignInuserImg from "../../assets/Sign in user img.png"
import { IoMailOutline } from "react-icons/io5";
import { RiLoader4Line } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Register = ({setLoggedIn}) => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [passwordType, setPasswordType] = useState("password")
  const [confirmPasswordType, setConfirmPasswordType] = useState("password")
  const [errors, setErrors] = useState(false)

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
      const validate = validateInputFields(errors, Object.values(userData))
      if(validate === true){
        return
      }else{
        setLoading(true)
        const res = await fetch("https://cometake.pythonanywhere.com/registration",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(userData)
        })
        const data = await res.json()
        if(res) setLoading(false)
        if(!res.ok){
          toast.error(data.message)
          // Swal.fire({
          //   title: 'Error!',
          //   text: data.messsage[0],
          //   icon: 'error',
          //   cancelButtonText:'Close'
          // })
        }
        console.log(res, data);
      }
      console.log(validateInputFields(errors, Object.values(userData)));
      
      // setLoggedIn(true)
      // navigate("/")
    }

  function validateInputFields(inputFieldValue){
      console.log(inputFieldValue);
      for(let i = 0; i <= inputFieldValue.length; i++){
        if(inputFieldValue[i] === ""){
          toast.error("Please fill in all fields")
          return true
          // if(inputFieldValue[i] === ""){
          //   Swal.fire({
          //     title: 'Error!',
          //     text: 'Please fill in all fields',
          //     icon: 'error',
          //     cancelButtonText:'Close'
          //   })
        }
      }
      
      if(userData.password.length < 8){
        setErrors(true)
        toast.error("Password length must be equal or greater than 8 characters")
        return true
        // Swal.fire({
        //   title: 'Error!',
        //   text: 'Password length must be equal or greater than 8 characters',
        //   icon: 'error',
        //   cancelButtonText:'Close'
        // })
      }
      
      if(userData.password !== userData.confirmPassword){
        setErrors(true)
        toast.error("Please both password fields must match")
        return true
        // Swal.fire({
        //   title: 'Error!',
        //   text: 'Please both password fields must match',
        //   icon: 'error',
        //   cancelButtonText:'Close'
        // })
      }
    }

  return (
    <div>
      <div className="lg:flex">
            <div className="lg:w-1/2 xl:max-w-screen-sm">
              {/* <button className="relative top-10 left-10" onClick={() => navigate("/")}>Back</button> */}
                <div className="mt-12 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                  <div className='text-center'>
                    <h2 className="text-4xl text-primary-color font-display font-semibold xl:text-bold">CREATE ACCOUNT</h2>
                    <p className='mt-3'>Kindly create ana account with us to enjoy the full features.</p>
                  </div>
                    <div className="mt-7">
                        <form onSubmit={handleUserSignUp}>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">First Name</div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <HiOutlineUser />
                                  </div>
                                  <input name='first_name' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type="text" placeholder="John" />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Last Name</div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <HiOutlineUser />
                                  </div>
                                  <input name='last_name' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className="text-sm font-bold text-gray-700 tracking-wide label-helper">Email Address</div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <IoMailOutline />
                                  </div>
                                  <input name='email' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type="email" placeholder="johndoe@gmail.com" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                </div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center justify-between gap-2'>
                                  <div className='w-full p-[2px] flex items-center gap-2'>
                                    <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                      <GoShieldCheck />
                                    </div>
                                    <input name='password' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type={passwordType} placeholder="********" />
                                  </div>
                                  <p className='mr-2'>
                                    {passwordType === "password" ?
                                      <GoEye color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setPasswordType("text")}/>
                                      : 
                                      <GoEyeClosed color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setPasswordType("password")}/>
                                     }
                                  </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Confirm Password
                                    </div>
                                </div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center justify-between gap-2'>
                                  <div className='w-full p-[2px] flex items-center gap-2'>
                                    <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                      <GoShieldCheck />
                                    </div>
                                    <input name='password' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type={confirmPasswordType} placeholder="********" />
                                  </div>
                                  <p className='mr-2'>
                                    {confirmPasswordType === "password" ?
                                      <GoEye color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setConfirmPasswordType("text")}/>
                                      : 
                                      <GoEyeClosed color='gray' fontSize={"20px"} cursor={"pointer"} onClick={() => setConfirmPasswordType("password")}/>
                                     }
                                  </p>
                                </div>
                            </div>
                            {/* <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Confirm Password
                                    </div>
                                </div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <GoShieldCheck />
                                  </div>
                                  <input name='confirmPassword' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type="password" placeholder="********" />
                                </div>
                            </div> */}
                            <div className="mt-10">
                                <button className="bg-[#EDEDED] text-primary-color p-4 w-full rounded-sm tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                shadow-sm transition-all" type="submit">
                                  {loading ? <RiLoader4Line /> : <>Sign Up</> }
                                </button>
                            </div>
                        </form>
                        <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
                            Already have an account ? <Link to="/login" className="cursor-pointer text-secondary-color hover:text-green-800">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
              <img src={SignInuserImg} alt="" className="w-full object-contain"/>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Register