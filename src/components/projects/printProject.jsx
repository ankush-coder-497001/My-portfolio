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
   ProjectName:"Newz Website",
   ProjectNO:1,
   description:"This is newz showing app which is basically makes by using react & bootstrap by Api ",
   imageUrl:"https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400",
   GitHubUrl:"https://github.com/ankush-coder-497001/react-project"
  },
    {
      id:2,
   ProjectName:"Amazon Clone",
   ProjectNO:2,
   description:"This is simple project of HTML and CSS ,it makes by using only HTML and css ",
   imageUrl:"https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400",
   GitHubUrl:"https://github.com/ankush-coder-497001/Amazone-clone"
  },
]
  return(
    <>
    {Project.map((item)=>(
      <Projectcard key={item.id} ProjectName={item.ProjectName} ProjectNO={item.ProjectNO} description={item.description} imageUrl={item.imageUrl} GitHubUrl={item.GitHubUrl}  ></Projectcard>
    ))}
    </>
  )
}
export default PrintProject;