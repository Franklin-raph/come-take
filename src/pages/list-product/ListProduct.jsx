import { HiArrowNarrowLeft } from "react-icons/hi";
import roundedImage from "../../assets/rounded.png"
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

const ListProduct = () => {

    const [categoryNav,SetCategoryNav] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('All Categories')
    const AllCategoryArray = ['Automobile','Baby Product','Funiture','Electronics','Computing','Phones & Accessories','Gaming','Health','Musical','Office']
    const [currentCategoryArray, setCurrentCategoryArray] = useState(AllCategoryArray)
    const computingCategoryArray = ['Laptops','Desktops','Printers','Accessories']

    // useEffect(() => {
    //     if(currentCategory === 'All Categories'){
    //         setCurrentCategoryArray(AllCategoryArray)
    //     }else if(currentCategory === 'Computing'){
    //         setCurrentCategoryArray(['Laptops','Desktops','Printers','Accessories'])
    //         console.log(currentCategoryArray);
    //     }
    // },[currentCategoryArray])

  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-left justify-center mx-auto mt-[5rem] pt-[30px] pb-[50px] px-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className="flex items-center gap-2">
        <HiArrowNarrowLeft fontSize={"25px"} />
        <p className='text-[26px]'>List Products</p>
      </div>
      <div>
        <div className="flex items-center mb-[30px] gap-[20px] mt-[35px]">
            <img src={roundedImage} alt="" className="w-[30px]"/>
            <p className="text-[18px]">Product Information</p>
        </div>
      </div>
      <div className="ml-[3.2rem]">
        <p className="text-[#101010] mb-2">Image/Videos</p>
        <div className="flex items-center justify-between">
            <div className="h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                <p>Main Image</p>
            </div>
            <div className="h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                <p>Main Image</p>
            </div>
            <div className="h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                <p>Main Image</p>
            </div>
            <div className="h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                <p>Main Image</p>
            </div>
            <div className="h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                <p>Main Image</p>
            </div>
            <div className="h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                <p>Main Image</p>
            </div>
        </div>
        <p className="text-[#989898] my-4 ml-2 text-[14px]">
            Image needs to be between 500x500 and 2000x2000 pixels. White backgrounds are recommended. No watermarks. Maximum image 
            size 2.5Mb. Videos sizes Maximum 5MB
        </p>
        <div className="flex items-center gap-5">
            <div className="w-full">
                <p>Name of Product</p>
                <input type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Name of Product here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Caegories</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Choose Categories" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => SetCategoryNav(!categoryNav)}/>
                </div>
            </div>
        </div>
      </div>
      {
        categoryNav &&
            <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
                <div className="bg-white w-[400px] h-[600px] absolute right-0 top-0 px-5">
                    <IoIosCloseCircleOutline className="absolute right-[10px] text-[20px] cursor-pointer top-[20px]" onClick={() => SetCategoryNav(false)}/>
                    <p className="text-[#101010] mt-[65px] text-[24px] pb-2" style={{ borderBottom:"1px solid #E6ECEA" }}>Categories</p>
                    <div className="border border-[#989898] rounded-full flex items-center justify-between mt-5 px-3 py-[7px]">
                        <input type="text" className="w-full outline-none" placeholder="Search For Categories"/>
                        <CiSearch fontSize={"20px"}/>
                    </div>
                    <p className="mt-9">{currentCategory}</p>
                    <div className="border border-[#989898] px-5 mt-4 rounded">
                        {
                            AllCategoryArray.map(category => (
                                <div className="flex items-center gap-2 my-2 cursor-pointer" onClick={() => {
                                    setCurrentCategory(category)
                                    setCurrentCategoryArray(category)
                                    console.log(category);
                                    }}>
                                    <p className="text-[#101010]">{category}</p>
                                    <IoChevronForwardOutline color="#B6B6B6"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
      }
    </div>
  )
}

export default ListProduct