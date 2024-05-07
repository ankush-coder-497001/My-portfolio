
// import Link from "next/link"
import { useState,useRef } from "react"
import ShowSkill from "./Skills/Skills"
import Main from "./mainSec/main"
import "./mainpage.css"
import Nav from "./navbar/navbar"
import ShowProject from "./projects/showprojects"
import Contact from "./Mycontact/contact"
import { Outlet } from "react-router-dom"
import Goto from "./goto"

export default function Mainpage() {
  const skill = useRef()
  const projects = useRef()
  const contacts = useRef()
  const profileshow = useRef()


  const [contact,setcontact]=useState(false);
  const oncontactClick=()=>{
    setcontact(!contact);
  }
  const profile=()=>{
    setcontact(!contact);

  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
     <Nav oncontactClick={oncontactClick} 
      skill={skill}
      projects={projects}
      contacts={contacts}
     ></Nav>
      <main className="flex-1">
       { contact===true ?  <Contact profile={profile} ></Contact> :<Main oncontactClick={oncontactClick}  projects={projects}
       profileshow={profileshow}
       ></Main>
       }
       <Outlet></Outlet>
     <ShowSkill skill={skill}></ShowSkill>
    <ShowProject projects={projects}></ShowProject>
        <Contact contacts={contacts}  projects={projects}></Contact>
        <Goto   profileshow={profileshow}></Goto>
      </main>
    </div>
  )
}
