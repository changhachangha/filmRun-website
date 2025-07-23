'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';

const newsData = [
  {
    id: 1,
    category: '작품 소식',
    title: '"좋은 사람" 부산국제영화제 공식 선정',
    excerpt: '정욱 감독의 신작 "좋은 사람"이 제28회 부산국제영화제 뉴커런츠 부문에 공식 선정되었습니다. 일상의 따뜻함을 그린 휴먼 드라마로 많은 관심을 받고 있습니다.',
    content: '영화사 달리기의 정욱 감독이 연출한 신작 "좋은 사람"이 제28회 부산국제영화제 뉴커런츠 부문에 공식 선정되는 쾌거를 이뤘습니다. 이번 작품은 평범한 일상 속에서 벌어지는 작은 선행들이 어떻게 사람들의 마음을 움직이는지를 섬세하게 그려낸 휴먼 드라마입니다.',
    date: '2024-09-15',
    readTime: '3분',
    image: '/images/news/good-person-biff.jpg',
    featured: true,
  },
  {
    id: 2,
    category: '수상 소식',
    title: '김은주 감독, 칸영화제 주목할만한 시선 부문 선정',
    excerpt: '"침묵의 소리"로 국제무대에서 인정받은 김은주 감독이 칸영화제에서 주목받고 있습니다. 여성 감독으로서의 독창적인 시각이 높이 평가받았습니다.',
    content: '김은주 감독의 두 번째 장편영화 "침묵의 소리"가 제76회 칸영화제 주목할만한 시선(Un Certain Regard) 부문에 선정되었습니다. 이는 한국 여성 감독으로서는 매우 드문 성과로, 국제 영화계에서 그녀의 독창적인 시각과 탁월한 연출력을 인정받은 것입니다.',
    date: '2024-08-22',
    readTime: '4분',
    image: '/images/news/kim-eun-ju-cannes.jpg',
    featured: true,
  },
  {
    id: 3,
    category: '제작 소식',
    title: '박민호 감독 신작 "시간 너머" 촬영 시작',
    excerpt: 'SF 장르에 특화된 박민호 감독의 세 번째 작품 "시간 너머"가 본격적인 촬영에 들어갔습니다. 이번 작품은 시간여행을 소재로 한 철학적 SF 드라마입니다.',
    content: '박민호 감독의 신작 "시간 너머"가 지난주부터 본격적인 촬영에 들어갔습니다. 이번 작품은 시간여행이라는 SF적 소재를 통해 인간의 선택과 운명에 대한 철학적 질문을 던지는 작품으로, 감독 특유의 상상력과 깊이 있는 스토리텔링이 기대됩니다.',
    date: '2024-08-10',
    readTime: '5분',
    image: '/images/news/beyond-time-production.jpg',
    featured: false,
  },
  {
    id: 4,
    category: '회사 소식',
    title: '영화사 달리기, 새로운 스튜디오 오픈',
    excerpt: '더 나은 제작 환경을 위해 강남구에 새로운 스튜디오를 오픈했습니다. 최신 장비와 시설을 갖춘 이 공간에서 더욱 quality 높은 작품들을 만들어갈 예정입니다.',
    content: '영화사 달리기가 강남구 테헤란로에 새로운 스튜디오를 정식 오픈했습니다. 총 200평 규모의 이 스튜디오는 최신 디지털 장비와 사운드 시설을 완비하여 프리프로덕션부터 포스트프로덕션까지 원스톱 제작이 가능합니다.',
    date: '2024-07-28',
    readTime: '3분',
    image: '/images/news/new-studio-opening.jpg',
    featured: false,
  },
  {
    id: 5,
    category: '업계 소식',
    title: '이수연 감독, 다큐멘터리 "기억의 조각들" DMZ영화제 대상 수상',
    excerpt: '베테랑 이수연 감독의 다큐멘터리 "기억의 조각들"이 DMZ국제다큐영화제에서 대상을 수상했습니다. 분단의 아픔을 다룬 감동적인 작품으로 평가받았습니다.',
    content: '이수연 감독의 다큐멘터리 "기억의 조각들"이 제15회 DMZ국제다큐영화제에서 대상을 수상하는 영광을 안았습니다. 이 작품은 분단으로 인해 헤어진 가족들의 이야기를 20년에 걸쳐 추적한 대작으로, 현실적이면서도 감동적인 스토리텔링이 높은 평가를 받았습니다.',
    date: '2024-07-15',
    readTime: '6분',
    image: '/images/news/memory-fragments-award.jpg',
    featured: false,
  },
  {
    id: 6,
    category: '제작 소식',
    title: '2025년 신작 라인업 공개',
    excerpt: '영화사 달리기의 2025년 제작 예정 작품들이 공개되었습니다. 다양한 장르의 5편의 영화가 관객들을 만날 예정입니다.',
    content: '영화사 달리기가 2025년 제작 예정인 신작 라인업을 공개했습니다. 정욱 감독의 "마지막 여행", 김은주 감독의 "빛과 그림자", 박민호 감독의 "다른 세상" 등 총 5편의 작품이 준비되고 있으며, 각각 다른 매력과 메시지를 담은 영화들로 구성되어 있습니다.',
    date: '2024-06-30',
    readTime: '4분',
    image: '/images/news/2025-lineup.jpg',
    featured: false,
  },
];

