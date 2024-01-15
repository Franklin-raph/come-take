import laptopImage from "../../assets/laptop.png"
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const TrendingProducts = () => {
  return (
    <div>
        <div className='relative w-[23%] h-[40vh] mb-5 category-section rounded-[6px] bg-[#EDEDED]'>
            <img className='h-[100%] w-[100%] rounded-[6px]' src={laptopImage} alt="" />
            <div  className='absolute top-[5%] text-white text-center right-[5%] bg-white rounded-full p-1'>
                <CiHeart color="black" fontSize={"18px"} />
            </div>
            <div className="mt-2">
                <div className="flex items-center justify-between">
                    <p className="font-[500]">Macbook Pro 13"</p>
                    <p className="text-[13px] font-[500]">#2m</p>
                </div>
                <p className="text-[12px] py-2">256.8 core GPU, 8GB</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <IoMdStar color='#003C2F'/>
                            <IoMdStar color='#003C2F'/>
                            <IoMdStar color='#003C2F'/>
                            <IoMdStar color='#003C2F'/>
                            <IoMdStar color='#003C2F'/>
                        </div>
                        <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">35 Reviews</span>
                    </div>
                    <div className="rounded-full" style={{ border:"1px solid gray", padding:"5px" }}>
                        <BsCart3 color='#003C2F' repeatCount={4} fontSize={"18px"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingProducts