import { BudouXText } from "@/lib/budoux"
import Image from "next/image"

export default function NotFound(){
  return(
    <div className="w-screen h-[100vh] flex flex-col justify-center items-center">
      <div className="text-center">
        <Image src={"/404_not_found.png"} width="300" height="300" alt={"404 Not Found"}/>
      </div>
      <h2 className="text-xl text-center m-2"><BudouXText text={"お探しのページは見つかりませんでした。移動されたか、削除された可能性があります。"}/></h2>
    </div>
  )
}