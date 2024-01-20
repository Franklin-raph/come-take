import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoShieldCheck } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SignInuserImg from "../../assets/Sign in user img.png"
import { IoMailOutline } from "react-icons/io5";

const Register = () => {

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
      localStorage.setItem("user", 1)
      console.log(userData)
      setLoggedIn(true)
      navigate("/")
    }


  return (
    <div>
      <div className="lg:flex">
            <div className="lg:w-1/2 xl:max-w-screen-sm">
              {/* <button className="relative top-10 left-10" onClick={() => navigate("/")}>Back</button> */}
                <div className="mt-12 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                  <div className='text-center'>
                    <h2 class="text-4xl text-primary-color font-display font-semibold xl:text-bold">CREATE ACCOUNT</h2>
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
                                  <input name='fName' onChange={handleInputChange} class="w-full text-lg p-2 focus:outline-none" type="text" placeholder="John" />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Last Name</div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <HiOutlineUser />
                                  </div>
                                  <input name='lName' onChange={handleInputChange} class="w-full text-lg p-2 focus:outline-none" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <IoMailOutline />
                                  </div>
                                  <input name='email' onChange={handleInputChange} class="w-full text-lg p-2 focus:outline-none" type="email" placeholder="johndoe@gmail.com" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                </div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <GoShieldCheck />
                                  </div>
                                  <input name='password' onChange={handleInputChange} className="w-full text-lg p-2 focus:outline-none" type="password" placeholder="********" />
                                </div>
                            </div>
                            <div className="mt-8">
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
                            </div>
                            <div className="mt-10">
                                <button className="bg-[#EDEDED] text-primary-color p-4 w-full rounded-sm tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                shadow-sm transition-all" type="submit">
                                    Log In
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
    </div>
  )
}

export default Register