import React, { useEffect, useState } from 'react'
import orderHistoryImage from "../../assets/history.png"
import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { SlTrash } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import Btnloader from '../../components/loader/Btnloader';
import Alert from '../../components/alert/Alert';

const MyOrder = ({baseUrl}) => {

    const [loader, setLoader] = useState(false)
    const [deleteItem, setDeleteItem] = useState(false)
    const [unlistItem, setUnlistItem] = useState(false)
    const [listItem, setListItem] = useState(false)
    const [allMyProducts, setAllMyProducts] = useState()
    const user = JSON.parse(localStorage.getItem('user'))
    const [desktoploader, setDesktopLoader] = useState(false)
    const [mobileLoader, setMobileLoader] = useState(false)

    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')

    useEffect(() => {
        getMyShop()
    },[])

    async function getMyShop(){
        setDesktopLoader(true)
        setMobileLoader(true)
        const res = await fetch(`${baseUrl}/seller/dashboard/my-products`,{
            headers:{
                Authorization:`Bearer ${user.data[0].access}`,
            }
        })
        if(res) {
            setDesktopLoader(false)
            setMobileLoader(false)
        }
        const data = await res.json()
        setAllMyProducts(data.data)
        console.log(data.data);
    }

    async function deleteProduct(){
        setLoader(true)
        console.log(`${baseUrl}/products/${deleteItem}`);
        const res = await fetch(`${baseUrl}/products/${deleteItem}`,{
            method:"DELETE",
            headers: {
                Authorization:`Bearer ${user.data[0].access}`
            }
        })
        console.log(res);
        // const data = await res.json()
        if(res) setLoader(false)
        if(res.ok){
            setAlertType('success')
            setMsg('Product deleted successfully')
            setDeleteItem(false)
            getMyShop()
        }
        if(!res.ok){
            setAlertType('error')
            setMsg('Product was not successfully deleted')
        }
    }

    async function unlistProduct(){
        setLoader(true)
        console.log(`${baseUrl}/products/${unlistItem}`);
        const res = await fetch(`${baseUrl}/products/${unlistItem}`,{
            method:"PUT",
            headers: {
                Authorization:`Bearer ${user.data[0].access}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({unlist:true})
        })
        console.log(res);
        // const data = await res.json()
        if(res) setLoader(false)
        if(res.ok){
            setAlertType('success')
            setMsg('Product unlisted successfully')
            setUnlistItem(false)
            getMyShop()
        }
        if(!res.ok){
            setAlertType('error')
            setMsg('Product was not successfully unlisted')
        }
    }

    async function listProduct(){
        setLoader(true)
        console.log(`${baseUrl}/products/${listItem}`);
        const res = await fetch(`${baseUrl}/products/${listItem}`,{
            method:"PUT",
            headers: {
                Authorization:`Bearer ${user.data[0].access}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({unlist:false})
        })
        console.log(res);
        // const data = await res.json()
        if(res) setLoader(false)
        if(res.ok){
            setAlertType('success')
            setMsg('Product listed successfully')
            setListItem(false)
            getMyShop()
        }
        if(!res.ok){
            setAlertType('error')
            setMsg('Product was not successfully listed')
        }
    }

    const navigate = useNavigate()

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20 mb-8">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 password-reset w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div className='flex justify-between items-center mb-8 '  style={{borderBottom:"1px solid #E6ECEA"}}>
                        <h1 className='text-[#003C2F] text-[24px] font-bold pb-3'>My Shop</h1>
                    </div>

                        {
                            // Mobile
                            allMyProducts && 
                            <div>
                                
                                {
                                    allMyProducts.length > 0 && allMyProducts.map(product => (
                                        <div key={product.id} className='pb-[0.5rem] mb-8 md:hidden' style={{borderBottom:"1px solid #DCDCDC"}}>
                                            <div className='flex items-center gap-[20px] w-full'>
                                                <img src={product?.product_cover_image?.media} alt='Product Image' className='w-[150px] h-[150px] object-contain'/>
                                                <div onClick={() => navigate(`/product-details/${product.id}`)}>
                                                    <p className='text-[12px]'>{product.name}</p>
                                                    <p className='text-[#898989] text-[12px] my-2'>Date Listed : {new Date(product.created_at).toDateString()}</p>
                                                    <p className='text-[#898989] text-[12px]'>Price: {product.price.toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                                                    })} 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between w-full mt-5'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='flex items-center gap-2 cursor-pointer'>
                                                        {
                                                            product.unlist === false ?
                                                                <div className='flex items-center gap-2 cursor-pointer'>
                                                                    <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}} onClick={() => setUnlistItem(product.id)}>Unlist Item.</p>
                                                                </div>
                                                            :
                                                                <div className='flex items-center gap-2 cursor-pointer'>
                                                                    <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}} onClick={() => setListItem(product.id)}>List Item.</p>
                                                                </div>
                                                        }
                                                        {/* <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}}>Unlist Item</p> */}
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-3 mt-3 justify-end'>
                                                    <AiOutlineEdit fontSize={"24px"} cursor={"pointer"} color='#292D32'  onClick={() => navigate(`/product-detail/${product.id}`)} />
                                                    <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(product.id)}/>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                                {
                                    allMyProducts.length === 0 &&
                                    <div>
                                        <div className='flex items-center justify-center flex-col'>
                                            <img src={orderHistoryImage} className='w-[23%] mx-auto mt-9' alt="" />
                                            <p className='text-[#2B5D52] text-[24px] font-[700] mt-10'>No Item Here yet</p>
                                            <p className='text-[#6C6C6C] text-[20px] text-center'>all your Listed Items will appear here</p>
                                            <button className='py-3 px-8 bg-secondary-color rounded-[8px] text-white mt-6' onClick={() => navigate('/list-product')}>List a product</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    
                        {allMyProducts &&
                            <div>   
                                {
                                    // Desktop
                                    allMyProducts.length > 0 && allMyProducts.map(product => (
                                        <div className='pb-[0.5rem] flex-[2] mb-8 items-start justify-between hidden md:flex' style={{borderBottom:"1px solid #DCDCDC"}}>
                                            <div className='flex items-center gap-[20px] w-full'>
                                                <img src={product?.product_cover_image?.media} alt='Product Image' className='w-[150px] h-[150px] object-contain'/>
                                                <div className='flex items-start justify-between w-full'>
                                                    <div className='cursor-pointer' onClick={() => navigate(`/product-details/${product.id}`)}>
                                                        <p className='text-[12px]'>{product.name}</p>
                                                        <p className='text-[#898989] text-[12px] my-2'>Date Listed : {new Date(product.created_at).toDateString()}</p>
                                                        <p className='text-[#898989] text-[12px]'>Price: {product.price.toLocaleString('en-US', {
                                                            style: 'currency',
                                                            currency: 'NGN' // Change to your desired currency code (e.g., 'EUR', 'GBP', 'JPY', etc.)
                                                        })}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className='flex items-center gap-3'>
                                                            {
                                                                product.unlist === false ?
                                                                    <div className='flex items-center gap-2 cursor-pointer'>
                                                                        <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}} onClick={() => setUnlistItem(product.id)}>Unlist Item.</p>
                                                                    </div>
                                                                :
                                                                    <div className='flex items-center gap-2 cursor-pointer'>
                                                                        <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px]' style={{border:"1px solid #B6B6B6"}} onClick={() => setListItem(product.id)}>List Item.</p>
                                                                    </div>
                                                            }
                                                        </div>
                                                        <div className='flex items-center gap-3 mt-3 justify-end'>
                                                            <AiOutlineEdit fontSize={"24px"} cursor={"pointer"} color='#292D32'  onClick={() => navigate(`/product-detail/${product.id}`)}/>
                                                            <SlTrash fontSize={"18px"} color='#FF0505' cursor={"pointer"} onClick={() => setDeleteItem(product.id)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    ))
                                }
                            </div>
                        }

                        {
                            desktoploader &&
                            [1,2,3].map(() => (
                                <div className='animate-pulse pb-[0.5rem] flex-[2] mb-8 items-start justify-between hidden md:flex' style={{borderBottom:"1px solid #DCDCDC"}}>
                                    <div className='flex items-center gap-[20px] w-full'>
                                        <div alt='Product Image' className='w-[150px] h-[120px] bg-slate-200 rounded-[10px]'/>
                                        <div className='flex items-start justify-between w-full'>
                                            <div className='cursor-pointer'>
                                                <p className='text-[12px] bg-slate-200 h-[14px] w-[100px] rounded-full'></p>
                                                <p className='text-[#898989] text-[12px] my-2 bg-slate-200 h-[14px] w-[130px] rounded-full'></p>
                                                <p className='text-[#898989] text-[12px] bg-slate-200 h-[14px] w-[150px] rounded-full'></p>
                                            </div>
                                            <div>
                                                <div className='flex flex-col items-end justify-end gap-2 cursor-pointer'>
                                                    <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px] bg-slate-200 h-[14px] w-[70px]'></p>
                                                    <p  className='flex items-center gap-3 justify-end rounded-full text-[12px] bg-slate-200 h-[14px] w-[50px]'></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            ))
                        }

                        {
                            mobileLoader &&
                            [1,2,3].map(() => (
                                <div className='pb-[0.5rem] mb-8 md:hidden animate-pulse' style={{borderBottom:"1px solid #DCDCDC"}}>
                                    <div className='flex items-center gap-[20px] w-full'>
                                        <div alt='Product Image' className='w-[150px] h-[150px] object-contain bg-slate-200 rounded-[10px]'/>
                                        <div className='cursor-pointer'>
                                            <p className='text-[12px] bg-slate-200 h-[14px] w-[100px] rounded-full'></p>
                                            <p className='text-[#898989] text-[12px] my-2 bg-slate-200 h-[14px] w-[130px] rounded-full'></p>
                                            <p className='text-[#898989] text-[12px] bg-slate-200 h-[14px] w-[150px] rounded-full'></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between w-full mt-5'>
                                        <div className='flex items-center gap-3'>
                                            <div className='flex items-center gap-2 cursor-pointer'>
                                                <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px] bg-slate-200 h-[14px] w-[70px]'></p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-3 mt-3 justify-end'>
                                            <p className='text-[#4E4E4E] py-1 px-2 rounded-full text-[12px] bg-slate-200 h-[14px] w-[70px]'></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>

            {/* DELETE ITEM MODAL */}
            {deleteItem &&
            <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setDeleteItem(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Delete Product</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setDeleteItem(false)}/>
                            </div>
                            <p className='text-[#5C5C5C] md:m-8 m-4 text-center md:text-left text-[14px] md:text-[16px]'>
                                Are you sure you want to permanently remove this Product from your Product List?. Remember that this action cannot be reversed
                            </p>
                            {
                                loader?
                                
                                <div className='mt-[2rem]'>
                                    <Btnloader />
                                </div>
                            :    
                                <div className='flex items-center justify-start md:ml-8 md:gap-[40px] md:flex-row flex-col-reverse gap-[10px]'>
                                    <button className='text-secondary-color px-8 py-2 rounded-full border border-secondary-color' onClick={() => setDeleteItem(false)}>No, Cancel</button>
                                    <button className='text-white bg-[#FF0000] px-8 py-2 rounded-full border-secondary-color' onClick={deleteProduct}>Yes, Delete</button>
                                </div>
                            }
                        </div>
                    </div>
            </>
            }
            
            {unlistItem &&
            <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setUnlistItem(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Unlist Product</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setUnlistItem(false)}/>
                            </div>
                            <p className='text-[#5C5C5C] md:m-8 m-4 text-center md:text-left text-[14px] md:text-[16px]'>
                                Are you sure you want to unlist this Product from your Product List?. You can still list it back later on, if you wish to
                            </p>
                            {
                                loader?
                                
                                <div className='mt-[2rem]'>
                                    <Btnloader />
                                </div>
                            :    
                                <div className='flex items-center justify-start md:ml-8 md:gap-[40px] md:flex-row flex-col-reverse gap-[10px]'>
                                    <button className='text-secondary-color px-8 py-2 rounded-full border border-secondary-color' onClick={() => setUnlistItem(false)}>No, Cancel</button>
                                    <button className='text-white bg-[#FF0000] px-8 py-2 rounded-full border-secondary-color' onClick={unlistProduct}>Yes, Unlist</button>
                                </div>
                            }
                        </div>
                    </div>
            </>
            }

            {listItem &&
            <>
                <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setListItem(false)}></div>
                    <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center" style={{ transform: "translate(-50%, -50%)" }}>
                        <div className="bg-white md:w-[550px] w-[300px] md:h-[250px] h-[280px] rounded-[8px]">
                            <div className='flex items-center justify-between border-b border-[#DCDCDC] md:mx-8 md:px-0 px-3 md:mt-5 mt-3'>
                                <p className='text-[#333333] text-[20px]'>Unlist Product</p>
                                <IoCloseOutline className='text-[#333333] text-[20px] cursor-pointer' onClick={() => setListItem(false)}/>
                            </div>
                            <p className='text-[#5C5C5C] md:m-8 m-4 text-center md:text-left text-[14px] md:text-[16px]'>
                                Are you sure you want to unlist this Product from your Product List?. You can still list it back later on, if you wish to
                            </p>
                            {
                                loader?
                                
                                <div className='mt-[2rem]'>
                                    <Btnloader />
                                </div>
                            :    
                                <div className='flex items-center justify-start md:ml-8 md:gap-[40px] md:flex-row flex-col-reverse gap-[10px]'>
                                    <button className='text-secondary-color px-8 py-2 rounded-full border border-secondary-color' onClick={() => setListItem(false)}>No, Cancel</button>
                                    <button className='text-white bg-secondary-color px-8 py-2 rounded-full border-secondary-color' onClick={listProduct}>Yes, List Item</button>
                                </div>
                            }
                        </div>
                    </div>
            </>
            }

            {
                msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
            }
    </div>
  )
}

export default MyOrder