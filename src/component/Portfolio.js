import React from "react";
import { motion } from "framer-motion";
import { stagger } from "./Variants";
const Portfolio = (props) => {
  const { image, title, content ,id} = props;
  const newId = Number(id);
  
  return (
    <motion.div
    initial={{ opacity: 0, translateX: newId % 2 === 0 ? 0 : -50 ,translateY: newId % 2 === 0 ? -50 : 0 }}
    whileInView={{ opacity: 1, translateX: 0 ,translateY:0}}
    viewport={{
      once:true
    }}
    // animate = {{opacity:1,translateX:0}}
    transition={{ duration: 1, delay: newId * 0.3 }}
    >
      
      
      <img className = "w-full" alt="our Portfolio pictures" src={image} />
      <div className="mb-10 shadow-xl p-5 rounded-b-3xl lg:mb-0">
        <h4 className="my-2 text-[#101828] font-semibold text-xl ">{title}</h4>
        <p className="text-[#475467] text-sm text-justify">{content}</p>
      </div>
    </motion.div>
  );
};

export default Portfolio;







