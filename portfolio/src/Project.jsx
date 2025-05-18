import React from 'react'
import Curious from './assets/CuriousJ.jpg'
import ecommerce from './assets/ecommerce logo.jpg'
import Crowdfunding from './assets/_crowdfunding logo.jpg'
import { useThemeContext } from './Context/ThemeContext'

const Project = () => {
  const {theme}=useThemeContext();
  const projects=[
  {
    "name":"Curious J Blog",
    "image":Curious,
    "link":"https://github.com/Sribalaji0807/Blog_web"
  },
  {
    "name":"Ecommerce",
    "image":ecommerce,
    "link":"https://github.com/Sribalaji0807/testhub/tree/master"
  },
  {
    "name":"Crowdfunding",
    "image":Crowdfunding,
    "link":"https://github.com/Sribalaji0807/Campaign"
  },
  {
    "name":"ChatApp",
    "image":"https://plus.unsplash.com/premium_photo-1720032304972-1f1142e73253?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    "link":"https://github.com/Sribalaji0807/chatapp/tree/master"
  }
  ]
  return (
    <div className='w-screen mt-30 sm:mt-0 h-screen flex flex-col justify-center items-center gap-10  '>
        <h1 className='text-3xl font-bold'>PROJECTS</h1>
        <div className='flex flex-col sm:flex-row justify-center gap-7 flex-wrap'>
     {projects.map((project,index)=>(
       <>
          <a href={project.link} target='_blank'>
        <div className=' flex flex-col justify-center items-center hover:scale-110 hover:duration-500 hover:ease-in '>
            <img src={project.image} className={`w-64 h-48 object-cover rounded hover:shadow-2xl ${theme==='light'?'hover:shadow-white':'hover:shadow-black'}`}  alt="" />
            <h2 className=''>{project.name}</h2>
            
           </div>
        </a>
       </>
     ))}    
        </div>
    </div>
  )
}

export default Project