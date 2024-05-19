"use client"

import { useState } from "react";
import { IoIosMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"

export default function Header(){
  const[isOpen, setOpen] = useState(false)
  return(
    <>
      <button className="fixed z-[60] top-6 right-6 p-4 text-primary_text_color bg-menu_color rounded-full" onClick={()=>setOpen(!isOpen)}>
        {!isOpen ? <IoIosMenu className="text-3xl"/> : <IoMdClose className="text-3xl"/>}
      </button>
      <div className={`absolute top-6 right-8 z-20 transition-transform rounded-full h-[30px] w-[30px] bg-menu_color ${!isOpen ? `translate-y-[100%] scale-100 rounded-bl-full` : `scale-[150]`} transform transition-all delay-100 duration-700`}></div>
      <div className={`relative z-50 px-40 py-40 text-center md:text-right text-primary_text_color transition duration-300 max-w-full md:max-w-screen ${!isOpen ? `opacity-0 translate-y-10 pointer-events-none delay-300 duration-100` : `opacity-100 translate-y-0 pointer-events-auto delay-300`}`}>
        test
      </div>
    </>
  )
}