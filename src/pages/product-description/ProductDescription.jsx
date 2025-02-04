import React, { useEffect, useState } from 'react'
import laptop1 from "../../assets/laptop1.png"
import { CiLocationOn } from "react-icons/ci";
import { GoArrowRight } from 'react-icons/go'
import FairlyUsedProducts from '../../components/fairly-used-products/FairlyUsedProducts'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';
import SkeletonLoader from '../../components/skeleton-loader/SkeletonLoader'
import Alert from '../../components/alert/Alert';


const ProductDescription = ({baseUrl}) => {

    const [selectedImage, setSelectedImage] = useState(laptop1)
    const { id } = useParams()
    const [product, setProduct] = useState()
    const user = JSON.parse(localStorage.getItem('user'))
    const [loader, setLoader] = useState(false)
    const [allProductsLoader, setAllProductsLoader] = useState(false)
    const navigate = useNavigate()

    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')


    useEffect(() => {
        getProductDescription()
        window.scrollTo(0, 0)
        if(user){
            console.log('user');
            getMyProducts()
          }else{
            console.log('no user');
            getAllUnauthenticatedProducts()
          }
    },[id])

    async function getMyProducts(){
        setLoader(true)
        const res = await fetch(`${baseUrl}/seller/dashboard/my-products`,{
          headers:{
              Authorization:`Bearer ${user.data[0].access}`,
          },
      })
        const data = await res.json()
        if(res) setLoader(false)
        setAllProducts(data.data)
        console.log("Line 50 ===>", data.data);
    }
    
    async function getAllUnauthenticatedProducts(){
      setLoader(true)
      const res = await fetch(`${baseUrl}/products`)
      const data = await res.json()
      if(res) setLoader(false)
      setAllProducts(data.data)
      console.log("Line 59 ===>", data.data);
    }


    async function getProductDescription(){
        setLoader(true)
        const res = await fetch(`${baseUrl}/products/${id}`)
        const data = await res.json()
        if(res) setLoader(false)
        setSelectedImage(data.data.product_image[0]?.media)
        setProduct(data.data)
        console.log(data.data);
    }

    const [allProducts, setAllProducts] = useState([])

    // async function getAllProducts(){
    //     setAllProductsLoader(true)
    //     const res = await fetch(`${baseUrl}/products`)
    //     const data = await res.json()
    //     if(res) setAllProductsLoader(false)
    //     setAllProducts(data.data)
    //     console.log(data);
    // }

    async function saveProduct(){
        console.log(JSON.stringify({
            product:id,
            user:user.data[1].id
        }));
        const res = await fetch(`${baseUrl}/seller/dashboard/save-item`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${user?.data[0]?.access}`
            },
            body:JSON.stringify({
                product:id,
                user:user.data[1].id
            })
        })
        const data = await res.json()
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
        }
        if(!res.ok){
            setMsg(data.message)
            setAlertType('error')
        }
        // console.log(res, data);
        console.log(res, data)
    }


  return (
    <div>
        {
            loader ?
            <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 animate-pulse">
                <div className='flex items-start gap-[2rem] flex-col lg:flex-row lg:h-[504px]'>
                    <div className='h-full w-full flex flex-col md:flex-row items-start gap-[0rem] px-5 py-[3rem] flex-[2]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                        <div className='w-[309px] md:w-[40%] mx-auto md:block flex flex-col items-center justify-center'>
                            <div className='w-[100%] h-[309px] bg-slate-200 mb-5 object-cover' />
                            <div className='flex items-center gap-5 w-[100%] justify-center'>
                                {
                                    [1,1,1,1,1,1].map(() => (
                                        <div className='bg-slate-200 w-[40px] h-[40px] border border-gray-200 px-2 py-1 cursor-pointer' ></div>
                                    ))
                                }
                                </div>
                        </div>

                        <div className="md:w-[55%] w-full mt-[1rem] md:mt-[0]">
                            <p className='text-[24px] leading-[1.5] lg:leading-[1.8] h-[23px] rounded-full w-[230px] bg-slate-200'></p>
                            <div className='flex items-center justify-between mt-3 h-[23px] rounded-full w-[130px] bg-slate-200'></div>
                            <div className='flex items-center justify-start gap-1 mt-2 h-[23px] rounded-full w-[150px] bg-slate-200'></div>
                            <div className='flex items-center justify-start gap-1 mt-2 h-[23px] rounded-full w-[190px] bg-slate-200'></div>
                            <div className='h-[1px] bg-[#ccc] my-4 md:block hidden'></div>
                            <div className='flex items-center gap-5 justify-between lg:justify-start h-[43px] rounded-full w-[330px] bg-slate-200'>
                            </div>
                            {/* <p className='text-[#ff3030] lg:block hidden capitalize'>product.condition</p> */}
                            <div className='h-[1px] bg-[#ccc] my-4'></div>
                            <div className="flex items-center gap-[15px] mt-6">
                                <div className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%] text-center h-[36px] bg-slate-200' ></div>
                                <div className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%] text-center h-[36px] bg-slate-200' ></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-[0.5] flex-col gap-4 w-[100%] items-center lg:py-0 h-full'>
                        <div className='lg:flex lg:w-[280px] w-full flex-col px-4 h-full py-[2rem] border'>
                            <h1 className="font-[500] text-[18px] lg:text-[20px] mb-3 text-primary-color">Seller Information</h1>
                            <div>
                                <div className='flex items-start justify-between  h-[23px] rounded-full w-[230px] bg-slate-200'></div>
                                <div className='h-[23px] rounded-full w-[230px] bg-slate-200 mt-5'></div>
                            </div>

                            <div className='mt-4'>
                                <h1 className='font-[500] text-[18px] lg:text-[20px] mb-3 text-primary-color'>Store Address</h1>
                                <div className='flex items-center gap-1'>
                                    <div className='h-[23px] rounded-full w-[230px] bg-slate-200 mt-5'></div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex w-[280px] flex-col px-4 h-full py-[2rem] border hidden'>
                            <p className='text-[20px] text-[#003C2F] font-[700] mb-4'>Tips</p>
                            <p className='text-[#2B2B2B]'>
                                Avoid paying in advance. Make sure properly inspect Item before payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            :
            <>
            {
                product &&
                <>    
                    <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
                        <div className='flex items-start gap-[2rem] flex-col lg:flex-row lg:h-[504px]'>
                            <div className='h-full w-full flex flex-col md:flex-row items-start gap-[0rem] px-5 py-[3rem] flex-[2]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                                <div className='w-[309px] md:w-[40%] mx-auto md:block flex flex-col items-center justify-center'>
                                    <img src={selectedImage} alt="" className='w-[100%] h-[309px] mb-5 object-cover' />
                                    <div className='flex items-center gap-5 w-[100%] justify-center'>
                                        {
                                            product.product_image?.map(img => (
                                                <img src={img.media} alt="" className='w-[40px] h-[40px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(img.media)} />
                                            ))
                                        }
                                        </div>
                                </div>

                                <div className="md:w-[55%] w-full mt-[1rem] md:mt-[0]">
                                    <p className='text-[24px] leading-[1.5] lg:leading-[1.8]'>
                                        {product.name}
                                    </p>
                                    <div className='flex items-center justify-between mt-3'>
                                        <p className='text-[#898989]'>Brand: {product.brand_name}</p>
                                        {/* {
                                            user && 
                                            <>
                                                {
                                                    product?.current_user_saved_product === true ?
                                                    <div className="badge bg-secondary-color text-white">
                                                        <FaRegBookmark />
                                                    </div>
                                                    :
                                                    <FaRegBookmark cursor='pointer' color='#6C6C6C' onClick={saveProduct}/>
                                                }
                                            </>
                                        } */}
                                    </div>
                                    <div className='flex items-center justify-start gap-1 mt-2'>
                                        <GoClock color='#6C6C6C' />
                                        <p className='text-[#1C1C1C]'>Posted {moment(product.created_at).fromNow()}</p>
                                    </div>
                                    <p className='text-[#898989] mt-2'>Availability: {product.in_stock.toString()}</p>
                                    <div className='h-[1px] bg-[#ccc] my-4 md:block hidden'></div>
                                    <div className='flex items-center gap-5 justify-between lg:justify-start'>
                                        <p className='text-[25px]'>{product.price.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                                        })}
                                        </p>
                                        {/* <p className='text-[#34343457] text-[20px]'>Non Negotibale</p> */}
                                    </div>
                                    <p className='text-[#ff3030] lg:block hidden capitalize'>{product.condition.replace(/[^a-zA-Z0-9]/g, ' ')}</p>
                                    <div className='h-[1px] bg-[#ccc] my-4'></div>
                                    <div className="flex items-center gap-[15px] mt-6">
                                        <a href={`https://wa.me/${product.seller.phone}`} className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%] text-center' target='_blank' >Message Seller</a>
                                        <a className='rounded-[5px] text-primary-color border border-primary-color px-[20px] md:px-[35px] py-[8px] w-[50%] text-center' target='_blank' href={`tel:${product.seller.phone}`}>Call Seller</a>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-[0.5] flex-col gap-4 w-[100%] items-center lg:py-0 h-full'>
                                <div className='lg:flex lg:w-[280px] w-full flex-col px-4 h-full py-[2rem] border'>
                                    <h1 className="font-[500] text-[18px] lg:text-[20px] mb-3 text-primary-color">Seller Information</h1>
                                    <div>
                                        <div className='flex items-start justify-between'>
                                            <p className='mb-5'>{product.seller.first_name} {product.seller?.last_name}</p>
                                            <div className='flex items-center gap-2 mb-5'>
                                                <CiLocationOn fontSize={"20px"} className='text-primary-color'/>
                                                <p className='text-secondary-color text-[10px]'>Anambra{product.seller?.state} State</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-2 mb-2'>
                                                <RiVerifiedBadgeFill fontSize={"20px"} color='#DF9007' />
                                                <p className='text-[#2B2B2B] text-[12px]'>Verified Vendor</p>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <CiUser fontSize={"20px"} className='text-[#B6B6B6]' />
                                                <p className='text-secondary-color text-[12px]'>Joined {moment(product?.seller?.date_joined).fromNow()}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='mt-4'>
                                        <h1 className='font-[500] text-[18px] lg:text-[20px] mb-3 text-primary-color'>Store Address</h1>
                                        <div className='flex items-center gap-1'>
                                            <CiLocationOn color='background: #1D1D1FCC' fontSize={"25px"} />
                                            <p className='text-[12px]'>No 55 Blessed Avenue Uper Iweka Road Onitsha</p>
                                        </div>
                                    </div> */}
                                </div>
                                <div className='lg:flex w-[280px] flex-col px-4 h-full py-[2rem] border hidden'>
                                    <p className='text-[20px] text-[#003C2F] font-[700] mb-4'>Tips</p>
                                    <p className='text-[#2B2B2B]'>
                                        Avoid paying in advance. Make sure properly inspect Item before payment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='lg:px-12 flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[40px] mt-12 lg:h-[324px]'>
                        <div className='lg:w-[80%] w-full px-5 lg:px-10 lg:h-[320px] lg:pt-[2rem] pb-[10px]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                            <div className='flex items-center gap-8'>
                                <h1 className='font-[600] text-[18px] lg:text-[20px] mb-5 text-primary-color'>Product Details</h1>
                                {/* <h1 className='font-[600] text-[18px] lg:text-[20px] mb-5 text-primary-color'>Reviews</h1> */}
                            </div>
                            <p className='text-[15px] text-[#414141]' style={{lineHeight:'1.7'}}>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </>
            }
            </>
        }

        <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className="flex items-center justify-between mb-[20px]">
                    {
                        user ?
                        <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">More Items From Seller</h1>
                        :
                        <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">More Items</h1>
                    }
                    <div onClick={() => navigate('/categories')} className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts fairlyUsedProducts={allProducts}/>
                {
                    allProductsLoader && 
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3">
                    {
                        [1,1,1].map(() => (
                        <SkeletonLoader />
                        ))
                    }
                    </div>
              }
            </div>
        </div>

        {/* <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className="flex items-center justify-between mb-[20px]">
                    <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Recently Viewed</h1>
                    <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts allProducts={allProducts}/>
                {
                    allProductsLoader && 
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3">
                    {
                        [1,1,1].map(() => (
                        <SkeletonLoader />
                        ))
                    }
                    </div>
              }
            </div>
        </div> */}
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
    </div>
  )
}

export default ProductDescription