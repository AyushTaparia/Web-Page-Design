import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const RightCon = () => {
  return (
    <div className="w-2/5 mt-5 space-y-5">
      <div className="flex flex-row space-x-5">
        {["$25", "$50", "$100"].map((value, index) => (
          <div
            key={index}
            className="flex-grow rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-12 py-4 hover:bg-blue hover:text-white hover:scale-105 cursor-pointer transition-colors duration-300"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex flex-row space-x-5">
        {["$200", "Other"].map((value, index) => (
          <div
            key={index}
            className="rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-12 py-4 hover:bg-blue hover:text-white hover:scale-105 cursor-pointer transition-colors duration-300"
          >
            {value}
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <input type="checkbox" className="mr-2 w-5 h-5" />
        <label>Share my name and email with this charity.</label>
      </div>

      <button className="text-white border-solid border-2 bg-blue hover:bg-blue-700 hover:scale-105 font-medium py-2 px-4 rounded-full mr-4">
        Donate Now
      </button>

      <div className="ml-5">
        <ul className="list-disc">
          <li>PayPal covers all transaction fees.</li>
          <li>
            You're donating to PayPal Giving Fund, a 501(c)(3) charity,
            <span className="text-blue-700 font-medium">
              {" "}
              subject to its terms
            </span>
            .
          </li>
          <li>
            Donations can take{" "}
            <span className="text-blue-700 font-medium">up to 45 days</span> to
            get to your chosen charity. It's rare, but if{" "}
            <span className="text-blue-700 font-medium">
              we can't send your money to this charity
            </span>
            , we'll ask you to recommend another.
          </li>
          <li>
            If we can't reach you, we'll send it to a similar charity and keep
            you updated. Your donation is typically tax-deductible in the US.
          </li>
        </ul>
      </div>
      <div className="border border-2 rounded-2xl w-full h-[18rem] p-6 flex flex-col items-center space-y-5">
        <h1 className="font-bold text-lg">Share and inspire others</h1>
        <div className="flex flex-row space-x-5">
          <div className="w-[6vh] h-[6vh] hover:scale-105 cursor-pointer rounded-full bg-orange-50 flex justify-center items-center">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#130070" }} />
          </div>
          <div className="w-[6vh] h-[6vh] hover:scale-105 cursor-pointer rounded-full bg-orange-50 flex justify-center items-center">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#130070" }} />
          </div>
          <div className="w-[6vh] h-[6vh] hover:scale-105 cursor-pointer rounded-full bg-orange-50 flex justify-center items-center">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#130070" }} />
          </div>
        </div>

        <div className="w-full h-full bg-orange-50 p-6 flex justify-center items-center">
          <div className="flex flex-row items-center">
            <label className="break-all hover:text-blue cursor-pointer mr-7">
              https://www.paypal.com/US/fundraiser/charity/1279469
            </label>
            <button className="border border-blue text-blue bg-white border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full mt-4">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCon;
