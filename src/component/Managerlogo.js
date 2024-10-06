import React from "react";

const Managerlogo = ({ image, info, contact }) => {
  return (
    <div>
      <div className="  relative h-full ">
        <img
          src={image}
          className="w-48 h-32 sm:w-52 sm:h-36  z-10 rounded-md mt-2 m-auto"
          alt="img"
        />

        <a href={`https://Wa.me/+91${contact}`}>
          <p className=" text-sm sm:text-md text-center z-10 absolute text-gray-300 py-2 w-full ">
            <span className="font-semibold ">
              Manager : {info}{" "}
            </span>
            <br /> <i className="fa-brands fa-whatsapp"></i>{" "}
            <span className="text-xs sm:text-sm ">
              {contact}
            </span>
          </p>
        </a>


      </div>
    </div>
  );
};

export default Managerlogo;
