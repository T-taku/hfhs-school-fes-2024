import Image from "next/image"
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function Footer(){
  return(
    <>
      <footer className="bottom-0 mt-8 bg-[#263b5c] bg-opacity-85">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-1/2">
              <div className="px-6">
                <Link href="#">
                    <Image className="w-auto h-[8.75rem]" src="/logo_white_1.png" width="300" height="300" alt=""/>
                </Link>
                <p className="max-w-sm mt-2 text-primary_text_color">2024年6月7日(金)<br/>2024年6月8日(土)</p>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="font-bold text-xl uppercase text-primary_text_color">学園祭について</h3>
                  <Link href="cautions" className="block mt-2 text-sm  text-primary_text_color hover:underline">来場前の注意点</Link>
                  <Link href="#" className="block mt-2 text-sm  text-primary_text_color hover:underline">ごあいさつ</Link>
                  <Link href="/#news" className="block mt-2 text-sm  text-primary_text_color hover:underline">最新情報</Link>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase text-primary_text_color">学園祭の楽しみ方</h3>
                  <Link href="#" className="block mt-2 text-sm  text-primary_text_color hover:underline">校内マップ</Link>
                  <Link href="#" className="block mt-2 text-sm  text-primary_text_color hover:underline">お子様連れの方へ</Link>
                  <Link href="#" className="block mt-2 text-sm  text-primary_text_color hover:underline">タイムテーブル</Link>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase text-primary_text_color">このウェブサイトについて</h3>
                  <Link href="/privacy-policy" className="block mt-2 text-sm  text-primary_text_color hover:underline">個人情報保護方針</Link>
                </div>

                <div>
                  <h3 className="font-bold text-xl uppercase text-primary_text_color">学校法人 東福岡学園</h3>
                  <Link href="https://www.higashifukuoka.ed.jp" className="block mt-2 text-sm  text-primary_text_color hover:underline">学校法人 東福岡学園</Link>
                  <Link href="https://www.higashifukuoka.ed.jp/highschool/" className="block mt-2 text-sm  text-primary_text_color hover:underline">東福岡高等学校</Link>
                  <Link href="https://www.higashifukuoka.ed.jp/juniorhighschool/" className="block mt-2 text-sm  text-primary_text_color hover:underline">東福岡自彊館中学校</Link>
                  <Link href="http://www.higashifukuoka.ed.jp/kyogaku/" className="block mt-2 text-sm  text-primary_text_color hover:underline">共学化特設サイト</Link>
                </div>
                <div className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
                  <Link href="https://instagram.com/higashifukuoka_official/"
                    className="mx-2 transition-colors duration-300 text-gray-300 hover:opacity-85"
                    aria-label="Instagram">
                      <FaInstagram className="text-3xl"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none"/>

          <div>
              <p className="text-center text-primary_text_color">© 2024 Higashi Fukuoka High School Digital Comitte All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}