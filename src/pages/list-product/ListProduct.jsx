import { HiArrowNarrowLeft } from "react-icons/hi";
import roundedImage from "../../assets/rounded.png"

const ListProduct = () => {
  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-left justify-center mx-auto mt-[5rem] py-[30px] px-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className="flex items-center gap-2">
        <HiArrowNarrowLeft fontSize={"25px"} />
        <p className='text-[26px]'>List Products</p>
      </div>
      <div>
        <div>
            <img src={roundedImage} alt="" />
            <p className="text-[18px] mb-[30px]">Product Information</p>
        </div>
      </div>
      <div>
        <p className="text-[#101010] mb-2">Image/Videos</p>
        <div className="flex items-center justify-between">
            <div className="h-[110px] w-[110px] rounded-[10px] flex items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                Main Image
            </div>
            <div className="h-[110px] w-[110px] rounded-[10px] flex items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                Main Image
            </div>
            <div className="h-[110px] w-[110px] rounded-[10px] flex items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                Main Image
            </div>
            <div className="h-[110px] w-[110px] rounded-[10px] flex items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                Main Image
            </div>
            <div className="h-[110px] w-[110px] rounded-[10px] flex items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                Main Image
            </div>
            <div className="h-[110px] w-[110px] rounded-[10px] flex items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                Main Image
            </div>
        </div>
        <p className="text-[#989898] my-3">
            Image needs to be between 500x500 and 2000x2000 pixels. White backgrounds are recommended. No watermarks. Maximum image 
            size 2.5Mb. Videos sizes Maximum 5MB
        </p>
        <div className="flex items-center gap-5">
            <div className="w-full">
                <p>Name of Product</p>
                <input type="text" className="outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Name of Product here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Caegories</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px]" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Choose Categories" />
                    <p>V</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct