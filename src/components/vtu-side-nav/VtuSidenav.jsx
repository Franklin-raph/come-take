import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { TiDocumentText } from 'react-icons/ti';
import { PiNotification } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";
import { PiSignOut } from "react-icons/pi";

const VtuSidenav = () => {
  return (
    <div className='bg-[#003C2F] w-[15%] h-[100%] overflow-y-auto'>
      <h1 className='text-white text-[32px] text-center font-[700] my-5'>Admin</h1>
      <ul className='text-white'>
        <li className='bg-secondary-color py-3 pl-3'>
          <Link to="/customers" className='flex items-center gap-3'>
            <CiUser fontSize={"22px"}/>
            <p>Customers</p>
          </Link>
        </li>
        <li className='py-3 pl-3'>
          <Link to="/notifications" className='flex items-center gap-4'>
            <PiNotification />
            <p>My Wallet</p>
          </Link>
        </li>
        <li className='py-3 pl-3'>
          <Link to="/transactions" className='flex items-center gap-4'>
            <TiDocumentText />
            <p>Transactions</p>
          </Link>
        </li>
        <li className='py-3 pl-3'>
          <Link to="/subscriptions" className='flex items-center gap-4'>
            <TiDocumentText />
            <p>Subscriptions</p>
          </Link>
        </li>
        <li className='py-3 pl-3'>
          <Link to="/categories" className='flex items-center gap-4'>
            <TbSettings2 />
            <p>Categories</p>
          </Link>
        </li>
        <li className='py-3 pl-3'>
          <Link to="/settings" className='flex items-center gap-4'>
            <TbSettings2 />
            <p>Settings</p>
          </Link>
        </li>
        {/* <li className='py-3 pl-3 cursor-pointer' onClick={signOutAdmin}>
          <p className='flex items-center gap-4'>
            <PiSignOut />
            <p>Sign Out</p>
          </p>
        </li> */}
      </ul>
    </div>
  )
}

export default VtuSidenav