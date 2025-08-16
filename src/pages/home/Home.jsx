import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import TopCategories from "../../components/top-categories/TopCategories";
import TrendingProducts from "../../components/trending-products/TrendingProducts";

import furnitureImage from "../../assets/furniture.png"
import fashionImage from "../../assets/fashion.png"
import ElectronicsImage from "../../assets/electronics.png"
import PhonesImage from "../../assets/phone.png"
import sportsImage from "../../assets/sports.png"
import computingImage from "../../assets/computing.png"
import { GoArrowRight } from "react-icons/go";
import NewlyListedProducts from "../../components/newly-listed-products/NewlyListedProducts";
import FairlyUsedProducts from "../../components/fairly-used-products/FairlyUsedProducts";
import BrandNewProducts from "../../components/brand-new-products/BrandNewProducts";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import img2 from '../../assets/Frame376.webp'

import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../../components/skeleton-loader/SkeletonLoader';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Home = ({baseUrl, setLoginModal, getMySavedProducts}) => {

  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {

    document.title="Come Home"
    
    window.scrollTo(0, 0)
    if(user){
      getAllProducts()
      getBrandNewProducts()
      getFairlyUsedProducts()
    }else{
      getAllUnauthenticatedProducts()
      getAllUnAuthBrandNewProducts()
      getAllUnAuthFaairlyUsedProducts()
    }
    getCatgories()
},[])

const navigate = useNavigate()


const [allProducts, setAllProducts] = useState()
const [newlyListedProducts, setNewlyListedProducts] = useState([])
const [brandNewProducts, setBrandNewProducts] = useState()
const [fairlyUsedProducts, setFairlyUsedProducts] = useState()
const [allCategoryArray, setAllCategoryArray] = useState([])
const [loader, setLoader] = useState(false)
const [msg, setMsg] = useState(false)
const [alertType, setAlertType] = useState('')

async function getAllProducts(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products`,{
      headers:{
          Authorization:`Bearer ${user.data[0].access}`,
      },
  })
    const data = await res.json()
    if(res) setLoader(false)
    setAllProducts(data)
    // console.log("Line 52 ===>", data);
}

async function prevAllProducts(url){
    const res = await fetch(url)
    const data = await res.json()
    if(res) setLoader(false)
    setAllProducts(data)
}

async function nextAllProducts(url){
  console.log(url);
  
    const res = await fetch(url)
    const data = await res.json()
    if(res) setLoader(false)
    setAllProducts(data)
}

async function getBrandNewProducts(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products?condition=brand_new`,{
      // headers:{
      //     Authorization:`Bearer ${user.data[0].access}`,
      // },
  })
    const data = await res.json()
    console.log("Brand new product", data);
    
    if(res) setLoader(false)
    setBrandNewProducts(data)
}

async function prevBrandNewProducts(url){
    const res = await fetch(url,{
      // headers:{
      //     Authorization:`Bearer ${user.data[0].access}`,
      // },
  })
    const data = await res.json()
    if(res) setLoader(false)
    setBrandNewProducts(data)
}

async function nextBrandNewProducts(url){
    const res = await fetch(url,{
      // headers:{
      //     Authorization:`Bearer ${user.data[0].access}`,
      // },
  })
    const data = await res.json()
    if(res) setLoader(false)
    setBrandNewProducts(data)
}

async function getFairlyUsedProducts(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products?condition=fairly_used`,{
      // headers:{
      //     Authorization:`Bearer ${user.data[0].access}`,
      // },
  })
    const data = await res.json()
    console.log("Fairly used product", data);
    
    if(res) setLoader(false)
    setFairlyUsedProducts(data)
}

async function prevFairlyUsedProducts(url){
    const res = await fetch(url,{
      // headers:{
      //     Authorization:`Bearer ${user.data[0].access}`,
      // },
  })
    const data = await res.json()
    if(res) setLoader(false)
    setFairlyUsedProducts(data)
}

async function nextFairlyUsedProducts(url){
    const res = await fetch(url,{
      // headers:{
      //     Authorization:`Bearer ${user.data[0].access}`,
      // },
  })
    const data = await res.json()
    if(res) setLoader(false)
    setFairlyUsedProducts(data)
}

async function getAllProductsAfterSaveOrUnsave(){
    const res = await fetch(`${baseUrl}/products`,{
      headers:{
          Authorization:`Bearer ${user.data[0].access}`,
      },
  })
    const data = await res.json()
    setAllProducts(data.data)
    setBrandNewProducts(data.data.filter(product => product.condition === 'brand_new'))
    setFairlyUsedProducts(data.data.filter(product => product.condition === 'fairly_used'))
    console.log("Line 52 ===>", data.data);
}

async function getAllUnauthenticatedProducts(){
  setLoader(true)
  const res = await fetch(`${baseUrl}/products`)
  const data = await res.json()
  console.log(data);
  
  if(res) setLoader(false)
  setAllProducts(data)
}

async function getAllUnAuthBrandNewProducts(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products?condition=brand_new`)
    const data = await res.json()
    if(res) setLoader(false)
    setBrandNewProducts(data)
}

