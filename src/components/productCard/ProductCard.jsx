import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { useEffect, useState } from "react";

const ProductCard = ({ product, baseUrl }) => {

    const user = JSON.parse(localStorage.getItem('user'))
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [userDetails, setUserDetails] = useState()
    const navigate = useNavigate()

    // async function getUserDetails(){
    //     const res = await fetch(`${baseUrl}/complete-registration`,{
    //       headers:{
    //         Authorization:`Bearer ${user?.data[0]?.access}`
    //       }n
    //     })
    //     const data = await res.json()
    //     setUserDetails(data.data)
    //     console.log(res, data);
    //   }

    // useEffect(() => {
    //     getUserDetails()
    // },[])

    function saveProduct(){
        console.log(user)
    }

  return (
    <div>
        <div className="product-card">
            <div className="badge" onClick={() => saveProduct()} ><CiBookmark /></div>
            
            <div className="" onClick={() => navigate(`/product-details/${product.id}`)}>

                <div className="product-tumb">
                    <img src={product.product_cover_image?.media} alt="" />
                </div>
                <div className="product-details">
                    <div className="flex items-center justify-between">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="flex items-center gap-1 ml-[-3px]">
                        <CiLocationOn />
                        <p className="text-[14px] py-1">{product.warranty_address}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center reviews">
                            <h1 className="text-[13px]">{product.price.toLocaleString('en-US', {
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
  )
}

export default ProductCard