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
   ProjectName:"JARVIS-DESCTOP-ASSISTANT",
   ProjectNO:1,
   description:"Developed a voice-activated personal assistant using the MERN stack that automates browser functions such as web searches, opening websites, and executing custom commands, enhancing user productivity through hands-free operation.",
   videoLink:"jarvis.mp4",
   GitHubUrl:"https://github.com/ankush-coder-497001/JARVIS.git",
   Link:"https://j-a-r-v-i-s.netlify.app/"
  },
    {
      id:1,
   ProjectName:"Book-My-Show",
   ProjectNO:2,
   description:"Developed a movie ticket booking website similar to BookMyShow using the MERN stack. The site allows users to browse movies, select seats, and book tickets online, with a fully functional payment gateway. Integrated MongoDB for secure user and booking data management, along with React for a seamless user interface. The platform supports user authentication, dynamic seat selection, and real-time availability updates.",
   videoLink:"Book-my-show-video.mp4",
   GitHubUrl:"https://github.com/ankush-coder-497001/Book-My-Show",
   Link:"https://book-my-show-c-ankush.netlify.app/"
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