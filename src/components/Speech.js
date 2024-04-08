import React from "react";
import LeftCon from "./container/LeftCon";
import RightCon from "./container/RightCon";

const Speech = () => {
  return (
    <div className="flex mx-[10rem] mt-[7rem] space-x-[4rem]">
      <LeftCon />
      <RightCon />
    </div>
  );
};

export default Speech;
