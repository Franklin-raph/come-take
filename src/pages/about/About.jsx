import React, { useEffect } from 'react'

const About = ({setRegisterModal}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

  return (
    <div className='mt-5 mx-[2rem] lg:mx-[4rem]'>
        <p className='font-[600] text-[24px] text-primary-color mt-9 mb-2'>ComeTake: The world of luxury & comfort</p>
        <p>Connecting you to products, payments and possibilities.</p>
        <div>
            <p className='font-[600] text-[24px] text-primary-color mt-9 mb-2'>Who We Are</p>
            <div className='flex flex-col gap-5'>
                <p>
                    ComeTake is a Nigerian technology company built around three powerful services: an online
                    marketplace, a reliable logistics network, and an easy payment system. We connect buyers and
                    sellers across Nigeria, making it easy to shop, sell, deliver, and pay — all in one place.
                </p>
                <p>
                    Whether you're looking for quality electronics, stylish fashion, trusted vehicles, or everyday
                    essentials, ComeTake offers a shopping experience every shopper loves.
                </p>
            </div>
        </div>
        <div>
            <p className='font-[600] text-[24px] text-primary-color mt-9 mb-2'>Our  Story</p>
            <div className='flex flex-col gap-5'>
                <p>
                    After seeing the challenges people face to get the right product and sellers struggling to sell
                    their products to people who actually know the value, the CEO decided to make a change
                </p>
                <p>
                    He wanted to build a world where people are not inconvenienced and yet, get what suits their
                    lifestyle.
                </p>
                <p>
                    That was how ComeTake came in, founded on May, 17 2020 despite all the challenges.
                    ComeTake is not just a marketplace, it is a platform where individuals can display real products
                    and others can buy what they like.
                </p>
                <p>
                    As our community grew, so did our offerings. We launched ComeTakeData Plus, expanding into
                    digital services like airtime, data, electricity bill payments, and cable subscriptions. What started
                    as a marketplace quickly became a complete lifestyle platform
                </p>
                <p>
                    Today, ComeTake proudly serves thousands of customers across Nigeria and abroad, helping
                    individuals and small businesses thrive in the digital economy
                </p>
            </div>
        </div>
        <div>
            <p className='font-[600] text-[24px] text-primary-color mt-9 mb-2'>Why We Matter</p>
            <div className='flex flex-col gap-5'>
                <p>
                    At ComeTake, we believe that access creates opportunity.
                </p>
                <p>
                    <span className='font-[600]'>For customers:</span> We offer a trusted space to find quality products from real people and get
                    exactly what you ordered for. You are guided and supported throughout your buying journey to
                    ensure you get the most out of your spending without having to leave your home.
                </p>
                <p>
                    <span className='font-[600]'>For small businesses and individual sellers:</span> ComeTake does the marketing while you
                    make the sales. We help you display your products to serious buyers where you handle your
                    business your own way. We provide the tools and visibility to reach more buyers, grow faster,
                    and compete with bigger brands
                </p>
            </div>
        </div>
        <div>
            <p className='font-[600] text-[24px] text-primary-color mt-9 mb-2'>Our Mission</p>
            <div className='flex flex-col gap-5'>
                <p>
                    To become Africa's leading digital marketplace where real people meet real products and every
                    transaction brings you closer to a better life.
                </p>
                <p>
                    We are building a future where shopping, payments, and essential services are accessible to
                    everyone, everywhere with just a few clicks.
                </p>
            </div>
        </div>
        <div>
            <p className='font-[600] text-[24px] text-primary-color mt-9 mb-2'>Join the ComeTake Community</p>
            <div className='flex flex-col gap-5'>
                <p>
                    Ready to experience a world of luxury and comfort?
                </p>
                <p>
                    Start shopping today or list your products and grow your business with us.
                </p>
            </div>
            <button onClick={() => setRegisterModal(true)} className='py-3 px-6 bg-primary-color mt-2 rounded-[6px] text-white'>JOIN US NOW</button>
        </div>
    </div>
  )
}

export default About