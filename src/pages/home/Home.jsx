import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TopCategories from "../../components/top-categories/TopCategories";
import TrendingProducts from "../../components/trending-products/TrendingProducts";
import RecommendedProducts from "../../components/recommended-products/RecommendedProducts";

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
import { GoArrowRight } from "react-icons/go";
import NewlyListedProducts from "../../components/newly-listed-products/NewlyListedProducts";
import FairlyUsedProducts from "../../components/fairly-used-products/FairlyUsedProducts";
import BrandNewProducts from "../../components/brand-new-products/BrandNewProducts";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from "react";

const Home = () => {
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
      img:furnitureImage,
      text:"Furniture"
    },
    {
      img:fashionImage,
      text:"Fashion"
    },
    {
      img: furnitureImage,
      text:"Furniture"
    },
    {
      img: fashionImage,
      text:"Fashion"
    },
  ]

  const trendingProductsArray = [
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

  const recommendedProductsArray = [
    {
      img:gym,
      productName:`Macbook Pro 13"`,
      price:"#2m",
      description:"256.8 core GPU, 8GB",
      rating:5,
      reviews:"35 Reviews"
    },
    {
      img:stove,
      productName:`Hand Bag`,
      price:"#2m",
      description:"256.8 core GPU, 8GB",
      rating:5,
      reviews:"35 Reviews"
    },
    {
      img:tripodStand,
      productName:`Nike Sneakers`,
      price:"#2m",
      description:"256.8 core GPU, 8GB",
      rating:5,
      reviews:"35 Reviews"
    },
    {
      img:fridge,
      productName:`Iphone 13"`,
      price:"#2m",
      description:"256.8 core GPU, 8GB",
      rating:5,
      reviews:"35 Reviews"
    }
    // {
    //   img:gym,
    //   productName:`Gymning Track`,
    //   price:20005000,
    //   oldPrice: 1500000,
    //   discountText:"Save #1,000 Now!",
    //   discountPercent:"20%"
    // },
    // {
    //   img:stove,
    //   productName:`Electric Cooker`,
    //   price:45500,
    //   oldPrice: 38000,
    //   discountText:"Save #950 Now!",
    //   discountPercent:"8%"
    // },
    // {
    //   img:tripodStand,
    //   productName:`Tripod Stand`,
    //   price:250000,
    //   oldPrice: 180000,
    //   discountText:"Save #1,500 Now!",
    //   discountPercent:"10%"
    // },
    // {
    //   img:fridge,
    //   productName:`Macbook Pro 13"`,
    //   price:700000,
    //   oldPrice: 630000,
    //   discountText:"Save #5,000 Now!",
    //   discountPercent:"8.5%"
    // },
    // {
    //   img:gym,
    //   productName:`Gymning Track"`,
    //   price:20005000,
    //   oldPrice: 1500000,
    //   discountText:"Save #400 Now!",
    //   discountPercent:"20%"
    // },
    // {
    //   img:stove,
    //   productName:`Electric Cooker`,
    //   price:45500,
    //   oldPrice: 38000,
    //   discountText:"Save #1,000 Now!",
    //   discountPercent:"8%"
    // },
    // {
    //   img:tripodStand,
    //   productName:`Tripod Stand`,
    //   price:250000,
    //   oldPrice: 180000,
    //   discountText:"Save #1,000 Now!",
    //   discountPercent:"10%"
    // },
    // {
    //   img:fridge,
    //   productName:`Macbook Pro 13"`,
    //   price:700000,
    //   oldPrice: 630000,
    //   discountText:"Save #1,000 Now!",
    //   discountPercent:"8.5%"
    // }
  ]

  const newlyListedProductsArray = [
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
    },
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
    },
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

  const brandNewProductsArray = [
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
    },
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

  useEffect(() => {
    toast.success("Hello world")
  },[])

  return (
    <div>
        <Swiper
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
            <div className="img-slider1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-slider2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-slider3"></div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-between py-[40px] px-12">
          <h1 className="font-[600] text-primary-color text-[30px] w-full md:w-[30%]">
            Discover the ultimate online shopping experience
          </h1>
          <div>
            <p className="text-primary-color">
             Shop from a wide range of products and enjoy fast, reliable delivery.
            </p>
            <button className="bg-secondary-color mt-5 px-8 py-3 rounded-[7px] text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="px-12 py-8">
          <h1 className="font-[600] text-[24px] text-primary-color mb-5">Shop Our Top Categories</h1>
          <TopCategories categoryArray={categoryArray} />
        </div>
        <div className="px-12 py-8">
        <div className="flex items-center justify-between">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Trending Products</h1>
          <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
              <p>See all</p>
              <GoArrowRight />
            </div>
          </div>
          <TrendingProducts trendingProductsArray={trendingProductsArray}/>
        </div>
        <div className="px-12 py-8">
          
          <div className="flex items-center justify-between">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Recommended Products</h1>
          <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
              <p>See all</p>
              <GoArrowRight />
            </div>
          </div>
          <RecommendedProducts recommendedProductsArray={recommendedProductsArray}/>
        </div>
        <div className="lady-part mt-5">
          <div className="content">
            <h1 className="font-[500] text-[25px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vel quo similique, porro, odio quasi libero laboriosam atque adipisci possimus?</h1>
            <button className="bg-secondary-color mt-5 px-8 py-3 rounded-[7px]">Shop Now</button>
          </div>
        </div>
        <div className="px-12 py-8">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Newly Listed Products</h1>
          <NewlyListedProducts newlyListedProductsArray={newlyListedProductsArray}/>
        </div>
        <div className="px-12 py-8">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Fairly Used Products</h1>
          <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
        </div>
        <div className="px-12 py-8">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Brand New Products</h1>
          <BrandNewProducts brandNewProductsArray={brandNewProductsArray}/>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Home