import "./App.css"
import AuthenticatedNavbar from "./components/navbar/AuthenticatedNavbar"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { useEffect, useState } from "react"
import UnAuthenticatedNavabar from "./components/navbar/UnAuthenticatedNavabar"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const user = localStorage.getItem("user")

  useEffect(() => {
    if(user) setLoggedIn(true)
    else setLoggedIn(false)
  },[])

  return (
    <>
      <HashRouter>
       {loggedIn &&  <AuthenticatedNavbar />}
       {/* {!loggedIn && <UnAuthenticatedNavabar /> } */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}