import React from "react";
import cards from "../BgImages/cards.png";
import badmintion from "../BgImages/badminton.png";
import ball from "../BgImages/ball.png";
import ball1 from "../BgImages/ball1.png";
import card from "../BgImages/card.png";
import cardspoker from "../BgImages/cardspoker.png";
import cricketer from "../BgImages/cricketer.png";
import download from "../BgImages/download.png";
import trophy from "../BgImages/trophy.png";
import trophy1 from "../BgImages/trophy1.png";

const Bg = () => {
  return (
    <div className="relative  h-[100%] ">
      <div className="absolute bottom-16 md:bottom-10 right-6 sm:right-3 rotate-12  ">
        <img src={cards} alt="img" className="h-16 sm:h-28 md:h-36 " />
      </div>

      <div className="absolute  bottom-12 sm:bottom-14 -rotate-45 -left-4 sm:-left-9 ">
        <img src={ball} alt="img" className="h-20 sm:h-28 md:h-32 " />
      </div>

      <div className="absolute   top-8 -rotate-45 left-16 md:left-24 ">
        <img src={ball1} alt="img" className="h-14 sm:h-20 md:h-24 " />
      </div>

      <div className="absolute  bottom-0 sm:bottom-40 right-0">
        <img src={trophy} alt="img" className="h-16 sm:h-20 md:h-24 " />
      </div>

      

      <div className="absolute bottom-0 sm:left-16 lg:left-11">
        <img src={cricketer} alt="img" className="h-10 sm:h-10 md:h-14 " />
      </div>


      <div className="absolute bottom-32 md:left-16  ">
        <img src={ball1} alt="img" className="h-20 sm:h-28 md:h-32 " />
      </div>

      <div className="absolute -top-10 -left-6 pt-2 md:top-4 md:-rotate-45 md:-left-4">
        <img src={card} alt="img" className="h-24 sm:h-28 md:h-40 " />
      </div>

      <div className="absolute right-2  top-[73rem] sm:top-[70rem] md:hidden -rotate-12 ">
        <img src={cardspoker} alt="img" className="h-12 sm:h-20 md:h-32 " />
      </div>

      <div className="absolute  rotate-45 bottom-72 sm:bottom-80 -left-6 ">
        <img src={cardspoker} alt="img" className="h-16 sm:h-20 md:h-32 " />
      </div>

      <div className="absolute  left-0 -rotate-12 top-2 ">
        <img src={download} alt="img" className="h-14 sm:h-16 md:h-20 " />
      </div>

      <div className="absolute  top-32  ">
        <img src={badmintion} alt="img" className="h-16 sm:h-20" />
      </div>

      <div className="absolute   right-0 top-96 -rotate-90">
        <img src={badmintion} alt="img" className="h-10 sm:h-20" />
      </div>

      <div className="absolute left-1 sm:left-6 bottom-48 sm:bottom-40 -rotate-12 ">
        <img src={trophy1} alt="img" className="h-12 sm:h-20 md:h-24 " />
      </div>

      <div className="absolute  p-2  right-0 ">
        <img src={trophy1} alt="img" className="h-14 sm:h-16 md:h-20   " />
      </div>
    </div>
  );
};

export default Bg;
