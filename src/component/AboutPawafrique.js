import React from "react";
import about_pawafrique from "./images/aboutPawafrique.svg"
const AboutPawafrique = () => {
  return (
    <div className="px-5 md:px-16  hidden lg:block bg-[#e6e6e694]">
      <h4 className="text-[#FF0000] font-medium">About Pawafrique </h4>
      <h1 className="text-[#101828] text-2xl font-semibold mb-4">
      Lighting Nigeria's Future with Reliable Energy Solutions
      </h1>
      <p className="text-[#475467]">
      Since 2019, Pawafrique has been lighting up Nigeria with reliable and sustainable energy solutions, earning glowing 5-star project feedback and fostering unwavering trust among our diverse clients
      </p>
      <div>
        <section className="flex items-center py-10">
          <img src={about_pawafrique}/>
          <div className="records lg grid grid-cols-2 gap-[30px] ml-10 ">
            <div className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">400+</h1>
              <h4 className="text-[#101828] font-semibold">Projects completed</h4>
              <p className="text-[#475467] text-xs">Lighting the way with a portfolio of 400+ completed ventures.</p>
            </div>

            <div className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">300+</h1>
              <h4 className="text-[#101828] font-semibold">Satisfied Clients</h4>
              <p className="text-[#475467] text-xs">Building trust among our satisfied customers across Nigeria.</p>
            </div>


            <div className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">200+</h1>
              <h4 className="text-[#101828] font-semibold">5-Star Reviews</h4>
              <p className="text-[#475467] text-xs">Reflecting our dedication to excellence with glowing reviews.</p>
            </div>


            <div className="text-center">
              <h1 className="text-[#FF0000] font-semibold text-3xl ">2019</h1>
              <h4 className="text-[#101828] font-semibold">Years of Service</h4>
              <p className="text-[#475467] text-xs">Proudly serving Nigeria's energy needs for over 4 years</p>
            </div>

            
          </div>
        </section>
      </div>
      </div>
  );
};

export default AboutPawafrique;
