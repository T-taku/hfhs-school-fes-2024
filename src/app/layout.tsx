import type { Metadata } from 'next';
import { Kaisei_Opti } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const kaisei = Kaisei_Opti({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | 2024年 東福岡学園学園祭',
    default: '東代随一 | 2024年 東福岡学園 学園祭',
  },
  description:
    '学校法人東福岡学園 2024年 学園祭の公式ホームページです。今年のテーマは、「東代随一」。男子校最後となる学園祭! これまでのどの学園祭よりも、アツい学園祭を開催します。今年の学園祭は、6月8日(土)のみ一般開放となります。',
  openGraph: {
    siteName: '2024年 東福岡学園 学園祭',
    locale: 'ja_JP',
    type: 'website',
    description:
    '学校法人東福岡学園 2024年 学園祭の公式ホームページです。今年のテーマは、「東代随一」。男子校最後となる学園祭! これまでのどの学園祭よりも、アツい学園祭を開催します。今年の学園祭は、6月8日(土)のみ一般開放となります。',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`bg-primary_text_color ${kaisei.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
    </html>
  );
}
