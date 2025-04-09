import React from 'react'
import Curious from './assets/CuriousJ.jpg'
import ecommerce from './assets/ecommerce logo.jpg'
import Crowdfunding from './assets/_crowdfunding logo.jpg'
import { useThemeContext } from './Context/ThemeContext'

const Project = () => {
  const {theme}=useThemeContext();
  return (
    <div className='mt-10 sm:mt-0 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl font-bold'>PROJECTS</h1>
        <div className='flex flex-col sm:flex-row justify-center gap-3'>
        <a href="https://github.com/Sribalaji0807/Blog_web" target='_blank'>
        <div className=' flex flex-col justify-center items-center hover:scale-110 hover:duration-500 hover:ease-in '>
            <img src={Curious} className={`w-36 h-36 rounded hover:shadow-2xl ${theme==='light'?'hover:shadow-white':'hover:shadow-black'}`}  alt="" />
            <h2 className=''>Curious J</h2>
            <h3>Blog</h3>
           </div>
        </a>
         <a href="https://github.com/Sribalaji0807/testhub/tree/master" target='_blank'>
         <div className='flex flex-col justify-center items-center  hover:scale-110 hover:duration-500 hover:ease-in '>
           
           <img src={ecommerce} className='w-36 h-36 rounded hover:shadow-2xl'  alt="" />
           <h2 className=''>Ecommerce</h2>
           <h3>website</h3>
          </div>
         </a>
         <a href="https://github.com/Sribalaji0807/Campaign" target='_blank'>
           <div className='flex flex-col justify-center items-center  hover:scale-110 hover:duration-500 hover:ease-in '>
           
            <img src={Crowdfunding} className='w-36 h-36 rounded hover:shadow-2xl'  alt="" />
            <h2 className=''>Crowdfunding</h2>
            <h3>platform</h3>
           </div>
         </a>
       
        </div>
    </div>
  )
}

export default Project