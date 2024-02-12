import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

const IdVerification = () => {

  const idTypeArray = ["Drivers License", "National ID Card", "International Passport", "Or Any Other Valid ID"]
  const [activeId, setActiveId] = useState(idTypeArray[0]);

  const [driversLicense, setDriverLicense] = useState(true)
  const [nationalIdCard, setNationalIdCard] = useState(false)
  const [passport, setPassport] = useState(false)
  const [any, setAny] = useState(false)

  function handleTabClick(iDtype){
    setActiveId(iDtype)
    if(iDtype === 'Drivers License'){
      setDriverLicense(true)
      setNationalIdCard(false)
      setPassport(false)
      setAny(false)
    }
    if(iDtype === 'National ID Card'){
      setNationalIdCard(true)
      setPassport(false)
      setDriverLicense(false)
      setAny(false)
    }
    if(iDtype === "International Passport"){
      setPassport(true)
      setNationalIdCard(false)
      setDriverLicense(false)
      setAny(false)
    }
    if(iDtype === "Or Any Other Valid ID"){
      setPassport(false)
      setNationalIdCard(false)
      setDriverLicense(false)
      setAny(true)
    }
    console.log(iDtype);
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
          <div className='text-[#6C6C6C] text-center mt-[4rem]'>
            <p>Valid ID can be a scanned copy of either</p>
            <div className='flex items-center mt-3 gap-x-[20px] gap-y-[5px] flex-wrap justify-center'>
              {idTypeArray.map(idType => (
                <div className='flex items-center gap-1'>
                  <p className={`cursor-pointer ${activeId === idType ? 'active-id' : ''} p-[5px] rounded-full bg-[#D9D9D9]`} onClick={() => handleTabClick(idType)}></p>
                  <p>{idType}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CHOOSE ID TYPE */}

          {/* <div className='mt-5'>
            <p className='mb-[5px]'>Choose ID Type</p>
            <div className='flex items-center justify-between p-3 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
              <p className='text-[#B6B6B6]'>Choose from the options below</p>
              <GoChevronDown className="cursor-pointer"/>
            </div>
          </div> */}

          {passport && 
            <div className='mt-10'>
              <div className='mt-5 flex flex-col md:flex-row items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Choose ID Type</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Passport</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Passport</p>
                  <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Passport Number' />
                </div>
              </div>
              <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload Passport</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Frontside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload Passport</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Backside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
          }

          {driversLicense && 
            <div className='mt-10'>
              <div className='mt-5 flex flex-col md:flex-row items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Choose ID Type</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Passport</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Driving License</p>
                  <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='Driving License Number' />
                </div>
              </div>
              <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload Driving License</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Frontside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload Driving License</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Backside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
          }

          {nationalIdCard && 
            <div className='mt-10'>
              <div className='mt-5 flex flex-col md:flex-row items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Choose ID Type</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Passport</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>National ID</p>
                  <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder='National ID Number' />
                </div>
              </div>
              <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload National ID</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Frontside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload National ID</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Backside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
          }

          {any && 
            <div className='mt-10'>
              <div className='mt-5 flex flex-col md:flex-row items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Choose ID Type</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Passport</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Voter's Card</p>
                  <input type="text" style={{border:"1px solid #DCDCDC"}} className='w-full p-2 rounded-[6px]' placeholder="Voter's Card Number" />
                </div>
              </div>
              <div className='mt-5 flex items-center gap-[15px] lg:gap-[30px] w-full'>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload Voter's Card</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Frontside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
                <div className='w-full'>
                  <p className='mb-[5px]'>Upload Voter's Card</p>
                  <div className='flex items-center justify-between p-2 rounded-[6px]' style={{border:"1px solid #DCDCDC"}}>
                    <p className='text-[#B6B6B6]'>Backside</p>
                    <GoChevronDown className="cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
          }
          <button className="bg-secondary-color py-[12px] mt-10 text-white w-full">Save Details</button>
        </div>
      </div>
    </div>
  )
}

export default IdVerification