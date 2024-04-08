import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <div className="flex flex-col mx-[10rem] ">
      <div className="flex items-center mx-[3rem] my-4 cursor-pointer">
        <FontAwesomeIcon icon={faArrowLeft} className="text-blue-light" />
        <p className="ml-2 font-medium text-blue-light">Donate with PayPal</p>
      </div>
      <div className="relative">
        <img
          src="images/bkgr.jpg"
          alt="bg"
          className=" h-[35vh] w-[80rem] rounded-tl-3xl rounded-tr-3xl shadow-md"
          style={{objectFit: 'cover'}}
        />
        <div className="absolute bottom-0 left-4 transform -translate-y-[-50%] w-32 h-32 rounded-full bg-white flex justify-center items-center">
          <img
            src="images/theatre.jpg"
            alt="content"
            className="w-[10vh] h-[10vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
