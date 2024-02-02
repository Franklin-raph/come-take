import React, { useEffect } from 'react'
import { IoMdStar } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SlTrash } from 'react-icons/sl'
import laptop1 from "../../assets/category-product-preview.png"

const Checkout = () => {

    useEffect(() => {
        document.querySelector("body").style.scrollTop = 0
    },[])

  return (
    <div>
        <div className="md:flex items-center justify-start px-12 py-5 gap-4 hidden">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
            <MdKeyboardArrowRight />
            <p>Laptops</p>
            <MdKeyboardArrowRight />
            <p>Fairly Used</p>
            <MdKeyboardArrowRight />
            <p>Lenovo Products</p>
            <MdKeyboardArrowRight />
            <p>Shopping Cart</p>
            <MdKeyboardArrowRight />
            <p className='text-secondary-color'>Check out</p>
        </div>

        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2.5rem] flex-col-reverse lg:flex-row-reverse '>
                <div className='flex-[1] w-[100%] items-center px-5 lg:py-0' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                   <div className='my-10'>
                        <div className='flex items-center justify-between mb-8'>
                            <h1 className="font-[600] text-[18px] lg:text-[20px] text-primary-color">Order Summary</h1>
                            <p className='text-[16px] lg:text-[18px]'>4 Items</p>
                        </div>
                        <div>
                            <div className='mb-7'>
                                <div className='flex items-start justify-between mb-4 pb-12' style={{borderBottom:"1px solid #dcdcdc"}}>
                                    <h2 className='text-primary-color text-[16px] text-[#343434] flex-[2]'>Delivery Charges</h2>
                                    <p className='text-[12px] text-[#6C6C6C] item-end text-end flex-[1.2]'>
                                        4500
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pb-4 mb-4" style={{borderBottom:"1px solid #dcdcdc"}}>
                                    <p className='text-[#343434] text-[16px]'>Subtotal</p>
                                    <p className='text-[#4E4E4E] text-[16px]'>#165,550</p>
                                </div>
                                <div className="flex items-center justify-between pb-4" style={{borderBottom:"1px solid #dcdcdc"}}>
                                    <p className='text-[#000] text-[16px]'>Total</p>
                                    <p className='text-[#000] text-[16px]'>#165,550</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

                <div className='gap-[0rem] px-5 pb-[3rem] pt-[2rem] flex-[2] w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <h1 className='text-[#003C2F] text-[20px] font-bold mb-5'>Check Out</h1>
                    <div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#343434] font-[700]'>Delivery Address..</p>
                            <p className='text-secondary-color text-[14px]'>Edit</p>
                        </div>
                        <div className='p-3 rounded-[4px] mt-1' style={{border:"1px solid #CCCCCC"}}>
                            <p className='text-[#1A1A1A] '>
                                Ituku Village Square Umuokpu Awka
                            </p>
                        </div>
                        <div>
                            <p className='font-[700] text-[20px] text-primary-color mt-10 pr-6 mb-1' style={{borderBottom:"1px solid #898989", display:"inline-block"}}>Delivery method</p>
                            <div className='flex items-center gap-4 my-4'>
                                <input type="radio" name='deliveryType' className='cursor-pointer'/>
                                <div>
                                    <p className='text-secondary-color text-[20px]'>Door Delivery</p>
                                    <p className='text-[#6C6C6C] text-[14px]'>Delivery Price (4,500) for the next 20 days</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" name='deliveryType' className='cursor-pointer'/>
                                <div>
                                    <p className='text-secondary-color text-[20px]'>Pickup Station</p>
                                    <p className='text-[#6C6C6C] text-[14px]'>Delivery Price (2,500) for the next 20 days</p>
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <p className='font-[700] text-[20px] text-primary-color mt-10 pr-6 mb-1' style={{borderBottom:"1px solid #898989", display:"inline-block"}}>Payment method</p>
                            <div className='flex items-center gap-4 my-4'>
                                <input type="radio" />
                                <div>
                                    <p className='text-secondary-color text-[20px]'>Card Payment</p>
                                    <p className='text-[#6C6C6C] text-[14px]'>Delivery Price (4,500) for the next 20 days</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" />
                                <div>
                                    <p className='text-secondary-color text-[20px]'>Pay on Delivery</p>
                                    <p className='text-[#6C6C6C] text-[14px]'>Make cash payment after receiving your order.</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4'>
                                <input type="radio" />
                                <div>
                                    <p className='text-secondary-color text-[20px]'>Bank Transfer</p>
                                    <p className='text-[#6C6C6C] text-[14px]'>Generate and tranfer directly to our Bank Account.</p>
                                </div>
                            </div>
                        </div> */}

                        <div className='h-[1px] bg-[#ccc] mb-4 mt-[100px]'></div>
                        <div className='text-[#4E4E4E] text-[16px] flex items-center justify-between'>
                            <p>Subtotal</p>
                            <p>#165,500</p>
                        </div>
                        <div className='text-[#4E4E4E] text-[16px] flex items-center justify-between mt-2'>
                            <p>Delivery Charges</p>
                            <p>#4,500</p>
                        </div>
                        <div className='text-[#000] text-[22px] flex items-center justify-between mt-4'>
                            <p>Total</p>
                            <p>#169,500</p>
                        </div>
                        <button className='bg-primary-color text-white w-full h-[45px] rounded-[10px] mt-10'>Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout