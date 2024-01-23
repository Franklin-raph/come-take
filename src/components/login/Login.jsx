import { GoShieldCheck } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import SignInuserImg from "../../assets/Sign in user img.png"
import { useEffect } from "react";
import { IoCloseOutline, IoMailOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Login = ({ setLoginModal, setRegisterModal }) => {

  const navigate = useNavigate()

  async function handleUserSignIn(e){
    e.preventDefault()
    localStorage.setItem("user", 1)
    navigate("/")
  }

  return (
    <div>
      <div className="h-full w-full fixed top-0 left-0 z-[99999]" style={{ background:"rgba(14, 14, 14, 0.58)" }}>
          <div className="bg-white w-[450px] h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px]" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="flex items-center justify-between">
              <p className="text-[22px]">Welcome</p>
              <IoCloseOutline fontSize={"20px"} cursor={"pointer"} onClick={() => setLoginModal(false)}/>
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
                  <button className="flex items-center gap-3 border border-gray-300 hover:bg-gray-200 w-full rounded text-sm mt-7 py-[8px] justify-center">
                    <FcGoogle fontSize={"22px"}/>
                    Continue with Google
                  </button>
                  <p className="text-center text-[#B6B6B6] mt-5">Or</p>
                    <div className="">
                        <form>
                            <div className="relative input-container">
                                <label className="email-label">Email Address</label>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <IoMailOutline />
                                  </div>
                                  <input className="w-full text-lg p-2 outline-none" type="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="mt-4 relative input-container">
                                <label className="password-label">Password</label>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <GoShieldCheck />
                                  </div>
                                  <input type="password" className="w-full text-lg px-2 focus:outline-none" placeholder="Password" />
                                </div>
                                <div className="text-right">
                                    <Link className="text-xs text-right font-display text-secondary-color hover:text-primary-color
                                    cursor-pointer">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-7">
                                <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                shadow-sm transition-all border border-gray-500" type="submit">
                                    Log In
                                </button>
                            </div>
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
          </div>
        </div>
    </div>
  )
}

export default Login