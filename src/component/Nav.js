import React from "react";

const Nav = () => {
  return (
    <nav className="px-5 md:px-16 py-5 h-[10vh] flex items-center justify-between">
      <div className="hidden lg:flex w-1/3 justify-between">
        <button>Home</button>
        <button>About us</button>
        <button>Services</button>
        <button>Portfolio</button>
      </div>
      <div className="w-1/3"><img alt="man working on solar panel" src={process.env.PUBLIC_URL + "/images/logo.svg"} /></div>
      <span className="text-[2rem] font-thin text-[#101828] lg:hidden">&#9776;</span>
      <button className="hidden border-2 px-4 py-2 border-[#FF0000] lg:flex">Contact Us</button>
    </nav>
  );
};

export default Nav;
