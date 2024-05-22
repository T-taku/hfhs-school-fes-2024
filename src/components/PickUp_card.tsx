import { BudouXText } from "@/lib/budoux";
import { Noto_Sans_JP } from "next/font/google";
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";

const NotoSans = Noto_Sans_JP({ subsets: ["latin"] });

export default function PickUp_Card({title, content, link = "", link_text="詳しくはこちら", image = ""}:{title:string, content:string, link:string, link_text:string, image:string}){
  return(
    <>
      <div className="bg-menu_color text-primary_text_color overflow-hidden flex flex-col items-center md:flex-row rounded-xl min-h-[30%] max-w-[90%] md:min-w-[80%] md:max-w-[80%]">
        <div className="p-4 px-2 md:p-8 flex-1">
          <h2 className="text-xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className={`mb-4 ${NotoSans.className}`}>
            <BudouXText text={content}/>
          </p>
          {link && (
            <a href={link} className="text-xl inline-flex items-center hover:underline">
              <FaAngleRight />
              {link_text ? link_text : "詳しくはこちら"}
            </a>
            )
          }
        </div>
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <Image
            src={image ? image : "/logo_white_2.png"}
            alt=""
            width={1280}
            height={900}
            objectFit="cover"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </>
  )
}