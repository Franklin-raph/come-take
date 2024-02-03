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
import Register from "./components/register/Register"
import Categories from "./pages/categories/Categories"
import ProductDescription from "./pages/product-description/ProductDescription"
import ShoppingCart from "./pages/shopping-cart/ShoppingCart"
import Checkout from "./pages/check-out/Checkout"
import MyProfile from "./pages/my-profile/MyProfile"
import PasswordReset from "./pages/password-reset/PasswordReset"
import MyOrder from "./pages/my-order-history/MyOrderHistory"

export default function App() {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)

  return (
    <>
      <HashRouter>
      {/* <AuthenticatedNavbar /> */}
       <UnAuthenticatedNavabar setLoginModal={setLoginModal}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Register />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/product-details" element={<ProductDescription />}/>
          <Route path="/shoping-cart" element={<ShoppingCart />}/>
          <Route path="/check-out" element={<Checkout />}/>
          <Route path="/my-profile" element={<MyProfile />}/>
          <Route path="/password-reset" element={<PasswordReset />}/>
          <Route path="/my-order-history" element={<MyOrder />}/>
        </Routes>
        <Footer />
        {loginModal && !registerModal &&
          <Login setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} loginModal={loginModal}/>
        }
        {
          registerModal && !loginModal && 
          <Register setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} registerModal={registerModal}/>
        }
      </HashRouter>
    </>
  )
}