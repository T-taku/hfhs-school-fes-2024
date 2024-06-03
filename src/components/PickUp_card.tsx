import { BudouXText } from '@/lib/budoux';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

const NotoSans = Noto_Sans_JP({ subsets: ['latin'] });

export default function PickUp_Card({
  title,
  content,
  link = '',
  link_text = '詳しくはこちら',
  image = '',
}: {
  title: string;
  content: string;
  link: string;
  link_text: string;
  image: string;
}) {
  return (
    <>
      <div className="bg-menu_color text-primary_text_color overflow-hidden flex flex-col items-center md:flex-row rounded-xl h-[380px] md:h-80 md:w-[80%]">
        <div className="p-4 px-2 md:p-8 flex-1">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
          <p className={`mb-4 ${NotoSans.className}`}>
            <BudouXText text={content} />
          </p>
          {link && (
            <Link
              href={link}
              className="text-md relative inline-flex items-center cursor-pointer before:bg-primary_text_color before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 transition-all duration-500 hover:ml-4"
            >
              <FaAngleRight />
              {link_text ? link_text : '詳しくはこちら'}
            </Link>
          )}
        </div>
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <Image
            src={image ? image : '/logo_white_2.webp'}
            alt={title}
            width={image ? 1200 : 200}
            height={image ? 900 : 200}
            objectFit="cover"
            className={image ? "w-full h-full object-cover object-top md:object-center" : "object-fill"}
          />
        </div>
      </div>
    </>
  );
}
