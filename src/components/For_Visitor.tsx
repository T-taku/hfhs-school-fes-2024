import { FiAlertTriangle, FiHelpCircle } from "react-icons/fi";
import Visitor_MenuIcon from "./VisitorIcon";
import { BudouXText } from "@/lib/budoux";
import { FaMapMarkedAlt, FaWalking } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function For_Visitor() {
  return (
    <>
      <div className="relative" id="for-visitor">
        <div className="w-screen p-2 md:p-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="relative text-primary_color p-4 md:p-5 lg:p-10 md:py-20 flex items-center justify-center">
              <div className="relative [writing-mode:vertical-rl] flex flex-col items-start">
                <span className="text-2xl md:text-3xl">ご来場の皆様へ</span>
                <span className="text-sm mb-2 text-secondary_text_color">For-Visitor</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center">
              <Visitor_MenuIcon content={
                <>
                  <FiAlertTriangle className="text-[38px] md:text-[60px]" />
                  <h3 className="text-lg"><BudouXText text="来場の際の注意点" /></h3>
                </>
              } />
              <Visitor_MenuIcon content={
                <>
                  <FaWalking className="text-[38px] md:text-[60px]" />
                  <h3 className="text-lg"><BudouXText text="アクセス" /></h3>
                </>
              } />
              <Visitor_MenuIcon content={
                <>
                  <FaMessage className="text-[38px] md:text-[60px]" />
                  <h3 className="text-lg"><BudouXText text="ごあいさつ" /></h3>
                </>
              } />
              <Visitor_MenuIcon content={
                <>
                  <FaMapMarkedAlt className="text-[38px] md:text-[60px]" />
                  <h3 className="text-lg"><BudouXText text="校内マップ" /></h3>
                </>
              } />
              <Visitor_MenuIcon content={
                <>
                  <FiHelpCircle className="text-[38px] md:text-[60px]" />
                  <h3 className="text-lg"><BudouXText text="お困りの場合" /></h3>
                </>
              } />
            </div>
          </div>
          <p className="text-primary_color mt-4">※現在コンテンツ準備中です※</p>
        </div>
      </div>
    </>
  );
}
