import laptopImage from "../../assets/laptop.png"
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const RecommendedProducts = () => {
  return (
    <div>
        <div className='relative w-[23%] mb-5 category-section rounded-[6px] bg-[#EDEDED]' style={{ boxShadow:"0 0 10px gray" }}>
            <img className='h-[100%] w-[100%] rounded-[6px]' src={laptopImage} alt="" />
            <div  className='absolute top-0 text-white text-center left-0 bg-secondary-color p-1' style={{ borderRadius:"6px 0 7px 0" }}>
                <p className='text-[12px]'>20% off</p>
            </div>
            <div className="mt-2 p-4">
                <p className="font-[500]">Macbook Pro 13"</p>
                <div className="flex items-center justify-between text-[12px] font-[500]">
                    <p>#3500</p>
                    <p className="text-gray-500 line-through">#2500</p>
                </div>
                <p className="text-[12px] mt-3 text-[#098B07] font-[500]">Save #1,000 today</p>
            </div>
        </div>
    </div>
  )
}

export default RecommendedProducts