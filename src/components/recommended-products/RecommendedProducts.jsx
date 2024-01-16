import laptopImage from "../../assets/laptop.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const RecommendedProducts = ({recommendedProductsArray}) => {
  return (
    <div id="recommended">
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        {recommendedProductsArray && recommendedProductsArray.map(product => (
            <SwiperSlide>
                <div className='relative w-[92%] mb-5 h-[48vh] category-section rounded-[6px] bg-[#FFF]' style={{ boxShadow: "0px 11px 40px -17px #00000024" }}>
                    <img className='h-[60%] w-[70%] mx-auto rounded-[6px] object-center' src={product.img} alt="" />
                    <div  className='absolute top-0 text-white text-center left-0 bg-secondary-color p-1' style={{ borderRadius:"6px 0 7px 0" }}>
                        <p className='text-[12px] px-3'>{product.discountPercent} <span className="pl-1">off</span> </p>
                    </div>
                    <div className="mt-2 p-4 text-left">
                        <p className="font-[500]">{product.productName}</p>
                        <div className="flex items-center justify-between text-[12px] font-[500]">
                            <p>#{product.price}</p>
                            <p className="text-gray-500 line-through">#{product.oldPrice}</p>
                        </div>
                        <p className="text-[12px] mt-3 text-[#098B07] font-[500]">Save #1,000 today</p>
                    </div>
                </div>
            </SwiperSlide>
            ))}
    </Swiper>
        {/* <div className="grid grid-cols-4 mb-20">
            {recommendedProductsArray && recommendedProductsArray.map(product => (
                <div className='relative w-[92%] mb-5 h-[40vh] category-section rounded-[6px] bg-[#EDEDED]' style={{ boxShadow: "0px 11px 40px -17px #00000024" }}>
                    <img className='h-[100%] w-[100%] rounded-[6px]' src={laptopImage} alt="" />
                    <div  className='absolute top-0 text-white text-center left-0 bg-secondary-color p-1' style={{ borderRadius:"6px 0 7px 0" }}>
                        <p className='text-[12px] px-3'>{product.discountPercent} <span className="pl-1">off</span> </p>
                    </div>
                    <div className="mt-2 p-4">
                        <p className="font-[500]">{product.productName}</p>
                        <div className="flex items-center justify-between text-[12px] font-[500]">
                            <p>#{product.price}</p>
                            <p className="text-gray-500 line-through">#{product.oldPrice}</p>
                        </div>
                        <p className="text-[12px] mt-3 text-[#098B07] font-[500]">Save #1,000 today</p>
                    </div>
                </div>
            ))}
        </div> */}
    </div>
  )
}

export default RecommendedProducts