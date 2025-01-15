import React, { useEffect, useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import laptopImage from "../../assets/laptop.png"
import bagImage from "../../assets/bag.png"
import shoeImage from "../../assets/shoe.png"
import phoneImage from "../../assets/iphone.png"
import SkeletonLoader from '../../components/skeleton-loader/SkeletonLoader';
import { CiBookmark, CiLocationOn } from 'react-icons/ci';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import Alert from '../../components/alert/Alert';

const SavedItems = () => {

    const [savedItems, setSavedItems] = useState()
    const user = JSON.parse(localStorage.getItem('user'))
    const [loader, setLoader] = useState(false)

    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')

    const savedItemsArray = [
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"2m",
          location:"Imo State",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"2m",
          location:"Imo State",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"2m",
          location:"Imo State",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"2m",
          location:"Imo State",
          rating:5,
          reviews:"35 Reviews"
        }
      ]

      
    const navigate = useNavigate()

    useEffect(() => {
      window.scrollTo(0, 0)
      getMySavedProducts()
    },[])

    async function getMySavedProducts(){
      setLoader(true)
      const res = await fetch(`https://cometakebe.onrender.com/seller/dashboard/save-item`,{
        headers:{
              Authorization:`Bearer ${user?.data[0]?.access}`
          }
      })
      const data = await res.json()
      if(res) setLoader(false)
      if(res.ok){
        setSavedItems(data.data)
      }
      if(!res.ok){
          setMsg(data.message)
          setAlertType('error')
      }
      // console.log(res, data);
      console.log(res,data)
  }

  async function unSaveProduct(productId){
    console.log(JSON.stringify({
        product:productId,
        user:user.data[1].id
    }));
    const res = await fetch(`https://cometakebe.onrender.com/seller/dashboard/un-save-item/${productId}`,{
        method:"DELETE",
        headers:{
            Authorization:`Bearer ${user?.data[0]?.access}`
        }
    })
    if(res.ok){
        setMsg("Product has been unsaved")
        setAlertType('success')
        getMySavedProducts()
    }
    if(!res.ok){
        setMsg("An error occured")
        setAlertType('error')
    }
    // console.log(res, data);
    console.log(res)
}

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='flex justify-between items-center mb-8 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                        <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>Saved Items</h1>
                        {/* <button onClick={() => setSavedItems(!savedItems)}>Click me</button> */}
                    </div>

                {savedItems && savedItems.length === 0 &&
                    <div>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                            <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Item Here yet</p>
                            <p className='text-[#6C6C6C] text-[20px]'>all your saved Items will appear here</p>
                        </div>
                    </div>
                }

                {savedItems &&
                  <div>
                      <div className='grid grid-cols-3 gap-5'>
                          {savedItems && savedItems.map(product => (
                            <div>
                                <div className="product-card">
                                    {/* {
                                        user && 
                                        <>
                                        {
                                            product.product.current_user_saved_product === true ?
                                                :
                                                <div className="badge" onClick={() => saveProduct(product.id)} ><CiBookmark /></div>
                                        }
                                        </>
                                    } */}
                                    <div className="badge bg-secondary-color text-white" onClick={() => unSaveProduct(product.id)} ><CiBookmark /></div>
                                    <div className="" onClick={() => navigate(`/product-details/${product.product.id}`)}>
                                        <div className="product-tumb">
                                            <img src={product.product.product_cover_image?.media} alt="" />
                                        </div>
                                        <div className="product-details">
                                            <div className="flex items-center justify-between">
                                                <h1>{product.product.name}</h1>
                                            </div>
                                            <div className="flex items-start gap-1 ml-[-3px] my-2">
                                                <CiLocationOn className="mt-1"/>
                                                <p className="text-[12px] md:text-[14px]">{product.product.warranty_address}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center reviews">
                                                    <h1 className="text-[13px]">{product.product.price.toLocaleString('en-US', {
                                                                    style: 'currency',
                                                                    currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                                                                })}</h1>
                                                </div>
                                                <RiVerifiedBadgeFill color='#DF9007' fontSize={"20px"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              // <ProductCard product={product.product}/>
                              ))}
                      </div>
                  </div>
                }

              {
                loader && 
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3">
                  {
                    [1,1,1,1].map(() => (
                      <SkeletonLoader />
                      ))
                    }
                </div>
              }

                </div>
            </div>
        </div>
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
    </div>
  )
}

export default SavedItems