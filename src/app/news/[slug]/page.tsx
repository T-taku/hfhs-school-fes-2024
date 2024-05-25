import { formatDate } from '@/lib/date';
import { getArticle, getArticles } from '@/lib/newt_news';
import { notFound } from 'next/navigation';
//@ts-ignore
import { htmlToText } from 'html-to-text';
import BreadCrumbs from '@/components/breadcrumbs';
import { Noto_Sans_JP } from 'next/font/google';

type Props = {
  params: {
    slug: string;
  };
};

const NotoSans = Noto_Sans_JP({ subsets: ['latin'] });

export async function generateStaticParams() {
  const { articles } = await getArticles();
  //@ts-ignore
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const article = await getArticle(slug);

  const title = article?.meta?.title || article?.title;
  const bodyDescription = htmlToText(article?.body || '', {
    selectors: [{ selector: 'img', format: 'skip' }],
  }).slice(0, 200);
  const description = article?.meta?.description || bodyDescription;
  const ogImage = article?.meta?.ogImage?.src;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      images: ogImage,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const article = await getArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center p-20 bg-menu_color">
        <span className="block text-primary_text_color text-4xl font-bold">お知らせ</span>
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
              string: 'お知らせ一覧',
              path: '/news',
            },
            {
              string: article.title,
            },
          ]}
        />
        <div className="p-6 flex justify-center items-center">
          <div className="flex flex-col justify-between items-between">
            <div className="my-8 border-b-2 border-b-primary_color">
              <div className="flex justify-between">
                <time dateTime={formatDate(article._sys.createdAt)} className="">
                  {formatDate(article._sys.createdAt)}
                </time>
                <span className="text-primary_color border-primary_color border px-2 rounded-full">
                  {article.category.name}
                </span>
              </div>
              <div className="text-3xl pb-6">{article.title}</div>
            </div>
            <div className={NotoSans.className}>
              <div
                className={`prose prose-a:text-primary_color prose-li:marker:text-menu_color prose-hr:border-primary_color prose-hr:m-2`}
                dangerouslySetInnerHTML={{ __html: article.body }}
              ></div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
