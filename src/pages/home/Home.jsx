import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import TopCategories from "../../components/top-categories/TopCategories";
import TrendingProducts from "../../components/trending-products/TrendingProducts";
import RecommendedProducts from "../../components/recommended-products/RecommendedProducts";

import furnitureImage from "../../assets/furniture.png"
import fashionImage from "../../assets/fashion.png"
import ElectronicsImage from "../../assets/electronics.png"
import PhonesImage from "../../assets/phone.png"
import sportsImage from "../../assets/sports.png"
import computingImage from "../../assets/computing.png"
import laptopImage from "../../assets/laptop.png"
import bagImage from "../../assets/bag.png"
import shoeImage from "../../assets/shoe.png"
import phoneImage from "../../assets/iphone.png"
import tripodStand from "../../assets/tripod-stand.png"
import fridge from "../../assets/fridge.png"
import gym from "../../assets/gym.png"
import stove from "../../assets/stove.png"
import { GoArrowRight } from "react-icons/go";
import NewlyListedProducts from "../../components/newly-listed-products/NewlyListedProducts";
import FairlyUsedProducts from "../../components/fairly-used-products/FairlyUsedProducts";
import BrandNewProducts from "../../components/brand-new-products/BrandNewProducts";
import { useEffect } from "react";
import img1 from '../../assets/Frame129.png'
import img2 from '../../assets/Frame376.png'
import img3 from '../../assets/Frame380.png'
import leftArrow from "../../assets/arrow-left.svg"
import rightArrow from "../../assets/arrow-right.svg"
import { IoChevronBack } from "react-icons/io5";
import NewsLetter from "../../components/news-letter/NewsLetter";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
},[])

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
      text:"Elecronics"
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

  const trendingProductsArray = [
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

  const recommendedProductsArray = [
    {
      img:gym,
      productName:`Macbook Pro 13"`,
      price:"4m",
      location:"Imo State",
      rating:5,
      reviews:"35 Reviews"
    },
    {
      img:stove,
      productName:`Hand Bag`,
      price:"2m",
      location:"Imo State",
      rating:5,
      reviews:"35 Reviews"
    },
    {
      img:tripodStand,
      productName:`Nike Sneakers`,
      price:"2m",
      location:"Imo State",
      rating:5,
      reviews:"35 Reviews"
    },
    {
      img:fridge,
      productName:`Iphone 13"`,
      price:"2m",
      location:"Imo State",
      rating:5,
      reviews:"35 Reviews"
    }
  ]

  const newlyListedProductsArray = [
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
    },
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
    },
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

  const brandNewProductsArray = [
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
    },
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
      price:"&#83582m",
      location:"Imo State",
      rating:5,
      reviews:"30 Reviews"
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

  const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: true,
    navText: ['<i class="ri-arrow-left-s-line"></i>','<i class="ri-arrow-right-s-line"></i>'],
    smartSpeed: 1000,
    loop:true,
    responsive: {
        0: {
            items: 1,
        }
    },
};

  return (
    <div>
        {/* <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <div className="img-slider1">
              <img src={img1} className="h-full w-full object-contain" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-slider2">
              <img src={img2} className="h-full w-full object-contain" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-slider3">
              <img src={img3} className="h-full w-full object-contain" alt="" />
            </div>
          </SwiperSlide>
        </Swiper> */}
        <div id='home'>
          <div className='image-overlay'></div>
          <img src={img2} alt="" />
          <div className="w-full absolute left-[50%] right-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center">
            <h1>Buy & Sell on Nigeria’s No1 Market Place</h1>
            <div className='flex items-center justify-between outline-none border py-[3px] pr-[3px] pl-[15px] rounded-full bg-white text-[14px] w-[70%] search-bar'>
                  <input type="text" placeholder='Find Products' className='w-full pr-5 outline-none text-primary-color'/>
                  <button className='rounded-full py-2 px-6 bg-secondary-color'>Search</button>
              </div>
          </div>
        </div>
        {/* <OwlCarousel {...options} id="home"> */}
            {/* <div className="img-slider3">
              <img src={img1} className="h-full w-full object-contain" alt="" />
            </div> */}
            {/* <div className="img-slider3">
              <img src={img2} className="h-full w-full object-contain" alt="" />
            </div> */}
            {/* <div className="img-slider3">
              <img src={img3} className="h-full w-full object-contain" alt="" />
            </div> */}
        {/* </OwlCarousel> */}
        <div className="flex flex-col lg:flex-row justify-between py-[20px] lg:px-12 px-6 bg-[#F5F9ED]">
          <h1 className="font-[600] text-primary-color lg:text-[30px] text-[22px] w-full lg:w-[40%]">
            Discover the ultimate online shopping experience
          </h1>
          <div>
            <p className="text-primary-color mt-1 lg:mt-0">
             Shop from a wide range of products and enjoy fast, reliable delivery.
            </p>
            <button className="bg-secondary-color mt-8 lg:mt-4 px-8 py-3 rounded-[7px] text-white">
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
              <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Trending Products</h1>
              <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                  <p>See all</p>
                  <GoArrowRight />
              </div>
            </div>
            <TrendingProducts trendingProductsArray={trendingProductsArray}/>
          </div>

          <div className="lg:px-12 px-6 py-4 lg:py-8">
            <div className="flex items-center justify-between mb-[20px]">
              <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Recommended Products</h1>
              <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                  <p>See all</p>
                  <GoArrowRight />
                </div>
            </div>
            <RecommendedProducts recommendedProductsArray={recommendedProductsArray}/>
          </div>

          <div className="lady-part my-6">
            <div className="content lg:w-[60%] md:w-[70%] w-[100%] lg:px-12 px-3">
              <h1 className="font-[500] text-[18px] md:text-[24px]">A place to get all your dream Amazing deals. Click to shop.</h1>
              <button className="bg-secondary-color mt-5 px-8 py-3 rounded-[7px]">Shop Now</button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="lg:px-12 px-6 py-12">
              <div className="flex items-center justify-between mb-[20px]">
              <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Newly Listed Products</h1>
              <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                    <p>See all</p>
                    <GoArrowRight />
                  </div>
              </div>
              <NewlyListedProducts newlyListedProductsArray={newlyListedProductsArray}/>
            </div>
          </div>

          {/* MOBILE DESIGN FOR NEWLY LISTED*/}
          <div className="block lg:hidden">
            <div className="lg:px-12 px-6 lg:py-8 py-6">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Newly Listed Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                    <p>See all</p>
                    <GoArrowRight />
                </div>
              </div>
              <TrendingProducts trendingProductsArray={trendingProductsArray}/>
            </div>
          </div>
          {/* MOBILE DESIGN FOR NEWLY LISTED*/}

          <div className="hidden lg:block">
            <div className="lg:px-12 px-6 py-8">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Fairly Used Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                      <p>See all</p>
                      <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
            </div>
          </div>

          {/* MOBILE DESIGN FOR FAIRLY USED*/}
          <div className="block lg:hidden">
            <div className="lg:px-12 px-6 lg:py-8 py-6">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Fairly Used Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                    <p>See all</p>
                    <GoArrowRight />
                </div>
              </div>
              <TrendingProducts trendingProductsArray={trendingProductsArray}/>
            </div>
          </div>
          {/* MOBILE DESIGN FOR FAIRLY USED*/}

          <div className="hidden lg:block">
            <div className="lg:px-12 px-6 py-8">
              <div className="flex items-center justify-between mb-[20px]">
                  <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Brand New Products...</h1>
                  <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                  </div>
                </div>
              <BrandNewProducts brandNewProductsArray={brandNewProductsArray}/>
            </div>
          </div>

          {/* MOBILE DESIGN FOR BRANDED NEW*/}
          <div className="block lg:hidden">
            <div className="lg:px-12 px-6 lg:py-8 py-6">
              <div className="flex items-center justify-between mb-[20px]">
                <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Brand New Products</h1>
                <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                    <p>See all</p>
                    <GoArrowRight />
                </div>
              </div>
              <TrendingProducts trendingProductsArray={trendingProductsArray}/>
            </div>
          </div>
          {/* MOBILE DESIGN FOR BRANDED NEW*/}

          {/* <NewsLetter /> */}
        </div>
    </div>
  )
}

export default Home