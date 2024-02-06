import React from "react";

const Portfolio = (props) => {
  const { image, title, content } = props;

  return (
    <div className="mb-10">
      <img className = "w-full" alt="our Portfolio pictures" src={process.env.PUBLIC_URL + image} />
      <div className="shadow-xl p-5 rounded-b-3xl ">
        <h4 className="my-2 text-[#101828] font-semibold text-xl ">{title}</h4>
        <p className="text-[#475467] text-sm text-justify">{content}</p>
      </div>
    </div>
  );
};

export default Portfolio;
