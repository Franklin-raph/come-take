import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const NewlyListedProducts = ({newlyListedProductsArray}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {newlyListedProductsArray && newlyListedProductsArray.map(product => (
            <div class="product-card">
            <div class="badge"><CiHeart /></div>
            <div class="product-tumb">
                <img src={product.img} alt="" />
            </div>
            <div class="product-details">
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

export default NewlyListedProducts