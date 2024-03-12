import React from 'react'

const ConfirmActivateAccountModal = () => {
  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[999]" style={{ background:"rgba(14, 14, 14, 0.58)" }} onClick={() => setLoginModal(false)}></div>
        <div className="bg-white w-[450px] flex items-center justify-center h-[580px] fixed top-[50%] left-[50%] py-[35px] px-[2rem] rounded-[20px] z-[100] login-modal" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="">
                <p className='text-center text-[#3b4054]'>Account Verified Proceed to login</p>
                <div className="mt-7">
                    <button className="bg-secondary-color text-white px-4 py-3 w-full rounded-sm tracking-wide
                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                    shadow-sm transition-all" onClick={() => {
                        setLoginModal(true)
                    }}>
                        Continue to Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmActivateAccountModal