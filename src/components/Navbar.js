import React, { useState } from "react";

const Navbar = () => {
  const navItems = [
    { name: "Personal", link: "#" },
    { name: "Business", link: "#" },
    { name: "Developer", link: "#" },
    { name: "Help", link: "#" },
  ];

  // State to track whether the mobile menu is open or closed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white p-5 flex justify-between items-center shadow-lg">
        <div className="text-gray-800 text-lg flex items-center">
          <img
            src="images/ppicon.png"
            alt="paypal icon"
            className="w-[2rem] h-[2rem] mr-4 md:mr-[5rem]"
          />
          {/* Responsive navigation */}
          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-blue-dark mr-4 md:pr-[3rem] hover:text-blue hover:scale-105 hover:font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {/* Buttons for both desktop and mobile views */}
        <div className="flex">
          <button className="hidden md:block border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full mr-2">
            My PayPal
          </button>
          <button className="hidden md:block border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full mr-2">
            Logout
          </button>
          {/* Mobile menu button */}
          <button
            className="md:hidden border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            Menu
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 text-end">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-blue-dark my-2 hover:text-blue hover:font-medium"
            >
              {item.name}
            </a>
          ))}
          <div className="space-x-2">
            <button className="border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full my-2">
              My PayPal
            </button>
            <button className="border border-blue text-blue border-solid border-2 hover:text-white hover:bg-blue font-bold py-2 px-4 rounded-full my-2">
              Logout
            </button>
          </div>
        </div>
      )}
      <hr className="border-gray-300 mb-4" />
    </div>
  );
};

export default Navbar;
