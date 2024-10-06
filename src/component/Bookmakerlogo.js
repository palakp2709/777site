import React from "react";

const Bookmakerlogo = ({ image, info, contact }) => {
  return (
    <div>
      <div className="flex  relative  h-20 py-2">
      
          <img
            src={image}
            alt="img"
            className="w-14  rounded-full h-14 z-10 absolute left-9 "
          />
       

        
          <a href={`https://Wa.me/+91${contact}`}>
       
          <p className="h-10 w-36  text-center text-[0.7rem] top-4 left-20 bg-red-900  text-white absolute  rounded-r-full ">
              <span className="font-semibold text-[0.85rem]  "> {info} </span>
              <br />
              <i className="fa-brands fa-whatsapp "></i>{" "}
              <span className="">+91{contact}</span>
            </p>
         
           
          </a>
       
      </div>
    </div>
  );
};

export default Bookmakerlogo;
