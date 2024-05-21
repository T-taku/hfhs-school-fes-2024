import { FiAlertTriangle, FiHelpCircle } from "react-icons/fi";
import Visitor_MenuIcon from "./VisitorIcon";
import { BudouXText } from "@/lib/budoux";
import { FaMapMarkedAlt, FaWalking } from "react-icons/fa";

export default function For_Visitor(){
  return(
    <>
      <div className="relative" id="for-visitor">
        <div className="text-primary_text_color w-screen p-2 md:p-8 text-center">
          <div className="flex justify-center md:justify-start items-center h-full">
          <div className="relative md:absolute top-0 text-primary_color p-2 py-10 md:p-5 lg:p-10 md:py-20 flex items-center justify-center">
            <div className="relative [writing-mode:vertical-rl] flex flex-col items-start m-4">
              <span className="text-2xl md:text-3xl">ご来場の皆様へ</span>
              <span className="text-sm mb-2 text-secondary_text_color">For-Visitor</span>
            </div>
          </div>
          </div>
          <div className="p-4 md:p-10 flex flex-wrap md:grid-cols-3 md:gap-3 justify-center items-center">
            <Visitor_MenuIcon content={
              <>
                <FiAlertTriangle className="text-[38px] md:text-[65px]"/>
                <h3 className="text-lg"><BudouXText text="来場の際の注意点"/></h3>
              </>
            }/>
            <Visitor_MenuIcon content={
              <>
                <FaWalking className="text-[38px] md:text-[65px]"/>
                <h3 className="text-lg"><BudouXText text="アクセス"/></h3>
              </>
            }/>
            <Visitor_MenuIcon content={
              <>
                <FaMapMarkedAlt className="text-[38px] md:text-[65px]"/>
                <h3 className="text-lg"><BudouXText text="校内マップ"/></h3>
              </>
            }/>
            <Visitor_MenuIcon content={
              <>
                <FiHelpCircle className="text-[38px] md:text-[65px]"/>
                <h3 className="text-lg"><BudouXText text="お困りの場合"/></h3>
              </>
            }/>
          </div>
          <p className="text-primary_color">※現在コンテンツ準備中です※</p>
        </div>
      </div>
    </>
  )
}