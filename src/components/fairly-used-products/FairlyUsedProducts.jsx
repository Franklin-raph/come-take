import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import ProductCard from "../productCard/ProductCard";

const FairlyUsedProducts = ({fairlyUsedProducts, getAllProductsAfterSaveOrUnsave, msg, setMsg, alertType, setAlertType, getMySavedProducts}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-3">
        {fairlyUsedProducts && fairlyUsedProducts?.data?.map(product => (
            <ProductCard msg={msg} setMsg={setMsg} alertType={alertType} setAlertType={setAlertType} getMySavedProducts={getMySavedProducts} getAllProductsAfterSaveOrUnsave={getAllProductsAfterSaveOrUnsave} product={product}/>
        ))}
    </div>
  )
}

export default FairlyUsedProducts