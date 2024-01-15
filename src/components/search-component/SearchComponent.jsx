import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";

const SearchComponent = () => {
  return (
    <div className='flex items-center justify-between px-12 py-5'>
        <div className='flex items-center justify-between outline-none border py-2 px-2 rounded text-[14px]'>
            <input type="text" placeholder='Search' className='w-full pr-20 outline-none'/>
            <CiSearch />
        </div>
        <div className='top-icons '>
            <div>
                <CiHeart color='#FF3030' fontSize={"20px"}/>
                <p>(0)</p>
            </div>
            <div>
                <BsCart3 color='#08A805' fontSize={"20px"}/>
                <p>(0)</p>
            </div>
            <div>
                <CiBellOn color='#DF9007' fontSize={"20px"}/>
                <p>(0)</p>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent