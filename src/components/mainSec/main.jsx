import { RxResume } from "react-icons/rx";

const Main=({oncontactClick,projects,profileshow})=>{
  return(
    <>
            <section 
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50"
            ref={profileshow}>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4  ">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm profetion">MERN STACK DEVELOPER</div>
                <div className="inline-block rounded-lg mx-2 bg-gray-800 px-3 py-1 text-sm profetion">1+ Years Of Experience</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Ankush Kumar Gupta</h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Passionate about building scalable and performant web applications. Skilled in a variety of
                  programming languages and frameworks.
                </p>
                <div className="flex items-center space-x-4 social-res " >
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400 dark:focus-visible:ring-gray-300 handles"
          href="https://www.linkedin.com/in/ankush-kumar-gupta-88b383305/"
          rel="ugc"
          target="_blank"
        >
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
            className="h-5 w-5 mr-2"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
     
      
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400 dark:focus-visible:ring-gray-300 handles"
          href="https://www.instagram.com/the_ankush_777?igsh=MXkyNWt6enF5NzA2YQ=="
          rel="ugc"
          target="_blank"
        >
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
            className="h-5 w-5 mr-2"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          Instagram
        </a>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400 dark:focus-visible:ring-gray-300 handles whts-app"
          href="https://wa.link/5o1g3k"
          rel="ugc"
          target="_blank"
        >
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
            className="h-5 w-5 mr-2"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
            <path d="M12 18h.01"></path>
          </svg>
          WhatsApp
        </a>
      </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row main-but">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 cursor-pointer my-hover-but"
                    rel="ugc"
                    onClick={()=>projects.current?.scrollIntoView({
                      behavior:"smooth"
                    })} 
                  >
                    View Projects
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300  cursor-pointer my-hover-but"
                    rel="ugc"
                    onClick={oncontactClick}
                  >
                    Hire Me 
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300  cursor-pointer my-hover-but"
                    rel="ugc"
                    href="https://drive.google.com/file/d/1xDnJZcWK3-bdcjQEcJu4pUffJ8LR6tyw/view?usp=sharing"
                  >
                   Resume   <RxResume style={{height:'30px',width:'30px'}} />
                  </a>
                </div>
              </div>
              <img
                src="mypic.png"
                width="550"
                height="310"
                alt="John Doe"
                className="mx-auto aspect-square overflow-hidden rounded-x1 object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
    </>
  )
}
export default Main;