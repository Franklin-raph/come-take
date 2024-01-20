import "./App.css"
import AuthenticatedNavbar from "./components/navbar/AuthenticatedNavbar"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { useEffect, useState } from "react"
import UnAuthenticatedNavabar from "./components/navbar/UnAuthenticatedNavabar"
import Register from "./pages/register/Register"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(loggedIn);
  const user = localStorage.getItem("user")

  useEffect(() => {
    if(user) setLoggedIn(true)
    else setLoggedIn(false)
  },[])

  return (
    <>
      <HashRouter>
      {/* <AuthenticatedNavbar /> */}
       {/* <AuthenticatedNavbar /> */}
       {loggedIn ? <AuthenticatedNavbar /> : <UnAuthenticatedNavabar /> }
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<Register setLoggedIn={setLoggedIn}/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}