const Contact=({profile,contacts,projects})=>{
  return(
    <>
<main className="w-full max-w-4xl mx-auto py-12 md:py-24 px-4 md:px-6 text-sky-400"  ref={contacts}>
  <div className="grid gap-8 md:grid-cols-2 items-center">
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
        I'm always excited to connect with new people. Feel free to reach out if you have any questions, ideas, or
        just want to chat.
      </p>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
              
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 my-hover-but cursor-pointer"
                    rel="ugc"
                    onClick={profile}
                  >
                    View profile
                  </a>
                
                </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex items-center gap-2">
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
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-gray-500 dark:text-gray-400">+91 9301579493</span>
        </div>
        <div className="flex items-center gap-2">
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
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span className="text-gray-500 dark:text-gray-400"
          href="">ankushcoder497001@gmail.com</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center space-y-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-50 w-50">
        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
        <img
                src="mypic.png"
                width="550"
                height="310"
                alt="John Doe"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full contact-pic"
              />

        </span>
      </span>
      <div className="flex items-center space-x-4">
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400 dark:focus-visible:ring-gray-300"
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
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400 dark:focus-visible:ring-gray-300"
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
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-400 dark:focus-visible:ring-gray-300"
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
    </div>
  </div>
  
</main>
    </>
  )
}
export default Contact;