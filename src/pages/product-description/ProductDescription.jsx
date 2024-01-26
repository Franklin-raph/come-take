import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import laptop1 from "../../assets/laptop1.png"
import laptop2 from "../../assets/laptop.png"
import laptop3 from "../../assets/product1.jpeg"
import { IoMdStar } from 'react-icons/io'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GoArrowRight } from 'react-icons/go'
import FairlyUsedProducts from '../../components/fairly-used-products/FairlyUsedProducts'
import furnitureImage from "../../assets/furniture.png"
import fashionImage from "../../assets/fashion.png"
import laptopImage from "../../assets/laptop.png"
import bagImage from "../../assets/bag.png"
import shoeImage from "../../assets/shoe.png"
import phoneImage from "../../assets/iphone.png"
import tripodStand from "../../assets/tripod-stand.png"
import fridge from "../../assets/fridge.png"
import gym from "../../assets/gym.png"
import stove from "../../assets/stove.png"

const ProductDescription = () => {

    const [selectedImage, setSelectedImage] = useState(laptop1)

    const fairlyUsedProductsArray = [
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        }
      ]

  return (
    <div>
        <div className="flex items-center justify-start px-12 py-5 gap-4">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
            <MdKeyboardArrowRight />
            <p>Laptops</p>
            <MdKeyboardArrowRight />
            <p>Fairly Used</p>
            <MdKeyboardArrowRight />
            <p>Lenovo Products</p>
        </div>

        <div className="lg:px-12 px-6 py-8 mt-10 gap-20">
            <h1 className="font-[600] text-[18px] lg:text-[20px] mb-8 text-primary-color">Delivery & Returns</h1>
            <div className='flex items-start gap-[7rem]'>
                <div className='w-[20%]'>
                    <div className='mb-10'>
                        <div className='flex items-center justify-between mb-2'>
                            <h2 className='text-primary-color text-[17px]'>Door Delivery</h2>
                            <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                        </div>
                        <p className='text-[#ff3030] mb-2 text-[16px]'>Price #4,500</p>
                        <p className='text-[#4e4e4e] text-[14px]'>
                            Ready for delivery 2 days from the day you submitted your order
                        </p>
                    </div>

                    <div className='mt-10'>
                        <div className='flex items-center justify-between mb-2'>
                            <h2 className='text-primary-color text-[17px]'>Pickup Station</h2>
                            <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                        </div>
                        <p className='text-[#ff3030] mb-2 text-[16px]'>Price #1,500</p>
                        <p className='text-[#4e4e4e] text-[14px]'>
                            Arriving Pickup Station a day from the day you submitted your order
                        </p>
                    </div>

                    <div className='mt-10'>
                        <div className='flex items-center justify-between mb-2'>
                            <h2 className='text-primary-color text-[17px]'>Return Policy</h2>
                            <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                        </div>
                        <p className='text-[#4e4e4e] text-[14px]'>
                            Products must be returned within 48hrs of delivery to effect changes.
                        </p>
                    </div>
                </div>

                <div className='flex items-start gap-[2rem]'>
                    <div className='w-[40%]'>
                        <img src={selectedImage} alt="" className='w-[270px] h-[270px] mb-5 object-contain' />
                        <div className='flex items-center gap-5'>
                            <img src={laptop1} alt="" className='w-[70px] h-[70px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(laptop1)} />
                            <img src={laptop2} alt="" className='w-[70px] h-[70px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(laptop2)} />
                            <img src={laptop3} alt="" className='w-[70px] h-[70px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(laptop3) } />
                        </div>
                    </div>

                    <div>
                        <p className='text-[22px]'>
                            Lenovo V15 G3 Iap Laptop (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos) -82tt00juue
                        </p>
                        <p className='text-[#898989] my-2'>Brand: Lenovo</p>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                            </div>
                            <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                        </div>
                        <div className='h-[1px] bg-[#ccc] my-4'></div>
                        <div className='flex items-center gap-5'>
                            <p className='text-[28px]'>#150,000</p>
                            <p className='text-[#34343457] line-through'>#115,000</p>
                        </div>
                        <p className='text-[#ff3030]'>Fairly Used</p>
                        <div className='h-[1px] bg-[#ccc] my-4'></div>
                        <div className="flex items-center gap-4">
                            <p className='text-[#898989]'>Quantity</p>
                            <div className='flex items-center gap-2 border border-[#B5AEAE] rounded-[4px]'>
                                <p style={{ borderRight:"1px solid gray" }} className='px-2 text-[#B5AEAE] cursor-pointer'>-</p>
                                <p>1</p>
                                <p style={{ borderLeft:"1px solid gray" }} className='px-2 text-[#B5AEAE] cursor-pointer'>+</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6">
                            <button className='rounded-[5px] bg-primary-color text-white px-[35px] py-[8px]'>Buy Now</button>
                            <button className='rounded-[5px] text-primary-color border border-gray-300 px-[35px] py-[8px]'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='lg:px-12 px-6 flex items-start gap-[100px] mt-12'>
            <div>
                <h1 className="font-[600] text-[18px] lg:text-[20px] mb-5 text-primary-color">Seller Information</h1>
                <div className='flex items-start gap-8'>
                    <div>
                        <p className='mb-5'>Mike Okiro</p>
                        <div>
                            <p>100% seller score</p>
                            <div className="flex items-center">
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-2 mb-5'>
                            <CiLocationOn fontSize={"27px"} className='text-primary-color'/>
                            <p className='text-secondary-color text-[14px]'>Anambra State</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoCallOutline fontSize={"25px"} className='text-primary-color' />
                            <p className='text-secondary-color text-[14px]'>Call the seller</p>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className='text-[20px]'>Seller Peformance</h1>
                    <ul className='sellerPerformanceList'>
                        <li>Order Fulfillment Rate <span className='text-[#08A805]'>(Excellent)</span></li>
                        <li>Quality Score <span className='text-[#08A805]'>(Excellent)</span></li>
                        <li>Customer Rating <span className='text-[#08A805]'>(Excellent)</span></li>
                    </ul>
                </div>
            </div>

            <div className='w-[60%]'>
                <h1 className='font-[600] text-[18px] lg:text-[20px] mb-5 text-primary-color'>Product Details</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar vehicula varius. 
                    Nunc sed risus sagittis, rutrum purus non, finibus neque. Nam auctor tellus id dignissim hendrerit. 
                    Nulla facilisi. Ut commodo bibendum posuere. Mauris sed sem eget ipsum interdum varius. Pellentesque 
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat nisl, consectetur 
                    non mauris id, accumsan pulvinar erat. 
                </p>
            </div>
        </div>

        <div className='lg:px-12 px-6 mt-12'>
            <h1 className='font-[600] text-[18px] lg:text-[20px] mb-5 text-primary-color'>Specifications</h1>
            <div className='flex items-start gap-8'>
                <div className='w-[30%] p-3 border border-gray-200'>
                    <p>Key Features</p>
                    <ul className='specList'>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                    </ul>
                </div>
                <div className='w-[30%] p-3 border border-gray-200'>
                    <p>Key Features</p>
                    <ul className='specList'>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                        <li>AAA</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="lg:px-12 px-6 py-8 mt-10">
            <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color mb-8">Customers Feedback</h1>
            <div className="flex items-start justify-between">
                <div className='w-[40%]'>
                    <div className="flex items-center justify-between">
                        <p>Customers Comments (3)</p>
                        <p className='text-secondary-color'>See All</p>
                    </div>
                    <div className='border border-[#DCDCDC] p-4 mt-[15px] rounded-sm'>
                        <div className='mb-9'>
                            <div className='flex items-start mt-[20px] justify-between'>
                                <div className='flex items-center'>
                                    <h1 className='bg-primary-color w-[50px] h-[50px] flex items-center justify-center rounded-full text-white'>EA</h1>
                                    <div className='ml-5'>
                                        <p>Egolum Anthony</p>
                                        <p className='text-[#808080] text-[14px]'>Programmer</p>
                                    </div>
                                </div>
                                <p className='text-[#808080] text-[14px]'>May 12, 2022</p>
                            </div>
                            <p className='mt-5 text-[#555]'>
                                Curabitur elementum erat id lacus gravida, sit amet faucibus magna semper. 
                                Sed eget ante maximus quam rutrum tristique sed ut magna. Fusce venenatis dui dolor
                            </p>
                        </div>
                        <div>
                            <div className='flex items-start mt-[20px] justify-between'>
                                <div className='flex items-center'>
                                    <h1 className='bg-primary-color w-[50px] h-[50px] flex items-center justify-center rounded-full text-white'>EA</h1>
                                    <div className='ml-5'>
                                        <p>Egolum Anthony</p>
                                        <p className='text-[#808080] text-[14px]'>Programmer</p>
                                    </div>
                                </div>
                                <p className='text-[#808080] text-[14px]'>May 12, 2022</p>
                            </div>
                            <p className='mt-5 text-[#555]'>
                                Curabitur elementum erat id lacus gravida, sit amet faucibus magna semper. 
                                Sed eget ante maximus quam rutrum tristique sed ut magna. Fusce venenatis dui dolor
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Customers Ratings (3)</p>
                    <div>
                        <p>Top Rating - 5.0</p>
                        <div className="flex items-center">
                            <IoMdStar color='#FFEA2E'/>
                            <IoMdStar color='#FFEA2E'/>
                            <IoMdStar color='#FFEA2E'/>
                            <IoMdStar color='#FFEA2E'/>
                            <IoMdStar color='#FFEA2E'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:px-12 px-6 py-8 mt-10">
          <div className="flex items-center justify-between mb-[20px]">
            <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">More Items From Seller</h1>
            <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                  <p>See all</p>
                  <GoArrowRight />
                </div>
            </div>
            <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
        </div>

        <div className="lg:px-12 px-6 py-8 mt-10">
          <div className="flex items-center justify-between mb-[20px]">
            <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Recently Viewed</h1>
            <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                  <p>See all</p>
                  <GoArrowRight />
                </div>
            </div>
            <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
        </div>

    </div>
  )
}

export default ProductDescription