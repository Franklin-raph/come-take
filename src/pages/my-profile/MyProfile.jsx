import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { IoChevronDown } from 'react-icons/io5';
import userProfilePic  from '../../assets/profilePic.png'
import { useState } from 'react';

const MyProfile = () => {

    const [deleteModal, setDeleteModal] = useState(false)

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Account Information</h1>
                        <div className='flex items-center justify-center flex-col my-[3rem]'>
                            <img src={userProfilePic} alt="" width="140px" height="140px"/>
                            <p className='text-[#5C5C5C] font-[600] text-[24px] mt-3 mb-1'>John Doe</p>
                            <p className='text-[#5C5C5C]'>JohnDoes@gmail.com</p>
                        </div>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>First Name</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"Anthony"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <div className='my-7'>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Middle Name</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={""} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Last Name</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"Egolum"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <button className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Save Information</button>
                    </div>

                    <div className='mt-[60px]'>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Update Email</h1>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Email</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"Example@Cometake.com"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <button className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Update</button>
                    </div>

                    {/* <div className='mt-[60px]'>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Delivery Details</h1>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Address</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"No 5 Ituku Street Umuokpu"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <div className='flex items-center gap-[38px] my-7 flex-col sm:flex-row'>
                            <div className='w-full'>
                                <label className='text-[16px] block mb-[3px] text-[#101010]'>Town</label>
                                <div className='flex items-center justify-between w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]' style={{border:"1px solid #CCCCCC"}}>
                                    <input type="text" value={"Anambra"} className=''/>
                                    <IoChevronDown cursor={"pointer"} color='#6C6C6C'/>
                                </div>
                            </div>
                            <div className='w-full'>
                                <label className='text-[16px] block mb-[3px] text-[#101010]'>State</label>
                                <div className='flex items-center justify-between w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]' style={{border:"1px solid #CCCCCC"}}>
                                    <input type="text" value={"Anambra"} className=''/>
                                    <IoChevronDown cursor={"pointer"} color='#6C6C6C' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Phone Number</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"08145463122"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <button className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Save Information</button>
                    </div> */}
                    {/* <div className="md:w-[55%] mt-[1rem] md:mt-[0]">
                        <p className='text-[24px] leading-[1.5] lg:leading-[1.8]'>
                            Lenovo V15 G3 Iap Laptop (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos) -82tt00juue
                        </p>
                        <p className='text-[#898989] my-3'>Brand: Lenovo</p>
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
                        <div className='h-[1px] bg-[#ccc] my-4 md:block hidden'></div>
                        <div className='flex items-center gap-5 justify-between lg:justify-start'>
                            <p className='text-[35px]'>#150,000</p>
                            <p className='text-[#34343457] text-[20px] line-through'>#115,000</p>
                        </div>
                        <p className='text-[#ff3030] lg:block hidden'>Fairly Used</p>
                        <div className='h-[1px] bg-[#ccc] my-4'></div>
                        <div className="flex items-center gap-4 justify-between">
                            <p className='text-[#ff3030] lg:hidden block'>Fairly Used</p>
                            <div className="flex items-center gap-4 mt-2">
                                <p className='text-[#898989]'>Quantity</p>
                                <div className='flex items-center justify-center gap-2 border border-[#B5AEAE] rounded-[4px] w-[120px] text-center h-[30px]'>
                                    <p style={{ borderRight:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>-</p>
                                    <p className='flex-1'>1</p>
                                    <p style={{ borderLeft:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>+</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[15px] mt-6">
                            <button className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%]'>Buy Now</button>
                            <button className='rounded-[5px] text-primary-color border border-primary-color px-[20px] md:px-[35px] py-[8px] w-[50%]'>Add to cart</button>
                        </div>
                    </div> */}
                {
                    !deleteModal &&
                    <div className='fixed w-full h-full top-0 left-0 z-[9999] flex items-start justify-center' style={{ background:"rgba(21, 21, 21, 0.6)" }}>
                        <div className='bg-white'>
                            <div className="flex items-center justify-between">
                                <p className='text-[#333333] text-[24px]'>Delete Product </p>
                                <p>X</p>
                            </div>
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile