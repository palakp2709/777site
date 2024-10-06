import React from "react";

const Bookmakerlogo = ({ image, info, contact }) => {
  return (
    <div>
      <div className="flex  relative mt-20  h-20">
        <img
          src={image}
          alt="img"
          className="w-14 rounded-full h-14 z-10 absolute left-6 sm:left-8 -top-1"
        />
        <a href={`https://Wa.me/+91${contact}`}>
        <p className="h-11 w-32  sm:w-36 text-center bg-red-900  text-white absolute text-xs sm:text-sm rounded-r-full   left-16 pt-1 sm:pt-0">
          <span className="font-semibold   "> {info} </span>
          <br/><i className="fa-brands fa-whatsapp text-[0.7rem] sm:text-xs"></i>{" "}
          <span className="text-[0.7rem] sm:text-xs">{contact}</span>
        </p>
        </a>
      </div>
    </div>
  );
};

export default Bookmakerlogo;
