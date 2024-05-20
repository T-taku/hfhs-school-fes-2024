import { FiAlertTriangle, FiHelpCircle } from "react-icons/fi";
import Visitor_MenuIcon from "./VisitorIcon";
import { BudouXText } from "@/lib/budoux";
import { FaMapMarkedAlt, FaWalking } from "react-icons/fa";
import PickUp_Card from "./PickUp_card";

export default function PickUp(){
  return(
    <>
      <div className="relative" id="pickup">
        <div className="text-primary_text_color w-screen p-2 md:p-8">
          <div className="flex justify-center md:justify-start items-center h-full">
          <div className="relative md:absolute top-0 text-primary_color p-2 py-10 md:p-5 lg:p-10 md:py-20 flex items-center justify-center">
            <div className="[writing-mode:vertical-rl] flex flex-col items-start">
              <span className="text-2xl md:text-3xl">おすすめ企画</span>
              <span className="text-sm mb-2 text-secondary_text_color">Pick Up</span>
            </div>
          </div>
          </div>
          <div className="p-4 md:p-10 flex flex-wrap md:grid-cols-3 md:gap-3 justify-center items-center">
            <PickUp_Card title={`サッカー部・バレー部による招待試合を開催!`} content="学園祭2日目には、我が校が誇るサッカー部、バレー部による招待試合を開催予定!ヒガシ生による熱いプレーにご注目ください!" link={""} image={"/volley-ball.JPG"} link_text={""}/>
          </div>
        </div>
      </div>
    </>
  )
}