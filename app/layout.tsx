import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Film Run - 영화사 달리기',
  description:
    '영화사 달리기(Film Run)의 공식 웹사이트입니다. 최신 영화 작품과 감독진을 만나보세요.',
  keywords: '영화, 영화사, 달리기, Film Run, 한국영화, 영화제작',
  authors: [{ name: 'Film Run' }],
  openGraph: {
    title: 'Film Run - 영화사 달리기',
    description: '영화사 달리기의 공식 웹사이트',
    url: 'https://www.filmrun.co.kr',
    siteName: 'Film Run',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
