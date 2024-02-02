import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdStar } from 'react-icons/io'
import laptop1 from "../../assets/category-product-preview.png"
import { SlTrash } from "react-icons/sl";
import paymentAccept from "../../assets/paymentAccepted.png"
import laptop3 from "../../assets/product1.jpeg"
import { GoArrowRight } from 'react-icons/go';
import FairlyUsedProducts from '../../components/fairly-used-products/FairlyUsedProducts';
import laptopImage from "../../assets/laptop.png"
import bagImage from "../../assets/bag.png"
import shoeImage from "../../assets/shoe.png"
import phoneImage from "../../assets/iphone.png"
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {

    const navigate = useNavigate()

    const fairlyUsedProductsArray = [
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        }
      ]

  return (
    <div>
        <div className="md:flex items-center justify-start px-12 py-5 gap-4 hidden">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
            <MdKeyboardArrowRight />
            <p>Laptops</p>
            <MdKeyboardArrowRight />
            <p>Fairly Used</p>
            <MdKeyboardArrowRight />
            <p>Lenovo Products</p>
            <MdKeyboardArrowRight />
            <p className='text-secondary-color'>Shopping Cart</p>
        </div>

        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2.5rem] flex-col-reverse lg:flex-row-reverse '>
                <div className='flex flex-[1] w-[100%] items-center px-5 lg:py-0' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                   <div className='my-10'>
                        <div className='flex items-center justify-between mb-8'>
                            <h1 className="font-[600] text-[18px] lg:text-[20px] text-primary-color">Order Summary</h1>
                            <p className='text-[16px] lg:text-[18px]'>4 Items</p>
                        </div>
                        <div>
                            <div className='mb-7'>
                                <div className='flex items-start justify-between mb-4 pb-4' style={{borderBottom:"1px solid #dcdcdc"}}>
                                    <h2 className='text-primary-color text-[16px] text-[#343434] flex-[2]'>Delivery Charges</h2>
                                    <p className='text-[12px] text-[#6C6C6C] item-end text-end flex-[1.2]'>
                                        Add your delivery address to checkout to see delivery charges.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pb-4 mb-4" style={{borderBottom:"1px solid #dcdcdc"}}>
                                    <p className='text-[#343434] text-[16px]'>Subtotal</p>
                                    <p className='text-[#4E4E4E] text-[16px]'>#165,550</p>
                                </div>
                                <div className="flex items-center justify-between pb-4" style={{borderBottom:"1px solid #dcdcdc"}}>
                                    <p className='text-[#000] text-[16px]'>Total</p>
                                    <p className='text-[#000] text-[16px]'>#165,550</p>
                                </div>
                                <p className='text-secondary-color text-[12px] text-end mt-1'>Exclude Delivery Charges</p>
                                <button className='bg-primary-color text-white w-full h-[45px] rounded-[10px] mt-10' onClick={() => navigate('/check-out')} >Proceed to Checkout</button>
                                <div className='h-[1px] bg-[#dcdcdc] mt-8'></div>
                                <div className="flex items-center mt-4 gap-4">
                                    <p className='text-[#6C6C6C] text-[12px]'>We Accept:</p>
                                    <img src={paymentAccept} alt="" className='w-[40%]'/>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

                <div className='gap-[0rem] px-5 pb-[3rem] pt-[2rem] flex-[2]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <h1 className='text-[#003C2F] text-[20px] font-bold mb-5'>Shopping Cart</h1>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-left shoppingCartTable">
                            <thead class="text-[14px] bg-[#D4E5B4]" style={{boxShadow:"0 11px 40px -17px #00000024", borderRadius:"10px"}}>
                                <tr>
                                    <th scope="col" class="px-6 py-3 th1">
                                        Item Detail
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3 th2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                    {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    </th> */}
                                    
                                    <td class="px-6 py-6">
                                        <div className='flex items-center gap-[20px]'>
                                            <img src={laptop1} className='w-[15%]'/>
                                            <div>
                                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                                <p className='text-[#898989] text-[12px]'>Brand : Lenovo</p>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                    </div>
                                                    <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                    <div className='flex items-center justify-center gap-2 rounded-[4px] w-[100px] text-center h-[25px]'>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>-</p>
                                        <p className='flex-1'>1</p>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>+</p>
                                    </div>
                                    </td>
                                    <td class="py-4">
                                        <div>
                                            <p className='text-[12px]'>#115,000</p>
                                            <p className='text-[#6C6C6C] text-[10px]'>#115,000 x 1</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <SlTrash color='#FF0505' fontSize={"18px"}/>
                                    </td>
                                    {/* <div className='h-[3px] bg-[#000] w-full my-4 lg:mx-12'></div> */}
                                </tr>
                                <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                    {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    </th> */}
                                    
                                    <td class="px-6 py-6">
                                        <div className='flex items-center gap-[20px]'>
                                            <img src={laptop1} className='w-[15%]'/>
                                            <div>
                                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                                <p className='text-[#898989] text-[12px]'>Brand : Lenovo</p>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                    </div>
                                                    <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                    <div className='flex items-center justify-center gap-2 rounded-[4px] w-[100px] text-center h-[25px]'>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>-</p>
                                        <p className='flex-1'>1</p>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>+</p>
                                    </div>
                                    </td>
                                    <td class="py-4">
                                        <div>
                                            <p className='text-[12px]'>#115,000</p>
                                            <p className='text-[#6C6C6C] text-[10px]'>#115,000 x 1</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <SlTrash color='#FF0505' fontSize={"18px"}/>
                                    </td>
                                    {/* <div className='h-[3px] bg-[#000] w-full my-4 lg:mx-12'></div> */}
                                </tr>
                                <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                    {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    </th> */}
                                    
                                    <td class="px-6 py-6">
                                        <div className='flex items-center gap-[20px]'>
                                            <img src={laptop1} className='w-[15%]'/>
                                            <div>
                                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                                <p className='text-[#898989] text-[12px]'>Brand : Lenovo</p>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                    </div>
                                                    <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                    <div className='flex items-center justify-center gap-2 rounded-[4px] w-[100px] text-center h-[25px]'>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>-</p>
                                        <p className='flex-1'>1</p>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>+</p>
                                    </div>
                                    </td>
                                    <td class="py-4">
                                        <div>
                                            <p className='text-[12px]'>#115,000</p>
                                            <p className='text-[#6C6C6C] text-[10px]'>#115,000 x 1</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <SlTrash color='#FF0505' fontSize={"18px"}/>
                                    </td>
                                    {/* <div className='h-[3px] bg-[#000] w-full my-4 lg:mx-12'></div> */}
                                </tr>
                                <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                                    {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    </th> */}
                                    
                                    <td class="px-6 py-6">
                                        <div className='flex items-center gap-[20px]'>
                                            <img src={laptop1} className='w-[15%]'/>
                                            <div>
                                                <p className='text-[12px]'>Lenovo V15 G3 (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos)</p>
                                                <p className='text-[#898989] text-[12px]'>Brand : Lenovo</p>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                        <IoMdStar color='#FFEA2E'/>
                                                    </div>
                                                    <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                    <div className='flex items-center justify-center gap-2 rounded-[4px] w-[100px] text-center h-[25px]'>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>-</p>
                                        <p className='flex-1'>1</p>
                                        <p className='flex-1 px-2 text-[#B5AEAE] text-[16px] cursor-pointer h-full border border-[#B5AEAE] rounded-[5px] flex items-center justify-center'>+</p>
                                    </div>
                                    </td>
                                    <td class="py-4">
                                        <div>
                                            <p className='text-[12px]'>#115,000</p>
                                            <p className='text-[#6C6C6C] text-[10px]'>#115,000 x 1</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4">
                                        <SlTrash color='#FF0505' fontSize={"18px"}/>
                                    </td>
                                    {/* <div className='h-[3px] bg-[#000] w-full my-4 lg:mx-12'></div> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className="flex items-center justify-between mb-[20px]">
                    <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Products Related to Items in your cart</h1>
                    <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
            </div>
        </div>

        <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className="flex items-center justify-between mb-[20px]">
                    <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Recommended</h1>
                    <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
            </div>
        </div>

        <div className="lg:px-12 py-8">
            <div className='p-5' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                <div className="flex items-center justify-between mb-[20px]">
                    <h1 className="font-[600] text-[18px] lg:text-[24px] text-primary-color">Recently viewed</h1>
                    <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
                        <p>See all</p>
                        <GoArrowRight />
                    </div>
                </div>
                <FairlyUsedProducts fairlyUsedProductsArray={fairlyUsedProductsArray}/>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart