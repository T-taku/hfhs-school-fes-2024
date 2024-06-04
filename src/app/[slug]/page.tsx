import { getPages, getPage } from '@/lib/newt_pages';
import { notFound } from 'next/navigation';
//@ts-ignore
import { htmlToText } from 'html-to-text';
import BreadCrumbs from '@/components/breadcrumbs';
import { Noto_Sans_JP } from 'next/font/google';
import { BudouXText } from '@/lib/budoux';

type Props = {
  params: {
    slug: string;
  };
};

const NotoSans = Noto_Sans_JP({ subsets: ['latin'] });

export async function generateStaticParams() {
  const { articles } = await getPages();
  //@ts-ignore
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const article = await getPage(slug);

  const title = article?.title;
  const description = htmlToText(article?.body || '', {
    selectors: [{ selector: 'img', format: 'skip' }],
  }).slice(0, 200);

  return {
    title,
    description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  const article = await getPage(slug);
  if (!article) {
    notFound();
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center p-20 bg-menu_color bg-news_accent bg-no-repeat">
        <span className="block text-center text-primary_text_color text-3xl md:text-4xl font-bold">
          <BudouXText text={article.title} />
        </span>
      </div>
      <article className="p-2 md:px-20">
        <BreadCrumbs
          lists={[
            {
              string: 'トップページ',
              path: '/',
            },
            {
              string: article.title,
            },
          ]}
        />
        <div className="p-6 flex justify-center items-center">
          <div className="flex flex-col">
            <div className={NotoSans.className}>
              <div
                className={`prose md:prose-xl prose-a:text-primary_color prose-li:marker:text-menu_color prose-hr:border-primary_color prose-hr:m-2`}
                dangerouslySetInnerHTML={{ __html: article.body }}
              ></div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
