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
import { GoArrowRight } from "react-icons/go";


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
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        <div className="px-12 py-8">
          <div className="flex items-center justify-between mt-10 mb-4">
            <h1 className="font-[600] text-[24px] text-primary-color">Shop Our Top Categories</h1>
            <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
              <p>See all</p>
              <GoArrowRight />
            </div>
          </div>
          <TopCategories categoryArray={categoryArray} />
        </div>
        <div className="px-12 py-8">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Shop Our Top Categories</h1>
          <TrendingProducts />
        </div>
        <div className="px-12 py-8 mt-[5rem]">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Recommended Products</h1>
          <RecommendedProducts />
        </div>
        <div className="lady-part mt-5">
          <div className="content">
            <h1 className="font-[500] text-[25px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vel quo similique, porro, odio quasi libero laboriosam atque adipisci possimus?</h1>
            <button className="bg-secondary-color mt-5 px-8 py-3 rounded-[7px]">Shop Now</button>
          </div>
        </div>
    </div>
  )
}

export default Home