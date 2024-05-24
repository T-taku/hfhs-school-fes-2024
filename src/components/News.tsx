import { formatDate } from '@/lib/date';
import { getArticles } from '@/lib/newt';
import { Article } from '@/types/article';
import Link from 'next/link';

export default async function News() {
  const { articles } = await getArticles({
    limit: 10,
  });

  return (
    <>
      <div className="relative" id="news">
        <div className="w-screen p-2 md:p-8 text-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-center items-center">
            <div className="relative text-primary_color p-4 lg:p-10 md:py-20 flex items-center justify-center">
              <div className="relative [writing-mode:vertical-rl] flex flex-col items-start">
                <span className="text-2xl md:text-3xl">最新情報</span>
                <span className="text-sm mb-2 text-secondary_text_color">News</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-start md:w-[1100px] px-4">
              <ul className="space-y-4 text-xl">
                {articles.map((article: any) => {
                  return (
                    <li key={article._id} className="flex items-start">
                      <Link href={`news/${article.slug}`} prefetch={false}>
                        <div className="flex justify-start items-center space-x-4">
                          <time dateTime={formatDate(article._sys.createdAt)}>
                            {formatDate(article._sys.createdAt)}
                          </time>
                          <span className="text-primary_color border-primary_color border px-2 rounded-full">
                            {article.category.name}
                          </span>
                        </div>
                        <span className="relative inline cursor-pointer before:bg-primary_color before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                          {article.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
