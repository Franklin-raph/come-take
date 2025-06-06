import { HiArrowNarrowLeft } from "react-icons/hi";
import roundedImage from "../../assets/rounded.png"
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import Btnloader from "../../components/loader/Btnloader";
import { useNavigate } from "react-router-dom";

const ListProduct = ({baseUrl}) => {

    const [categoryNav,setCategoryNav] = useState(false)
    const [categorySearchText, setCategorySearchText] = useState('')
    // const [currentCategory, setCurrentCategory] = useState('All Categories')
    // const [currentCategoryArray, setCurrentCategoryArray] = useState(allCategoryArray)
    // const computingCategoryArray = ['Laptops','Desktops','Printers','Accessories']
    // const AllCategoryArray = ['Automobile','Baby Product','Funiture','Electronics','Computing','Phones & Accessories','Gaming','Health','Musical','Office']
    const [allCategoryArray, setAllCategoryArray] = useState([])
    const [categoryText, setCategoryText] = useState()
    
    const productConditionArray = ['brand_new', 'fairly_used']
    const [productCondition, setProductCondition] = useState(false)

    const inStockArray = [true, false]
    const [inStockDropDown, setInStockDropDown] = useState(false)

    const productColorsArray = ['Blue','Red','white', 'brown', 'yellow', 'black']
    const [productColor, setProductColor] = useState(false)

    const warrantyTypeArray = ['none','month','year']
    const [warrantyType, setWarrantyType] = useState(false)
    
    const warrantyDurationArray = [1, 2, 3, 4, 5, 6]
    const [warrantyDurationDropDown, setWarrantyDurationDropDown] = useState(false)

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
    const [coverPhoto, setCoverPhoto] = useState(null)
    const [coverPhotoId, setCoverPhotoId] = useState('')

    const [product_image, setProductImage] = useState([])
    let mediaType;

    async function getCatgories(){
        const res = await fetch(`${baseUrl}/categories`,{
            headers:{
                Authorization:`Bearer ${user.data[0].access}`,
            },
        })
        const data = await res.json()
        setAllCategoryArray(data.data)
        console.log(data);
    }

    useEffect(() => {
        getCatgories()
    },[])

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
        const res = await fetch(`${baseUrl}/upload-product-media`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${user.data[0].access}`,
        },
        body: formData
        })
        const data = await res.json()
        console.log(res, data);
        if(res) {
            setFileUploadLoader(false)
            mediaType = ''
        }
        if(res.ok){
            const fileId = data.data.id;
            setProductImage([...product_image, fileId]);
            setMsg('File successfully uploaded')
            setAlertType('success')
            setFile1(data.data.media)
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
        const res = await fetch(`${baseUrl}/upload-product-media`,{
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
            setFile2(data.data.media)
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
        const res = await fetch(`${baseUrl}/upload-product-media`,{
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
            setFile3(data.data.media)
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
            const res = await fetch(`${baseUrl}/upload-product-media`,{
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
                setFile4(data.data.media)
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
        const res = await fetch(`${baseUrl}/upload-product-media`,{
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
            setFile5(data.data.media)
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
        const res = await fetch(`${baseUrl}/upload-product-media`,{
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
            setFile6(data.data.media)
        }
        if(!res.ok){
            setMsg('File upload was not successfull, please try again')
            setAlertType('error')
        }
    }
}

async function handleCoverPhtotoUpload(e){
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
    
            setCoverPhoto(selectedFile)
            const formData = new FormData()
            formData.append('media_type', mediaType)
            formData.append('media', e.target.files[0])
            setFileUploadLoader(true)
            const res = await fetch(`${baseUrl}/upload-product-media`,{
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
                setCoverPhotoId(data.data.id);
                console.log("Cover photo ID after upload ===>", data.data.id);
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
    if(!category || !name || !in_stock || !brand_name || !color || !description || !condition || !warranty_duration || !warranty_address || !warranty_duration_type || !weight || !price){
        setMsg('Please fill all the fields')
        setAlertType('warning')
        return
    }else if(!product_image.length){
        setMsg('Please upload product images')
        setAlertType('warning')
        return
    }else if(!coverPhotoId){
        setMsg('Please upload cover photo')
        setAlertType('warning')
        return
    }
    console.log("Cover photo ID while uploading product ====> ", coverPhotoId);
    setLoader(true)
    const res = await fetch(`${baseUrl}/products`, {
        method:"POST",
        body: JSON.stringify({category, product_cover_image:coverPhotoId, product_image, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}),
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
        console.log(res);
        
        setMsg(data.message)
        setAlertType('error')
    }
    console.log(res, data);
    console.log(JSON.stringify({category, product_cover_image:coverPhotoId, product_image, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}));
  }



    // useEffect(() => {
    //     if(currentCategory === 'All Categories'){
    //         setCurrentCategoryArray(AllCategoryArray)
    //     }else if(currentCategory === 'Computing'){
    //         setCurrentCategoryArray(['Laptops','Desktops','Printers','Accessories'])
    //         console.log(currentCategoryArray);
    //     }
    // },[currentCategoryArray])
    const navigate = useNavigate()

  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-left justify-center mx-auto mt-[5rem] pt-[30px] pb-[50px] px-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className="flex items-center gap-2">
        <HiArrowNarrowLeft fontSize={"25px"} cursor={'pointer'} onClick={() => navigate('/')}/>
        <p className='text-[26px]'>List Products</p>
      </div>
      <div className="flex items-center mb-[30px] gap-[20px] mt-[35px]">
        <img src={roundedImage} alt="" className="w-[30px]"/>
        <p className="text-[18px]">Product Information</p>
      </div>
      <div className="sm:ml-[3.2rem] ml-0">
        <p className="text-[#101010] mb-2">Image/Videos</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:grid-cols-6 items-center">
            <div className="relative h-[110px] w-[110px] rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file1 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <img src={file1} className="h-[110px] w-[110px] overflow-hidden" alt="" />
                            <input type="file" onChange={handleFile1Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0 top-0" />
                        </div> 
                            :
                        <div className="text-center flex items-center justify-center flex-col">
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile1Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0" />
                        </div>
                }
            </div>

            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file2 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <img src={file2} className="h-[110px] w-[110px] overflow-hidden" alt="" />
                            <input type="file" onChange={handleFile2Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0 top-0" />
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
                        <img src={file3} className="h-[110px] w-[110px] overflow-hidden" alt="" />
                        <input type="file" onChange={handleFile3Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0 top-0" />
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
                            <img src={file4} className="h-[110px] w-[110px] overflow-hidden" alt="" />
                            <input type="file" onChange={handleFile4Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0 top-0" />
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
                            <img src={file5} className="h-[110px] w-[110px] overflow-hidden" alt="" />
                            <input type="file" onChange={handleFile5Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0 top-0" />
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
                            <img src={file6} className="h-[110px] w-[110px] overflow-hidden" alt="" />
                            <input type="file" onChange={handleFile6Upload} className="absolute h-full rounded-[10px] cursor-pointer w-full opacity-0 top-0" />
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
        <div  className="relative h-[110px] w-[100%] mt-5 cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
            {
                coverPhoto ?
                    <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                        <p>File Uploaded Succesfully</p>
                        <p><i class="ri-checkbox-circle-fill text-green-500 text-2xl"></i></p>
                    </div> 
                        :
                    <>
                        <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                        <p>Cover Image</p>
                        <input type="file" onChange={handleCoverPhtotoUpload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" accept=".jpg, .png, .jpeg" />
                    </>
            }
        </div>
        <p className="text-[#989898] my-4 ml-2 text-[14px]">
            Image needs to be between 500x500 and 2000x2000 pixels. White backgrounds are recommended. No watermarks. Maximum image 
            size 2.5Mb. Videos sizes Maximum 5MB
        </p>
        <div className="flex items-center gap-5 flex-col sm:flex-row">
            <div className="w-full">
                <p>Name of Product</p>
                <input onChange={e => setName(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Name of Product here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full relative">
                <p>Category</p>
                <div onClick={() => setCategoryNav(!categoryNav)} className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <p>{categoryText}</p>
                    <input onChange={e => setCategory(e.target.value)} value={category} type="text" className="opacity-0 cursor-pointer outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Choose Categories" />
                    <GoChevronDown color="#B6B6B6" fontSize={"20px"} cursor={"pointer"}/>
                </div>
                {
                    categoryNav &&
                        <>
                            <div className="absolute top-[90px] bg-white w-full rounded-[6px] py-3 px-4 z-10">
                                <div className="bg-white w-full h-[400px] border border-gray-500 rounded-[6px] pb-6 absolute right-0 top-0 px-5 overflow-y-scroll">
                                    <div className="border border-[#989898] rounded-full flex items-center justify-between mt-5 px-3 py-[7px]">
                                        <input type="text" className="w-full outline-none" placeholder="Search For Categories" onChange={e => setCategorySearchText(e.target.value)}/>
                                        <CiSearch fontSize={"20px"} />
                                    </div>
                                    <div className="border border-[#989898] px-5 mt-4 rounded">
                                        {
                                            allCategoryArray && allCategoryArray.filter((item) => {
                                                if (categorySearchText === "") return item
                                                else if (item.name.toLowerCase().includes(categorySearchText.toLowerCase())) return item
                                            })
                                            .map(category => (
                                                <div className="flex items-center gap-2 my-2 cursor-pointer justify-between" onClick={() => {
                                                    setCategory(category.id)
                                                    setCategoryText(category.name)
                                                    setCategoryNav(false)
                                                    }}>
                                                    <p className="text-[#101010]">{category.name}</p>
                                                    <IoChevronForwardOutline color="#B6B6B6"/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
            <div className="w-full">
                <p>Brand</p>
                <input onChange={e => setBrandName(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Product brand here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full relative">
                <p>Product Color</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2 cursor-pointer" style={{ border:"1.5px solid #CCCCCC" }} onClick={() => setProductColor(!productColor)}>
                    <input value={color} onChange={e => setColor(e.target.value)} type="text" className="cursor-pointer outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Product Color" />
                    <GoChevronDown color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} />
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
        <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
            <div className="w-full">
                <p>Price</p>
                <input onChange={e => setPrice(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="#32,000" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Weight</p>
                <input onChange={e => setWeight(e.target.value)} type="number" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="10Kg" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
            <div className="w-full relative">
                <p>In Stock</p>
                <div onClick={() => setInStockDropDown(!inStockDropDown)} className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input value={in_stock} onChange={e => setInStock(e.target.value)} type="text" className="cursor-pointer outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Product in stock?" />
                    <GoChevronDown color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} />
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
                <div onClick={() => setProductCondition(!productCondition)} className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input onChange={e => setCondition(e.target.value)} value={condition} type="text" className="cursor-pointer outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Product Condition" />
                    <GoChevronDown color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} />
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
      <div className="sm:ml-[3.2rem] ml-0">
      <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
            <div className="w-full relative">
                <p>Warranty Duration</p>
                <div onClick={() => setWarrantyDurationDropDown(!warrantyDurationDropDown)} className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input onChange={e => setWarrantyDuration(e.target.value)} value={warranty_duration} type="text" className="cursor-pointer outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Warranty Duration" />
                    <GoChevronDown color="#B6B6B6" fontSize={"20px"} cursor={"pointer"}/>
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
                <div onClick={() => setWarrantyType(!warrantyType)} className="cursor-pointer flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input onChange={e => setWarrantyDurationType(e.target.value)} value={warranty_duration_type} type="text" className="cursor-pointer outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Type of warranty Service Available" />
                    <GoChevronDown color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} />
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
                <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-10 w-full sm:w-[228.43px] ml-auto rounded-[7.98px] tracking-wide
                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                shadow-sm transition-all cursor-not-allowed">
                    <Btnloader />
                </button>
            : 
            <button onClick={uploadProduct} className="bg-secondary-color py-[12px] mt-10 text-white w-full sm:w-[228.43px] ml-auto rounded-[7.98px]">Submit</button>
          }
    </div>
  )
}

export default ListProduct