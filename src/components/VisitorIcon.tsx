import { ReactNode } from "react";

export default function Visitor_MenuIcon({content}: { content: ReactNode }){
  return(
    <>
      <div className="w-36 h-36 md:w-52 md:h-52 grid gap-2 m-2 shadow bg-primary_color p-4 place-content-center place-items-center text-center rounded-full transition cursor-pointer text-white hover:opacity-85">
        {content}
      </div>
    </>
  )
}