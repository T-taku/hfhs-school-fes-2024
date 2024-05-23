import { FiAlertTriangle, FiHelpCircle } from "react-icons/fi";
import { FaMapMarkedAlt, FaWalking } from "react-icons/fa";
import { FaChildReaching, FaClock, FaMessage } from "react-icons/fa6";
import Visitor_MenuIcon from "./VisitorIcon";
import { BudouXText } from "@/lib/budoux";

export default function For_Visitor() {
  return (
    <>
      <div className="relative" id="for-visitor">
        <div className="w-screen p-2 md:p-4 text-center">
          <div className="flex flex-col items-center">
            <div className="relative text-primary_color p-4 flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <span className="text-2xl md:text-3xl">ご来場の皆様へ</span>
                <span className="text-sm mb-2 text-secondary_text_color">For-Visitor</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center max-w-[1100px]">
              <Visitor_MenuIcon link={"/cautions"} content={
                <>
                  <FiAlertTriangle className="text-[38px] md:text-[60px]" />
                  <h3 className="text-lg"><BudouXText text="来場の際の注意点"/></h3>
                </>
              } />
              <Visitor_MenuIcon content={<>
                <FaWalking className="text-[38px] md:text-[60px]" />
                <h3 className="text-lg"><BudouXText text="アクセス" /></h3>
              </>} link={"/access"} />
              <Visitor_MenuIcon content={<>
                <FaMessage className="text-[38px] md:text-[60px]" />
                <h3 className="text-lg"><BudouXText text="ごあいさつ" /></h3>
              </>} link={""} />
              <Visitor_MenuIcon content={<>
                <FaMapMarkedAlt className="text-[38px] md:text-[60px]" />
                <h3 className="text-lg"><BudouXText text="校内マップ" /></h3>
              </>} link={""} />
              <Visitor_MenuIcon content={<>
                <FaClock className="text-[38px] md:text-[60px]" />
                <h3 className="text-lg"><BudouXText text="タイムテーブル" /></h3>
              </>} link={""} />
              <Visitor_MenuIcon content={<>
                <FaChildReaching className="text-[38px] md:text-[60px]" />
                <h3 className="text-lg"><BudouXText text="お子様連れの来場者の皆様へ" /></h3>
              </>} link={""} />
              <Visitor_MenuIcon content={<>
                <FiHelpCircle className="text-[38px] md:text-[60px]" />
                <h3 className="text-lg"><BudouXText text="お困りの場合" /></h3>
              </>} link={"/need-help"} />
            </div>
          </div>
          <p className="text-primary_color mt-4">※現在コンテンツ準備中です※</p>
        </div>
      </div>
    </>
  );
}
