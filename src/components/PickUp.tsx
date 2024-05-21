"use client"
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PickUp_Card from "./PickUp_card";

export default function PickUp() {
  return (
    <>
      <div className="relative" id="for-visitor">
        <div className="w-screen p-2 md:p-8 text-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-center items-center">
            <div className="relative text-primary_color p-4 lg:p-10 md:py-20 flex items-center justify-center">
              <div className="relative [writing-mode:vertical-rl] flex flex-col items-start">
                <span className="text-2xl md:text-3xl">おすすめ企画</span>
                <span className="text-sm mb-2 text-secondary_text_color">PickUp</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center max-w-[1100px] px-4">
              <Splide
                aria-label="おすすめ企画"
                options={{
                  autoplay: true,
                  interval: 10000,
                  rewind: true,
                }}
              >
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`サッカー部・バレー部による招待試合開催決定!`}
                    content="学園祭2日目には、我が校が誇るサッカー部、バレー部による招待試合を開催予定!ヒガシ生による熱いプレーにご注目ください!"
                    link={""}
                    image={"/volley-ball.JPG"}
                    link_text={""}
                  />
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <p className="text-primary_color mt-4">※現在コンテンツ準備中です※</p>
        </div>
      </div>
    </>
  );
}

