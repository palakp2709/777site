import React from "react";

const Managerlogo = ({ image, info, contact }) => {
  return (
    <div className=" ">

      <div>
        <img
          src={image}
          className="  w-56 h-36  z-10 rounded-md mt-2 m-auto"
          alt="img"
        />
      </div>

      <div className="py-2">
        <a href={`https://Wa.me/+91${contact}`}>
          <p className="text-center font-semibold text-white ">
            Manager : {info}
          </p>
          <p className="text-center font-normal text-white text-sm">
            <i className="fa-brands fa-whatsapp "></i> +91{contact}
          </p>
        </a>
      </div>

    </div>
  );
};

export default Managerlogo;
