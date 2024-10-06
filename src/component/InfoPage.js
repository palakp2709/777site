import React, { useState } from "react";
import Managerlogo from "./Managerlogo";

import Bookmakerlogo from "./Bookmakerlogo";
import data1 from "../Data/data1";
import data3 from "../Data/data3";
import data2 from "../Data/data2";
import data4 from "../Data/data4";
import data5 from "../Data/data5";
import managerData from "../Data/managerData";

const InfoPage = () => {
  // data1
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data1.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data1.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // data2
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const prevSlide1 = () => {
    const isFirstSlide = currentIndex1 === 0;
    const newIndex = isFirstSlide ? data2.length - 1 : currentIndex1 - 1;
    setCurrentIndex1(newIndex);
  };

  const nextSlide1 = () => {
    const isLastSlide = currentIndex1 === data2.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex1 + 1;
    setCurrentIndex1(newIndex);
  };

  // data3
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const prevSlide2 = () => {
    const isFirstSlide = currentIndex2 === 0;
    const newIndex = isFirstSlide ? data3.length - 1 : currentIndex2 - 1;
    setCurrentIndex2(newIndex);
  };

  const nextSlide2 = () => {
    const isLastSlide = currentIndex2 === data3.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
    setCurrentIndex2(newIndex);
  };

  // data4
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const prevSlide3 = () => {
    const isFirstSlide = currentIndex3 === 0;
    const newIndex = isFirstSlide ? data4.length - 1 : currentIndex3 - 1;
    setCurrentIndex3(newIndex);
  };

  const nextSlide3 = () => {
    const isLastSlide = currentIndex3 === data4.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex3 + 1;
    setCurrentIndex3(newIndex);
  };

  // data5
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const prevSlide4 = () => {
    const isFirstSlide = currentIndex4 === 0;
    const newIndex = isFirstSlide ? data5.length - 1 : currentIndex4 - 1;
    setCurrentIndex4(newIndex);
  };

  const nextSlide4 = () => {
    const isLastSlide = currentIndex4 === data5.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex4 + 1;
    setCurrentIndex4(newIndex);
  };

  return (
    <div>
      {/* first row */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 lg:gap-6   md:gap-6 m-auto lg:w-[65rem]  mt-10 ">
        <div className="lg:flex justify-evenly  lg:w-[65rem]  m-auto lg:m-0 mt-8 lg:mt-0">
          <div className=" shadow-cyan-950 shadow-xl  m-auto  sm:w-64 rounded-md hover:shadow-gray-900 mt-10 lg:mt-0">
            <div>
              <Managerlogo
                image={managerData[0].image}
                info={managerData[0].info}
                contact={managerData[0].contact}
              />
            </div>

            <div className=" relative ">
              <i
                className="fa-solid fa-chevron-left absolute left-2 top-16 text-gray-400  "
                onClick={prevSlide}
              ></i>
              <i
                className="fa-solid fa-chevron-right absolute right-2 top-16 text-gray-400 "
                onClick={nextSlide}
              ></i>
            </div>

            <div>
              <Bookmakerlogo
                image={data1[currentIndex].image}
                info={data1[currentIndex].info}
                contact={data1[currentIndex].contact}
              />
            </div>
          </div>

          <div className="shadow-cyan-950 shadow-xl w-56  m-auto sm:w-64 rounded-md hover:shadow-gray-900 mt-10 lg:mt-0">
            <div>
              <Managerlogo
                image={managerData[1].image}
                info={managerData[1].info}
                contact={managerData[1].contact}
              />
            </div>

            <div className=" relative ">
              <i
                className="fa-solid fa-chevron-left absolute left-2 top-16 text-gray-400 "
                onClick={prevSlide1}
              ></i>
              <i
                className="fa-solid fa-chevron-right absolute right-2 top-16 text-gray-400"
                onClick={nextSlide1}
              ></i>
            </div>

            <div>
              <Bookmakerlogo
                image={data2[currentIndex1].image}
                info={data2[currentIndex1].info}
                contact={data2[currentIndex1].contact}
              />
            </div>
          </div>

          <div className="shadow-cyan-950 shadow-xl w-56  m-auto  sm:w-64 rounded-md hover:shadow-gray-900 mt-10 lg:mt-0">
            <div>
              <Managerlogo
                image={managerData[2].image}
                info={managerData[2].info}
                contact={managerData[2].contact}
              />
            </div>

            <div className=" relative ">
              <i
                className="fa-solid fa-chevron-left absolute left-2 top-16 text-gray-400  "
                onClick={prevSlide2}
              ></i>
              <i
                className="fa-solid fa-chevron-right absolute right-2 top-16 text-gray-400 "
                onClick={nextSlide2}
              ></i>
            </div>

            <div>
              <Bookmakerlogo
                image={data3[currentIndex2].image}
                info={data3[currentIndex2].info}
                contact={data3[currentIndex2].contact}
              />
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 lg:gap-6   md:gap-6 m-auto lg:w-[55rem]  mt-10 ">
        <div className="lg:flex justify-evenly  lg:w-[55rem]  m-auto lg:m-0 mt-8 lg:mt-0">
          <div className=" shadow-cyan-950 shadow-xl  m-auto  sm:w-64 rounded-md hover:shadow-gray-900 mt-10 lg:mt-0">
            <div>
              <Managerlogo
                image={managerData[3].image}
                info={managerData[3].info}
                contact={managerData[3].contact}
              />
            </div>

            <div className=" relative ">
              <i
                className="fa-solid fa-chevron-left absolute left-2 top-16 text-gray-400  "
                onClick={prevSlide3}
              ></i>
              <i
                className="fa-solid fa-chevron-right absolute right-2 top-16 text-gray-400 "
                onClick={nextSlide3}
              ></i>
            </div>

            <div>
              <Bookmakerlogo
                image={data4[currentIndex3].image}
                info={data4[currentIndex3].info}
                contact={data4[currentIndex3].contact}
              />
            </div>
          </div>

          <div className="shadow-cyan-950 shadow-xl w-56  m-auto  sm:w-64 rounded-md hover:shadow-gray-900 mt-10 lg:mt-0">
            <div>
              <Managerlogo
                image={managerData[4].image}
                info={managerData[4].info}
                contact={managerData[4].contact}
              />
            </div>

            <div className=" relative ">
              <i
                className="fa-solid fa-chevron-left absolute left-2 top-16  text-gray-400 "
                onClick={prevSlide4}
              ></i>
              <i
                className="fa-solid fa-chevron-right absolute right-2 top-16 text-gray-400"
                onClick={nextSlide4}
              ></i>
            </div>

            <div>
              <Bookmakerlogo
                image={data5[currentIndex4].image}
                info={data5[currentIndex4].info}
                contact={data5[currentIndex4].contact}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
