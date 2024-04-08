import { HiArrowNarrowLeft } from "react-icons/hi";
import roundedImage from "../../assets/rounded.png"
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import Btnloader from "../../components/loader/Btnloader";

const ListProduct = ({baseUrl}) => {

    const [categoryNav,setCategoryNav] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('All Categories')
    const AllCategoryArray = ['Automobile','Baby Product','Funiture','Electronics','Computing','Phones & Accessories','Gaming','Health','Musical','Office']
    const [currentCategoryArray, setCurrentCategoryArray] = useState(AllCategoryArray)
    const computingCategoryArray = ['Laptops','Desktops','Printers','Accessories']
    
    const productConditionArray = ['new', 'used_like_new', 'used_like_good', 'used_like_fair']
    const [productCondition, setProductCondition] = useState(false)

    const inStockArray = [true, false]
    const [inStockDropDown, setInStockDropDown] = useState(false)

    const productColorsArray = ['Blue','Red','white', 'brown', 'yellow', 'black']
    const [productColor, setProductColor] = useState(false)

    const warrantyDurationArray = ['None','Month','Year']
    const [warrantyDurationDropDown, setWarrantyDurationDropDown] = useState(false)

    const warrantyTypeArray = [1, 2, 3, 4, 5, 6]
    const [warrantyType, setWarrantyType] = useState(false)

    const [fileUploadLoader, setFileUploadLoader] = useState(false)
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    // const [mediaType, setMediaType] = useState('')

    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [file5, setFile5] = useState(null)
    const [file6, setFile6] = useState(null)

    const [product_image, setProductImage] = useState([])
    let mediaType;

    async function handleFile1Upload(e) {
    if (e.target.files && e.target.files.length > 0) {
      // Update file state with the selected file
        const selectedFile = e.target.files[0];
        
        // Check file size
        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > 5) {
            setMsg('File size exceeds the limit of 5MB.')
            setAlertType('warning')
            return;
        }
        if(e.target.files[0].type.includes('image')){
            mediaType = 'photo';
        }else if(e.target.files[0].type.includes('video')){
            mediaType = 'video';
        }

        setFile1(selectedFile);
        const formData = new FormData()
        formData.append('media_type', mediaType)
        formData.append('media', e.target.files[0])
        setFileUploadLoader(true)
        const res = await fetch(`${baseUrl}/media`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        },
        body: formData
        })
        const data = await res.json()
        console.log(data);
        if(res) {
            setFileUploadLoader(false)
            mediaType = ''
        }
        if(res.ok){
            const fileId = data.data.id;
            setProductImage([...product_image, fileId]);
            setMsg('File successfully uploaded')
            setAlertType('success')
        }
        if(!res.ok){
            setMsg('File upload was not successfull, please try again')
            setAlertType('error')
        }
    }
}

  async function handleFile2Upload(e) {
    if (e.target.files && e.target.files.length > 0) {
    // Update file state with the selected file
        const selectedFile = e.target.files[0];
        
        // Check file size
        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > 5) {
            setMsg('File size exceeds the limit of 5MB.')
            setAlertType('warning')
            return;
        }
        if(e.target.files[0].type.includes('image')){
            mediaType = 'photo';
        }else if(e.target.files[0].type.includes('video')){
            mediaType = 'video';
        }

        setFile2(selectedFile)
        const formData = new FormData()
        formData.append('media_type', mediaType)
        formData.append('media', e.target.files[0])
        setFileUploadLoader(true)
        const res = await fetch(`${baseUrl}/media`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        },
        body: formData
        })
        const data = await res.json()
        console.log(data);
        if(res) {
            setFileUploadLoader(false)
            mediaType = ''
        }
        if(res.ok){
            const fileId = data.data.id;
            setProductImage([...product_image, fileId]);
            setMsg('File successfully uploaded')
            setAlertType('success')
        }
        if(!res.ok){
            setMsg('File upload was not successfull, please try again')
            setAlertType('error')
        }
    }
  }

  async function handleFile3Upload(e) {
    if (e.target.files && e.target.files.length > 0) {
    // Update file state with the selected file
        const selectedFile = e.target.files[0];
        
        // Check file size
        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > 5) {
            setMsg('File size exceeds the limit of 5MB.')
            setAlertType('warning')
            return;
        }
        if(e.target.files[0].type.includes('image')){
            mediaType = 'photo';
        }else if(e.target.files[0].type.includes('video')){
            mediaType = 'video';
        }

        setFile3(selectedFile)
        const formData = new FormData()
        formData.append('media_type', mediaType)
        formData.append('media', e.target.files[0])
        setFileUploadLoader(true)
        const res = await fetch(`${baseUrl}/media`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        },
        body: formData
        })
        const data = await res.json()
        console.log(data);
        if(res) {
            setFileUploadLoader(false)
            mediaType = ''
        }
        if(res.ok){
            const fileId = data.data.id;
            setProductImage([...product_image, fileId]);
            setMsg('File successfully uploaded')
            setAlertType('success')
        }
        if(!res.ok){
            setMsg('File upload was not successfull, please try again')
            setAlertType('error')
        }
    }
}

  async function handleFile4Upload(e) {
    if (e.target.files && e.target.files.length > 0) {
        // Update file state with the selected file
            const selectedFile = e.target.files[0];
            
            // Check file size
            const fileSizeMB = selectedFile.size / (1024 * 1024);
            if (fileSizeMB > 5) {
                setMsg('File size exceeds the limit of 5MB.')
                setAlertType('warning')
                return;
            }
            if(e.target.files[0].type.includes('image')){
                mediaType = 'photo';
            }else if(e.target.files[0].type.includes('video')){
                mediaType = 'video';
            }
    
            setFile4(selectedFile)
    const formData = new FormData()
    formData.append('media_type', mediaType)
    formData.append('media', e.target.files[0])
    setFileUploadLoader(true)
    const res = await fetch(`${baseUrl}/media`,{
      method:"POST",
      headers:{
        Authorization:`Bearer ${user.data[0].access}`,
      },
      body: formData
    })
    const data = await res.json()
    console.log(data);
    if(res) {
        setFileUploadLoader(false)
        mediaType = ''
    }
    if(res.ok){
        const fileId = data.data.id;
        setProductImage([...product_image, fileId]);
        setMsg('File successfully uploaded')
        setAlertType('success')
    }
    if(!res.ok){
        setMsg('File upload was not successfull, please try again')
        setAlertType('error')
    }
}
  }

  async function handleFile5Upload(e) {
    if (e.target.files && e.target.files.length > 0) {
    // Update file state with the selected file
        const selectedFile = e.target.files[0];
        
        // Check file size
        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > 5) {
            setMsg('File size exceeds the limit of 5MB.')
            setAlertType('warning')
            return;
        }
        if(e.target.files[0].type.includes('image')){
            mediaType = 'photo';
        }else if(e.target.files[0].type.includes('video')){
            mediaType = 'video';
        }

        setFile5(selectedFile)
        const formData = new FormData()
        formData.append('media_type', mediaType)
        formData.append('media', e.target.files[0])
        setFileUploadLoader(true)
        const res = await fetch(`${baseUrl}/media`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        },
        body: formData
        })
        const data = await res.json()
        console.log(data);
        if(res) {
            setFileUploadLoader(false)
            mediaType = ''
        }
        if(res.ok){
            const fileId = data.data.id;
            setProductImage([...product_image, fileId]);
            setMsg('File successfully uploaded')
            setAlertType('success')
        }
        if(!res.ok){
            setMsg('File upload was not successfull, please try again')
            setAlertType('error')
        }
    }
}

  async function handleFile6Upload(e) {
    if (e.target.files && e.target.files.length > 0) {
    // Update file state with the selected file
        const selectedFile = e.target.files[0];
        
        // Check file size
        const fileSizeMB = selectedFile.size / (1024 * 1024);
        if (fileSizeMB > 5) {
            setMsg('File size exceeds the limit of 5MB.')
            setAlertType('warning')
            return;
        }
        if(e.target.files[0].type.includes('image')){
            mediaType = 'photo';
        }else if(e.target.files[0].type.includes('video')){
            mediaType = 'video';
        }

        setFile6(selectedFile)
        const formData = new FormData()
        formData.append('media_type', mediaType)
        formData.append('media', e.target.files[0])
        setFileUploadLoader(true)
        const res = await fetch(`${baseUrl}/media`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        },
        body: formData
        })
        const data = await res.json()
        console.log(data);
        if(res) {
            setFileUploadLoader(false)
            mediaType = ''
        }
        if(res.ok){
            const fileId = data.data.id;
            setProductImage([...product_image, fileId]);
            setMsg('File successfully uploaded')
            setAlertType('success')
        }
        if(!res.ok){
            setMsg('File upload was not successfull, please try again')
            setAlertType('error')
        }
    }
}


