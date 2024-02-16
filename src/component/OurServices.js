import React from "react";
import Service from "./Service";
import solarSolutions from "./images/solarSolution.svg";
import energyManagement from "./images/energyManagement.svg";
import powerGeneration from "./images/powerGeneration.svg";
import automationDoor from "./images/automationDoor.svg";
import securitySolutions from "./images/securitySolutions.svg";
import electricalSolutions from "./images/electricalSolutions.svg";
import { animate, motion } from "framer-motion";
import { stagger } from "./Variants";
const OurServices = () => {
  // const energyManagement = "/images/energyManagement.svg"
  // const solarSolutions =  "/images/solarSolution.svg"
  // const powerGeneration =  "/images/powerGeneration.svg"
  // const automationDoor =  "/images/automationDoor.svg"
  // const securitySolutions =  "/images/securitySolutions.svg"
  // const electricalSolutions =  "/images/electricalSolutions.svg"
  // const stagger = {
  //   animate: {
  //     transition: {
  //       delayChildren: 0.4,
  //       staggerChildren: 0.2,
  //       staggerDirection: 1,
  //     },
  //   },
  // };

  // const easeing = [0.6, -0.05, 0.01, 0.99];

  // const lettering = {
  //   hidden: {
  //     y: -60,
  //     opacity: 0,
  //     transition: { duration: 0.05, ease: easeing },
  //   },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     animate: {
  //       duration: 0.6,
  //       ease: easeing,
  //     },
  //   },
  // };
  return (
    <motion.div variants={stagger} className=" px-5 md:px-16 ">
      <motion.h4
       variants={stagger(0.3,-50,0)}
       initial = "initial"
       whileInView={"visible"}
       viewport={{
         once:true
       }}
      className="text-[#FF0000] mt-10 font-medium">Our services</motion.h4>
      <motion.h1
        variants={stagger(0.4,-50,0)}
        initial = "initial"
        whileInView={"visible"}
        viewport={{
          once:true
        }}
      className="text-[#101828] text-2xl font-semibold mb-10">
        Smart Energy and Security Solutions
      </motion.h1>
      {/* <img  src={process.env.PUBLIC_URL + "/images/energyManagement.svg"}/> */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <Service
          image={solarSolutions}
          title="Solar Solutions"
          content="Our services include installation, maintenance, and off-grid solutions, harnessing the power of the sun for a greener tomorrow."
          id = "1"
          
        />
        <Service
          image={energyManagement}
          title="Energy Management"
          content="Take charge of energy efficiency. Our expertise in metering, monitoring, and audits helps conserve resources and cut costs."
          id = "2"
        />
        <Service
          image={powerGeneration}
          title="Power Generation"
          content="Reliable power solutions: generator installation, maintenance, and HV & LV infrastructure management for uninterrupted supply."
          id = "3"

        />
        <Service
          image={automationDoor}
          title="Automatic Door Opening"
          content="Enhance accessibility and security with our automated door systems - sliding, swinging, and revolving options for safety and convenience."
          id = "4"

        />
        <Service
          image={securitySolutions}
          title="security Solutions"
          content="We provide a comprehensive security package, including CCTV, intercoms, fire alarms, access control, and smart home integration for safety."
          id = "5"

        />
        <Service
          image={electricalSolutions}
          title="Electrical Solutions"
          content="Our expertise lies in efficient electrical systems, covering installation, maintenance, and innovative lighting solutions for empowered spaces."
          id = "6"

        />
      </section>
    </motion.div>
  );
};

export default OurServices;
