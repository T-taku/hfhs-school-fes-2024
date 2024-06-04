//@ts-ignore
import BreadCrumbs from '@/components/breadcrumbs';
import { BudouXText } from '@/lib/budoux';
import { getArticles, getCategories } from '@/lib/newt_news';
import { formatDate } from '@/lib/date';
import Link from "next/link";


export const dynamicParams = false;

export default async function News_list() {
  const { articles } = await getArticles();
  return (
    <main className='min-h-screen'>
      <div className="flex flex-col justify-center items-center p-20 bg-menu_color bg-news_accent">
        <span className="block text-center text-primary_text_color text-3xl md:text-4xl font-bold">
          <BudouXText text={"お知らせ"} />
        </span>
        <span className="block text-primary_text_color text-2xl font-bold">News</span>
      </div>
      <article className="p-2 md:px-20">
        <BreadCrumbs
          lists={[
            {
              string: 'トップページ',
              path: '/',
            },
            {
              string: "お知らせ",
            },
          ]}
        />
        <div className="p-6 flex justify-center items-center">
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
      </article>
    </main>
  );
}

