import React from "react";
import Service from "./Service";
import Portfolio from "./Portfolio";
import solarInstallation from "./images/solarInstallation.svg";
import smartHome from "./images/smartHome.svg";
import securitySytem from "./images/securitySystem.svg";
import energyEfficient from "./images/energyEfficient.svg";
import { motion } from "framer-motion";
import { stagger } from "./Variants";
const OurPortfolio = () => {
  // const solarInstallation = "/images/solarInstallation.svg"
  // const smartHome =  "/images/smartHome.svg"
  // const securitySytem =  "/images/securitySystem.svg"
  // const energyEfficient =  "/images/energyEfficient.svg"

  return (
    <div className=" px-5 md:px-16 ">
      <motion.h4 
       variants={stagger(1,0,-50)}
       initial = "initial"
       whileInView={"visible"}
       viewport={{
        once:true
      }}
      className="text-[#FF0000] mt-10 font-medium text-center">
        Our Portfolio
      </motion.h4>
      <motion.h1
       variants={stagger(2,0,-50)}
       initial = "initial"
       whileInView={"visible"}
       viewport={{
        once:true
      }}
      className="text-[#101828] text-2xl font-semibold mb-10 text-center">
        Featured Projects
      </motion.h1>
      {/* <img  src={process.env.PUBLIC_URL + "/images/energyManagement.svg"}/> */}
      <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <Portfolio
        id = "1"
          image={solarInstallation}
          title="Solar Installation at client Residence"
          content="Our services include installation, maintenance, and off-grid solutions, harnessing the power of the sun for a greener tomorrow."
        />
        <Portfolio
        id= "2"
          image={smartHome}
          title="Smart Home Integration for Smith Family"
          content="Implemented a comprehensive smart home system for the Smith Family, including automated lighting, climate control, and security integration. Enhanced convenience and security while reducing energy consumption."
        />
        <Portfolio
        id = "3"
          image={securitySytem}
          title="Security System Upgrade for AU Corporation"
          content="Revamped the security infrastructure at ABC Corporation, integrating advanced CCTV, access control, and fire alarm systems. Enhanced surveillance capabilities and ensured round-the-clock protection."
        />
        <Portfolio
        id = "4"
          image={energyEfficient}
          title="Energy-Efficient Lighting Implementation at Commercial Complex"
          content="Executed an energy-efficient lighting upgrade at a large commercial complex, introducing LED fixtures and smart lighting controls. Resulted in a 40% reduction in energy consumption and significantly lowered maintenance costs."
        />
      </section>
    </div>
  );
};

export default OurPortfolio;
