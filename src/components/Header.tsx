'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa6';
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
          className={`fixed px-20 py-20 md:px-40 md:py-40 text-center max-md:flex max-md:flex-col max-md:items-center min-md:justify-center md:text-right text-primary_text_color transition-all duration-500 w-screen ${!isOpen ? `opacity-0 translate-y-10 pointer-events-none delay-300 duration-200 z-0` : `opacity-100 translate-y-0 pointer-events-auto delay-300 z-50`}`}
        >
          <ul className="list-none md:flex md:items-start space-y-8 md:space-y-0 md:space-x-8 md:flex-row-reverse">
            <li>
              <span className="max-md:flex max-md:justify-center max-md:items-center">
                <Image
                  src={'/logo_white_2.webp'}
                  alt={'東福岡学園 学園祭 2024 ロゴ'}
                  width="150"
                  height="150"
                  className="md:mx-8"
                />
              </span>
            </li>
            <li className="text-3xl md:[writing-mode:vertical-rl] transition-all duration-150 hover:opacity-60">
              <Link href={'/'} onClick={() => setOpen(!isOpen)}>
                トップページ
              </Link>
            </li>
            <li className="text-3xl md:[writing-mode:vertical-rl] transition-all duration-150 hover:opacity-60">
              <Link href={'/#for-visitor'} onClick={() => setOpen(!isOpen)}>
                ご来場の皆様へ
              </Link>
            </li>
            <li className="text-3xl md:[writing-mode:vertical-rl] transition-all duration-150 hover:opacity-60">
              <Link href={'/#pickup'} onClick={() => setOpen(!isOpen)}>
                おすすめ企画
              </Link>
            </li>
            <li className="text-3xl md:[writing-mode:vertical-rl] transition-all duration-150 hover:opacity-60">
              <Link href={'/news'} onClick={() => setOpen(!isOpen)}>
                お知らせ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