export default function NewsPage() {
  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-film">
          <div
            className="text-center"
          >
            <h1 className="text-display-lg md:text-display-xl font-bold text-gray-900 mb-6">
              뉴스
            </h1>
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              영화사 달리기의 최신 소식과 작품 업데이트를 확인하세요. 
              감독들의 새로운 프로젝트와 수상 소식을 전해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container-film">
          <div
            className="mb-12"
          >
            <h2 className="text-display-sm font-bold text-gray-900 mb-8">
              주요 소식
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <div
                  key={news.id}
                >
                  <Link href={`/news/${news.id}`}>
                    <Card variant="elevated" padding="none" className="overflow-hidden group cursor-pointer h-full">
                      {/* News Image */}
                      <div className="aspect-[16/10] bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <Tag className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-gray-600 font-medium">{news.category}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100" />
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                              {news.category}
                            </span>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(news.date).toLocaleDateString('ko-KR')}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{news.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary">
                            {news.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {news.excerpt}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                          <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary flex items-center gap-2">
                            자세히 보기
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regular News */}
      <section className="py-16 bg-gray-50">
        <div className="container-film">
          <div
            className="mb-12"
          >
            <h2 className="text-display-sm font-bold text-gray-900 mb-8">
              모든 소식
            </h2>
            <div className="space-y-6">
              {regularNews.map((news, index) => (
                <div
                  key={news.id}
                >
                  <Link href={`/news/${news.id}`}>
                    <Card variant="default" padding="lg" className="group cursor-pointer hover:shadow-md">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* News Image */}
                        <div className="md:w-48 aspect-[16/10] md:aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <Tag className="w-6 h-6 text-white" />
                              </div>
                              <p className="text-gray-600 text-sm font-medium">{news.category}</p>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="mb-3">
                            <div className="flex items-center gap-4 mb-2">
                              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                {news.category}
                              </span>
                              <div className="flex items-center gap-3 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{new Date(news.date).toLocaleDateString('ko-KR')}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{news.readTime}</span>
                                </div>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary">
                              {news.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {news.excerpt}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <Button variant="ghost" size="sm" className="group-hover:text-primary p-0 h-auto">
                              자세히 보기
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 film-gradient">
        <div className="container-film">
          <div
            className="text-center text-white"
          >
            <h2 className="text-display-md font-bold mb-6">
              뉴스레터 구독
            </h2>
            <p className="text-body-lg mb-8 max-w-2xl mx-auto opacity-90">
              영화사 달리기의 최신 소식을 가장 먼저 받아보세요. 
              새로운 작품 정보와 특별한 이벤트 소식을 전해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 btn-film px-8"
              >
                구독하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}