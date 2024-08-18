import Projectcard from "./ProjectCard";
import PrintProject from "./printProject";

const ShowProject=({projects})=>{
  return(
    <>
     <section id="projects" className="w-full py-12 md:py-24 lg:py-32" ref={projects}>
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1  dark:bg-gray-800 text-rose-50">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-sky-400">My Work</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 skill-mar">
                Here are some of the projects I've worked on that showcase my problem-solving skills and attention to
                detail.
              </p>
            </div>
          {/* <Projectcard></Projectcard> */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10" style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
          <PrintProject></PrintProject>
          </div>
          </div>
        </section>
    </>
  )
}
export default ShowProject;