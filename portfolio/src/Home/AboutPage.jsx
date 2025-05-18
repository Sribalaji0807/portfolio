import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import profile from '../assets/profile.jpg';
import { useThemeContext } from '../Context/ThemeContext';
const AboutPage = () => {
    const {theme, toggleTheme} = useThemeContext();
  return (
    <div className={`w-screen h-screen ${theme==='light' ? 'bg-white' : 'bg-black'} pt-20 flex flex-col justify-center`}>
 <h1 className={`text-3xl font-bold text-center ${theme==='light' ? 'text-black' : 'text-white'} dark:text-white relative top-25`}>
    About me
  </h1><div className={`w-full h-full ml-10 flex justify-center items-center ${theme==='light'? 'text-black' : 'text-white'}`} >
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
            <h2 className='text-2xl font-bold'>SRIBALAJI</h2>
            <h3 className='text-md'>Full Stack Developer</h3>
            <div className='flex flex-row gap-3'>

<a href="https://www.linkedin.com/in/sribalaji0807/" target='_blank'>
              <FaLinkedin color={`${theme==='light' ? 'black' : 'white'}`} size={20} /> 

</a>
           <a href="https://github.com/Sribalaji0807" target='_blank'>
            <FaGithubSquare size={20} />

           </a>

            </div>
            <div >
                <p className='text-md text-justify w-72'>
              I am a Computer Science graduate specializing in full stack development using the MERN stack, Java/Spring Boot, and Flutter. I enjoy solving complex problems with clean, efficient code and building seamless user experiences across web and mobile platforms.

      
                    </p>            </div>
            <button className={`text-md ${theme==='light' ? 'bg-black' : 'bg-blue-500'} text-white py-2 px-4 rounded-xl`}>Resume</button>
        </div>
       
    </div>
</div>


    </div>
  )
}

export default AboutPage