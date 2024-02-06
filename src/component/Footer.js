import React from "react";

const Footer = () => {
  return (
    <div className="h-[40vh] bg-[#e6e6e694] text-[#475467] px-5 md:px-16 flex flex-col justify-evenly">
     <div><img
        alt="man working on solar panel"
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
      />

      </div>
      <section className="flex flex-wrap justify-evenly">
        <button>About us</button>
        <button>Privacy and Policy</button>
        <button>Services</button>
        <button>Terms of Service</button>
        <button>Contact Us </button>
      </section>
      <section className="socialMedia"></section>
      <p>© 2024 Pawafrique. All rights reserved.</p>
    </div>
  );
};

export default Footer;