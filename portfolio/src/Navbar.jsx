import React from "react";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 shadow-md z-50">
      <ul className="flex justify-center space-x-6">
        <li><button onClick={() => scrollToSection("home")} className="hover:text-gray-300">Home</button></li>
        <li><button onClick={() => scrollToSection("project")} className="hover:text-gray-300">Projects</button></li>
        <li><button onClick={() => scrollToSection("skills")} className="hover:text-gray-300">Skills</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
