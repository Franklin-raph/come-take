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
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import CategoriesProductPageDown from "../../components/categories-product-page-down/CategoriesProductPageDown";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Categories = ({baseUrl}) => {

  useEffect(() => {
    getAllProducts()
    window.scrollTo(0, 0)
},[])


    const productTypeArray = [
      {
        label:'Brand New',
        value:'brand_new'
      },
      {
        label:'Fairly Used',
        value:'fairly_used'
      }
    ]

    const priceRangeArray= [
      {
        label:'Below ₦50,000',
        maxVal:50000,
        minVal:0,
      },
      {
        label:'₦50,000 - ₦100,000',
        priceRange: {
          min: 50000,
          max: 100000,
        }
      },
      {
        label:'₦110,000 - ₦160,000',
        priceRange: {
          min: 110000,
          max: 160000,
        }
      },
      {
        label:'₦170,000 - ₦220,000',
        priceRange: {
          min: 170000,
          max: 220000,
        }
      },
      {
        label:'₦230,000 - ₦280,000',
        priceRange: {
          min: 230000,
          max: 280000,
        }
      },
      {
        label:'₦290,000 and Above',
        priceRange:{
          min: 290000,
          max: 9000000,
        }
      }
    ]

    const sortArray = ["Newest Arrival", "Verified", "Price: Low to High", "Price: High to low"]

    const [selectedSort, setSelectedSort] = useState('Newest Arrival')
    const [showSort, setShowSort] = useState(false)

    const [showFilter, setShowFilter] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const navigate = useNavigate()

    const [allProducts, setAllProducts] = useState([])
    const [allCategoryArray, setAllCategoryArray] = useState([])
    const [loader, setLoader] = useState(false)

    async function getAllProducts(){
      setLoader(true)
      const res = await fetch(`${baseUrl}/products`,)
      const data = await res.json()
      if(res) setLoader(false)
      setAllProducts(data.data)
      console.log("Line 52 ===>", data.data);
  }

  const [condition, setCondition] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  // const [priceRange, setPriceRange] = useState({})
  const [searchText, setSearchText] = useState('')

  async function filterProducts(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products?price_below=${minPrice}&price_above=${maxPrice}&condition=${condition}`)
    const data = await res.json()
    if(res) {
      setShowFilter(false)
      setLoader(false)
    }
    setAllProducts(data.data)
    console.log(res, data);
  }
    


  return (
    <div>
        <div className="lg:flex items-center justify-start px-12 py-5 gap-4 hidden">
            <p className="cursor-pointer" onClick={() => navigate('/')}>Home</p>
            <MdKeyboardArrowRight />
            <p>Computing</p>
        </div>

        <div className="px-6 pb-8 pt-4">
            <div className="flex gap-[rem]">
              {/* DESKTOP FILTER*/}
                <div className="w-[20%] sticky z-[10] h-full bg-white left-0 category-left border border-[#EDEDED] py-8 px-4">
                  {/* <div className="border border-[#B6B6B6] px-3 py-2 flex items-center justify-between rounded-full">
                    <input type="text" placeholder="Search" className="outline-none w-[100%]"/>
                    <IoIosSearch className="text-[#B6B6B6] text-[22px]"/>
                  </div> */}
                    <p className="font-[700] text-[18px] text-primary-color mt-[16px]">Categories</p>
                    <div className="mt-[]">
                        {/* <p className="font-[700] text-[18px] text-primary-color my-[10px]">Laptops</p> */}
                        <div className="product-type text-gray-400">
                        {productTypeArray.map(type => (
                          <div>
                            <div class="inline-flex items-center my-[5px]">
                            <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                              <input type="checkbox" onChange={() => setCondition(type.value)} 
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                id="check" />
                              <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                              </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                              {type.label}
                            </label>
                            </div>
                          </div>
                          ))}
                        </div>
                    </div>

                    {/* <div className="mt-[40px]">
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
                    </div> */}

                    {/* <div className="mt-[40px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Price Range</p>
                        <div className="product-type text-gray-400">
                          {priceRangeArray.map(price => (
                          <div>
                            <div class="inline-flex items-center my-[5px]">
                            <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                              <input type="checkbox" onChange={() => setPriceRange(price.priceRange)}
                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                id="check" />
                              <span
                                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                              </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                              {price.label}
                            </label>
                            </div>
                          </div>
                          ))}
                        </div>
                    </div> */}

                    <div className="mt-[30px]">
                        <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Custom Price Range</p>
                        <div className="product-type text-gray-400 flex items-center gap-3">
                            <div className="flex items-center gap-3 px-2 rounded-[4px] cursor-pointer w-full justify-between" style={{ border: "1px solid gray" }}>
                                <input type="text" className="w-full outline-none py-1" placeholder="Min" onChange={e => setMinPrice(e.target.value)} />
                            </div>
                            <div className="flex items-center gap-3 px-2 rounded-[4px] cursor-pointer w-full justify-between" style={{ border: "1px solid gray" }}>
                                <input type="text" className="w-full outline-none py-1" placeholder="Max" onChange={e => setMaxPrice(e.target.value)} />
                            </div>
                        </div>
                        <button onClick={filterProducts} className="px-2 py-1 rounded-[4px] w-full mt-5" style={{ border: "1px solid gray" }}>Go..</button>
                    </div>
                </div>
                {/* END DESKTOP FILTER*/}




                {/* MOBILE FILTER*/}
                {
                  showFilter &&
                  <>
                    <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setShowFilter(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center w-full" style={{ transform: "translate(-50%, -50%)" }}>
                      <div className="w-[90%] px-8 overflow-y-scroll pt-4 pb-8 h-[90%] bg-white">
                        <div className="flex items-center justify-start gap-8">
                          <MdOutlineClose cursor={"pointer"} onClick={() => setShowFilter(false)}/>
                          <div className="px-[64px] rounded-full py-2 bg-[#D9D9D9]"></div>
                        </div>
                          <p className="font-[700] text-[18px] text-primary-color mt-[16px] border-b pb-1">Filter</p>
                          <div className="mt-[30px]">
                              <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Type</p>
                              <div className="product-type text-gray-400">
                              {productTypeArray.map(type => (
                                <div>
                                  <div class="inline-flex items-center my-[5px]">
                                  <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                                    <input type="checkbox" onChange={() => setCondition(type.value)}
                                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                      id="check" />
                                    <span
                                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                      <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                                    </span>
                                  </label>
                                  <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                                    {type.label}
                                  </label>
                                  </div>
                                </div>
                                ))}
                              </div>
                          </div>

                          {/* <div className="mt-[40px]">
                              <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Price Range</p>
                              <div className="product-type text-gray-400">
                                {priceRangeArray.map(price => (
                                <div>
                                  <div class="inline-flex items-center my-[5px]">
                                  <label class="relative flex items-center px-2 rounded-full cursor-pointer" htmlFor="check">
                                    <input type="checkbox" onChange={() => setPriceRange(price.priceRange)}
                                      class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:bg-transparent checked:border-secondary-color"
                                      id="check" />
                                    <span
                                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                      <FaCheck fontSize={"12px"} style={{color:"#96BF47"}}/>
                                    </span>
                                  </label>
                                  <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
                                    {price.label}
                                  </label>
                                  </div>
                                </div>
                                ))}
                              </div>
                          </div> */}

                        <div className="mt-[30px]">
                          <p className="font-[700] text-[18px] text-primary-color mt-[16px] mb-[10px]">Custom Price Range</p>
                          <div className="product-type text-gray-400 flex items-center gap-3">
                              <div className="flex items-center gap-3 px-2 rounded-[4px] cursor-pointer w-full justify-between" style={{ border: "1px solid gray" }}>
                                  <input type="text" className="w-full outline-none py-1" onChange={e => setMinPrice(e.target.value)} placeholder="Min" />
                              </div>
                              <div className="flex items-center gap-3 px-2 rounded-[4px] cursor-pointer w-full justify-between" style={{ border: "1px solid gray" }}>
                                  <input type="text" className="w-full outline-none py-1" onChange={e => setMaxPrice(e.target.value)} placeholder="Max" />
                              </div>
                          </div>
                          <button onClick={filterProducts} className="px-2 py-1 rounded-[4px] w-full mt-5" style={{ border: "1px solid gray" }}>Go.</button>
                        </div>
                      </div>
                    </div>
                  </>
                }
                {/* END MOBILE FILTER*/}




                <div className="w-[75%] lg:ml-[2rem] ml-0 category-right">
                    <div className="flex bg-primary-color text-white items-center justify-between rounded-[4px] px-3 py-4 mb-8 mobile-filter">
                      {/* <div className="flex items-center cursor-pointer">
                        <p>Category</p>
                        <MdKeyboardArrowDown fontSize={"22px"}/>
                      </div> */}
                      <div className="flex items-center cursor-pointer" onClick={() => setShowFilter(true)}>
                        <BsFilterLeft fontSize={"22px"}/>
                        <p>Filter</p>
                      </div>
                      {/* <div className="flex items-center cursor-pointer">
                        <p>New Arivals</p>
                        <MdKeyboardArrowDown fontSize={"22px"}/>
                      </div> */}
                    </div>
                    <div className="flex items-center justify-between desktop-filter">
                        <h1 className="font-[600] text-[24px] mb-4 text-primary-color">All Products</h1>
                        <div className="flex items-center gap-1 py-1 px-2 rounded-full cursor-pointer text-[12px] relative" >
                          {/* <p>Sort By: <span>{selectedSort}</span> </p>
                          <MdKeyboardArrowDown fontSize={"20px"} onClick={() => setShowSort(!showSort)}/>

                          {showSort &&
                            <div className="absolute bg-white border top-[30px] right-[10px] z-[999] px-4">
                            { sortArray.map(item => (<p className="my-3" onClick={() => {
                              setSelectedSort(item)
                              setShowSort(false)
                              }}>{item}</p>))}
                            </div>
                          } */}
                          <div className="border border-[#B6B6B6] px-3 py-2 flex items-center justify-between rounded-full">
                            <input type="text" placeholder="Search" className="outline-none w-[100%]" onChange={e => setSearchText(e.target.value)} />
                            {/* <input type="text" placeholder="Search" className="outline-none w-[100%]"/> */}
                            <IoIosSearch className="text-[#B6B6B6] text-[22px]"/>
                          </div>
                        </div>
                    </div>
                    <CategoryProductPageCard allProducts={allProducts} searchText={searchText}/>
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
          <CategoriesProductPageDown allProducts={allProducts}/>
        </div>
    </div>
  )
}

export default Categories