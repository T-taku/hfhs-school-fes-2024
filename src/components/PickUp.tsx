'use client';
//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PickUp_Card from './PickUp_card';

export default function PickUp() {
  return (
    <>
      <div className="relative" id="pickup">
        <div className="w-screen p-2 md:p-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center">
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
                  perPage: 1,
                }}
              >
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`バレーボール部による招待試合開催決定!`}
                    content="学園祭2日目に、バレーボール部による招待試合を開催予定!ヒガシ生による熱いプレーにご注目ください!"
                    link={''}
                    image={'/volley-ball.webp'}
                    link_text={''}
                  />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`小学生対象バレー体験開催!`}
                    content="小学生を対象にした、バレーボール教室を雄飛間(体育館)にて開催! ヒガシの学園祭でバレーボールに挑戦してみよう!"
                    link={'/news/elementary-school-volleyball-class-held'}
                    image={'/volley-school.webp'}
                    link_text={''}
                  />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`サッカー部による招待試合開催決定!`}
                    content="学園祭2日目に、サッカー部による招待試合を開催予定!ヒガシ生による熱いプレーにご注目ください!"
                    link={'/news/invitation-match-announcement'}
                    image={'/soccer-clubs.webp'}
                    link_text={''}
                  />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`ラグビー部による招待試合開催決!`}
                    content="学園祭2日目に、ラグビー部による招待試合を開催予定!ヒガシ生による熱いプレーにご注目ください!"
                    link={'/news/invitation-match-announcement'}
                    image={'/rugby.webp'}
                    link_text={''}
                  />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`野球部による招待試合開催決!`}
                    content="学園祭2日目に、野球部による招待試合を開催予定!ヒガシ生による熱いプレーにご注目ください!"
                    link={'/news/invitation-match-announcement'}
                    image={'/baseball.webp'}
                    link_text={''}
                  />
                </SplideSlide>
                <SplideSlide className="flex justify-center items-center">
                  <PickUp_Card
                    title={`スタンプを集めて、ヒガシオリジナルグッズをゲット!`}
                    content="各文化部展示会場に設置されている、スタンプを全て集めて、ヒガシオリジナルグッズをゲットしよう!!"
                    link={''}
                    image={'/StampCollecting.webp'}
                    link_text={''}
                  />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
