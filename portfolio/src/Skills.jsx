import React from 'react'
import { TiTickOutline } from "react-icons/ti";
const Skills = () => {

    const skill=[
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Express',
        'SQL',
        'React Hooks',
        'Redux',
        'Java',
        'Spring Boot',
        'Python',
        'Git',
        'TypeScript',
        'Tailwind',
        'Solidity',
        'Next js'
    ]
    const chunkArray = (arr, size) =>
      arr.reduce(
        (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
        []
      );
  
    const skillChunks = chunkArray(skill, 5);
    console.log(skillChunks)

  return (
    <div className='mt-30 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold mb-4'>Skills</h1>
       <div className='w-48 flex flex-col justify-center items-center'>
       {skillChunks.map((chunk, index) => (
          <div key={index} className="flex flex-row items-center justify-center gap-3">
            {chunk.map((item, i) => (
              <div key={i} className="flex flex-row justify-center items-center">
                <TiTickOutline />
                <p className="text-md font-italic ml-1">{item}</p>
              </div>
            ))}
            
          </div>
        ))}

       </div>
    </div>
  )
}

export default Skills