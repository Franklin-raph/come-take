import ProfileSideNav from '../../components/profile-side-nav/ProfileSideNav';
import { IoChevronDown } from 'react-icons/io5';
import userProfilePic  from '../../assets/profilePic.png'
import { useEffect, useState } from 'react';
import Btnloader from '../../components/loader/Btnloader';
import Alert from '../../components/alert/Alert';

const MyProfile = ({baseUrl}) => {
    const [userDetails, setUserDetails] = useState()
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [msg, setMsg] = useState(false)
    const [alertType, setAlertType] = useState('')
    const [loader1, setLoader1] = useState(false)
    const [loader2, setLoader2] = useState(false)
    const [loader3, setLoader3] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'))

    async function getUserDetails(){
        const res = await fetch(`${baseUrl}/complete-registration`,{
          headers:{
            Authorization:`Bearer ${user.data[0].access}`
          }
        })
        const data = await res.json()
        setUserDetails(data.data)
        setFirstName(data.data.first_name)
        setLastName(data.data.last_name)
        setEmail(data.data.email)
        setPhone(data.data.phone)
        console.log(res, data);
      }
    
      useEffect(() =>{
        // alert("helo")
        getUserDetails()
      },[])

    // const [deleteModal, setDeleteModal] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    console.log(user);


    async function updateUserNames(){
        console.log(`Bearer ${user.data[0].access}`);
        setLoader1(true)
        const res = await fetch(`${baseUrl}/update-profile`,{
            method:"PUT",
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${user.data[0].access}`
            },
            body: JSON.stringify({first_name, last_name})
        })
        const data = await res.json()
        if(res) setLoader1(false)
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
        }
        console.log(res, data);
    }


    async function updateEmail(){
        setLoader2(true)
        const res = await fetch(`${baseUrl}/update-profile`,{
            method:"PUT",
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${user.data[0].access}`
            },
            body: JSON.stringify({email})
        })
        const data = await res.json()
        if(res) setLoader2(false)
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
        }
        console.log(res, data);
    }

    async function updatePhone(){
        setLoader3(true)
        console.log(JSON.stringify({phone}));
        const res = await fetch(`${baseUrl}/update-profile`,{
            method:"PUT",
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${user.data[0].access}`
            },
            body: JSON.stringify({phone})
        })
        const data = await res.json()
        console.log(res, data);
        if(res) setLoader3(false)
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
        }
        if(!res.ok){
            setMsg(data.message.phone)
            setAlertType('error')
        }
        console.log(res, data);
    }

  return (
    <div>
        <div className="lg:px-12 px-0 lg:mt-10 mt-2 gap-20">
            <div className='flex items-start gap-[2rem] flex-col-reverse lg:flex-row'>
                <ProfileSideNav />
                {msg && <Alert setMsg={setMsg} msg={msg} alertType={alertType} /> }
                <div className='gap-[0rem] px-10 pb-[3rem] pt-[2.5rem] flex-[2] mb-8 w-full' style={{boxShadow:"0px 11px 40px -17px rgba(0, 0, 0, 0.14)"}}>
                    <div>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Account Information</h1>
                        {/* <div className='flex items-center justify-center flex-col my-[3rem]'>
                            <img src={userProfilePic} alt="" width="140px" height="140px"/>
                            <p className='text-[#5C5C5C] font-[600] text-[24px] mt-3 mb-1'>John Doe</p>
                            <p className='text-[#5C5C5C]'>JohnDoes@gmail.com</p>
                        </div> */}
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>First Name</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={first_name} onChange={e => setFirstName(e.target.value)} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <div className='my-7'>
                            {/* <label className='text-[16px] block mb-[3px] text-[#101010]'>Middle Name</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} onChange={e => setMiddleName(e.target.value)} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/> */}
                        </div>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Last Name</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={last_name} onChange={e => setLastName(e.target.value)} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        {
                            loader1 ?
                                <div className="mt-7">
                                    <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                    shadow-sm transition-all cursor-not-allowed">
                                        <Btnloader />
                                    </button>
                                </div>
                              :
                                <button onClick={updateUserNames} className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Save Information</button>

                        }
                    </div>

                    <div className='mt-[60px]'>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Update Email</h1>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Email</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} placeholder='Example@Cometake.com' onChange={e => setEmail(e.target.value)} value={email} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        {
                            loader2 ?
                                <div className="mt-7">
                                    <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                    shadow-sm transition-all cursor-not-allowed">
                                        <Btnloader />
                                    </button>
                                </div>
                              :
                                <button onClick={updateEmail} className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Update</button>

                        }
                    </div>

                    <div className='mt-[60px]'>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Update Phone Number</h1>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Phone</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} placeholder='08145463122' onChange={e => setPhone(e.target.value)} value={phone} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        {
                            loader3 ?
                                <div className="mt-7">
                                    <button className="bg-[#EDEDED] text-primary-color px-4 py-3 w-full rounded-sm tracking-wide
                                    font-display focus:outline-none focus:shadow-outline hover:bg-primary-color hover:text-[#EDEDED]
                                    shadow-sm transition-all cursor-not-allowed">
                                        <Btnloader />
                                    </button>
                                </div>
                              :
                                <button onClick={updatePhone} className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Update</button>
                        }
                    </div>

                    {/* <div className='mt-[60px]'>
                        <h1 className='text-[#003C2F] text-[24px] font-bold mb-5 pb-3' style={{borderBottom:"1px solid #E6ECEA"}}>Delivery Details</h1>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Address</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"No 5 Ituku Street Umuokpu"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <div className='flex items-center gap-[38px] my-7 flex-col sm:flex-row'>
                            <div className='w-full'>
                                <label className='text-[16px] block mb-[3px] text-[#101010]'>Town</label>
                                <div className='flex items-center justify-between w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]' style={{border:"1px solid #CCCCCC"}}>
                                    <input type="text" value={"Anambra"} className=''/>
                                    <IoChevronDown cursor={"pointer"} color='#6C6C6C'/>
                                </div>
                            </div>
                            <div className='w-full'>
                                <label className='text-[16px] block mb-[3px] text-[#101010]'>State</label>
                                <div className='flex items-center justify-between w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]' style={{border:"1px solid #CCCCCC"}}>
                                    <input type="text" value={"Anambra"} className=''/>
                                    <IoChevronDown cursor={"pointer"} color='#6C6C6C' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className='text-[16px] block mb-[3px] text-[#101010]'>Phone Number</label>
                            <input type="text" style={{border:"1px solid #CCCCCC"}} value={"08145463122"} className='w-full outline-none px-4 py-3 rounded-[6px] text-[#1A1A1A]'/>
                        </div>
                        <button className='bg-primary-color w-full py-[16px] px-[32px] text-[#fff] rounded-[4px] mt-10'>Save Information</button>
                    </div> */}
                    {/* <div className="md:w-[55%] mt-[1rem] md:mt-[0]">
                        <p className='text-[24px] leading-[1.5] lg:leading-[1.8]'>
                            Lenovo V15 G3 Iap Laptop (12th Gen Core I5/ 21.5" 8gb/ 256 Ssd/ Dos) -82tt00juue
                        </p>
                        <p className='text-[#898989] my-3'>Brand: Lenovo</p>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                                <IoMdStar color='#FFEA2E'/>
                            </div>
                            <span className="text-[11px] font-[500] text-[#6d6d6d] ml-2">25 Reviews</span>
                        </div>
                        <div className='h-[1px] bg-[#ccc] my-4 md:block hidden'></div>
                        <div className='flex items-center gap-5 justify-between lg:justify-start'>
                            <p className='text-[35px]'>#150,000</p>
                            <p className='text-[#34343457] text-[20px] line-through'>#115,000</p>
                        </div>
                        <p className='text-[#ff3030] lg:block hidden'>Fairly Used</p>
                        <div className='h-[1px] bg-[#ccc] my-4'></div>
                        <div className="flex items-center gap-4 justify-between">
                            <p className='text-[#ff3030] lg:hidden block'>Fairly Used</p>
                            <div className="flex items-center gap-4 mt-2">
                                <p className='text-[#898989]'>Quantity</p>
                                <div className='flex items-center justify-center gap-2 border border-[#B5AEAE] rounded-[4px] w-[120px] text-center h-[30px]'>
                                    <p style={{ borderRight:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>-</p>
                                    <p className='flex-1'>1</p>
                                    <p style={{ borderLeft:"1px solid gray" }} className='flex-1 px-2 text-[#B5AEAE] cursor-pointer h-full'>+</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-[15px] mt-6">
                            <button className='rounded-[5px] bg-primary-color text-white md:px-[35px] px-[20px] py-[8px] w-[50%]'>Buy Now</button>
                            <button className='rounded-[5px] text-primary-color border border-primary-color px-[20px] md:px-[35px] py-[8px] w-[50%]'>Add to cart</button>
                        </div>
                    </div> */}
                {/* {
                    !deleteModal &&
                    <div className='fixed w-full h-full top-0 left-0 z-[9999] flex items-start justify-center' style={{ background:"rgba(21, 21, 21, 0.6)" }}>
                        <div className='bg-white'>
                            <div className="flex items-center justify-between">
                                <p className='text-[#333333] text-[24px]'>Delete Product </p>
                                <p>X</p>
                            </div>
                        </div>
                    </div>
                } */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile