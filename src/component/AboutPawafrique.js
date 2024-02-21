import React from "react";
import about_pawafrique from "./images/aboutPawafrique.svg"
import { motion } from "framer-motion";
import { stagger } from "./Variants";
const AboutPawafrique = () => {
  return (
    <motion.div id="About" className="pt-5 px-5 md:px-16  hidden lg:block bg-[#e6e6e694]">
      <motion.h4 
      variants={stagger(2,-50,0)}
    initial = "initial"
    whileInView={"visible"}
    viewport={{
      once:true,
      
    }}
      className="text-[#FF0000] font-medium">About Pawafrique </motion.h4>
      <motion.h1
      variants={stagger(6,-50,0)}
    initial = "initial"
    whileInView={"visible"}
    viewport={{
      once:true
    }}
     className="text-[#101828] text-2xl font-semibold mb-4">
      Lighting Nigeria's Future with Reliable Energy Solutions
      </motion.h1>
      <motion.p 
       variants={stagger(8,-50,0)}
       initial = "initial"
       whileInView={"visible"}
       viewport={{
         once:true
       }}
      className="text-[#475467]">
      Since 2019, Pawafrique has been lighting up Nigeria with reliable and sustainable energy solutions, earning glowing 5-star project feedback and fostering unwavering trust among our diverse clients
      </motion.p>
      <div>
        <section className="flex items-center py-10">
          <motion.img
           variants={stagger(10,-50,0)}
           initial = "initial"
           whileInView={"visible"}
           viewport={{
             once:true
           }}
          src={about_pawafrique}/>
          <div className="records lg grid grid-cols-2 gap-[30px] ml-10 ">
            <motion.div 
             variants={stagger(12,0,-50)}
             initial = "initial"
             whileInView={"visible"}
             viewport={{
              once:true
            }}
            className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">400+</h1>
              <h4 className="text-[#101828] font-semibold">Projects completed</h4>
              <p className="text-[#475467] text-xs">Lighting the way with a portfolio of 400+ completed ventures.</p>
            </motion.div>

            <motion.div 
             variants={stagger(13,0,-50)}
             initial = "initial"
             whileInView={"visible"}
             viewport={{
              once:true
            }}
            className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">300+</h1>
              <h4 className="text-[#101828] font-semibold">Satisfied Clients</h4>
              <p className="text-[#475467] text-xs">Building trust among our satisfied customers across Nigeria.</p>
            </motion.div>


            <motion.div 
             variants={stagger(14,0,-50)}
             initial = "initial"
             whileInView={"visible"}
             viewport={{
              once:true
            }}className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">200+</h1>
              <h4 className="text-[#101828] font-semibold">5-Star Reviews</h4>
              <p className="text-[#475467] text-xs">Reflecting our dedication to excellence with glowing reviews.</p>
            </motion.div>


            <motion.div 
             variants={stagger(15,0,-50)}
             initial = "initial"
             whileInView={"visible"}
             viewport={{
              once:true
            }}
            className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">2019</h1>
              <h4 className="text-[#101828] font-semibold">Years of Service</h4>
              <p className="text-[#475467] text-xs">Proudly serving Nigeria's energy needs for over 4 years</p>
            </motion.div>

            
          </div>
        </section>
      </div>
      </motion.div>
  );
};

export default AboutPawafrique;
