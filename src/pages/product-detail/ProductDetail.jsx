import { HiArrowNarrowLeft } from "react-icons/hi";
import roundedImage from "../../assets/rounded.png"
import { CiCirclePlus, CiSearch } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Alert from "../../components/alert/Alert";
import Btnloader from "../../components/loader/Btnloader";
import { useParams } from "react-router-dom";

const ProductDetail = ({baseUrl}) => {

    const { id } = useParams()

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

    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [file5, setFile5] = useState(null)
    const [file6, setFile6] = useState(null)
    const [coverPhoto, setCoverPhoto] = useState(null)
    const [coverPhotoId, setCoverPhotoId] = useState('')

    const [product_image, setProductImage] = useState([])
    const [product_cover_image, setProductCoverImage] = useState()
    const [productOldImagesId, setProductOldImagesId] = useState([])

    const [removeImageModal, setRemoveImageModal] = useState(false)
    const [deleteLoader, setDeleteLoader] = useState(false)

    useEffect(() => {
        getProductDetail()
    },[])

    async function getProductDetail(){
        const res = await fetch(`${baseUrl}/products/${id}`)
        const data = await res.json()
        if(res.ok){
            setProductOldImagesId(data.data.product_image.map(object => object.id))
            setBrandName(data.data.brand_name)
            setName(data.data.name)
            setCategory(data.data.category.id)
            setWeight(data.data.weight)
            setDescription(data.data.description)
            setColor(data.data.color)
            setWarrantyAddress(data.data.warranty_address)
            setWarrantyDuration(data.data.warranty_duration)
            setWarrantyDurationType(data.data.warranty_duration_type)
            setPrice(data.data.price)
            setInStock(data.data.in_stock)
            setCondition(data.data.condition)
            setFile1(data.data.product_image[0]?.media)
            setFile2(data.data.product_image[1]?.media)
            setFile3(data.data.product_image[2]?.media)
            setFile4(data.data.product_image[3]?.media)
            setFile5(data.data.product_image[4]?.media)
            setFile6(data.data.product_image[5]?.media)
            setCoverPhoto(data.data.product_cover_image?.media)

            setProductImage(data.data.product_image)
            setProductCoverImage(data.data.product_cover_image?.id)
        }
        console.log(res, data, productOldImagesId);
    }

    console.log(productOldImagesId);

    const [categoryNav,setCategoryNav] = useState(false)
    // const [currentCategory, setCurrentCategory] = useState('All Categories')
    // const [currentCategoryArray, setCurrentCategoryArray] = useState(allCategoryArray)
    // const computingCategoryArray = ['Laptops','Desktops','Printers','Accessories']
    // const AllCategoryArray = ['Automobile','Baby Product','Funiture','Electronics','Computing','Phones & Accessories','Gaming','Health','Musical','Office']
    const [allCategoryArray, setAllCategoryArray] = useState([])
    const [categoryText, setCategoryText] = useState()
    
    const productConditionArray = ['new', 'used_like_new', 'used_like_good', 'used_like_fair']
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



    // const [product_image, setProductImage] = useState([])
    let mediaType;

    async function getCatgories(){
        const res = await fetch(`${baseUrl}/categories`,{
            headers:{
                Authorization:`Bearer ${user.data[0].access}`,
            },
        })
        const data = await res.json()
        setAllCategoryArray(data.data)
        // console.log(data);
    }

    useEffect(() => {
        getCatgories()
    },[])

    async function handleFile1Upload(e) {
        console.log(product_image[0].id);
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
        console.log(selectedFile);
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
            setProductOldImagesId([...productOldImagesId, fileId]);
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


  async function updateProduct(){
    console.log(JSON.stringify({category, product_cover_image, product_image:productOldImagesId, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}));
    setLoader(true)
    const res = await fetch(`${baseUrl}/products/${id}`, {
        method:"PUT",
        body: JSON.stringify({category, product_cover_image, product_image:productOldImagesId, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}),
        headers: {
            'Content-Type':'application/json',
            Authorization:`Bearer ${user.data[0].access}`
        }
    })
    const data = await res.json()
    console.log(res, data);
    if(res) setLoader(false)
    if(res.ok){
        setMsg("Product successfully updated")
        setAlertType('success')
    }
    if(!res.ok){
        setMsg(data.message)
        setAlertType('error')
    }
    console.log(res, data);
    console.log(JSON.stringify({category, product_cover_image:coverPhotoId, product_image, name, in_stock, brand_name, color, description, condition, warranty_duration, warranty_address, warranty_duration_type, weight, price}));
  }

  async function deleteImage(id){
    setDeleteLoader(true)
    const res = await fetch(`${baseUrl}/delete-media/${id}`,{
        method:"DELETE",
        headers: {
            Authorization:`Bearer ${user.data[0].access}`
        }
    })
    console.log(res);
    if(res) setDeleteLoader(false)
    if(res.ok){
        getProductDetail()
        setMsg("Image successfully deleted")
        setAlertType('success')
    }
  }

//   async function deleteImage2(id){
//     const res = await fetch(`${baseUrl}/delete-media/${id}`,{
//         method:"DELETE",
//         headers: {
//             Authorization:`Bearer ${user.data[0].access}`
//         }
//     })
//     console.log(res);
//   }

//   async function deleteImage3(id){
//     const res = await fetch(`${baseUrl}/delete-media/${id}`,{
//         method:"DELETE",
//         headers: {
//             Authorization:`Bearer ${user.data[0].access}`
//         }
//     })
//     console.log(res);
//   }

//   async function deleteImage4(id){
//     const res = await fetch(`${baseUrl}/delete-media/${id}`,{
//         method:"DELETE",
//         headers: {
//             Authorization:`Bearer ${user.data[0].access}`
//         }
//     })
//     console.log(res);
//   }

//   async function deleteImage5(id){
//     const res = await fetch(`${baseUrl}/delete-media/${id}`,{
//         method:"DELETE",
//         headers: {
//             Authorization:`Bearer ${user.data[0].access}`
//         }
//     })
//     console.log(res);
//   }

//   async function deleteImage6(id){
//     const res = await fetch(`${baseUrl}/delete-media/${id}`,{
//         method:"DELETE",
//         headers: {
//             Authorization:`Bearer ${user.data[0].access}`
//         }
//     })
//     console.log(res);
//   }



  return (
    <div className="w-[100%] lg:w-[845px] flex flex-col items-left justify-center mx-auto mt-[5rem] pt-[30px] pb-[50px] px-[30px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className="flex items-center gap-2">
        <HiArrowNarrowLeft fontSize={"25px"} />
        <p className='text-[26px]'>Product Detail</p>
      </div>
      <div className="flex items-center mb-[30px] gap-[20px] mt-[35px]">
        <img src={roundedImage} alt="" className="w-[30px]"/>
        <p className="text-[18px]">Product Information</p>
      </div>
      <div className="sm:ml-[3.2rem] ml-0">
        <p className="text-[#101010] mb-2">Image/Videos</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:grid-cols-6 items-center">
            <div className="text-center">
                <div className="relative h-[110px] w-[120px] rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                    {
                        file1 ? 
                            <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                                <img src={file1} alt="" />
                                <button onClick={() => setRemoveImageModal(product_image[0].id)} className="text-[14px] text-center w-full hover:bg-[rgba(0,0,0,0.5)] absolute h-full top-0 rounded-[10px] text-white">Remove Image</button>
                            </div>
                                :
                                <div className="text-center flex items-center justify-center flex-col">
                                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                                <p>Main Image</p>
                                <input type="file" onChange={handleFile1Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                            </div>
                    }
                </div>
            </div>

            <div className="text-center">
                <div className="relative h-[110px] w-[120px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                    {
                        file2 ? 
                            <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                                <img src={file2} alt="" />
                                <button onClick={() => setRemoveImageModal(product_image[1].id)} className="text-[14px] text-center w-full hover:bg-[rgba(0,0,0,0.5)] absolute h-full top-0 rounded-[10px] text-white">Remove Image</button>
                            </div> 
                                :
                            <>
                                <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                                <p>Main Image</p>
                                <input type="file" onChange={handleFile2Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                            </>
                    }
                </div>
            </div>

            <div className="text-center">
                <div className="relative h-[110px] w-[120px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file3 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <img src={file3} alt="" />
                            <button onClick={() => setRemoveImageModal(product_image[3].id)} className="text-[14px] text-center w-full hover:bg-[rgba(0,0,0,0.5)] absolute h-full top-0 rounded-[10px] text-white">Remove Image</button>
                        </div> 
                            :
                        <>
                            <CiCirclePlus color="#96BF47" fontSize={"22px"} className="mb-1" />
                            <p>Main Image</p>
                            <input type="file" onChange={handleFile3Upload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-0" />
                        </>
                }
                </div>
            </div>

            <div className="relative h-[110px] w-[110px] cursor-pointer rounded-[10px] flex flex-col items-center justify-center text-[#6C6C6C]" style={{ border:"1px solid #96BF47" }}>
                {
                    file4 ? 
                        <div className='text-[13px] text-gray-500 flex items-center justify-between flex-col text-center p-2 rounded mt-1'>
                            <img src={file4} alt="" />
                            <button onClick={() => setRemoveImageModal(product_image[3].id)} className="text-[14px] text-center w-full hover:bg-[rgba(0,0,0,0.5)] absolute h-full top-0 rounded-[10px] text-white">Remove Image</button>
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
                            <img src={file5} alt="" />
                            <button onClick={() => setRemoveImageModal(product_image[4].id)} className="text-[14px] text-center w-full hover:bg-[rgba(0,0,0,0.5)] absolute h-full top-0 rounded-[10px] text-white">Remove Image</button>
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
                            <img src={file6} alt="" />
                            <button onClick={() => setRemoveImageModal(product_image[5].id)} className="text-[14px] text-center w-full hover:bg-[rgba(0,0,0,0.5)] absolute h-full top-0 rounded-[10px] text-white">Remove Image</button>
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
                        <img src={coverPhoto} alt="" className="h-[100px]" />
                        {/* <input type="file" onChange={handleCoverPhtotoUpload} className="absolute h-[110px] cursor-pointer w-[110px] opacity-1" accept=".jpg, .png, .jpeg" /> */}
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
                <input value={name} onChange={e => setName(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Name of Product here" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Category</p>
                <div className="flex items-center justify-between px-4 py-3 rounded-[6px] mt-2" style={{ border:"1.5px solid #CCCCCC" }}>
                    <input onChange={e => setCategory(e.target.value)} value={category} type="text" className="outline-none w-full placeholder:text-[#B6B6B6]" placeholder="Choose Categories" />
                    <GoChevronRight color="#B6B6B6" fontSize={"20px"} cursor={"pointer"} onClick={() => setCategoryNav(!categoryNav)}/>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
            <div className="w-full">
                <p>Brand</p>
                <input onChange={e => setBrandName(e.target.value)} value={brand_name} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Product brand here" style={{ border:"1.5px solid #CCCCCC" }}/>
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
        <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
            <div className="w-full">
                <p>Price</p>
                <input value={price} onChange={e => setPrice(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="#32,000" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
            <div className="w-full">
                <p>Weight</p>
                <input value={weight} onChange={e => setWeight(e.target.value)} type="text" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="10Kg" style={{ border:"1.5px solid #CCCCCC" }}/>
            </div>
        </div>
        <div className="flex items-center gap-5 mt-5 flex-col sm:flex-row">
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
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Product Description" className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6] border" cols="30" rows="7"></textarea>
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
            <input type="text" value={warranty_address} onChange={e => setWarrantyAddress(e.target.value)} className="mt-2 outline-none px-4 py-3 w-full rounded-[6px] placeholder:text-[#B6B6B6]" placeholder="Address of warranty service" style={{ border:"1.5px solid #CCCCCC" }}/>
        </div>
      </div>

      {
        categoryNav &&
            <div className="fixed h-full w-full top-0 left-0 z-[99] flex items-center justify-center" style={{ background:"rgba(18, 18, 18, 0.8)" }}>
                <div className="bg-white w-[400px] h-[600px] absolute right-0 top-0 px-5 overflow-y-scroll">
                    <IoIosCloseCircleOutline className="absolute right-[10px] text-[20px] cursor-pointer top-[20px]" onClick={() => setCategoryNav(false)}/>
                    <p className="text-[#101010] mt-[65px] text-[24px] pb-2" style={{ borderBottom:"1px solid #E6ECEA" }}>Categories</p>
                    <div className="border border-[#989898] rounded-full flex items-center justify-between mt-5 px-3 py-[7px]">
                        <input type="text" className="w-full outline-none" placeholder="Search For Categories"/>
                        <CiSearch fontSize={"20px"}/>
                    </div>
                    {/* <p className="mt-9">{currentCategory}</p> */}
                    <div className="border border-[#989898] px-5 mt-4 rounded">
                        {
                            allCategoryArray.map(category => (
                                <div className="flex items-center gap-2 my-2 cursor-pointer" onClick={() => {
                                    // setCurrentCategory(category)
                                    // setCurrentCategoryArray(category)
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
      }
      {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
      
      {
        removeImageModal &&
            <>
            <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setRemoveImageModal(false)}></div>
                <div className="fixed top-[50%] left-[50%] z-[99] flex items-center justify-center translate-x-[-50%] translate-y-[-50%]">
                    <div className="bg-white md:w-[450px] w-[300px] rounded-[18px] py-7">
                        <div className="flex items-center justify-between mt-[1rem] px-[2rem] mb-[2rem] flex-col">
                            {/* <img src='./loader.gif' className='h-10 w-10 mt-3 mb-5'/> */}
                            <p className='text-gray-500 text-[15px] mb-2 text-center'>Are you sure you want to delete this image</p>
                        </div>
                        <div>
                            {
                                deleteLoader ?
                                
                                <div className='mt-[2rem]'>
                                    <Btnloader />
                                </div>
                            :    
                                <div className='flex items-center justify-start md:ml-8 md:gap-[40px] md:flex-row flex-col-reverse gap-[10px]'>
                                    <button className='text-secondary-color px-8 py-2 rounded-full border border-secondary-color' onClick={() => setRemoveImageModal(false)}>No, Cancel</button>
                                    <button className='text-white bg-[#FF0000] px-8 py-2 rounded-full border-secondary-color' onClick={() => deleteImage(removeImageModal)}>Yes, Continue</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>
      }

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
            <button onClick={updateProduct} className="bg-secondary-color py-[12px] mt-10 text-white  w-full sm:w-[228.43px] ml-auto rounded-[7.98px]]">Update Product</button>
          }
    </div>
  )
}

export default ProductDetail