async function getAllUnAuthFaairlyUsedProducts(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products?condition=fairly_used`)
    const data = await res.json()
    if(res) setLoader(false)
    setFairlyUsedProducts(data)
}

async function getCatgories(){
  const res = await fetch(`${baseUrl}/categories`,{
      headers:{
          Authorization:`Bearer ${user.data[0].access}`,
      },
  })
  const data = await res.json()
  setAllCategoryArray(data.data)
  console.log(data);
}

  const categoryArray = [
    {
      img:furnitureImage,
      text:"Furniture"
    },
    {
      img:fashionImage,
      text:"Fashion"
    },
    {
      img:ElectronicsImage,
      text:"Electronics"
    },
    {
      img:PhonesImage,
      text:"Phones"
    },
    {
      img: computingImage,
      text:"Computing"
    },
    {
      img: sportsImage,
      text:"Sports"
    },
  ]


const [seachString, setSeachString] = useState('')

  return (
    <div>
        <div id='home'>
          <div className='image-overlay'></div>
          <img src={img2} loading="eager" rel="preload" fetchpriority="high" alt=""/>
          <div className="w-full absolute left-[50%] right-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center">
            <h1 className='text-white mb-5 text-[16px] sm:text-[25px] md:text-[40px] w-[55%] mx-auto'>Buy & Sell on Nigeria’s No1 Market Place</h1>
            <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[85%] md:w-[70%] mx-auto'>
                <IoIosSearch className='text-[32px] text-gray-500 mr-2'/>
                <input type="text" placeholder='Find Products' className='w-full pr-5 outline-none text-primary-color text-[16px] md:text-[18px]' onChange={e => setSeachString(e.target.value)}/>
                <button className='rounded-full md:py-2 md:px-6 px-[22px] text-center bg-secondary-color text-white py-[8px]' onClick={() => navigate(`/search?product_name=${seachString}`)} >Search</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between py-[20px] lg:px-12 px-6 bg-[#F5F9ED]">
          <h1 className="font-[600] text-primary-color lg:text-[30px] text-[22px] w-full lg:w-[40%]">
            Discover the ultimate online shopping experience
          </h1>
          <div>
            <p className="text-primary-color mt-1 lg:mt-0">
             Shop from a wide range of products and enjoy fast, reliable delivery.
            </p>
            <button className="bg-secondary-color mt-8 lg:mt-4 px-8 py-3 rounded-[7px] text-white" onClick={() => navigate('/categories')}>
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:px-12 px-6 py-4 lg:py-8 mt-10">
          <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color mb-5">Shop Our Top Categories</h1>
          <TopCategories categoryArray={categoryArray} />
        </div>

        <div id="body">
          
          <div className="lg:px-12 px-6 lg:py-8 py-6">
            <div className="flex items-center justify-between mb-[20px]">
              <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Newly Listed Products</h1>
              <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" onClick={() => navigate('/categories')} style={{ border:"1px solid gray" }}>
                  <p>See all</p>
                  <GoArrowRight />
              </div>
            </div>
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
            <TrendingProducts getMySavedProducts={getMySavedProducts} msg={msg} setMsg={setMsg} alertType={alertType} setAlertType={setAlertType} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} allProducts={allProducts} baseUrl={baseUrl}/>
            {
              allProducts?.length == 0 && <p className='text-center'>No Newly Listed Products</p>
            }
              <div className='flex items-center gap-3 justify-center mt-5 text-gray-700'>
                {
                  allProducts?.previous !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => prevAllProducts(allProducts.previous)}>
                    <BiChevronLeft />
                  </div>
                }
                <p className='text-[15px]'>Page {allProducts?.current_page} 0f {allProducts?.total_pages}</p>
                {
                  allProducts?.next !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => nextAllProducts(allProducts.next)}>
                    <BiChevronRight />
                  </div>
                }
              </div>
          </div>

          <div className="lady-part my-6">
            <div className="content lg:w-[60%] md:w-[70%] w-[100%] lg:px-12 px-3">
              <h1 className="font-[500] text-[18px] md:text-[24px]">A place to get all your dream Amazing deals. Click to shop.</h1>
              <button className="bg-secondary-color mt-5 px-8 py-3 rounded-[7px]" onClick={() => navigate('/categories')}>Shop Now</button>
            </div>
          </div>

          {/* MOBILE DESIGN FOR NEWLY LISTED*/}

          <div className="lg:block hidden">
            <div className="lg:px-12 px-6 py-8">
              <div className="flex items-center justify-between mb-[20px]">
                  <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Brand New Products</h1>
                  <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }} onClick={() => navigate('/categories')}>
                        <p>See all</p>
                        <GoArrowRight />
                  </div>
                </div>
              <BrandNewProducts getMySavedProducts={getMySavedProducts} msg={msg} setMsg={setMsg} alertType={alertType} setAlertType={setAlertType} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} brandNewProducts={brandNewProducts}/>
              {
                brandNewProducts?.length === 0 && <p className='text-center'>No Brand New Products</p>
              }
              <div className='flex items-center gap-3 justify-center mt-5 text-gray-700'>
                {
                  brandNewProducts?.previous !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => prevBrandNewProducts(brandNewProducts.previous)}>
                    <BiChevronLeft />
                  </div>
                }
                <p className='text-[15px]'>Page {brandNewProducts?.current_page} 0f {brandNewProducts?.current_page}</p>
                {
                  brandNewProducts?.next !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => nextBrandNewProducts(brandNewProducts.next)}>
                    <BiChevronRight />
                  </div>
                }
              </div>
              {
                loader && 
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3">
                    {
                      [1,1,1,1,1].map(() => (
                        <SkeletonLoader />
                      ))
                    }
                  </div>
              }
            </div>
          </div>

          {/* DESKTOP DESIGN FOR BRANDED NEW*/}
          <div className="block lg:hidden">
            <div className="lg:px-12 px-6 lg:py-8 py-6">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Brand New Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }} onClick={() => navigate('/categories')}>
                    <p>See all</p>
                    <GoArrowRight />
                </div>
              </div>
              <BrandNewProducts getMySavedProducts={getMySavedProducts} msg={msg} setMsg={setMsg} alertType={alertType} setAlertType={setAlertType} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} brandNewProducts={brandNewProducts}/>
              {
                brandNewProducts?.length === 0 && <p className='text-center'>No Brand New Products</p>
              }
              <div className='flex items-center gap-3 justify-center mt-5 text-gray-700'>
                {
                  brandNewProducts?.previous !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => prevBrandNewProducts(brandNewProducts.previous)}>
                    <BiChevronLeft />
                  </div>
                }
                <p className='text-[15px]'>Page {brandNewProducts?.current_page} 0f {brandNewProducts?.total_pages}</p>
                {
                  brandNewProducts?.next !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => nextBrandNewProducts(brandNewProducts.next)}>
                    <BiChevronRight />
                  </div>
                }
              </div>
              {
                loader && 
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
          {/* MOBILE DESIGN FOR BRANDED NEW*/}

          <div className="lg:block hidden">
            <div className="lg:px-12 px-6 py-8">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Fairly Used Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }} onClick={() => navigate('/categories')}>
                      <p>See all</p>
                      <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts getMySavedProducts={getMySavedProducts} msg={msg} setMsg={setMsg} alertType={alertType} setAlertType={setAlertType} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} fairlyUsedProducts={fairlyUsedProducts}/>
                {
                  fairlyUsedProducts?.length === 0 && <p className='text-center'>No Fairly Used Products</p>
                }
                <div className='flex items-center gap-3 justify-center mt-5 text-gray-700'>
                  {
                    fairlyUsedProducts?.previous !== null &&
                    <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => prevFairlyUsedProducts(fairlyUsedProducts.previous)}>
                      <BiChevronLeft />
                    </div>
                  }
                  <p className='text-[15px]'>Page {fairlyUsedProducts?.current_page} 0f {fairlyUsedProducts?.total_pages}</p>
                  {
                    fairlyUsedProducts?.next !== null &&
                    <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => nextFairlyUsedProducts(fairlyUsedProducts.next)}>
                      <BiChevronRight />
                    </div>
                  }
                </div>
                {
                  loader && 
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3">
                    {
                      [1,1,1,1,1].map(() => (
                        <SkeletonLoader />
                      ))
                    }
                  </div>
                }
            </div>
          </div>

          {/* MOBILE DESIGN FOR FAIRLY USED*/}
          <div className="block lg:hidden">
            <div className="lg:px-12 px-6 lg:py-8 py-6">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Fairly Used Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }} onClick={() => navigate('/categories')}>
                    <p>See all</p>
                    <GoArrowRight />
                </div>
              </div>
              <FairlyUsedProducts getMySavedProducts={getMySavedProducts} msg={msg} setMsg={setMsg} alertType={alertType} setAlertType={setAlertType} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} fairlyUsedProducts={fairlyUsedProducts}/>
              {
                fairlyUsedProducts?.length === 0 && <p className='text-center'>No Fairly Used Products</p>
              }
              <div className='flex items-center gap-3 justify-center mt-5 text-gray-700'>
                {
                  fairlyUsedProducts?.previous !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => prevFairlyUsedProducts(fairlyUsedProducts.previous)}>
                    <BiChevronLeft />
                  </div>
                }
                <p className='text-[15px]'>Page {fairlyUsedProducts?.current_page} 0f {fairlyUsedProducts?.total_pages}</p>
                {
                  fairlyUsedProducts?.next !== null &&
                  <div className='p-1 cursor-pointer border rounded-full text-[25px]' onClick={() => nextFairlyUsedProducts(fairlyUsedProducts.next)}>
                    <BiChevronRight />
                  </div>
                }
              </div>
              {
                loader && 
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
          {/* MOBILE DESIGN FOR FAIRLY USED*/}

          {/* <NewsLetter /> */}
        </div>
    </div>
  )
}

export default Home