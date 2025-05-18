import React from "react";
import { useThemeContext } from "./Context/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
const Navbar = ({ scrollToSection }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
   <nav className="fixed top-0 left-0 w-screen bg-gray-800 text-white py-4 shadow-md z-50 flex items-center flex-wrap justify-between px-10">
  <h1 className="text-2xl font-bold">Portfolio</h1>
  <ul className="flex space-x-6 relative top-4 ">
    <li>
      <button onClick={() => scrollToSection("home")} className="hover:text-gray-300">
        Home
      </button>
    </li>
     <li>
      <button onClick={() => scrollToSection("about")} className="hover:text-gray-300">
        About
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("project")} className="hover:text-gray-300">
        Projects
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("skills")} className="hover:text-gray-300">
        Skills
      </button>
    </li>
    <li>
         <button onClick={toggleTheme} className='relative bottom-3  w-12  h-12 '>
                      {theme==='light'?<MdOutlineWbSunny size={20} />:<FaRegMoon color='white' size={20} />
                  }
                  </button>
    </li>
  </ul>
</nav>

  );
};

export default Navbar;
