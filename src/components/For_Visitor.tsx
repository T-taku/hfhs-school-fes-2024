import { FiAlertTriangle, FiHelpCircle } from "react-icons/fi";
import Visitor_MenuIcon from "./VisitorIcon";
import { BudouXText } from "@/lib/budoux";
import { FaMapMarkedAlt, FaWalking } from "react-icons/fa";

export default function For_Visitor(){
  return(
    <>
      <div className="relative p-8" id="for-visitor">
        <div className="text-primary_text_color text-center">
          <div className="flex justify-center items-center">
          <div className="relative text-primary_color flex items-center justify-center">
            <div className="relative mx-10 flex flex-col items-center">
              <span className="text-2xl md:text-3xl">ご来場の皆様へ</span>
              <span className="text-sm mb-2 text-secondary_text_color">For-Visitor</span>
            </div>
          </div>
          </div>
          <div className="flex flex-wrap lg:grid-cols-3 lg:gap-1 justify-center items-center">
            <Visitor_MenuIcon content={
              <>
                <FiAlertTriangle className="text-[38px] md:text-[60px]"/>
                <h3 className="text-lg"><BudouXText text="来場の際の注意点"/></h3>
              </>
            }/>
            <Visitor_MenuIcon content={
              <>
                <FaWalking className="text-[38px] md:text-[60px]"/>
                <h3 className="text-lg"><BudouXText text="アクセス"/></h3>
              </>
            }/>
            <Visitor_MenuIcon content={
              <>
                <FaMapMarkedAlt className="text-[38px] md:text-[60px]"/>
                <h3 className="text-lg"><BudouXText text="校内マップ"/></h3>
              </>
            }/>
            <Visitor_MenuIcon content={
              <>
                <FiHelpCircle className="text-[38px] md:text-[60px]"/>
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