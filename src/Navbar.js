import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const navItems = [
    { name: "Personal", link: "#" },
    { name: "Business", link: "#" },
    { name: "Developer", link: "#" },
    { name: "Help", link: "#" },
  ];

  return (
    <div>
      <nav className="bg-white p-5 flex justify-between items-center shadow-lg">
        <div className="text-gray-800 text-lg flex items-center">
          <img
            src="images/ppicon.png"
            alt="paypal icon"
            className="w-[2rem] h-[2rem] mr-[3.5rem]"
          />
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-blue-dark mr-[6vh] hover:text-blue hover:scale-105 hover:font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <button className="border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full mr-4">
            My PayPal
          </button>
          <button className="border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full">
            Logout
          </button>
        </div>
      </nav>
      <hr className="border-gray-300 mb-4" />
    </div>
  );
};

export default Navbar;
