import React from 'react'
import profile from '../assets/image (3).jpg'
import { useThemeContext } from '../Context/ThemeContext'

const HomePage = () => {
  const { theme } = useThemeContext()

  return (
    <div
      className={`w-screen h-screen flex flex-col justify-center items-center p-6 relative overflow-hidden ${
        theme === 'light'
          ? 'bg-gradient-to-br from-gray-100 to-gray-300'
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700'
      }`}
    >
      <svg
        className={`absolute top-10 left-10 w-48 h-48 filter drop-shadow-lg z-0 ${
          theme === 'light' ? 'text-white opacity-30' : 'text-cyan-400 opacity-20'
        }`}
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>

      <svg
        className={`absolute bottom-20 right-20 w-64 h-64 filter drop-shadow-2xl z-0 ${
          theme === 'light' ? 'text-white opacity-25' : 'text-indigo-400 opacity-20'
        }`}
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <rect width="100" height="100" rx="20" ry="20" />
      </svg>

      <div className="flex md:flex-row justify-between items-center gap-10 w-full max-w-4xl relative z-10">
        <div
          className={`text-center md:text-left space-y-2 ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          <h1 className="text-6xl font-bold transition-transform duration-300 hover:scale-105 rotate-[-5deg]">
            Hi
          </h1>
          <div className="flex items-center space-x-2">
            <h2 className="text-4xl font-medium transition-transform duration-300 hover:scale-105">
              I'm
            </h2>
            <h3 className="text-4xl font-medium transition-transform duration-300 hover:scale-105">
              Sribalaji
            </h3>
          </div>
          <p className="text-lg font-medium transition-transform duration-300 hover:scale-105 mt-2">
            Full Stack Developer
          </p>
        </div>
        <div className="w-1/3 h-auto px-3 sm:z-10 lg:z-0">
          <img
            src={profile}
            alt="Profile"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
