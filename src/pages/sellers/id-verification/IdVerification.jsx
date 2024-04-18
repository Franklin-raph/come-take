import React, { useEffect, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Alert from '../../../components/alert/Alert';
import { IoCheckmarkCircle } from "react-icons/io5";
import Btnloader from '../../../components/loader/Btnloader';
import AwaitingVerification from '../../../components/awaitingVerifircation/AwaitingVerification';
import RejectSellerVerification from '../../../components/rejectSellerVerification/RejectSellerVerification';

const IdVerification = ({baseUrl}) => {
  const idTypeArray = ["drivers_licence", "national_id_card", "international_passport", "voters_card", "others"];
  const [idTypeDropDown, setIdTypeDropDown] = useState(false);
  const [selectedIdType, setSelectedIdType] = useState(idTypeArray[0]);
  const [fileFront, setFileFront] = useState(null);
  const [fileBack, setFileBack] = useState(null);
  const [id_card_number, setIdCardNumber] = useState('')
  const [loader, setLoader] = useState(false)
  const [userDetails, setUserDetails] = useState()

  const [fileFrontUploadSuccess, setFileFrontUploadSuccess] = useState(null)
  const [fileBackUploadSuccess, setFileBackUploadSuccess] = useState(null)
  const [fileUploadLoader, setFileUploadLoader] = useState(false)

  const [rejectVerification, setRejectVerification] = useState(false)

  const [msg, setMsg] = useState(false)
  const [alertType, setAlertType] = useState('')
  const user = JSON.parse(localStorage.getItem('user'))

  async function getUserDetails(){
    const res = await fetch(`${baseUrl}/complete-registration`,{
      headers:{
        Authorization:`Bearer ${user.data[0].access}`
      }
    })
    const data = await res.json()
    setUserDetails(data.data)
    if(res.ok){
      if(data.data.kyc_status === 'rejected'){
        setRejectVerification(true)
      }
    }
    console.log(res, data);
  }

  useEffect(() =>{
  getUserDetails()
  },[])

  async function verifyId() {
    if(!fileFront || !fileBack || !selectedIdType || !id_card_number){
      setMsg('Please make sure to fill in all fields and ensure to upload a valid Id')
      setAlertType('error')
    }else{
      const formData = new FormData()
      formData.append('id_card_type', selectedIdType)
      formData.append('id_card_number', id_card_number)
      formData.append('id_card_image_front_view', fileFront)
      formData.append('id_card_image_back_view', fileBack)
      setLoader(true)
      const res = await fetch(`${baseUrl}/seller/dashboard/upload-id`,{
        method:'PUT',
        body: formData,
        headers: {
          Authorization:`Bearer ${user.data[0].access}`,
        }
      })
      const data = await res.json()
      if(res) setLoader(false)
      if(!res.ok){
        setMsg(data.message)
        setAlertType('error')
      }
      if(res.ok){
        setMsg(data.message)
        setAlertType('success')
      }
      console.log(res, data);

      console.log(id_card_number, selectedIdType, fileBack, fileFront);

      console.log('Back', fileBack);
      console.log('Front', fileFront);
    }
  }

  // async function handleFileUploadFront(e) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     // Update fileFront state with the selected file
  //     setFileFront(e.target.files[0]);
  //   }
  //   const formData = new FormData()
  //   formData.append('media_type', 'photo')
  //   formData.append('media', e.target.files[0])
  //   setFileUploadLoader(true)
  //   const res = await fetch(`${baseUrl}/media`,{
  //     method:"POST",
  //     headers:{
  //       Authorization:`Bearer ${user.data[0].access}`,
  //     },
  //     body: formData
  //   })
  //   const data = await res.json()
  //   if(res) setFileUploadLoader(false)
  //   if(res.ok){
  //     setFileFrontUploadSuccess(true)
  //     setMsg('File successfully uploaded')
  //     setAlertType('success')
  //   }
  //   if(!res.ok){
  //     setMsg('File upload was not successfull, please try again')
  //     setAlertType('error')
  //   }
  // }

  // async function handleFileUploadBack(e) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     // Update fileBack state with the selected file
  //     setFileBack(e.target.files[0]);
  //   }
  //   const formData = new FormData()
  //   formData.append('media_type', 'photo')
  //   formData.append('media', e.target.files[0])
  //   setFileUploadLoader(true)
  //   const res = await fetch(`${baseUrl}/media`,{
  //     method:"POST",
  //     headers:{
  //       Authorization:`Bearer ${user.data[0].access}`,
  //     },
  //     body: formData
  //   })
  //   const data = await res.json()
  //   console.log(data);
  //   if(res) setFileUploadLoader(false)
  //   if(res.ok){
  //     setFileBackUploadSuccess(true)
  //     setMsg('File successfully uploaded')
  //     setAlertType('success')
  //   }
  //   if(!res.ok){
  //     setMsg('File upload was not successfull, please try again')
  //     setAlertType('error')
  //   }
  // }

  return (
    <div className="w-[90%] lg:w-[845px] flex items-center justify-center mx-auto mt-[5rem] py-[50px]" style={{ boxShadow: "0 11px 40px -17px #00000024" }}>
      <div className='w-full px-[1.7rem] lg:px-[3rem]'>
        <div>
          <p className='text-primary-color text-[28px] text-center'>ID Verification</p>
          <div className='text-[#6C6C6C] text-center mt-[1rem]'>
            <p>Valid ID, can be a scanned copy of either</p>
          </div>

          <div className='mt-10'>
            <div className='mt-5 flex flex-col md:flex-row items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>Choose ID Type</p>
                <div className='relative flex items-center justify-between p-2 rounded-[6px]' style={{ border: "1px solid #DCDCDC" }}>
                  <p className='text-gray-700'>{selectedIdType}</p>
                  <GoChevronDown className="cursor-pointer" onClick={() => setIdTypeDropDown(!idTypeDropDown)} />
                  {
                    idTypeDropDown &&
                    <div className='absolute rounded-[6px] bg-white border w-full left-0 top-[45px] p-2'>
                      {
                        idTypeArray.map(idType => (
                          <p className='cursor-pointer py-[6px] hover:text-[#B6B6B6]' onClick={() => {
                            setSelectedIdType(idType)
                            setIdTypeDropDown(false)
                          }}>{idType}</p>
                        ))
                      }
                    </div>
                  }
                </div>
              </div>
              <div className='w-full'>
                <p className='mb-[5px]'>{selectedIdType}</p>
                <input onChange={e => setIdCardNumber(e.target.value)} type="text" style={{ border: "1px solid #DCDCDC" }} className='w-full p-2 rounded-[6px]' placeholder={`${selectedIdType} Number`} />
              </div>
            </div>
            <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
              <div className='w-full'>
                <p className='mb-[5px]'>Upload {selectedIdType}</p>
                {/* {
                  fileFrontUploadSuccess ? 
                      <div className='flex items-center justify-between border border-[#DCDCDC] p-[10px] rounded-[6px]'>
                        <p className='text-[12px] text-gray-500'>File Upload was successfull</p>
                        <IoCheckmarkCircle className='text-green-500'/>
                      </div>
                    : */}
                      {/* } */}
                      <div className="flex flex-row items-center rounded-[6px]" style={{ border: "1px solid #DCDCDC" }}>
                        <input
                          type="file"
                          id="custom-input-front"
                          onChange={e => setFileFront(e.target.files[0])}
                          hidden
                        />
                        <label
                          htmlFor="custom-input-front"
                          className="block mr-4 py-2 px-4
                          border-0 text-sm bg-gray-200
                          text-[#B6B6B6] hover:bg-gray-300 cursor-pointer"
                          style={{ borderRadius: "6px 0 0 6px" }}
                        >
                          Frontside
                        </label>
                        <label className="text-[12px] text-slate-500">{fileFront ? fileFront.name : "No file chosen"}</label>
                      </div>
              </div>

              <div className='w-full'>
                <p className='mb-[5px]'>Upload {selectedIdType}</p>
                {/* {
                  fileBackUploadSuccess ? 
                      <div className='flex items-center justify-between border border-[#DCDCDC] p-[10px] rounded-[6px]'>
                        <p className='text-[12px] text-gray-500'>File Upload was successfull</p>
                        <IoCheckmarkCircle className='text-green-500'/>
                      </div>
                    : */}
                  {/* } */}
                  <div className="flex flex-row items-center rounded-[6px]" style={{ border: "1px solid #DCDCDC" }}>
                    <input
                      type="file"
                      id="custom-input-back"
                      onChange={e => setFileBack(e.target.files[0])}
                      hidden
                    />
                    <label
                      htmlFor="custom-input-back"
                      className="block mr-4 py-2 px-4
                      border-0 text-sm bg-gray-200
                      text-[#B6B6B6] hover:bg-gray-300 cursor-pointer"
                      style={{ borderRadius: "6px 0 0 6px" }}
                    >
                      Backside
                    </label>
                    <label className="text-[12px] text-slate-500">{fileBack ? fileBack.name : "No file chosen"}</label>
                  </div>
              </div>

            </div>
          </div>
          {
              loader ?
                  <button className="bg-[#EDEDED] text-primary-color py-[12px] mt-10 w-full rounded-sm tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                  shadow-sm transition-all cursor-not-allowed">
                      <Btnloader />
                  </button>
              : 
                <button onClick={() => verifyId()} className="bg-secondary-color py-[12px] mt-10 text-white w-full">Save Details</button>
          }
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
          userDetails && userDetails.kyc_status === 'pending' ? <AwaitingVerification /> : ""
        }
        {
          userDetails && rejectVerification ? <RejectSellerVerification setRejectVerification={setRejectVerification} /> : ""
        }
        
    </div>
  )
}

export default IdVerification;
