
import { MdMapsHomeWork } from "react-icons/md";

const Experience = ({experience})=>{

  const MyWork = [
    {
      company:"Tech Grow",
      role:"Full Stack Developer Intern",
      duration:"3 Months",
      text1:"As a MERN stack developer, I have worked on multiple projects during my internships, gaining hands-on experience in building scalable and efficient web applications.",
      text2:"Optimized web page load times by 20% by refactoring code and minimizing HTTP requests.",
      text3:"I contributed to both frontend and backend development, ensuring seamless integration and performance optimization.",
    },
    {
      company:"Sales queen Software Solution",
      role:"FrontEnd Developer Intern",
      duration:"3 Months",
      text1:"Improved user engagement by 30% through implementing responsive and visually appealing UI components.",
      text2:"Optimized web page load times by 20% by refactoring code and minimizing HTTP requests.",
      text3:"Collaborated with the design and backend teams to ensure seamless integration, enhancing overall site functionalit",
    },
    {
      company:"Exosystems Brazil",
      role:"Full stack Developer Intern",
      duration:"3 Months",
      text1:"Contributed to the development of dynamic web applications using Nuxt.js, significantly improving website performance.",
      text2:"Implemented automated testing, reducing bug occurrences by 25% in the production environment",
      text3:"Played a key role in setting up CI/CD pipelines using GitHub Actions, cutting down release times by 20%.",
    },
    {
      company:"CodSoft",
      role:"Web Development Intern",
      duration:"3 Months",
      text1:"Developed and maintained full-stack web applications using the MERN stack, including React, Node.js, Express, and MongoDB.",
      text2:"Collaborated with team members to enhance application features, fix bugs, and improve performance.",
      text3:"Played a key role in setting up CI/CD pipelines using GitHub Actions, cutting down release times by 20%.",
    },
    
  ]

  return (
    <>
    <section class="py-16 " ref={experience}>
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-yellow-600">Professional Experience</h2>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

{MyWork.map((work)=>(
  
                <div class="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 font-serif border-sky-400 work-hover">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                        <MdMapsHomeWork style={{height:'40px',width:'40px'}} />
                            <h3 class="text-xl font-semibold text-gray-800">{work.company}</h3>
                        </div>
                        <p class="text-gray-600 mb-4"> {work.role} </p>
                        <div class="flex items-center text-sm text-gray-500 mb-4">
                            <i data-lucide="calendar-days" class="w-4 h-4 mr-2"></i>
                           {work.duration}
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-sky-600 mb-2 flex items-center">
                                <i data-lucide="graduation-cap" class="w-5 h-5 mr-2"></i>
                                Key Learnings
                            </h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-1">
                                <li> {work.text1} </li>
                                <li>{work.text2}</li>
                                <li>{work.text3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
              
))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Experience;