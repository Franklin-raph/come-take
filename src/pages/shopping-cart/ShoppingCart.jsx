import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoMdStar } from 'react-icons/io'
import laptop1 from "../../assets/laptop1.png"
import laptop2 from "../../assets/laptop.png"
import laptop3 from "../../assets/product1.jpeg"

const ShoppingCart = () => {
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

        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row-reverse lg:h-[504px]'>
                <div className='flex flex-[1] w-[100%] items-center px-5 lg:py-0 h-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                   <div className='my-10'>
                    <div className='flex items-center justify-between mb-8'>
                        <h1 className="font-[600] text-[18px] lg:text-[20px] text-primary-color">Delivery & Returns</h1>
                        <p className='text-[16px] lg:text-[18px]'>4 Items</p>
                    </div>
                    <div>
                        <div className='mb-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className='text-primary-color text-[16px] text-[#343434]'>Delivery Charges</h2>
                                <p className='text-[12px] text-[#6C6C6C]'>
                                    Add your delivery address to checkout to see delivery charges.
                                </p>
                            </div>
                            <p className='text-[#ff3030] mb-2 text-[16px]'>Price #4,500</p>
                            <p className='text-[#4e4e4e] text-[14px]'>
                                Ready for delivery 2 days from the day you submitted your order
                            </p>
                        </div>

                        <div className='mt-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className='text-primary-color text-[17px]'>Pickup Station</h2>
                                <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                            </div>
                            <p className='text-[#ff3030] mb-2 text-[16px]'>Price #1,500</p>
                            <p className='text-[#4e4e4e] text-[14px]'>
                                Arriving Pickup Station a day from the day you submitted your order
                            </p>
                        </div>

                        <div className='mt-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className='text-primary-color text-[17px]'>Return Policy</h2>
                                <h2 className='text-[12px] text-secondary-color'>View Details</h2>
                            </div>
                            <p className='text-[#4e4e4e] text-[14px]'>
                                Products must be returned within 48hrs of delivery to effect changes.
                            </p>
                        </div>
                    </div>
                   </div>
                </div>

                <div className='h-full gap-[0rem] px-5 py-[3rem] flex-[2]' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <h1 className='text-[#003C2F] text-[24px] font-bold'>Shopping Cart</h1>
                    <div className="h-[56px] bg-[#D4E5B4] flex items-center justify-between px-5 mt-4" style={{borderRadius:"4px 4px 0 0", boxShadow:"0 11px 40px -17px #00000024"}}>
                        <p>Item Detail</p>
                        <div className='flex items-center gap-[5rem]'>
                            <p>Quantity</p>
                            <p>Price</p>
                            <p>Action</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ShoppingCart