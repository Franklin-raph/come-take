import { CiUser } from "react-icons/ci";
import { LuMessagesSquare, LuUserX2 } from 'react-icons/lu';
import { TiDocumentText } from 'react-icons/ti';
import { BsClock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfileSideNav = () => {

    const navigate = useNavigate()

  return (
        <div className='flex flex-[0.6] w-[100%] items-center px-5 lg:py-0 h-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
            <div className='my-10'>
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                        <CiUser color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>My Profile</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-profile')}>Account Information</li>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/password-reset')} >Security Settings</li>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer'>Edit Phone Number</li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <div className='flex items-center gap-2 mb-3'>
                        <LuMessagesSquare color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>Messages</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/messages')}>Inbox</li>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer'>Sent Messages</li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <div className='flex items-center gap-2 mb-3'>
                        <TiDocumentText color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>My Order</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer' onClick={() => navigate('/my-order-history')}>Order History</li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <div className='flex items-center gap-2 mb-3'>
                        <BsClock color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>Reviews</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#6C6C6C] text-[16px] cursor-pointer'>Pending Reviews</li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <div className='flex items-center gap-2 mb-3'>
                        <LuUserX2 color='#292D32' fontSize={"18px"}/>
                        <p className='text-[18px] font-[500]'>Delete Account</p>
                    </div>
                    <ul className='ml-3 grid gap-2'>
                        <li className='text-[#FF0505] text-[16px] cursor-pointer'>Delete Account</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ProfileSideNav