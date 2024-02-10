import React, { useEffect, useState } from 'react'
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

      useEffect(() => {
        window.scrollTo(0, 0)
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
        </div>

        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row lg:h-[504px]'>
                <div className='flex flex-[0.5] w-[100%] items-center px-5 lg:py-0 h-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                   <div className='my-10'>
                    <h1 className="font-[600] text-[18px] lg:text-[20px] mb-8 text-primary-color">Delivery & Returns</h1>
                    <div>
                        <div className='mb-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className='text-primary-color text-[17px]'>Door Delivery</h2>
                                <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                            </div>
                            <p className='text-[#ff3030] mb-2 text-[16px]'>Price #4,500</p>
                            <p className='text-[#4e4e4e] text-[14px]'>
                                Ready for delivery 2 days from the day you submitted your order
                            </p>
                        </div>

                        <div className='mt-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className='text-primary-color text-[17px]'>Pickup Station</h2>
                                <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                            </div>
                            <p className='text-[#ff3030] mb-2 text-[16px]'>Price #1,500</p>
                            <p className='text-[#4e4e4e] text-[14px]'>
                                Arriving Pickup Station a day from the day you submitted your order
                            </p>
                        </div>

                        <div className='mt-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className='text-primary-color text-[17px]'>Return Policy</h2>
                                <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                            </div>
                            <p className='text-[#4e4e4e] text-[14px]'>
                                Products must be returned within 48hrs of delivery to effect changes.
                            </p>
                        </div>
                    </div>
                   </div>
                </div>

                <div className=' h-full flex flex-col md:flex-row items-start gap-[0rem] px-5 py-[3rem] flex-[2]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='w-[309px] md:w-[40%] mx-auto md:block flex flex-col items-center justify-center'>
                        <img src={selectedImage} alt="" className='w-[100%] h-[309px] mb-5 object-cover' />
                        <div className='flex items-center gap-5 w-[100%] justify-center'>
                            <img src={laptop1} alt="" className='w-[70px] h-[70px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(laptop1)} />
                            <img src={laptop2} alt="" className='w-[70px] h-[70px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(laptop2)} />
                            <img src={laptop3} alt="" className='w-[70px] h-[70px] border border-gray-200 px-2 py-1 cursor-pointer' onClick={() => setSelectedImage(laptop3) } />
                        </div>
                    </div>

                    <div className="md:w-[55%] mt-[1rem] md:mt-[0]">
                        <p className='text-[24px] leading-[1.5] lg:leading-[1.8]'>
                            Lenovo V15 G3 Iap Laptop (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos) -82tt00juue
                        </p>
                        <p className='text-[#898989] my-3'>Brand: Lenovo</p>
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
                        <div className='h-[1px] bg-[#ccc] my-4 md:block hidden'></div>
                        <div className='flex items-center gap-5 justify-between lg:justify-start'>
                            <p className='text-[35px]'>#150,000</p>
                            <p className='text-[#34343457] text-[20px] line-through'>#115,000</p>
                        </div>
                        <p className='text-[#ff3030] lg:block hidden'>Fairly Used</p>
                        <div className='h-[1px] bg-[#ccc] my-4'></div>
                        <div className="flex items-center gap-4 justify-between">
                            <p className='text-[#ff3030] lg:hidden block'>Fairly Used</p>
                            <div className="flex items-center gap-4 mt-2">
                                <p className='text-[#898989]'>Quantity</p>
                                <div className='flex items-center justify-center gap-2 border border-[#B5AEAE] rounded-[4px] w-[120px] text-center h-[30px]'>
                                    <p style={{ borderRight:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>-</p>
                                    <p className='flex-1'>1</p>
                                    <p style={{ borderLeft:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>+</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[15px] mt-6">
                            <button className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%]'>Buy Now</button>
                            <button className='rounded-[5px] text-primary-color border border-primary-color px-[20px] md:px-[35px] py-[8px] w-[50%]'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='lg:px-12 flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[40px] mt-12 lg:h-[324px]'>
            <div className='lg:flex w-[280px] flex-col px-4 h-full py-[2rem] hidden' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <h1 className="font-[600] text-[18px] lg:text-[20px] mb-3 text-primary-color">Seller Information</h1>
                <div className='flex items-start gap-8'>
                    <div>
                        <p className='mb-5'>Mike Okiro</p>
                        <div>
                            <p className='text-[12px]'>100% seller score</p>
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
                            <CiLocationOn fontSize={"20px"} className='text-primary-color'/>
                            <p className='text-secondary-color text-[10px]'>Anambra State</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoCallOutline fontSize={"20px"} className='text-primary-color' />
                            <p className='text-secondary-color text-[10px]'>Call the seller</p>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <h1 className='text-[16px]'>Seller Peformance</h1>
                    <ul className='sellerPerformanceList'>
                        <li className='text-[14px]'>Order Fulfillment Rate <span className='text-[#08A805]'>(Excellent)</span></li>
                        <li className='my-1 text-[14px]'>Quality Score <span className='text-[#08A805]'>(Excellent)</span></li>
                        <li className='text-[14px]'>Customer Rating <span className='text-[#08A805]'>(Excellent)</span></li>
                    </ul>
                </div>
            </div>

            <div className='lg:w-[80%] w-full px-5 lg:px-10 lg:h-[320px] lg:pt-[2rem] pb-[10px]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <h1 className='font-[600] text-[18px] lg:text-[20px] mb-5 text-primary-color'>Product Details</h1>
                <p className='text-[15px] text-[#414141]' style={{lineHeight:'1.7'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar vehicula varius. 
                    Nunc sed risus sagittis, rutrum purus non, finibus neque. Nam auctor tellus id dignissim hendrerit. 
                    Nulla facilisi. Ut commodo bibendum posuere. Mauris sed sem eget ipsum interdum varius. Pellentesque 
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat nisl, consectetur 
                    non mauris id, accumsan pulvinar erat. 
                    Nulla facilisi. Ut commodo bibendum posuere. Mauris sed sem eget ipsum interdum varius. Pellentesque 
                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat nisl, consectetur 
                    non mauris id, accumsan pulvinar erat. 
                    Nulla facilisi. Ut commodo bibendum 
                </p>
            </div>
        </div>

        <div className='lg:px-12 mt-12'>
            <div style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <h1 className='font-[600] text-[18px] lg:text-[20px] mb-5 pt-12 pl-12 hidden lg:block'>Specifications</h1>
                <div className='h-[1px] bg-[#ccc] my-4 hidden lg:block'></div>
                <div className='pt-6 md:px-12 px-6 pb-12'>
                    <div className='flex items-start flex-col md:flex-row gap-8'>
                        <div className='w-[95%] p-3 border border-[#f3f3f3] h-full'>
                            <p className='text-primary-color text-bold'>Key Features</p>
                            <ul className='specList keyFeatures'>
                                <li>1200 watts.</li>
                                <li>3 attachments.</li>
                                <li>8 speeds.</li>
                                <li>Pulse control.</li>
                                <li>5 litre bowl capacity.</li>
                                <li>Inclues whisk attachment</li>
                            </ul>
                        </div>
                        <div className='w-[95%] p-3 border border-[#f3f3f3]'>
                            <p className='text-primary-color text-bold'>Specifications</p>
                            <ul className='specList'>
                                <li>SKU: VO669HL14P4OYNAFAMZ</li>
                                <li>Product Line: Mex crystal</li>
                                <li>Model: NA</li>
                                <li>Weight (kg): 3.8</li>
                                <li>Certifications: Eco Friendly</li>
                                <li>Color: NA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:px-12 py-8 mt-10">
            <div className='lg:p-12 p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <h1 className="font-[400] text-[18px] lg:text-[24px] mb-8">Customers Feedback</h1>
                <div className="flex items-start flex-col md:flex-row md:gap-[120px] gap-[60px]">
                    <div className='lg:w-[40%] w-[95%]'>
                        <div className="flex items-center justify-between">
                            <p className='text-[#555]'>Customers Comments (3)</p>
                            <p className='text-secondary-color'>See All</p>
                        </div>
                        <div className='border border-[#f3f3f3] p-4 mt-[15px] rounded-[4px]'>
                            <div className='mb-9'>
                                <div className='flex items-start mt-[20px] justify-between'>
                                    <div className='flex items-center'>
                                        <h1 className='bg-primary-color w-[50px] h-[50px] flex items-center justify-center rounded-full text-white'>EA</h1>
                                        <div className='lg:ml-5 ml-2'>
                                            <p className='text-[14px] lg:text-[16px]'>Egolum Anthony</p>
                                            <p className='text-[#808080] text-[14px]'>Programmer</p>
                                        </div>
                                    </div>
                                    <p className='text-[#808080] text-[14px] hidden sm:block'>May 12, 2022</p>
                                </div>
                                <p className='mt-5 text-[#555] text-[14px]'>
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
                                    <p className='text-[#808080] text-[14px] hidden sm:block'>May 12, 2022</p>
                                </div>
                                <p className='mt-5 text-[#555] text-[14px]'>
                                    Curabitur elementum erat id lacus gravida, sit amet faucibus magna semper. 
                                    Sed eget ante maximus quam rutrum tristique sed ut magna. Fusce venenatis dui dolor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[28%] w-[95%]'>
                        <p className='text-[#555]'>Customers Ratings (3)</p>
                        <div className='border border-[#f3f3f3] p-4 mt-[15px] rounded-[4px]'>
                            <p className='mb-2 text-[#2B2B2B]'>Top Rating Score - 5.0</p>
                            <div className="flex items-center">
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                            </div>
                            <p className='mt-5 mb-2 text-[#000]'>Rating Detail</p>
                            <div className="flex items-start flex-col gap-2">
                                <div className='flex items-center gap-2'>
                                    <IoMdStar color='#FFEA2E'/>
                                    <p className='text-[#555555] text-[14px]'>5(3)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoMdStar color='#FFEA2E'/>
                                    <p className='text-[#555555] text-[14px]'>4(0)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoMdStar color='#FFEA2E'/>
                                    <p className='text-[#555555] text-[14px]'>3(0)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoMdStar color='#FFEA2E'/>
                                    <p className='text-[#555555] text-[14px]'>2(0)</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoMdStar color='#FFEA2E'/>
                                    <p className='text-[#555555] text-[14px]'>1(0)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className="flex items-center justify-between mb-[20px]">
                    <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">More Items From Seller</h1>
                    <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
            </div>
        </div>

        <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
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
    </div>
  )
}

export default ProductDescription