import React from "react";

const Menu = ({ items }) => {
  return (
    <ul className="flex flex-wrap md:flex-row text-blue-dark font-bold">
      {items.map((item, index) => (
        <li key={index} className="hover:scale-105 cursor-pointer pr-5">
          {item}
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  const footItems1 = [
    "Help",
    "Contact",
    "Fees",
    "Security",
    "Apps",
    "Shop",
    "Enterprise",
    "Partners",
  ];

  const footItems2 = [
    "About",
    "Newsroom",
    "Jobs",
    "Investor Relations",
    "Values in Action",
    "Public Policy",
    "Sitemap",
  ];

  const footItems3 = ["Accessibilty", "Privacy", "Cookies", "Legal"];

  return (
    <div className="px-4 md:px-5 pb-8 md:pb-[2rem]">
      <img
        src="images/paypal.svg"
        alt="PayPal Logo"
        className="w-24 h-24 md:w-[10rem] md:h-[10rem]"
      />
      <div className="flex flex-col md:flex-row md:justify-between">
        <Menu items={footItems1} />
        <img src="images/us.png" alt="us icon" className="hidden md:block" />
      </div>
      <hr className="my-4 border-gray-400" />
      <div className="flex flex-col md:flex-row md:justify-between">
        <Menu items={footItems2} />
        <div className="flex flex-col mt-5 md:mt-0 md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-6">
          <p className="text-gray-500">© 1999-2022</p>
          <Menu items={footItems3} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
