import React from 'react'
import Service from './Service'

const OurServices = () => {
    
    const energyManagement = "/images/energyManagement.svg"
    const solarSolutions =  "/images/solarSolution.svg"
    const powerGeneration =  "/images/powerGeneration.svg"
    const automationDoor =  "/images/automationDoor.svg"
    const securitySolutions =  "/images/securitySolutions.svg"
    const electricalSolutions =  "/images/electricalSolutions.svg"
    
  return (
    <div>OurServices
    {/* <img  src={process.env.PUBLIC_URL + "/images/energyManagement.svg"}/> */}
        
        <Service image ={solarSolutions}  title = "Solar Solutions" content = "Our services include installation, maintenance, and off-grid solutions, harnessing the power of the sun for a greener tomorrow."/>
        <Service image = {energyManagement} title = "Energy Management" content = "Take charge of energy efficiency. Our expertise in metering, monitoring, and audits helps conserve resources and cut costs."/>
        <Service image = {powerGeneration} title = "Power Generation" content = "Reliable power solutions: generator installation, maintenance, and HV & LV infrastructure management for uninterrupted supply."/>
        <Service image = {automationDoor} title = "Automatic Door Opening" content = "Enhance accessibility and security with our automated door systems - sliding, swinging, and revolving options for safety and convenience."/>
        <Service image = {securitySolutions} title = "security Solutions" content = "We provide a comprehensive security package, including CCTV, intercoms, fire alarms, access control, and smart home integration for safety."/>
        <Service image = {electricalSolutions} title = "Electrical Solutions" content = "Our expertise lies in efficient electrical systems, covering installation, maintenance, and innovative lighting solutions for empowered spaces."/>
      
    </div>
  )
}

export default OurServices