// const [product_image, setProductImage] = useState([])
const [warranty_address, setWarrantyAddress] = useState('')
const [warranty_duration_type, setWarrantyDurationType] = useState('')
const [warranty_duration, setWarrantyDuration]= useState('')
const [condition, setCondition] = useState('')
const [price, setPrice] = useState('')
const [description, setDescription] = useState('')
const [weight, setWeight]= useState('')
const [color, setColor] = useState('')
const [brand_name, setBrandName] = useState('')
const [in_stock, setInStock] = useState('')
const [name, setName] = useState('')
const [category, setCategory] = useState('')

  async function uploadProduct(){
    setLoader(true)
    const res = await fetch(`${baseUrl}/products`, {
        method:"POST",
        body: JSON.stringify({category, product_image, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}),
        headers: {
            'Content-Type':'application/json',
            Authorization:`Bearer ${user.data[0].access}`
        }
    })
    const data = await res.json()
    if(res) setLoader(false)
    if(res.ok){
        setMsg("Product successfully uploaded")
        setAlertType('success')
    }
    if(!res.ok){
        setMsg(data.message)
        setAlertType('error')
    }
    console.log(res, data);
    console.log(JSON.stringify({category, product_image, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}));
  }



    // useEffect(() => {
    //     if(currentCategory === 'All Categories'){
    //         setCurrentCategoryArray(AllCategoryArray)
    //     }else if(currentCategory === 'Computing'){
    //         setCurrentCategoryArray(['Laptops','Desktops','Printers','Accessories'])
    //         console.log(currentCategoryArray);
    //     }
    // },[currentCategoryArray])

  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-left justify-center mx-auto mt-[5rem] pt-[30px] pb-[50px] px-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className="flex items-center gap-2">
        <HiArrowNarrowLeft fontSize={"25px"} />
        <p className='text-[26px]'>List Products</p>
      </div>
      <div className="flex items-center mb-[30px] gap-[20px] mt-[35px]">
        <img src={roundedImage} alt="" className="w-[30px]"/>
        <p className="text-[18px]">Product Information</p>
      </div>
      <div className="ml-[3.2rem]">
        <p className="text-[#101010] mb-2">Image/Videos</p>
        <div className="flex items-center justify-between">
            <div className="relative h-[110px] w-[110px] rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file1 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <p>File Uploaded Succesfully</p>
                            <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                        </div> 
                            :
                        <div className="text-center flex items-center justify-center flex-col">
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile1Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                        </div>
                }
            </div>

            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file2 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <p>File Uploaded Succesfully</p>
                            <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                        </div> 
                            :
                        <>
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile2Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                        </>
                }
            </div>
            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
            {
                file3 ? 
                    <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                        <p>File Uploaded Succesfully</p>
                        <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                    </div> 
                        :
                    <>
                        <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                        <p>Main Image</p>
                        <input type="file" onChange={handleFile3Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                    </>
            }
            </div>
            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file4 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <p>File Uploaded Succesfully</p>
                            <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                        </div> 
                            :
                        <>
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile4Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                        </>
                }
            </div>
            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file5 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <p>File Uploaded Succesfully</p>
                            <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                        </div> 
                            :
                        <>
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile5Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                        </>
                }
            </div>
            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file6 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <p>File Uploaded Succesfully</p>
                            <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                        </div> 
                            :
                        <>
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile6Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                        </>
                }
            </div>
        </div>
        <p className="text-[#989898] my-4 ml-2 text-[14px]">
            Image needs to be between 500x500 and 2000x2000 pixels. White backgrounds are recommended. No watermarks. Maximum image 
            size 2.5Mb. Videos sizes Maximum 5MB
        </p>
        <div className="flex items-center gap-5">
            <div className="w-full">
                <p>Name of Product</p>
                <input onChange={e => setName(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Name of Product here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Categories</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input onChange={e => setCategory(e.target.value)} value={category} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Choose Categories" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setCategoryNav(!categoryNav)}/>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5">
            <div className="w-full">
                <p>Brand</p>
                <input onChange={e => setBrandName(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Product brand here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full relative">
                <p>Product Color</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input value={color} onChange={e => setColor(e.target.value)} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Product Color" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setProductColor(!productColor)}/>
                </div>
                    {
                        productColor &&
                        <div className="absolute top-[90px] bg-white w-full border rounded-[6px] py-3 px-4 z-10">
                            {
                                productColorsArray.map(color => (
                                    <p className="cursor-pointer my-1 capitalize" onClick={() => {
                                        setColor(color)
                                        setProductColor(false)
                                    }}>{color}</p>
                                ))
                            }
                        </div>
                    }
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5">
            <div className="w-full">
                <p>Price</p>
                <input onChange={e => setPrice(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="#32,000" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Weight</p>
                <input onChange={e => setWeight(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="10Kg" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5">
            <div className="w-full relative">
                <p>In Stock</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input value={in_stock} onChange={e => setInStock(e.target.value)} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Product in stock?" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setInStockDropDown(!inStockDropDown)}/>
                </div>
                    {
                        inStockDropDown &&
                        <div className="absolute top-[90px] bg-white w-full border rounded-[6px] py-3 px-4 z-10">
                            {
                                inStockArray.map(x => (
                                    <p className="cursor-pointer my-1 capitalize" onClick={()=> {
                                        setInStock(x)
                                        setInStockDropDown(false)
                                    }}>{x.toString()}</p>
                                ))
                            }
                        </div>
                    }
            </div>
            <div className="w-full relative">
                <p>Condition</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input value={condition} onChange={e => setCondition(e.target.value)} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Product Condition" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setProductCondition(!productCondition)}/>
                </div>
                    {
                        productCondition &&
                        <div className="absolute top-[90px] bg-white w-full border rounded-[6px] py-3 px-4 z-10">
                            {
                                productConditionArray.map(condition => (
                                    <p className="cursor-pointer my-1 capitalize" onClick={() => {
                                        setCondition(condition)
                                        setProductCondition(false)
                                    }}>{condition}</p>
                                ))
                            }
                        </div>
                    }
            </div>
        </div>
        <div className="w-full mt-5">
            <p>Product Description</p>
            <textarea onChange={e => setDescription(e.target.value)} placeholder="Product Description" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6] border" cols="30" rows="7"></textarea>
        </div>
      </div>
      <div className="flex items-center mb-[30px] gap-[20px] mt-[55px]">
        <img src={roundedImage} alt="" className="w-[30px]"/>
        <p className="text-[18px]">Warranty Specification</p>
      </div>
      <div className="ml-[3.2rem]">
      <div className="flex items-center gap-5 mt-5">
            <div className="w-full relative">
                <p>Warranty Duration</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input value={warranty_duration} onChange={e => setWarrantyDuration(e.target.value)} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Warranty Duration" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setWarrantyDurationDropDown(!warrantyDurationDropDown)}/>
                </div>
                    {
                        warrantyDurationDropDown &&
                        <div className="absolute top-[90px] bg-white w-full border rounded-[6px] py-3 px-4 z-10">
                            {
                                warrantyDurationArray.map(duration => (
                                    <p className="cursor-pointer my-1 capitalize" onClick={() => {
                                        setWarrantyDuration(duration)
                                        setWarrantyDurationDropDown(false)
                                    }}>{duration}</p>
                                ))
                            }
                        </div>
                    }
            </div>
            <div className="w-full relative">
                <p>Warranty Type</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input value={warranty_duration_type} onChange={e => setWarrantyDurationType(e.target.value)} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Type of warranty Service Available" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setWarrantyType(!warrantyType)}/>
                </div>
                    {
                        warrantyType &&
                        <div className="absolute top-[90px] bg-white w-full border rounded-[6px] py-3 px-4 z-10">
                            {
                                warrantyTypeArray.map(type => (
                                    <p className="cursor-pointer my-1 capitalize" onClick={() => {
                                        setWarrantyDurationType(type)
                                        setWarrantyType(false)
                                    }}>{type}</p>
                                ))
                            }
                        </div>
                    }
            </div>
        </div>
        <div className="w-full mt-5">
            <p>Warranty Address</p>
            <input type="text" onChange={e => setWarrantyAddress(e.target.value)} className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Address of warranty service" style={{ border:"1.5px solid #CCCCCC" }}/>
        </div>
      </div>

      {
        categoryNav &&
            <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center overflow-y-scroll" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
                <div className="bg-white w-[400px] h-[600px] absolute right-0 top-0 px-5">
                    <IoIosCloseCircleOutline className="absolute right-[10px] text-[20px] cursor-pointer top-[20px]" onClick={() => setCategoryNav(false)}/>
                    <p className="text-[#101010] mt-[65px] text-[24px] pb-2" style={{ borderBottom:"1px solid #E6ECEA" }}>Categories</p>
                    <div className="border border-[#989898] rounded-full flex items-center justify-between mt-5 px-3 py-[7px]">
                        <input type="text" className="w-full outline-none" placeholder="Search For Categories"/>
                        <CiSearch fontSize={"20px"}/>
                    </div>
                    <p className="mt-9">{currentCategory}</p>
                    <div className="border border-[#989898] px-5 mt-4 rounded">
                        {
                            AllCategoryArray.map(category => (
                                <div className="flex items-center gap-2 my-2 cursor-pointer" onClick={() => {
                                    setCurrentCategory(category)
                                    setCurrentCategoryArray(category)
                                    setCategory(category)
                                    setCategoryNav(false)
                                    console.log(category);
                                    }}>
                                    <p className="text-[#101010]">{category}</p>
                                    <IoChevronForwardOutline color="#B6B6B6"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
      }
      {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
      {
            fileUploadLoader &&
            <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
                <div className="bg-white md:w-[450px] w-[300px] rounded-[18px]">
                    <div className="flex items-center justify-between mt-[1rem] px-[2rem] mb-[2rem] flex-col">
                        <img src='./loader.gif' className='h-10 w-10 mt-3 mb-5'/>
                        <p className='text-gray-500 text-[15px] mb-2 text-center'>File Upload in progress, please do not refresh the page</p>
                    </div>
                </div>
            </div>
        }
        {
            loader ?
                <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-10 w-full rounded-sm tracking-wide
                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                shadow-sm transition-all cursor-not-allowed">
                    <Btnloader />
                </button>
            : 
            <button onClick={uploadProduct} className="bg-secondary-color py-[12px] mt-10 text-white w-full">Save Details</button>
          }
    </div>
  )
}

export default ListProduct