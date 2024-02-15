import React from "react";
import headerImage from "./images/manHeader.svg";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
const HeroSection = () => {


  
  return (
    <motion.div className="px-5 md:px-16 hero flex flex-col md:flex-row ">
      <motion.section
        //  viewport={{once:false,amount:0.7}}
        className="my-auto pt-5"
      >
        <h2 className="font-semibold text-3xl lg:text-5xl ">
          <motion.span
            variants={fadeIn("right", 0.9, 1)}
            initial="hidden"
            animate="show"
            className="text-[#FF0000] inline-block md:block"
          >
            Pawafrique
          </motion.span>
          <motion.span
            variants={fadeIn("right", 1.2, 1)}
            initial="hidden"
            animate="show"
            className="font-normal text-[#101828] inline-block"
          >
            Empowering Through
          </motion.span>
          <motion.span
           variants={fadeIn("right", 1.5, 1)}
           initial="hidden"
           animate="show"
          className="text-[#FF0000] inline-block">
            Sustainable Energy
          </motion.span>
        </h2>

        <motion.p
         variants={fadeIn("right", 1.8, 1)}
         initial="hidden"
         animate="show"
        className="text-[#475467] my-4">
          Experience how Pawafrique delivers cost-competitive, eco-friendly, and
          high-quality energy products and services across Nigeria
        </motion.p>

        <motion.button 
        variants={fadeIn("right", 2.1, 1)}
        initial="hidden"
        animate="show" 
        className="w-full py-3 bg-[#FF0000] text-white rounded-lg md:w-1/2">
          Explore Our Services
        </motion.button>
      </motion.section>

      <motion.section
        variants={fadeIn("left", 0.9, 1)}
        initial="hidden"
        animate="show"
        className="my-10"
      >
        <img
          src={headerImage}
          alt="Illustration of a man"
          className="mx-auto opacity-[0.7]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.section>
    </motion.div>
  );
};

export default HeroSection;
