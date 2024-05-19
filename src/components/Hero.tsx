import Image from "next/image";

export default function Hero(){
  return(
    <>
      <div className="hero_slideshow flex justify-center items-center">
        <div className="text-center">
          <Image src={"logo_white_1.svg"} alt={"東福岡学園 学園祭 2024 ロゴ"} width="300" height="300"/>
        </div>
      </div>
    </>
  )
}