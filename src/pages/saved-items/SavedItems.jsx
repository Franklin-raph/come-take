import React, { useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import laptop1 from "../../assets/category-product-preview.png"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SlTrash } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import laptopImage from "../../assets/laptop.png"
import bagImage from "../../assets/bag.png"
import shoeImage from "../../assets/shoe.png"
import phoneImage from "../../assets/iphone.png"

const SavedItems = () => {

    const [savedItems, setSavedItems] = useState(false)

    const savedItemsArray = [
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        }
      ]

      
    const navigate = useNavigate()

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='flex justify-between items-center mb-8 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                        <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>Saved Items</h1>
                        <button onClick={() => setSavedItems(!savedItems)}>Click me</button>
                    </div>
                {savedItems &&
                    <div>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                            <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Item Here yet</p>
                            <p className='text-[#6C6C6C] text-[20px]'>all your saved Items will appear here</p>
                        </div>
                    </div>
                }

                {!savedItems &&
                <div>
                    <div className='grid grid-cols-3 gap-5'>
                        {savedItemsArray && savedItemsArray.map(product => (
                            <ProductCard product={product}/>
                        ))}
                    </div>

                </div>
                }
                </div>

            </div>
        </div>
    </div>
  )
}

export default SavedItems