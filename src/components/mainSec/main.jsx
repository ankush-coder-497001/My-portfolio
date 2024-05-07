const Main=({oncontactClick,projects,profileshow})=>{
  return(
    <>
            <section 
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50"
            ref={profileshow}>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Software Engineer</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Ankush Kumar Gupta</h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Passionate about building scalable and performant web applications. Skilled in a variety of
                  programming languages and frameworks.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                    rel="ugc"
                    onClick={()=>projects.current?.scrollIntoView({
                      behavior:"smooth"
                    })} 
                  >
                    View Projects
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    rel="ugc"
                    onClick={oncontactClick}
                  >
                    Get in Touch
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