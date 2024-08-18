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
   description:"This is a personal assistant jarvis created by using mern stack for daily task and making daily tasks easy",
   videoLink:"jarvis.mp4",
   GitHubUrl:"https://github.com/ankush-coder-497001/JARVIS.git"
  },
   
]
  return(
    <>
    {Project.map((item)=>(
      <Projectcard key={item.id} ProjectName={item.ProjectName} ProjectNO={item.ProjectNO} description={item.description} imageUrl={item.videoLink} GitHubUrl={item.GitHubUrl}  ></Projectcard>
    ))}
    </>
  )
}
export default PrintProject;