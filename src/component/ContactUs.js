import React from "react";

const ContactUs = () => {
  return (
    <div className="my-10 px-5 md:px-16">
      
      <h2 className="text-[#101828] font-semibold text-2xl">Contact us</h2>
      <p className="text-[#475467] text-sm text-justify">
        Our team is here to assist you!
      </p>
      <form className="flex flex-col mt-10 ">
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
      </form>
    </div>
  );
};

export default ContactUs;
