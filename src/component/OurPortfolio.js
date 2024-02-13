import React from 'react'
import Service from './Service'
import Portfolio from './Portfolio'
import solarInstallation from "./images/solarInstallation.svg"
import smartHome from "./images/smartHome.svg"
import securitySytem from "./images/securitySystem.svg"
import energyEfficient from "./images/energyEfficient.svg"
const OurPortfolio = () => {
    
    // const solarInstallation = "/images/solarInstallation.svg"
    // const smartHome =  "/images/smartHome.svg"
    // const securitySytem =  "/images/securitySystem.svg"
    // const energyEfficient =  "/images/energyEfficient.svg"
    
  return (
    <div className=' px-5 md:px-16 '>
        <h4 className='text-[#FF0000] mt-10 font-medium'>Our Portfolio</h4>
        <h1 className='text-[#101828] text-2xl font-semibold mb-10'>Featured Projects</h1>
    {/* <img  src={process.env.PUBLIC_URL + "/images/energyManagement.svg"}/> */}
        
        <Portfolio image ={solarInstallation}  title = "Solar Installation at client Residence" content = "Our services include installation, maintenance, and off-grid solutions, harnessing the power of the sun for a greener tomorrow."/>
        <Portfolio image = {smartHome} title = "Smart Home Integration for Smith Family" content = "Implemented a comprehensive smart home system for the Smith Family, including automated lighting, climate control, and security integration. Enhanced convenience and security while reducing energy consumption."/>
        <Portfolio image = {securitySytem} title = "Security System Upgrade for AU Corporation" content = "Revamped the security infrastructure at ABC Corporation, integrating advanced CCTV, access control, and fire alarm systems. Enhanced surveillance capabilities and ensured round-the-clock protection."/>
        <Portfolio image = {energyEfficient} title = "Energy-Efficient Lighting Implementation at Commercial Complex" content = "Executed an energy-efficient lighting upgrade at a large commercial complex, introducing LED fixtures and smart lighting controls. Resulted in a 40% reduction in energy consumption and significantly lowered maintenance costs."/>
    
    </div>
  )
}

export default OurPortfolio