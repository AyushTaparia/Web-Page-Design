import React from "react";
import LeftCon from "./container/LeftCon";
import RightCon from "./container/RightCon";

const Speech = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-[10rem] mt-4 md:mt-[7rem] md:space-x-8">
      <LeftCon />
      <RightCon />
    </div>
  );
};

export default Speech;
