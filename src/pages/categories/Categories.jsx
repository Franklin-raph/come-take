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

const Categories = () => {

    const recommendedProductsArray = [
        {
          img:gym,
          productName:`Macbook Pro 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:stove,
          productName:`Hand Bag`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:tripodStand,
          productName:`Nike Sneakers`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:fridge,
          productName:`Iphone 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        }
      ]

      const categoryProductsArray = [
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:laptopImage,
          productName:`Macbook Pro 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:bagImage,
          productName:`Hand Bag`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:shoeImage,
          productName:`Nike Sneakers`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
        {
          img:phoneImage,
          productName:`Iphone 13"`,
          price:"#2m",
          description:"256.8 core GPU, 8GB",
          rating:5,
          reviews:"35 Reviews"
        },
      ]
    


  return (
    <div>
        <div className="flex items-center justify-start px-12 py-5 gap-4">
            <p>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
            <MdKeyboardArrowRight />
            <p>Laptops</p>
        </div>

        <div className="px-12 py-8">
            <div className="flex gap-[3rem]">
                <div className="w-[20%] sticky z-[10] h-full bg-white left-0">
                    <p className="font-[700] text-[18px] text-primary-color mt-[16px]">Laptops</p>
                    <div className="mt-[30px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Type</p>
                        <div className="product-type text-gray-400">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>New</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Fairly Used</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Brand</p>
                        <div className="product-type text-gray-400">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Hp</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Lenovo</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Acer</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Apple</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Dell</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Asus</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Microsoft</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Toshiba</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Price Range</p>
                        <div className="product-type text-gray-400">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>Below 50,000</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>#50,000 - #100,000</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>#110,000 - #160,000</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>#170,000 - #220,000</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>#230,000 - #280,000</label>
                            </div>
                            <div className="flex items-center gap-3">
                                <input type="checkbox" name="new" value="new" id="" />
                                <label>#290,000 and Above</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Custom Price Range</p>
                        <div className="product-type text-gray-400 flex items-center gap-3">
                            <div className="flex items-center gap-3 px-2 rounded-sm cursor-pointer" style={{ border: "1px solid gray" }}>
                                <p>#Min</p>
                                <div>
                                    <MdKeyboardArrowUp />
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <div className="flex items-center gap-3 px-2 rounded-sm cursor-pointer" style={{ border: "1px solid gray" }}>
                                <p>#Max</p>
                                <div>
                                    <MdKeyboardArrowUp />
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                            <button className="px-2 py-1 rounded-sm" style={{ border: "1px solid gray" }}>Go</button>
                        </div>
                    </div>
                </div>
                <div className="w-[75%] ml-auto">
                    <div className="flex items-center justify-between">
                        <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">Laptops</h1>
                        <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" >
                        <p>Sort By:New Arrivals</p>
                        <MdKeyboardArrowDown />
                        </div>
                    </div>
                    <CategoryProductPageCard categoryProductsArray={categoryProductsArray}/>
                </div>
            </div>
          </div>

        <div className="px-12 py-8">
          <div className="flex items-center justify-between">
          <h1 className="font-[600] text-[24px] mb-4 mt-10 text-primary-color">You might also like</h1>
          <div className="flex items-center gap-2 py-1 px-2 rounded-full cursor-pointer text-[12px]" style={{ border:"1px solid gray" }}>
              <p>See all</p>
              <GoArrowRight />
            </div>
          </div>
          <RecommendedProducts recommendedProductsArray={recommendedProductsArray}/>
        </div>
    </div>
  )
}

export default Categories