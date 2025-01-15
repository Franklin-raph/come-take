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
import ResetPassword from "./components/reset-password/ResetPassword"
import ProductDetail from "./pages/product-detail/ProductDetail"
import VtuServices from "./pages/vtu-services/VtuServices"
import CategoryQuery from "./pages/categoryQuery/CategoryQuery"
import CategoryNavQuery from "./pages/categoryNavQuery/CategoryNavQuery"
import UpdateShop from "./pages/updateShop/UpdateShop"
import ServicePurchase from "./pages/service-purchase/ServicePurchase"
import VtuService from "./pages/vtu-service/VtuService"
import MyWallet from "./pages/my-wallet/MyWallet"
import UpdateUserSocailName from "./components/update-user-social-name/UpdateUserSocailName"
import About from "./pages/about/About"
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy"
import ReturnPolicy from "./pages/return-policy/ReturnPolicy"
import TermsOfUse from "./pages/terms-of-use/TermsOfUse"
import HelpCenter from "./pages/help-center/HelpCenter"
// import PriavateRoutes from "./utils/PriavateRoutes"

export default function App() {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [forgotPasswodModal, setForgotPasswordModal] = useState(false)
  const [otpInput, setOtpInput] = useState(false)
  const [confirmActivateAccountModal, setConfirmActivateAccountModal] = useState(false)
  const [resetPasswordModal, setResetPasswordModal] = useState(false)
  const [emailForOTP, setEmailForOTP] = useState('')
  const [otp, setOTP] = useState('')
  const baseUrl = "https://cometakebe.onrender.com"
  // const baseUrl = "https://api.yamltech.com"
  const user = JSON.parse(localStorage.getItem('user'))
  const [userDetails, setUserDetails] = useState()
  const [userSocialLoginModal, setUserSocialLoginModal] = useState(false)

  async function getUserDetails(){
    const res = await fetch(`${baseUrl}/complete-registration`,{
      headers:{
        Authorization:`Bearer ${user.data[0].access}`
      }
    })
    const data = await res.json()
    setUserDetails(data.data)
    console.log(res, data);
  }


  return (
    <>
      <HashRouter>
      {/* <AuthenticatedNavbar /> */}
       <UnAuthenticatedNavabar setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} baseUrl={baseUrl}/>
        <Routes>
          <Route path="/" element={<Home baseUrl={baseUrl} setLoginModal={setLoginModal}/>}/>
          <Route path="/signup" element={<Register baseUrl={baseUrl}/>}/>
          <Route path="/product-details/:id" element={<ProductDescription baseUrl={baseUrl}/>}/>
          <Route path="/shoping-cart" element={<ShoppingCart />}/>
          <Route path="/check-out" element={<Checkout />}/>
          <Route path="/my-shop" element={<MyOrder baseUrl={baseUrl}/>}/>
          <Route path="/order-item" element={<OrederdItem />}/>
          <Route path="/messages" element={<MessageInbox baseUrl={baseUrl}/>}/>
          <Route path="/message-content" element={<MessageContent />}/>
          <Route path="/saved-items" element={<SavedItems />}/>
          <Route path="/shop-set-up" element={<ShopSetUp baseUrl={baseUrl} />} />
          <Route path="/subscription-plan" element={<Subscription baseUrl={baseUrl}/>} />
          <Route path="/list-product" element={<ListProduct baseUrl={baseUrl}/>} />
          <Route path="/product-detail/:id" element={<ProductDetail baseUrl={baseUrl}/>} />

          <Route path="/about-us" element={<About />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/categories" element={<Categories baseUrl={baseUrl}/>}/>
          <Route path="/search" element={<CategoryQuery baseUrl={baseUrl}/>} />
          <Route path="/search-product-category" element={<CategoryNavQuery baseUrl={baseUrl}/>} />
          
          <Route path="/verify-id" element={<IdVerification baseUrl={baseUrl} userDetails={userDetails}/>}/>
          <Route path="/my-profile" element={<MyProfile baseUrl={baseUrl}/>}/>
          <Route path="/password-reset" element={<PasswordReset baseUrl={baseUrl}/>}/>
          <Route path="/update-shop" element={<UpdateShop baseUrl={baseUrl}/>} />
          <Route path="/vtu-services" element={<VtuServices baseUrl={baseUrl}/>} />
          <Route path="/vtu-service/:service" element={<VtuService baseUrl={baseUrl}/>} />
          <Route path="/my-wallet" element={<MyWallet baseUrl={baseUrl}/>} />
          <Route path="/help-center" element={<HelpCenter baseUrl={baseUrl}/>} />
          <Route path="/:service/:network" element={<ServicePurchase baseUrl={baseUrl}/>} />

        </Routes>
        <Footer />
        {loginModal && !registerModal &&
          <Login setLoginModal={setLoginModal} setUserSocialLoginModal={setUserSocialLoginModal} setForgotPasswordModal={setForgotPasswordModal} baseUrl={baseUrl} setRegisterModal={setRegisterModal} loginModal={loginModal}/>
        }
        {
          registerModal && !loginModal && 
          <Register setLoginModal={setLoginModal} setUserSocialLoginModal={setUserSocialLoginModal} baseUrl={baseUrl} setRegisterModal={setRegisterModal} registerModal={registerModal}/>
        }
        {
          forgotPasswodModal && (
            <ForgotPassword setEmailForOTP={setEmailForOTP} setLoginModal={setLoginModal} setOtpInput={setOtpInput} baseUrl={baseUrl} forgotPasswodModal={forgotPasswodModal} setForgotPasswordModal={setForgotPasswordModal}/>
          )
        }
        {
          otpInput && (
            <OTPInput emailForOTP={emailForOTP} baseUrl={baseUrl} setResetPasswordModal={setResetPasswordModal} setOtpInput={setOtpInput} setLoginModal={setLoginModal} setForgotPasswordModal={setForgotPasswordModal}/>
          )
        }
        {confirmActivateAccountModal && <ConfirmActivateAccountModal setConfirmActivateAccountModal={setConfirmActivateAccountModal}/> }
      
        {
          resetPasswordModal && <ResetPassword otp={otp} emailForOTP={emailForOTP} setResetPasswordModal={setResetPasswordModal} setLoginModal={setLoginModal} setOtpInput={setOtpInput} baseUrl={baseUrl} />
        }
        {
          userSocialLoginModal && <UpdateUserSocailName baseUrl={baseUrl} setUserSocialLoginModal={setUserSocialLoginModal}/>
        }
      </HashRouter>
    </>
  )
}