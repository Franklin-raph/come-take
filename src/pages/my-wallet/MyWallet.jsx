import React, { useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import PaystackPop from "@paystack/inline-js"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import Btnloader from '../../components/loader/Btnloader';
import Alert from '../../components/alert/Alert';
import { IoWalletOutline } from "react-icons/io5";


const MyWallet = ({baseUrl}) => {

    const [fundWalletModal, setFundWalletModal] = useState(false)
    const [loader, setLoader] = useState(false)
    const [amount, setAmount] = useState('')
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')

    const [walletTransactions, setWalletTransactions] = useState([])
    const [myWalletBalance, setMyWalletBalance] = useState();
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    async function getWallet(){
        const res = await fetch(`${baseUrl}/wallet`,{
            headers: {
                Authorization: `Bearer ${user.data[0].access}`
            },
        })
        const data = await res.json()
        if(res.ok){
            setMyWalletBalance(data.data.balance)
        }
        console.log(res, data);
    }

    async function getWalletTransactions(){
        const res = await fetch(`${baseUrl}/wallet/my-transactions`,{
            headers: {
                Authorization: `Bearer ${user.data[0].access}`
            },
        })
        const data = await res.json()
        if(res.ok){
            setWalletTransactions(data.data)
        }
        console.log(res, data);
    }

    useEffect(() => {
        if(!user){
          navigate('/')
        }else{
            getWallet()
            getWalletTransactions()
        }
      },[])

      async function fundWallet(){
        setLoader(true)
        const res = await fetch(`${baseUrl}/wallet/fund`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${user.data[0].access}`
            },
            body: JSON.stringify({amount})
        })
        const data = await res.json()
        console.log(res, data);
        setLoader(false)
        setFundWalletModal(false)
        if(res.ok){
            getWallet()
            getWalletTransactions()
            setMsg(data.message)
            setAlertType('success')
        }else{
            setMsg(data.message)
            setAlertType('error')
        }
      }

      function payWithPayStack(){
        // console.log(id, amount, duration);
        const payStack = new PaystackPop()
        payStack.newTransaction({
          key:"pk_test_12420d20e0b354e9670266456195a13f3a03ec68",
        //   key:"pk_live_0a5d478fd5f2e560f30bf5e4f64f2e17b9343628",
          amount:amount * 100,
          email:user.data[1].email,
          onSuccess(transaction){
            fundWallet()
            console.log(transaction)
            // subscribeUser(id, amount, duration)
            // setFundAccountModal(false)
            // setVerifyPaymentModal(true)
            // handleVerifyAccountFund(transaction.reference, (+amount/750).toFixed(2))
          },
          oncancel(){
            console.log("Failed Transaction")
          }
        })
      }


  return (
    <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
        <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
            <ProfileSideNav />
            <div className='gap-[0rem] px-5 md:px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className='flex justify-between items-center mb-5 pb-2'  style={{borderBottom:"1px solid #E6ECEA"}}>
                    <h1 className='text-[#003C2F] text-[18px] font-bold md:text-[24px]'>My Wallet</h1>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <IoWalletOutline />:
                        </div>
                        <p>{myWalletBalance?.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                        })}
                        </p>
                    </div>
                </div>

                {
                    walletTransactions && walletTransactions.length === 0 &&
                    <div className='text-center'>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                            <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>Your wallet is waiting</p>
                            <p className='text-[#6C6C6C] text-[20px]'>Add funds now and start enjoying the perks</p>
                        </div>
                        <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px]' onClick={() => setFundWalletModal(true)} >Fund Wallet</button>
                    </div>
                }

                <div class="relative overflow-x-auto">
                    <div className='flex items-center justify-center mb-4'>
                        <p></p>
                        <div className='text-center'>
                            <button className='mt-1 bg-primary-color text-white px-10 py-3 rounded-[6px]' onClick={() => setFundWalletModal(true)}>Top Up Wallet</button>
                        </div>
                    </div>

                    {/* DATA SUB FOR DESKTOP SCREEN BEGINS */}
                    <div className='hidden md:block'>
                        <table class="w-full text-sm text-left rtl:text-left shoppingCartTable">
                            <thead class="text-[14px] bg-[#D4E5B4]" style={{boxShadow:"0 11px 40px -17px #00000024", borderRadius:"10px"}}>
                                <tr>
                                    <th scope="col" class="px-6 py-3 th1">
                                        Description
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Transaction Type
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" class="px-6 py-3 th2">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                walletTransactions.map(transaction => (
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                        <td class="px-6 py-6">
                                            {transaction.description}
                                        </td>
                                        <td className={`py-4 px-6 font-bold capitalize ${transaction.transaction_type === 'credit' ? 'text-green-500' : (transaction.transaction_type === 'debit' ? 'text-red-500' : 'text-gray-500')}`}>
                                            {transaction.transaction_type}
                                        </td>
                                        <td className={`py-4 px-6 font-bold ${transaction.transaction_type === 'credit' ? 'text-green-500' : (transaction.transaction_type === 'debit' ? 'text-red-500' : 'text-gray-500')}`}>
                                            {transaction.amount.toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                                            })}
                                        </td>
                                        <td class="px-6 py-4">{new Date(transaction.created_at).toLocaleDateString()}</td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* DATA SUB FOR DESKTOP SCREEN ENDS */}


                    {/* DATA SUB FOR MOBILE SCREEN BEGINS */}
                    <div className='md:hidden block'>
                        <div className='flex items-center justify-between'>
                            <p className='text-primary-color font-[600] text-[18px]'>Transaction Type</p>
                            <p className='text-primary-color font-[600] text-[18px]'>Amount</p>
                        </div>
                        {
                            walletTransactions.map(transaction => (
                                <div className='my-3 border-b py-3'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <p className='text-gray-600 text-[16px]'>{transaction.description}</p>
                                        <p className={`text-[14px] font-[600] ${transaction.transaction_type === 'credit' ? 'text-green-500' : (transaction.transaction_type === 'debit' ? 'text-red-500' : 'text-gray-500')}`}>
                                            {transaction.amount.toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                                            })}
                                        </p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className={`font-bold capitalize ${transaction.transaction_type === 'credit' ? 'text-green-500' : (transaction.transaction_type === 'debit' ? 'text-red-500' : 'text-gray-500')}`}>{transaction.transaction_type}</p>
                                        <p className='text-gray-600 text-[14px]'>{new Date(transaction.created_at).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* DATA SUB FOR MOBILE SCREEN ENDS */}
                    
                </div>
            </div>
        </div>
        {
          fundWalletModal &&
          <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setFundWalletModal(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[230px] h-[230px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Fund Wallet</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setFundWalletModal(false)}/>
                            </div>
                            <div className="flex items-center flex-col justify-center">
                                <input type="number" onChange={e => setAmount(e.target.value)} style={{border:"1px solid #DCDCDC"}} className='w-[80%] mt-5 p-2 rounded-[6px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='Amount' />
                                {
                                    loader ?
                                        <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-7 w-[80%] sm:w-[201px] rounded-[6px] tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                        shadow-sm transition-all cursor-not-allowed">
                                            <Btnloader />
                                        </button>
                                    : 
                                    <button className='mt-7 bg-primary-color text-white px-10 py-3 rounded-[6px] w-[80%]' onClick={payWithPayStack}>Fund Wallet</button>
                                    // <button onClick={uploadProduct} className="bg-secondary-color py-[12px] mt-10 text-white w-full sm:w-[228.43px] ml-auto rounded-[7.98px]">Submit</button>
                                }
                                {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
                            </div>
                        </div>
                    </div>
            </>
        }
    </div>
  )
}

export default MyWallet