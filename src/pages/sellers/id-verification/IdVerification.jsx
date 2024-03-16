import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

const IdVerification = () => {

  const idTypeArray = ["Drivers License", "National ID Card", "International Passport", "Or Any Other Valid ID"]
  const [idTypeDropDown, setIdTypeDropDown] = useState(false)
  const [selectedIdType, setSelectedIdType] = useState(idTypeArray[0])

  const [fileFront, setFileFront] = useState();
  const [fileBack, setFileBack] = useState();

  function verifyId(){
    console.log('Back', fileBack);
    console.log('Front', fileFront);
  }

  function handleFileUploadFront(e){
      if (e.target.files) {
        setFileFront(1);
    }
  }

  function handleFileUploadBack(e){
      if (e.target.files) {
        setFileBack(2);
    }
  }

  return (
    <div className="w-[90%] lg:w-[845px] flex items-center justify-center mx-auto mt-[5rem] py-[50px]" style={{boxShadow:"0 11px 40px -17px #00000024"}}>
      <div className='w-full px-[1.7rem] lg:px-[3rem]'>
        <div>
          {/* AWAITING VERIFICATION */}
          {/* <div className='text-center'>
            <p className='text-primary-color text-[30px] mb-5'>Awaiting Verification</p>
            <p className='text-[#989898]'>Please wait  while we confirm your Identity. Note , this might take upto an Hour. Come back later</p>
          </div> */}

          <p className='text-primary-color text-[28px] text-center'>ID Verification</p>
          <div className='text-[#6C6C6C] text-center mt-[1rem]'>
            <p>Valid ID, can be a scanned copy of either</p>
          </div>

          {/* CHOOSE ID TYPE */}

          {/* <div className='mt-5'>
            <p className='mb-[5px]'>Choose ID Type</p>
            <div className='flex items-center justify-between p-3 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
              <p className='text-[#B6B6B6]'>Choose from the options below</p>
              <GoChevronDown className="cursor-pointer"/>
            </div>
          </div> */}

            <div className='mt-10'>
              <div className='mt-5 flex flex-col md:flex-row items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Choose ID Type</p>
                  <div className='relative flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-gray-700'>{selectedIdType}</p>
                    <GoChevronDown className="cursor-pointer" onClick={() => setIdTypeDropDown(!idTypeDropDown)}/>
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
                  <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder={`${selectedIdType} Number`} />
                </div>
              </div>
              <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>

                <div className='w-full'>
                  <p className='mb-[5px]'>Upload {selectedIdType}</p>
                  <div class="flex flex-row items-center rounded-[6px]" style={{border:"1px solid #DCDCDC"}}>
                    <input
                      type="file"
                      id="custom-input"
                      onChange={handleFileUploadFront}
                      hidden
                    />
                    <label
                      for="custom-input"
                      class="block mr-4 py-2 px-4
                        border-0 text-sm bg-gray-200
                        text-[#B6B6B6] hover:bg-gray-300 cursor-pointer"
                        style={{ borderRadius:"6px 0 0 6px" }}
                    >
                      Frontside
                    </label>
                    {
                      fileFront ?
                      <label class="text-sm text-slate-500">{fileFront}</label>
                      :
                      <label class="text-sm text-slate-500">No file chosen</label>
                    }
                  </div>
                </div>

                <div className='w-full'>
                  <p className='mb-[5px]'>Upload {selectedIdType}.</p>
                    <div class="flex flex-row items-center rounded-[6px]" style={{border:"1px solid #DCDCDC"}}>
                      <input
                        type="file"
                        id="custom-input"
                        onChange={handleFileUploadBack}
                        hidden
                      />
                      <label
                        for="custom-input"
                        class="block mr-4 py-2 px-4
                          border-0 text-sm bg-gray-200
                          text-[#B6B6B6] hover:bg-gray-300 cursor-pointer"
                          style={{ borderRadius:"6px 0 0 6px" }}
                      >
                        Backside.
                      </label>
                      {
                        fileBack ?
                        <label class="text-sm text-slate-500">{fileBack}</label>
                        :
                        <label class="text-sm text-slate-500">No file chosen</label>
                    }
                  </div>
                </div>

              </div>
            </div>
          <button onClick={() => verifyId()} className="bg-secondary-color py-[12px] mt-10 text-white w-full">Save Details</button>
        </div>
      </div>
    </div>
  )
}

export default IdVerification