import React from "react";

const Footer = () => {
  return (
    <div className=" lg:flex justify-around text-xs md:text-sm p-8 relative">
      <a href="https://www.dailylottery777.com">
        <div className="flex  items-center  text-gray-300   w-40 m-auto lg:w-0  lg:m-0 ">
          <i className="fa-solid fa-globe mr-2 "></i>
          <p>www.dailylottery777.com</p>
        </div>
      </a>

      <a href="https://www.instagram.com/dailylottery_777">
        <div className="flex items-center text-gray-300 py-1 lg:py-0 w-40 lg:w-0 m-auto lg:m-0 ">
          <i className="fa-brands fa-instagram mr-2"></i>
          <p>@dailylottery_777</p>
        </div>
      </a>

      <a href="https://Wa.me/+917399466666"> 
      <div className="flex items-center text-gray-300  w-40 lg:w-0 m-auto lg:m-0 ">
        <i className="fa-brands fa-whatsapp mr-2"></i>
        <p>+917399466666</p>
      </div>
      </a>
    </div>
  );
};

export default Footer;
