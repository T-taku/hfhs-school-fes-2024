import Link from "next/link";
import { ReactNode } from "react";

export default function Visitor_MenuIcon({content, link}: { content: ReactNode, link:string }){
  return(
    <>
      <Link href={`${link}`}>
        <div className="w-36 h-36 md:w-48 md:h-48 lg:w-52 lg:h-52 grid gap-2 shadow bg-primary_color p-4 place-content-center place-items-center text-center rounded-full transition cursor-pointer text-white hover:opacity-85">
          {content}
        </div>
      </Link>
    </>
  )
}