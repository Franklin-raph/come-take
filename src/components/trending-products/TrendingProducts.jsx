import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from "../productCard/ProductCard";

import Carousel from "react-elastic-carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const TrendingProducts = ({allProducts}) => {

    var settings = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 2 },
        { width: 700, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
      ];

    // console.log(allProducts);

    const options = {
        margin: 20,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        navText: true,
        navText: ['<i class="ri-arrow-left-s-line"></i>','<i class="ri-arrow-right-s-line"></i>'],
        smartSpeed: 1000,
        loop:true,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
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
    <Slider {...settings}>
        {allProducts && allProducts.map(product => (
            <ProductCard product={product}/>
        ))}
    </Slider>
  )
}

export default TrendingProducts