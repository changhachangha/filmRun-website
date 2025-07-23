import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

const newsData = [
  {
    id: 1,
    category: '작품 소식',
    title: '"좋은 사람" 부산국제영화제 공식 선정',
    excerpt: '정욱 감독의 신작 "좋은 사람"이 제28회 부산국제영화제 뉴커런츠 부문에 공식 선정되었습니다.',
    content: '영화사 달리기의 정욱 감독이 연출한 신작 "좋은 사람"이 제28회 부산국제영화제 뉴커런츠 부문에 공식 선정되는 쾌거를 이뤘습니다. 이번 작품은 평범한 일상 속에서 벌어지는 작은 선행들이 어떻게 사람들의 마음을 움직이는지를 섬세하게 그려낸 휴먼 드라마입니다.',
    date: '2024-09-15',
    readTime: '3분',
    author: '영화사 달리기',
  },
  {
    id: 2,
    category: '수상 소식',
    title: '김은주 감독, 칸영화제 주목할만한 시선 부문 선정',
    excerpt: '"침묵의 소리"로 국제무대에서 인정받은 김은주 감독이 칸영화제에서 주목받고 있습니다.',
    content: '김은주 감독의 두 번째 장편영화 "침묵의 소리"가 제76회 칸영화제 주목할만한 시선(Un Certain Regard) 부문에 선정되었습니다.',
    date: '2024-08-22',
    readTime: '4분',
    author: '영화사 달리기',
  },
  {
    id: 3,
    category: '제작 소식',
    title: '박민호 감독 신작 "시간 너머" 촬영 시작',
    excerpt: 'SF 장르에 특화된 박민호 감독의 세 번째 작품이 본격적인 촬영에 들어갔습니다.',
    content: '박민호 감독의 신작 "시간 너머"가 지난주부터 본격적인 촬영에 들어갔습니다.',
    date: '2024-08-10',
    readTime: '5분',
    author: '영화사 달리기',
  }
];

interface NewsDetailProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { id } = await params;
  const news = newsData.find(n => n.id === parseInt(id));

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-film">
          <Link href="/news">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              뉴스 목록으로
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container-film">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {news.category}
              </span>
            </div>
            <h1 className="text-display-lg font-bold text-gray-900 mb-6">
              {news.title}
            </h1>
            <p className="text-body-lg text-gray-600 mb-8">
              {news.excerpt}
            </p>
            <div className="prose prose-gray max-w-none">
              <p>{news.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}