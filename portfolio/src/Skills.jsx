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

    const skillArray=["Frontend","Backend","Tools"];
const skillMap = {
  Frontend: [
    { name: "HTML", url: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" },
    { name: "Tailwind CSS", url: "https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg" },
    { name: "JavaScript", url: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
    { name: "React", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" },
       { name: "Flutter", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzBfvk0zqCWyWaixxSsBH2k3r6y_SbNVa_MITY5Eo46dhKLVV4E5HDZ-OXItfiOLoeXo&usqp=CAU" },

    { name: "Redux", url: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "TypeScript", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" },
    { name: "Next.js", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s" }
  ],
  Backend: [
    { name: "Express.js", url: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
    { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" },
    { name: "SQL", url: "https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Azure-SQL-Server-Monitoring.component.complex-narrative-xl.ts=1726504326153.png/content/adobe-cms/us/en/products/instana/supported-technologies/microsoft-sql-server-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage" },
    { name: "Spring Boot", url: "https://www.yessinfotech.com/wp-content/uploads/2019/11/spring-boot-logo.png" },
  
  ],
  Tools: [
    { name: "Git", url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
    { name: "VS Code", url: "https://code.visualstudio.com/assets/images/code-stable.png" },
    { name: "Postman", url: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png" }
  ]
};

  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center mt-10 overflow-y-auto p-4">
  <h1 className="text-3xl font-bold mb-4">Skills</h1>
  <div className="w-full flex flex-col justify-center items-center gap-6">
    {skillArray.map((chunk, index) => (
      <div key={index} className="w-full max-w-5xl flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold mb-2">{chunk}</h1>

        <div className="w-full flex flex-wrap justify-center items-center gap-3">
          {skillMap[chunk].map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col justify-center items-center gap-2 p-2"
            >
              <img 
                src={item.url} 
                alt={item.name} 
                className="w-14 h-14 sm:w-18 sm:h-18 object-contain"
              />
              <p className="text-sm sm:text-md text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Skills