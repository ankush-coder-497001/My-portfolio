import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";


const ShowSkill=({skill})=>{
  return(
    <>
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" ref={skill}>
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 text-sky-400">Technical Skills</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Can Do</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 skill-mar">
                I have expertise in a wide range of programming languages, frameworks, and tools. Here are some of the
                key areas I specialize in:
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400 ">MongoDB</h3>
                <SiMongodb style={{width:"5rem",height:"5rem"}} />
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">Express.Js</h3>
                <SiExpress style={{height:"5rem",width:"5rem"}} />

              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">React.Js</h3>
                <RiReactjsLine style={{height:"5rem",width:"5rem"}} />

              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">Node.Js</h3>
                <DiNodejs style={{height:"5rem",width:"5rem"}} />

              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">HTML</h3>
                <FaHtml5 style={{height:"5rem",width:"5rem"}} />

              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">CSS</h3>
                <MdCss style={{height:"5rem",width:"5rem"}} />
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">JavaScript</h3>
                <IoLogoJavascript style={{height:"5rem",width:"5rem"}} />

              </div>
           
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950 my-hover-skills cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">Bootstrap</h3>
                <FaBootstrap  style={{height:"5rem",width:"5rem"}} />

              </div>
            
              {/* <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">SQL</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experienced in designing and optimizing relational databases using SQL, and integrating them into web
                  applications.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">Docker</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Proficient in containerizing and deploying applications using Docker, ensuring consistent and scalable
                  environments.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 bg-white p-6 rounded-lg shadow-lg dark:bg-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-gray-500 dark:text-gray-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h3 className="text-lg font-semibold text-sky-400">AWS</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experienced in leveraging AWS services to build and deploy scalable and highly available web
                  applications.
                </p>
              </div> */}
            </div>
          </div>
        </section>
    
    </>
  )
}
export default ShowSkill;