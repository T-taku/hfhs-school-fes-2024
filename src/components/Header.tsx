'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed z-[60] top-6 right-6 p-4 text-primary_text_color bg-menu_color rounded-full"
        onClick={() => setOpen(!isOpen)}
      >
        {!isOpen ? <IoIosMenu className="text-3xl" /> : <IoMdClose className="text-3xl" />}
      </button>
      <div
        className={`fixed top-6 right-8 z-20 transition-transform rounded-full h-[30px] w-[30px] bg-menu_color ${!isOpen ? `translate-y-[100%] scale-100 rounded-bl-full` : `scale-[150]`} transform transition-all delay-100 duration-700`}
      ></div>
      <div className="absolute">
        <div
          className={`fixed px-20 py-20 md:px-40 md:py-40 flex justify-center items-center text-primary_text_color transition-all duration-500 h-screen w-screen ${!isOpen ? `opacity-0 translate-y-10 pointer-events-none delay-300 duration-200 z-0` : `opacity-100 translate-y-0 pointer-events-auto delay-300 z-50`}`}
        >
          <div className="mt-6 lg:mt-0 lg:flex-1 flex justify-center items-center">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="max-md:flex max-md:justify-center max-md:items-center">
                  <Image
                    src={'/logo_white_2.webp'}
                    alt={'東福岡学園 学園祭 2024 ロゴ'}
                    width="150"
                    height="150"
                  />
                </div>
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="font-bold text-3xl uppercase text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    トップページ
                  </Link>
                  <Link
                    href="/access"
                    className="font-bold text-3xl uppercase text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    アクセス
                  </Link>
                </div>
                <div>
                  <h3 className="font-bold text-3xl uppercase text-primary_text_color">学園祭について</h3>
                  <Link
                    href="/cautions"
                    className="block mt-2 text-xl text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    来場前の注意点
                  </Link>
                  <Link
                    href="/message"
                    className="block mt-2 text-xl  text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    ごあいさつ
                  </Link>
                  <Link
                    href="/#news"
                    className="block mt-2 text-xl  text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    最新情報
                  </Link>
                  <Link
                    href="https://hfjj2224010.wixsite.com/hfjj-gakuensai2024"
                    className="block mt-2 text-xl  text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    中学校ウェブサイト
                  </Link>
                </div>

                <div>
                  <h3 className="font-bold text-3xl uppercase text-primary_text_color">学園祭を楽しむ</h3>
                  <Link
                    href="/map"
                    className="block mt-2 text-xl  text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    校内マップ
                  </Link>
                  <Link
                    href="/with-children"
                    className="block mt-2 text-xl  text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    お子様連れの方へ
                  </Link>
                  <Link
                    href="/timetable"
                    className="block mt-2 text-xl  text-primary_text_color hover:underline"
                    prefetch={false}
                    onClick={() => setOpen(!isOpen)}
                  >
                    タイムテーブル
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
