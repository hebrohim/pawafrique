import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <section>
        <h2 className=' font-semibold text-3xl'><span className='text-[#FF0000]'>Pawafrique</span> <span className='font-normal text-[#101828] '>Empowering Through</span> <span className='text-[#FF0000]'>Sustainable Energy</span></h2>

        <p className='text-[#475467] my-4'>
            
        Experience how Pawafrique delivers cost-competitive, eco-friendly, and high-quality energy products and services across Nigeria
        </p>

        <button className='w-full bg-[#FF0000]  py-3 text-white rounded-lg'>Explore Our Services</button>
      
        </section>

        <section className='mt-10'>
    <img  src={process.env.PUBLIC_URL + "/images/manHeader.svg"}/>

        </section>
     
    </div>
  )
}

export default HeroSection