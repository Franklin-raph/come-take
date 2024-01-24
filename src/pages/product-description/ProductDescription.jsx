import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ProductDescription = () => {
  return (
    <div>
        <div className="flex items-center justify-start px-12 py-5 gap-4">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
            <MdKeyboardArrowRight />
            <p>Laptops</p>
            <MdKeyboardArrowRight />
            <p>Fairly Used</p>
            <MdKeyboardArrowRight />
            <p>Lenovo Products</p>
        </div>
    </div>
  )
}

export default ProductDescription