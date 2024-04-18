import React from 'react'

const AwaitingVerification = () => {
  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background:"rgba(14, 14, 14, 0.58)" }} ></div>
        <div className="bg-white w-[500px] flex items-center justify-center fixed top-[50%] left-[50%] py-[50px] px-[2rem] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className='w-full px-[1.7rem] lg:px-[3rem]'>
                <div>
                    <p className='text-primary-color text-[28px] text-center'>Awaiting Verification</p>
                    <div className='text-[#989898] text-center mt-[1rem]'>
                        <p>Please wait while we confirm your Identity. Note , this might take up to 24 Hours. Come back later</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AwaitingVerification