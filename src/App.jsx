import "./App.css"
import AuthenticatedNavbar from "./components/navbar/AuthenticatedNavbar"
import { HashRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./components/login/Login"
import { useEffect, useState } from "react"
import UnAuthenticatedNavabar from "./components/navbar/UnAuthenticatedNavabar"
import { IoCloseOutline, IoMailOutline } from "react-icons/io5";
import Footer from "./components/footer/Footer"
import { GoShieldCheck } from "react-icons/go"
import { FcGoogle } from "react-icons/fc"
import Register from "./pages/register/Register"

export default function App() {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <>
      <HashRouter>
      {/* <AuthenticatedNavbar /> */}
       <UnAuthenticatedNavabar setLoginModal={setLoginModal}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Register />}/>
        </Routes>
        <Footer />
        {loginModal && 
          <Login setLoginModal={setLoginModal}/>
        }
      </HashRouter>
    </>
  )
}