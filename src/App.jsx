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
import OrederdItem from "./pages/ordered-item/OrederdItem"
import MessageInbox from "./pages/message-inbox/MessageInbox"
import MessageContent from "./pages/message-content/MessageContent"
import SavedItems from "./pages/saved-items/SavedItems"
import ShopSetUp from "./pages/sellers/shop-set-up/ShopSetUp"
import IdVerification from "./pages/sellers/id-verification/IdVerification"
import Subscription from "./pages/subscription-page/Subscription"
import ListProduct from "./pages/list-product/ListProduct"
import ForgotPassword from "./components/forgot-password/ForgotPassword"
import OTPInput from "./components/otp-input/OTPInput"
import ConfirmActivateAccountModal from "./components/confirmActivateAccountModal/ConfirmActivateAccountModal"

export default function App() {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [forgotPasswodModal, setForgotPasswordModal] = useState(false)
  const [otpInput, setOtpInput] = useState(false)
  const [confirmActivateAccountModal, setConfirmActivateAccountModal] = useState(false)
  const baseUrl = "https://cometake.pythonanywhere.com"

  return (
    <>
      <HashRouter>
      {/* <AuthenticatedNavbar /> */}
       <UnAuthenticatedNavabar setLoginModal={setLoginModal} baseUrl={baseUrl}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Register baseUrl={baseUrl}/>}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/product-details" element={<ProductDescription />}/>
          <Route path="/shoping-cart" element={<ShoppingCart />}/>
          <Route path="/check-out" element={<Checkout />}/>
          <Route path="/my-profile" element={<MyProfile />}/>
          <Route path="/password-reset" element={<PasswordReset />}/>
          <Route path="/my-shop" element={<MyOrder />}/>
          <Route path="/order-item" element={<OrederdItem />}/>
          <Route path="/messages" element={<MessageInbox />}/>
          <Route path="/message-content" element={<MessageContent />}/>
          <Route path="/saved-items" element={<SavedItems />}/>
          <Route path="/shop-set-up" element={<ShopSetUp />} />
          <Route path="/verify-id" element={<IdVerification />}/>
          <Route path="/subscription-plan" element={<Subscription />} />
          <Route path="/list-product" element={<ListProduct />} />
        </Routes>
        <Footer />
        {loginModal && !registerModal &&
          <Login setLoginModal={setLoginModal} setForgotPasswordModal={setForgotPasswordModal} baseUrl={baseUrl} setRegisterModal={setRegisterModal} loginModal={loginModal}/>
        }
        {
          registerModal && !loginModal && 
          <Register setLoginModal={setLoginModal} baseUrl={baseUrl} setRegisterModal={setRegisterModal} registerModal={registerModal}/>
        }
        {
          forgotPasswodModal && (
            <ForgotPassword setLoginModal={setLoginModal} setOtpInput={setOtpInput} baseUrl={baseUrl} forgotPasswodModal={forgotPasswodModal} setForgotPasswordModal={setForgotPasswordModal}/>
          )
        }
        {
          otpInput && (
            <OTPInput baseUrl={baseUrl} setOtpInput={setOtpInput} setConfirmActivateAccountModal={setConfirmActivateAccountModal} setForgotPasswordModal={setForgotPasswordModal}/>
          )
        }
        {confirmActivateAccountModal && <ConfirmActivateAccountModal setConfirmActivateAccountModal={setConfirmActivateAccountModal}/> }
      </HashRouter>
    </>
  )
}