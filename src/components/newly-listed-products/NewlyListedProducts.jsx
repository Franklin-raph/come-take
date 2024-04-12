import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import ProductCard from "../productCard/ProductCard";

const NewlyListedProducts = ({allProducts}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10">
        {allProducts && allProducts.map(product => (
            <ProductCard product={product}/>
        ))}
    </div>
  )
}

export default NewlyListedProducts