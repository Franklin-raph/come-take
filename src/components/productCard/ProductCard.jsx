import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { useEffect, useState } from "react";
import Alert from "../alert/Alert";

const ProductCard = ({ product, baseUrl, getMySavedProducts, getAllProductsAfterSaveOrUnsave, msg, setMsg, alertType, setAlertType  }) => {

    const user = JSON.parse(localStorage.getItem('user'))
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

    async function saveProduct(productId){
        console.log(JSON.stringify({
            product:productId,
            user:user.data[1].id
        }));
        const res = await fetch(`https://cometakebe-4t5h.onrender.com/seller/dashboard/save-item`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${user?.data[0]?.access}`
            },
            body:JSON.stringify({
                product:productId,
                user:user.data[1].id
            })
        })
        const data = await res.json()
        if(res.ok){
            getAllProductsAfterSaveOrUnsave()
            getMySavedProducts()
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
        {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
        <div className="product-card">
            {
                user && 
                    <>
                        {
                            product.current_user_saved_product === true ?
                                <div className="badge bg-secondary-color text-white" 
                                    onClick={() => {
                                        // setMsg('To delete an item, pls visit the saved items page')
                                        // setAlertType('error')
                                    }} >
                                    <CiBookmark />
                                </div>
                                    :
                                <div className="badge" onClick={() => saveProduct(product.id)} >
                                    <CiBookmark />
                                </div>
                        }
                    </>
            }
            <div className="" onClick={() => navigate(`/product-details/${product.id}`)}>
                <div className="product-tumb">
                    <img src={product.product_cover_image?.media} alt="" />
                </div>
                <div className="product-details">
                    <div className="flex items-center justify-between">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="flex items-start gap-1 ml-[-3px] my-2">
                        <CiLocationOn className="mt-1"/>
                        <p className="text-[12px] md:text-[14px]">{product.warranty_address}</p>
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