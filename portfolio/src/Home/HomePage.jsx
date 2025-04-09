import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import profile from '../assets/profile.jpg';
import { useThemeContext } from '../Context/ThemeContext';
const HomePage = () => {
    const {theme, toggleTheme} = useThemeContext();
  return (
    <div className={`w-[100vw] h-[100vh] ${theme==='light' ? 'bg-white' : 'bg-black'} `}>
<div className={`w-full h-full flex justify-center items-center ${theme==='light'? 'text-black' : 'text-white'}`} >
    <div className='flex flex-col sm:flex-row sm:flex-row-reverse jusitify-center items-center'>
    <div className='flex flex-col  items-center gap-3 mt-20 sm:mt-0 sm:p-30 p-10'>
            <button onClick={toggleTheme} className='relative left-20 w-12  h-12 '>
                {theme==='light'?<MdOutlineWbSunny size={20} />:<FaRegMoon color='white' size={20} />
            }
            </button>
            <div className=''>
                <img src={profile} className='w-[200px] h-[200px] object-cover rounded-full' alt="Sribalaji image" />
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='text-3xl font-bold'>SRIBALAJI</h1>
            <h3 className='text-md'>Full Stack Developer</h3>
            <div className='flex flex-row gap-3'>

            <FaLinkedin color={`${theme==='light' ? 'black' : 'white'}`} size={20} /> 
           <a href="https://github.com/Sribalaji0807" target='_blank'>
            <FaGithubSquare size={20} />

           </a>

            </div>
            <div >
                <p className='text-center w-48'>specializing in the MERN stack with strong proficiency in Java. I have experience building scalable web applications</p>
            </div>
            <button className={`text-md ${theme==='light' ? 'bg-black' : 'bg-blue-500'} text-white py-2 px-4 rounded-xl`}>Resume</button>
        </div>
       
    </div>
</div>


    </div>
  )
}

export default HomePage