import React from "react";
import logo from "./images/logo.svg";
import { animate, motion } from "framer-motion";
import { fadeIn } from "./Variants";
const Nav = () => {
  //ANIMATION STARTS HERE
  // const navBarAnimation = {
  //   hidden: { y: -300 },
  //   visible: { y: 0, transition: { type: "spring", stiffness: 300 } },
  // };

  // const navContentAnimation = {
  //   hidden: { y: -300 },
  //   visible: {
  //     y: 0,
  //     transition: { type: "spring", duration: 1, stiffness: 500 },
  //   },
  // };

  // // BUTTON ANIMATION
  // const buttonAnimation = {
  //   whileHover: { scale: 1.1, boxShadow: "0px 0px 10px black", originX: 0 },
  //   transition: { type: "spring", stiffness: 300 },
  // };

 

  //ANIMATION ENDS HERE

  return (
    <motion.nav  
    variants={fadeIn("down",0.2,2)}
    initial = "hidden"
    animate="show"
    // viewport={{once:false,amount:0.7}}
    className="px-5 md:px-16 py-5 h-[10vh] flex items-center justify-between">
      <motion.div
        
        className="hidden lg:flex w-1/3 justify-between"
      >
        <button>Home</button>
        <button>About us</button>
        <button>Services</button>
        <button>Portfolio</button>
      </motion.div>
      <motion.div className="w-1/3">
        <img alt="company logo" src={logo} />
      </motion.div>
      <motion.span
        initial={{ x: 100, opacity: 0, rotate: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 360 }}
        className="text-[2rem] font-thin text-[#101828] lg:hidden"
      >
        &#9776;
      </motion.span>
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="hidden border-2 px-4 py-2 border-[#FF0000] lg:flex"
      >
        Contact Us
      </motion.button>
    </motion.nav>
  );
};

export default Nav;
