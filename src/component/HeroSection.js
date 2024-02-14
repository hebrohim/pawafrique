import React from "react";
import headerImage from "./images/manHeader.svg"
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.div  className="px-5 md:px-16 hero flex flex-col md:flex-row ">
      <section className="my-auto pt-5">
        <h2 className="font-semibold text-3xl lg:text-5xl ">
          <span className="text-[#FF0000] inline-block md:block">Pawafrique</span>
          <span className="font-normal text-[#101828] inline-block">
            Empowering Through
          </span>
          <span className="text-[#FF0000] inline-block">Sustainable Energy</span>
        </h2>

        <p className="text-[#475467] my-4">
          Experience how Pawafrique delivers cost-competitive, eco-friendly, and
          high-quality energy products and services across Nigeria
        </p>

        <button className="w-full py-3 bg-[#FF0000] text-white rounded-lg md:w-1/2">
          Explore Our Services
        </button>
      </section>

      <section className="my-10">
        <img
          src={headerImage}
          alt="Illustration of a man"
          className="mx-auto opacity-[0.7]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </section>
    </motion.div>
  );
};

export default HeroSection;
