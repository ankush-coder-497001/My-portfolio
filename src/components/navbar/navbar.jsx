import { useRef } from "react";
import { Link } from "react-router-dom";

const Nav =({contacts,skill,projects,experience})=>{


  return(
    <>
     <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50 my-header">
        <a className="flex items-center justify-center" href="#" rel="ugc">
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
            className="h-6 w-6"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span className=" text-sky-400 font-medium px-4">Ankush Gupta's Portfolio</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 headings">
          <a className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" rel="ugc" onClick={()=>skill.current?.scrollIntoView({
            behavior:"smooth"
          })} >
            Skills
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" rel="ugc" onClick={()=>projects.current?.scrollIntoView({
            behavior:"smooth"
          })}>
            Projects
          </a>
     
          <a className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={()=>contacts.current?.scrollIntoView({
            behavior:"smooth"
          })} rel="ugc">
            Contact
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer" onClick={()=>experience.current?.scrollIntoView({
            behavior:"smooth"
          })} rel="ugc">
            Experience
          </a>
        </nav>
      </header>
    </>
  )
}
export default Nav;