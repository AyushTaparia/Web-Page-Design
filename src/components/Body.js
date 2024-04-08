import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-10 lg:mx-[10rem]">
      <div className="flex items-center mx-5 md:mx-3 my-4 cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} className="text-blue-light" />
        <p className="ml-2 font-medium text-blue-light">Donate with PayPal</p>
      </div>
      <div className="relative">
        <img
          src="images/bkgr.jpg"
          alt="bg"
          className="h-[25vh] md:h-[35vh] lg:h-[45vh] w-full md:w-[80rem] lg:w-full rounded-tl-3xl rounded-tr-3xl shadow-md"
          style={{objectFit: 'cover'}}
        />
        <div className="absolute bottom-0 left-2 md:left-4 transform -translate-y-[-50%] w-20 md:w-32 h-20 md:h-32 rounded-full bg-white flex justify-center items-center">
          <img
            src="images/theatre.jpg"
            alt="content"
            className="w-[6vh] md:w-[10vh] h-[6vh] md:h-[10vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
