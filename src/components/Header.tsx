"use client"

import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"
import Image from "next/image";

export default function Header(){
  const[isOpen, setOpen] = useState(false)
  return(
    <>
      <button className="fixed z-[60] top-6 right-6 p-4 text-primary_text_color bg-menu_color rounded-full" onClick={()=>setOpen(!isOpen)}>
        {!isOpen ? <IoIosMenu className="text-3xl"/> : <IoMdClose className="text-3xl"/>}
      </button>
      <div className={`fixed top-6 right-8 z-20 transition-transform rounded-full h-[30px] w-[30px] bg-menu_color ${!isOpen ? `translate-y-[100%] scale-100 rounded-bl-full` : `scale-[150]`} transform transition-all delay-100 duration-700`}></div>
      <div className="absolute">
        <div className={`fixed px-20 py-20 md:px-40 md:py-40 space-y-4 md:space-y-0 md:space-x-4 text-center max-md:flex max-md:flex-col max-md:items-center min-md:justify-center md:text-right text-primary_text_color transition duration-300 w-screen ${!isOpen ? `opacity-0 translate-y-10 pointer-events-none delay-300 duration-400 z-0` : `opacity-100 translate-y-0 pointer-events-auto delay-300 z-50`}`}>
          <span className="md:[writing-mode:vertical-rl] block md:hidden">
            <Image src={"/logo_white_2.png"} alt={"東福岡学園 学園祭 2024 ロゴ"} width="150" height="150"/>
          </span>
          <span className="text-3xl md:[writing-mode:vertical-rl] transition-all duration-150 hover:opacity-80">
            <Link href={"/"}>トップページ</Link>
          </span>
          <span className="md:[writing-mode:vertical-rl] hidden md:inline-block">
            <Image src={"/logo_white_2.png"} alt={"東福岡学園 学園祭 2024 ロゴ"} width="150" height="150"/>
          </span>
        </div>
      </div>
      <div className="absolute">
        <div className={`fixed px-40 py-40 bottom-0 text-center text-primary_text_color transition duration-300 w-screen ${!isOpen ? `opacity-0 translate-y-10 pointer-events-none delay-300 duration-400 z-0` : `opacity-100 translate-y-0 pointer-events-auto delay-300 z-50`}`}>
          <div className="flex justify-center items-center gap-4">
            <span className="rounded-full border-2 border-primary_text_color p-2 transition-all duration-150 hover:bg-primary_text_color hover:text-menu_color">
              <Link href={"https://higashifukuoka.ed.jp"}><FaInstagram className="text-3xl"/></Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}