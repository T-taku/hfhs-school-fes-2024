'use client';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

export default function Hero() {
  const images = [
    '/hero/IMG_3202.webp',
    '/hero/IMG_3230.webp',
    '/hero/IMG_3374.webp',
    '/hero/IMG_3413.webp',
    '/hero/IMG_9967.webp',
  ];

  return (
    <div className="relative">
      <Splide
        options={{
          type: 'fade',
          rewind: true,
          autoplay: true,
          interval: 4000,
          speed: 2000,
          arrows: false,
          pagination: false,
          pauseOnHover: false,
          pauseOnFocus: false,
        }}
      >
        {images.map((src, index) => (
          <SplideSlide
            key={index}
            className="flex justify-center items-center bg-cover bg-center w-screen h-[100vh] shadow"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="text-center">
              <Image
                src="/logo_white_1.webp"
                alt="東福岡学園 学園祭 2024 ロゴ"
                width={300}
                height={300}
                loading="eager"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
