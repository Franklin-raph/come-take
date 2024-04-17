import React from 'react'
import footerImage from "../../assets/Group76.png"
import { Link } from 'react-router-dom'
import NewsLetter from '../news-letter/NewsLetter'

const Footer = () => {

  const aboutUsLinks = [
    {
      label:"About Come Take",
      url:"#"
    },
    {
      label:"Privacy Policy",
      url:"#"
    },
    {
      label:"Terms of use",
      url:"#"
    },
    {
      label:"Return Policy",
      url:"#"
    },
    // {
    //   label:"Affiliate and partners",
    //   url:"#"
    // }
  ]

  const categoriesLinks = [
    {
      label:"Fashion",
      url:"#"
    },
    {
      label:"Education",
      url:"#"
    },
    {
      label:"Books",
      url:"#"
    },
    {
      label:"Fitness",
      url:"#"
    },
    {
      label:"Furniture",
      url:"#"
    },
    {
      label:"Electronics",
      url:"#"
    },
    {
      label:"Computing",
      url:"#"
    },
    {
      label:"Phones",
      url:"#"
    },
    {
      label:"Beauty",
      url:"#"
    },
    {
      label:"Footwares",
      url:"#"
    }
  ]

  const serviceLinks = [
    {
      label:"Airtime Recharge",
      url:"#"
    },
    {
      label:"Data Subscription",
      url:"#"
    },
    {
      label:"Cable Subscription",
      url:"#"
    },
    {
      label:"Electricity Bill Payments",
      url:"#"
    },
    // {
    //   label:"Account Sign Up",
    //   url:"#"
    // },
    {
      label:"Others",
      url:"#"
    }
  ]

  const helpLinks = [
    {
      label:"Cometake Help",
      url:"#"
    },
    {
      label:"Returns",
      url:"#"
    },
    {
      label:"Contact Us",
      url:"#"
    },
    {
      label:"Track Order",
      url:"#"
    },
    {
      label:"Security Fraud",
      url:"#"
    }
  ]


  return (
    <div>
      {/* <div className='h-[1px] bg-[#ccc] my-4 lg:mx-12'></div> */}
      <NewsLetter />
      <div className='flex items-start justify-between md:flex-row flex-col gap-[2rem] md:gap-[5rem] mt-[2rem] mb-[3rem] lg:px-12 px-8'>
        <div className='w-full'>
          <Link to="/" className='mb-5 block'>
            Logo.
          </Link>
          <p className='text-[14px] md:text-[16px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cum repellat 
            aspernatur vitae beatae impedit neque nesciunt provident, quam itaque aliquid optio 
            pariatur quos dolorum sequi excepturi ut necessitatibus! Dolore.
          </p>
          {/* <h1 className='font-bold text-[17px] text-primary-color mt-9 mb-4'>Accepted Payments</h1>
          <img src={footerImage} alt="" /> */}
        </div>
        <div className='grid grid-cols-2 gap-[2rem] w-full text-[14px]'>
          {/* <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-primary-color mb-2'>Categories</h1>
            <ul>
              {categoriesLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px]'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
              
            </ul>
          </div> */}
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-primary-color mb-2'>About Us</h1>
            <ul>
              {aboutUsLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px]'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-primary-color mb-2'>VTU Service</h1>
            <ul>
              {serviceLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px]'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h1 className='font-bold text-[15px] md:text-[17px] text-primary-color mb-2'>Help</h1>
            <ul>
              {helpLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px]'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer