import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
import furnitureImage from "../../assets/furniture.png"
import fashionImage from "../../assets/fashion.png"
import laptopImage from "../../assets/laptop.png"
import bagImage from "../../assets/bag.png"
import shoeImage from "../../assets/shoe.png"
import phoneImage from "../../assets/iphone.png"
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import tripodStand from "../../assets/tripod-stand.png"
import fridge from "../../assets/fridge.png"
import gym from "../../assets/gym.png"
import stove from "../../assets/stove.png"
import RecommendedProducts from "../../components/recommended-products/RecommendedProducts";
import TrendingProducts from "../../components/trending-products/TrendingProducts";
import BrandNewProducts from "../../components/brand-new-products/BrandNewProducts";
import CategoryProductPageCard from "../../components/categories-product-page/CategoryProductPage";
import { BsFilterLeft } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { useEffect } from "react";

const Categories = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
},[])

    const recommendedProductsArray = [
        {
          img:gym,
          productName:`Macbook Pro 13"`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:stove,
          productName:`Hand Bag`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:tripodStand,
          productName:`Nike Sneakers`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:fridge,
          productName:`Iphone 13"`,
          price:"2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        }
      ]

      const categoryProductsArray = [
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
        },
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
        },
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
        },
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
        },
      ]

      const brandsArray = [
        "HP","Lenovo","Acer","Apple","Dell","Asus","Microsoft","Toshiba"
      ]

      const productTypeArray = [
        "New", "Fairly Used"
      ]

      const priceRangeArray= [
        "Below 50,000","#50,000 - #100,000","#110,000 - #160,000","#170,000 - #220,000","#230,000 - #280,000","#290,000 and Above"
      ]
    


  return (
    <div>
        <div className="lg:flex items-center justify-start px-12 py-5 gap-4 hidden">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
            <MdKeyboardArrowRight />
            <p>Laptops</p>
        </div>

        <div className="px-6 pb-8 pt-4">
            <div className="flex gap-[3rem]">
                <div className="w-[20%] sticky z-[10] h-full bg-white left-0 category-left">
                    <p className="font-[700] text-[18px] text-primary-color mt-[16px]">Laptops</p>
                    <div className="mt-[30px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Type</p>
                        <div className="product-type text-gray-400">
                        {productTypeArray.map(type => (
                          <div>
                            <div class="inline-flex items-center my-[5px]">
                            <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                              <input type="checkbox" value={type}
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                id="check" />
                              <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                              </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                              {type}
                            </label>
                            </div>
                          </div>
                          ))}
                        </div>
                    </div>

                    <div className="mt-[40px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Brand</p>
                        <div className="product-type text-gray-400">
                          {brandsArray.map(brand => (
                          <div>
                            <div class="inline-flex items-center my-[5px]">
                            <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                              <input type="checkbox" value={brand}
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                id="check" />
                              <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                              </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                              {brand}
                            </label>
                            </div>
                          </div>
                          ))}
                        </div>
                    </div>

                    <div className="mt-[40px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Price Range</p>
                        <div className="product-type text-gray-400">
                          {priceRangeArray.map(price => (
                          <div>
                            <div class="inline-flex items-center my-[5px]">
                            <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                              <input type="checkbox" value={price}
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                id="check" />
                              <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                              </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                              {price}
                            </label>
                            </div>
                          </div>
                          ))}
                        </div>
                    </div>

                    <div className="mt-[30px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Custom Price Range</p>
                        <div className="product-type text-gray-400 flex items-center gap-3">
                            <div className="flex items-center gap-3 px-2 rounded-[4px] cursor-pointer" style={{ border: "1px solid gray" }}>
                                <p>#Min</p>
                                <div>
                                    <MdKeyboardArrowUp />
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div className="flex items-center gap-3 px-2 rounded-[4px] cursor-pointer" style={{ border: "1px solid gray" }}>
                                <p>#Max</p>
                                <div>
                                    <MdKeyboardArrowUp />
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <button className="px-2 py-1 rounded-[4px]" style={{ border: "1px solid gray" }}>Go</button>
                        </div>
                    </div>
                </div>
                <div className="w-[75%] ml-auto category-right">
                    <div className="flex bg-primary-color text-white items-center justify-between rounded-[4px] px-3 py-4 md:hidden mb-8">
                      <div className="flex items-center">
                        <p>Category</p>
                        <MdKeyboardArrowDown fontSize={"22px"}/>
                      </div>
                      <div className="flex items-center">
                        <BsFilterLeft fontSize={"22px"}/>
                        <p>Filter</p>
                      </div>
                      <div className="flex items-center">
                        <p>New Arivals</p>
                        <MdKeyboardArrowDown fontSize={"22px"}/>
                      </div>
                    </div>
                    <div className="md:flex items-center justify-between hidden">
                        <h1 className="font-[600] text-[24px] mb-4 lg:mt-10 text-primary-color">Laptops</h1>
                        <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" >
                        <p>Sort By:New Arrivals</p>
                        <MdKeyboardArrowDown />
                        </div>
                    </div>
                    <CategoryProductPageCard categoryProductsArray={categoryProductsArray}/>
                </div>
            </div>
          </div>

        <div className="lg:px-12 px-6 py-4 lg:py-8" id="body">
          <div className="flex items-center justify-between">
          <h1 className="font-[600] text-[24px] mb-4 mt-5 text-primary-color">You might also like</h1>
          <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
              <p>See all</p>
              <GoArrowRight />
            </div>
          </div>
          <CategoryProductPageCard categoryProductsArray={categoryProductsArray}/>
        </div>
    </div>
  )
}

export default Categories