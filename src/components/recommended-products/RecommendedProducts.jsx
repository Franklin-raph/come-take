import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

const RecommendedProducts = ({recommendedProductsArray}) => {
    const options = {
        margin: 40,
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
        {recommendedProductsArray && recommendedProductsArray.map(product => (
            <div class="product-card">
            <div  className='absolute top-0 text-white text-center left-0 bg-secondary-color p-1' style={{ borderRadius:"6px 0 7px 0" }}>
                        <p className='text-[12px] px-3'>{product.discountPercent} <span className="pl-1">off</span> </p>
                    </div>
            <div class="product-tumb">
                <img src={product.img} alt="" />
            </div>
            <div class="product-details">
            <div className="mt-2 text-left">
                        <p className="font-[700]">{product.productName}</p>
                        <div className="flex items-center justify-between text-[12px] font-[500]">
                            <p>#{product.price}</p>
                            <p className="text-gray-500 line-through">#{product.oldPrice}</p>
                        </div>
                        <h6 className="text-[14px] mt-3 text-[#098B07] font-[500]" style={{ color:"#098B07 !important" }}>{product.discountText}</h6>
                    </div>
            </div>
        </div>
        ))}
    </OwlCarousel>
  )
}

export default RecommendedProducts