import { useEffect, useState } from "react";
// import ShowProject from "./showprojects";
import Projectcard from "./ProjectCard";

const PrintProject=()=>{
  const [Project,setProject] = useState([]);

  useEffect(()=>{
    setProject(myProjects);
  },[])
  const myProjects=[
  {
    id:1,
 ProjectName:"Website Generator with AI",
 ProjectNO:1,
 description:"Developed an AI-powered website generation tool enabling users to create fully functional, customizable websites instantly based on their preferences.",
 videoLink:"build-your-own.mp4",
 GitHubUrl:"https://github.com/ankush-coder-497001/Website-Generator-AI",
 Link:"https://generate-website-ai.netlify.app/mainpage"
}, 
 {
  id:1,
ProjectName:"JARVIS-DESCTOP-ASSISTANT",
ProjectNO:2,
description:"Developed a voice-activated personal assistant using the MERN stack that automates browser functions such as web searches, opening websites, and executing custom commands, enhancing user productivity through hands-free operation.",
videoLink:"jarvis.mp4",
GitHubUrl:"https://github.com/ankush-coder-497001/JARVIS.git",
Link:"https://j-a-r-v-i-s.netlify.app/"
},
    {
      id:1,
   ProjectName:"Collaborative Code Editor",
   ProjectNO:3,
   description:"Developed a collaborative code editor using React and CodeMirror, enabling real-time coding sessions with multiple users. The project incorporates a Node.js backend with WebSocket for live collaboration, and MongoDB for user data storage. Implemented CORS to prevent cross-origin issues, and deployed the solution for seamless browser-based coding. This project enhances team collaboration and supports various programming languages.",
   videoLink:"Code-editor-video.mp4",
   GitHubUrl:"https://github.com/ankush-coder-497001/LetUsCode-code-editor",
   Link:"https://github.com/ankush-coder-497001/LetUsCode-code-editor"
  },
   
]
  return(
    <>
    {Project.map((item)=>(
      <Projectcard key={item.id} ProjectName={item.ProjectName} ProjectNO={item.ProjectNO} description={item.description} imageUrl={item.videoLink} GitHubUrl={item.GitHubUrl} Link = {item.Link}  ></Projectcard>
    ))}
    </>
  )
}
export default PrintProject;