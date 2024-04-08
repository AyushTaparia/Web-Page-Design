import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const LeftCon = () => {
  return (
    <div className="w-3/5 space-y-5">
      <p>
        Donate to PayPal Giving Fund
        <br />
        <span className="text-5xl">Figures of Speech Theatre</span>
      </p>
      <div className=" w-[16vh] h-8 rounded-full bg-blue-200 flex justify-center items-center hover:scale-105">
        <label className="text-blue text-sm">Arts & culture</label>
      </div>
      <p>
        Freedom, ME
        <br />
        EIN: 01-0432620
      </p>
      <div className="flex flex-row space-x-3">
        <div className="w-[5vh] h-[5vh] hover:scale-105 cursor-pointer rounded-full bg-orange-50 flex justify-center items-center">
          <FontAwesomeIcon icon={faCreditCard} style={{ color: "#130070" }} />
        </div>
        <div className="w-[5vh] h-[5vh] hover:scale-105 cursor-pointer rounded-full bg-orange-50 flex justify-center items-center">
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ff3300" }} />
        </div>
      </div>
      <p className="">
        Figures of Speech Theatre creates and tours visionary works of
        performance forged at the intersection of poetry, music, sculpture and
        dance. The company has toured all over the world - from Sofia, Bulgaria
        to Tokyo, Japan, to Lima, Peru. Besides performing at venues such as the
        Kennedy Center, the Smithsonian Institution, and the New Victory Theatre
        on Broadway, the company retains a strong commitment to teaching and
        performing throughout its home state of Maine.
      </p>
      <p className="text-sm">Source: PayPal Giving Fund charity profile</p>
      <p className="text-sm text-gray-600">
        The info in this profile is provided and managed by the charities
        themselves.
      </p>
    </div>
  );
};

export default LeftCon;
