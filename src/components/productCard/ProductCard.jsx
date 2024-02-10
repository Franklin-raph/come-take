import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/product-details')}>
        <div className="product-card">
            <div className="badge"><CiBookmark /></div>
            <div className="product-tumb">
                <img src={product.img} alt="" />
            </div>
            <div className="product-details">
                <div className="flex items-center justify-between">
                    <h1>{product.productName}</h1>
                </div>
                <div className="flex items-center gap-1 ml-[-3px]">
                    <CiLocationOn />
                    <p className="text-[14px] py-1">{product.location}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center reviews">
                        {/* <div className="flex items-center">
                            <IoMdStar color='#067604'/>
                            <IoMdStar color='#067604'/>
                            <IoMdStar color='#067604'/>
                            <IoMdStar color='#067604'/>
                            <IoMdStar color='#067604'/>
                        </div>
                        <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">{product.reviews}</span> */}
                        <h1 className="text-[13px]">&#8358;{product.price}</h1>
                    </div>
                    <RiVerifiedBadgeFill color='#DF9007' fontSize={"20px"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard