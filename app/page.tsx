import { Logo } from '@/components/ui/Logo';
import { films } from '@/lib/data/films';
import Link from 'next/link';

export default function Home() {
  const filmographyFilms = films.filter((film) => film.category === 'filmography');
  const releasedFilmography = filmographyFilms.filter((film) => film.status === 'released');
  const upcomingFilmography = filmographyFilms.filter((film) => film.status === 'upcoming');

  return (
    <>
      {/* Hero Section - Minimal */}
      <section className="bg-white dark:bg-gray-900 py-24">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="mb-12">
              <Logo size="lg" />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-gray-100 mb-4">
              FILM RUN
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-8">영화사 달리기</h2>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-6xl mx-auto">
                  영화사 달리기는 스토리텔링의 핵심 가치를 중시하며, 한국 영화
                  산업 내에서 다양하고 독창적인 장편 영화를 제작하는 것을 목표로
                  합니다. 제작자와 관객의 요구를 조화시키며, 세상을 향한
                  진실하고 겸손한 관점으로 중저예산 장르 프로젝트를 전문으로
                  합니다.
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-6xl mx-auto">
                  <strong>Film Run</strong> seeks to produce diverse and
                  distinctive feature films within the Korean film industry.
                  Putting the emphasis on the importance of storytelling at its
                  utmost core, we harmonize the filmmaker and audience&apos;s
                  needs through low to mid-budget genre projects with a truthful
                  and humble point of view toward the world. We believe in true
                  collaboration and enjoy working with filmmakers with strong
                  artistic vision and sensitivity. We have expertise in both
                  domestic and international co-production, and our latest
                  titles have been screened at major film festivals worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filmography */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-4">
              FILMOGRAPHY
            </h2>
            <h3 className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12">
              필모그래피
            </h3>
          </div>

          {/* Films Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[...releasedFilmography, ...upcomingFilmography].map((film) => (
                <div key={film.id} className="group">
                  <Link href={`/films/${film.id}`}>
                    <div className="space-y-4">
                      <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 overflow-hidden w-full max-w-xs mx-auto">
                        {film.posterUrl ? (
                          <img
                            src={film.posterUrl}
                            alt={film.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                            <div className="text-center text-gray-400 dark:text-gray-500">
                              <div className="text-4xl mb-2">🎬</div>
                              <p className="text-sm">Coming Soon</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400">
                          {film.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{film.titleKo}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {film.director} | {film.year}
                        </p>
                        {film.status === 'released' &&
                          film.awards &&
                          film.awards.length > 0 && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                              {film.awards[0]}
                            </p>
                          )}
                        {film.status === 'upcoming' && (
                          <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            Upcoming
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO & Producer Profile */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-4">TEAM</h2>
            <h3 className="text-xl font-light text-gray-600 dark:text-gray-400 mb-12">팀</h3>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* CEO Card */}
            <div className="group">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 overflow-hidden w-48 mx-auto md:mx-0">
                      <img
                        src="/images/img36.jpg"
                        alt="PARK DOO-HEE"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-1">
                        PARK DOO-HEE
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        CEO / PRODUCER
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                          Founder and CEO of Film Run. Former executive at CJ E&M and Little Big Pictures&apos; 
                          independent film departments. Over 10 years of experience in film production, 
                          distribution, and marketing.
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                          Film Run 창립자 겸 대표이사. CJ E&M과 Little Big Pictures 독립영화 부서 임원 출신. 
                          10년 이상의 영화 제작, 배급, 마케팅 경험 보유.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Producer Card */}
            <div className="group">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 overflow-hidden w-48 mx-auto md:mx-0">
                      <img
                        src="/images/img40.jpg"
                        alt="CHOI CHAN"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-1">
                        CHOI CHAN
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        PRODUCER
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                          Producer in charge of creative development at Film Run. Graduated from Korea National 
                          University of Arts, Film Department. Participated in Netflix series &ldquo;Sense8&rdquo; (2015) 
                          and film &ldquo;Okja&rdquo; (2017). Produced independent feature &ldquo;Fairytale in Life&rdquo; (2017).
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                          Film Run 크리에이티브 개발 담당 프로듀서. 한국예술종합학교 영화과 졸업. 
                          Netflix 시리즈 「센스8」(2015)과 영화 「옥자」(2017) 참여. 
                          2017년 독립 장편영화 「Fairytale in Life」 제작.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
