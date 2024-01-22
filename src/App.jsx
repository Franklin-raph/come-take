import "./App.css"
import AuthenticatedNavbar from "./components/navbar/AuthenticatedNavbar"
import { HashRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { useEffect, useState } from "react"
import UnAuthenticatedNavabar from "./components/navbar/UnAuthenticatedNavabar"
import { IoCloseOutline, IoMailOutline } from "react-icons/io5";
import Footer from "./components/footer/Footer"
import { GoShieldCheck } from "react-icons/go"
import { FcGoogle } from "react-icons/fc"

export default function App() {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <>
      <HashRouter>
      {/* <AuthenticatedNavbar /> */}
       <UnAuthenticatedNavabar setLoginModal={setLoginModal}/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
        {loginModal && 
          <Login setLoginModal={setLoginModal}/>
        }
      </HashRouter>
    </>
  )
}