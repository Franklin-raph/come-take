import laptopImage from "../../assets/laptop.png"
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TrendingProducts = ({trendingProductsArray}) => {

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: true,
        navText: ["<", ">"],
        smartSpeed: 1000,
        loop:true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };


  return (
    <OwlCarousel {...options} >
        {trendingProductsArray && trendingProductsArray.map(product => (
            <div className='relative w-[92%] mx-auto h-[40vh] category-section rounded-[6px] bg-[#EDEDED] mb-[9rem]'>
                <img className='h-[100%] rounded-[6px] w-[80%] object-contain' src={product.img} alt="" />
                <div  className='absolute top-[5%] text-white text-center right-[5%] bg-white rounded-full p-1'>
                    <CiHeart color="black" fontSize={"18px"} />
                </div>
                <div className="mt-2">
                    <div className="flex items-center justify-between">
                        <p className="font-[500]">{product.productName}</p>
                        <p className="text-[13px] font-[500]">{product.price}</p>
                    </div>
                    <p className="text-[12px] py-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <IoMdStar color='#003C2F'/>
                                <IoMdStar color='#003C2F'/>
                                <IoMdStar color='#003C2F'/>
                                <IoMdStar color='#003C2F'/>
                                <IoMdStar color='#003C2F'/>
                            </div>
                            <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">{product.reviews}</span>
                        </div>
                        <div className="rounded-full" style={{ border:"1px solid gray", padding:"5px" }}>
                            <BsCart3 color='#003C2F' repeatCount={4} fontSize={"18px"}/>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </OwlCarousel>
  )
}

export default TrendingProducts