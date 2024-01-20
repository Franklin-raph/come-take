import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const FairlyUsedProducts = ({fairlyUsedProductsArray}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {fairlyUsedProductsArray && fairlyUsedProductsArray.map(product => (
            <div className="product-card">
            <div className="badge"><CiHeart /></div>
            <div className="product-tumb">
                <img src={product.img} alt="" />
            </div>
            <div className="product-details">
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
    </div>
  )
}

export default FairlyUsedProducts