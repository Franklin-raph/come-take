import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from "../productCard/ProductCard";

import Carousel from "react-elastic-carousel";

const TrendingProducts = ({allProducts}) => {

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
    <Carousel breakPoints={breakPoints}>
        {allProducts && allProducts.map(product => (
            <ProductCard product={product}/>
        ))}
    </Carousel>
  )
}

export default TrendingProducts