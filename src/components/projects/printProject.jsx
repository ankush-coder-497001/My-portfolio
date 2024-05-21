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
   ProjectName:"React Newz Website",
   ProjectNO:1,
   description:"This is newz showing app which is basically makes by using react & bootstrap by Api ",
   imageUrl:"react-news.png",
   GitHubUrl:"https://github.com/ankush-coder-497001/react-news-web"
  },
    {
      id:2,
   ProjectName:"Amazon Clone",
   ProjectNO:2,
   description:"This is simple project of HTML and CSS ,it makes by using only HTML and css ",
   imageUrl:"https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400",
   GitHubUrl:"https://github.com/ankush-coder-497001/Amazone-clone"
  },
    {
      id:3,
   ProjectName:"React Myntra Clone",
   ProjectNO:3,
   description:"i created a myntra clone which is fetch data from backend",
   imageUrl:"myntra.png",
   GitHubUrl:"https://github.com/ankush-coder-497001/Myntra-clone"
  },
    {
      id:4,
   ProjectName:"React quize website",
   ProjectNO:4,
   description:"A simple quiz website highly motivated me to learn and use varieties of programming tools . this website is created by using HTML CSS JS and React js framework. And for styling i use tailwind .",
   imageUrl:"react-quiz.png",
   GitHubUrl:"https://github.com/ankush-coder-497001/react-Quiz-website"
  },
    {
      id:5,
   ProjectName:"Netflix frontend clone",
   ProjectNO:5,
   description:"this is a netflix clone website . created by using html css only",
   imageUrl:"netflix.png",
   GitHubUrl:"https://github.com/ankush-coder-497001/frontend-netflix-clone"
  },
    {
      id:6,
   ProjectName:"javascript quiz app",
   ProjectNO:6,
   description:"this is fully responsive quiz website created by using html css and javascrip",
   imageUrl:"js-quiz.png",
   GitHubUrl:"https://github.com/ankush-coder-497001/js-quiz-web"
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