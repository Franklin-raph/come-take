import { GoShieldCheck } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import SignInuserImg from "../../assets/Sign in user img.png"
import { useEffect } from "react";
import { IoMailOutline } from "react-icons/io5";

const Login = ({setLoggedIn}) => {

  const navigate = useNavigate()

  useEffect(() => {
    setLoggedIn(false)
  },[])

  async function handleUserSignIn(e){
    e.preventDefault()
    localStorage.setItem("user", 1)
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
                    <h2 className="text-4xl text-primary-color font-display font-semibold xl:text-bold">USER LOGIN</h2>
                    <p className='mt-3'>Welcome back! Please enter your login details to access your account.</p>
                  </div>
                  <button className="flex items-center gap-3 border border-gray-300 hover:bg-gray-200 w-full rounded text-sm mt-7 py-3 justify-center">
                    <FcGoogle fontSize={"22px"}/>
                    Continue with Google
                  </button>
                    <div className="mt-7">
                        <form onSubmit={handleUserSignIn}>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <div className='w-full p-[2px] border border-gray-300 flex items-center gap-2'>
                                  <div className="bg-primary-color p-3 rounded-sm text-2xl text-white">
                                    <IoMailOutline />
                                  </div>
                                  <input className="w-full text-lg p-2 focus:outline-none" type="email" placeholder="johndoe@gmail.com" />
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
                                  <input className="w-full text-lg p-2 focus:outline-none" type="" placeholder="********" />
                                </div>
                                <div className="text-right">
                                    <Link className="text-xs text-right font-display text-secondary-color hover:text-primary-color
                                    cursor-pointer">
                                        Forgot Password?
                                    </Link>
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
                            Don't have an account ? <Link to="/signup" className="cursor-pointer text-secondary-color hover:text-green-800">Sign up</Link>
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

export default Login