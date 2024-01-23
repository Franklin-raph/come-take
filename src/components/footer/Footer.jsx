import React from 'react'
import footerImage from "../../assets/Group76.png"
import { Link } from 'react-router-dom'

const Footer = () => {

  const aboutUsLinks = [
    {
      label:"About Come Take",
      url:"#"
    },
    {
      label:"News and blogs",
      url:"#"
    },
    {
      label:"Help",
      url:"#"
    },
    {
      label:"Press Center",
      url:"#"
    },
    {
      label:"Affiliate and partners",
      url:"#"
    }
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
      label:"Gift Card",
      url:"#"
    },
    {
      label:"Mobile App",
      url:"#"
    },
    {
      label:"VTU",
      url:"#"
    },
    {
      label:"Shipping and Delivery",
      url:"#"
    },
    {
      label:"Account Sign Up",
      url:"#"
    },
    {
      label:"Order Pick Up",
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
    <div className='flex items-start justify-between gap-[2rem] mt-[7rem] mb-[3rem] px-8'>
      <div className='w-[40%]'>
        <Link to="/" className='mb-5 block'>
          Logo.
        </Link>
        <p className='text-[14px]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cum repellat 
          aspernatur vitae beatae impedit neque nesciunt provident, quam itaque aliquid optio 
          pariatur quos dolorum sequi excepturi ut necessitatibus! Dolore.
        </p>
        <h1 className='font-bold text-[17px] text-primary-color mt-9 mb-4'>Accepted Payments</h1>
        <img src={footerImage} alt="" />
        {/* <div className='grid grid-cols-4'>
          <p>Visa</p>
          <p>Master-Card</p>
          <p>Apple-pay</p>
          <p>Ali-pay</p>
          <p>Google-pay</p>
          <p>Amazon</p>
          <p>O-pay</p>
          <p>Skrill</p>
        </div> */}
      </div>
      <div className='grid grid-cols-4 gap-[2rem] text-[14px]'>
        <div>
          <h1 className='font-bold text-[17px] text-primary-color mb-2'>Categories</h1>
          <ul>
            {categoriesLinks.map(link => (
              <li className='py-1'>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
            
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-[17px] text-primary-color mb-2'>About Us</h1>
          <ul>
            {aboutUsLinks.map(link => (
              <li className='py-1'>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-[17px] text-primary-color mb-2'>Service</h1>
          <ul>
            {serviceLinks.map(link => (
              <li className='py-1'>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-[17px] text-primary-color mb-2'>Help</h1>
          <ul>
            {helpLinks.map(link => (
              <li className='py-1'>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer