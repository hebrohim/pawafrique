import React from "react";
import logo from "./images/logo.svg"
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
import { stagger } from "./Variants";
const Footer = () => {
  return (
    <div className="h-[40vh] bg-[#e6e6e694] text-[#475467] px-5 md:px-16 flex flex-col justify-evenly">
     <div>
        {/* <img
        alt="man working on solar panel"
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
      /> */}

      </div>
      <motion.div
        variants={fadeIn("left", 0.9, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true}}
      
      ><img src={logo}/></motion.div>
      <section className="flex flex-wrap justify-between">
        <motion.button
         variants={stagger(1,0,-50)}
         initial = "initial"
         whileInView={"visible"}
         viewport={{
          once:true
        }}
        >About us</motion.button>
        <motion.button
          variants={stagger(1,0,-50)}
         initial = "initial"
         whileInView={"visible"}
         viewport={{
          once:true
        }}
        >Privacy and Policy</motion.button>
        <motion.button
          variants={stagger(2,0,-50)}
         initial = "initial"
         whileInView={"visible"}
         viewport={{
          once:true
        }}
        >Services</motion.button>
        <motion.button
          variants={stagger(3,0,-50)}
         initial = "initial"
         whileInView={"visible"}
         viewport={{
          once:true
        }}
        >Terms of Service</motion.button>
        <motion.button
          variants={stagger(4,0,-50)}
         initial = "initial"
         whileInView={"visible"}
         viewport={{
          once:true
        }}
        >Contact Us </motion.button>
      </section>
      <section className="socialMedia"></section>
      <motion.p
        variants={stagger(5,0,-50)}
        initial = "initial"
        whileInView={"visible"}
        viewport={{
         once:true
       }}
      >© 2024 Pawafrique. All rights reserved.</motion.p>
    </div>
  );
};

export default Footer;
