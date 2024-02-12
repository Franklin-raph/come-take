import { GoChevronDown } from "react-icons/go";

const ShopSetUp = () => {
  return (
    <div className="w-[100%] lg:w-[845px] flex items-center justify-center mx-auto mt-[5rem] py-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className='w-full px-[1rem] lg:px-[3rem]'>
        <div>
          <p className='text-[28px] text-primary-color text-center'>Set Up Your Shop</p>
          <div>
            <p className='text-[20px] text-black mt-[2rem] pb-1' style={{borderBottom:"1px solid #DCDCDC"}}>Shipping Details</p>
            <div className='mt-5'>
              <p className='mb-[5px]'>Shipping Info</p>
              <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                <p className='text-[#B6B6B6]'>All States</p>
                <GoChevronDown className="cursor-pointer"/>
              </div>
            </div>
            <div className='mt-5'>
              <p className='mb-[5px]'>Shop Name</p>
              <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Shop Name' />
            </div>
            <div className='mt-5'>
              <p className='mb-[5px]'>About Shop</p>
              <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='About Shop' />
            </div>
          </div>
          <div>
            <p className='text-[20px] text-black mt-[2rem] pb-1' style={{borderBottom:"1px solid #DCDCDC"}}>Store Address</p>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>Country</p>
                <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#B6B6B6]'>Japan</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
              </div>
              <div className='w-full'>
                <p className='mb-[5px]'>Address Line 1</p>
                <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Floor, House, Apartment Number' />
              </div>
            </div>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>Address Line 2</p>
                <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Street, Block Number' />
              </div>
              <div className='w-full'>
                <p className='mb-[5px]'>Postal Code</p>
                <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#B6B6B6]'>332435</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
              </div>
            </div>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>City</p>
                <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#B6B6B6]'>Anambra</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
              </div>
              <div className='w-full'>
                <p className='mb-[5px]'>State</p>
                <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                  <p className='text-[#B6B6B6]'>Anambra</p>
                  <GoChevronDown className="cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-secondary-color py-[12px] mt-10 rounded-[5px] text-white w-full">Save Details</button>
      </div>
    </div>
  )
}

export default ShopSetUp