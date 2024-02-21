import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
const ContactUs = () => {
  return (
    <div id="Contact" className="my-10 px-5 md:px-16">
      
      <motion.h2
        variants={fadeIn("right", 0.9, 1)}
        initial="hidden"
        // animate="show"
        whileInView={"show"}
         viewport={{once:true}}

      className="text-[#101828] font-semibold text-2xl">Contact us</motion.h2>
      <motion.p
      variants={fadeIn("right", 1.2, 1)}
      initial="hidden"
      // animate="show"
      whileInView={"show"}
      viewport={{once:true}}

      className="text-[#475467] text-sm text-justify">
        Our team is here to assist you!
      </motion.p>
      <motion.form
        variants={fadeIn("right", 1.5, 1)}
        initial="hidden"
        // animate="show"
        whileInView={"show"}
        viewport={{once:true}}
      className="flex flex-col mt-10 ">
        <label>Full name</label>
        <input placeholder="enter full name" className="mb-2 border p-2 rounded-md"/>

        <label>Email</label>
        <input placeholder="Enter email" className="mb-2 border p-2 rounded-md"/>

        <label>Phone number</label>
        <input placeholder="Enter email" className="mb-2 border p-2 rounded-md"/>

        <label>Message</label>
        <textarea className="border p-2" placeholder="Leave us a mesage...  "/>
        <div className="flex flex-wrap justify-between mt-5 mb-8">
   <input type="checkbox"/>
   <span className="text-[#475467]">You agree to our friendly privacy policy.</span>
   </div>
     <button className="bg-[#FF0000] text-white rounded-md py-4"> send message</button>
      </motion.form>
    </div>
  );
};

export default ContactUs;
