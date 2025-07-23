'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            영화사 달리기
          </h1>
          <h2 className="text-lg md:text-xl font-light text-gray-600 mb-12">
            Film Run
          </h2>
        </div>
      </section>

      {/* About Company */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-gray-700 leading-7">
            <p>
              Film Run is a production company focused on creating intimate
              genre films that balance distinctive creative voices and
              accessibility, with the primary target of producing original films
              made under 5 MIL USD.
            </p>
            <p>
              Putting the emphasis on the importance of storytelling at its
              utmost core, Film Run seeks to produce diverse and distinctive
              feature films within the Korean film industry.
            </p>
            <p>
              With the lesson learned from the success of our second feature
              film &ldquo;Moonlit Winter&rdquo;, a Korea-Japan International
              Co-Production, we look forward to bringing our creative voices to
              a global audience.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <hr className="border-t-2 border-black" />
      </div>

      {/* Company Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-6 text-gray-700">
              <p>
                <strong>Founded:</strong> March 1st, 2013
              </p>
              <p>
                <strong>Business:</strong> Film Development & Production
              </p>
            </div>

            {/* Team Members */}
            <div className="space-y-12 pt-8 border-t border-gray-200">
              {/* CEO */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden w-32 mx-auto md:mx-0">
                    <Image
                      src="/images/img36.jpg"
                      alt="PARK DOO-HEE"
                      width={128}
                      height={171}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      박두희 PARK Doo-hee
                    </h3>
                    <p className="text-gray-600 font-medium text-sm">
                      CEO / Producer
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <p>
                      Film Run 창립자 겸 대표이사. CJ E&M과 Little Big Pictures
                      독립영화 부서 임원 출신. 10년 이상의 영화 제작, 배급,
                      마케팅 경험 보유.
                    </p>
                  </div>
                </div>
              </div>

              {/* Producer */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden w-32 mx-auto md:mx-0">
                    <Image
                      src="/images/img40.jpg"
                      alt="CHOI CHAN"
                      width={128}
                      height={171}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      최찬 CHOI Chan
                    </h3>
                    <p className="text-gray-600 font-medium text-sm">
                      Producer
                    </p>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <p>
                      Film Run 크리에이티브 개발 담당 프로듀서. 한국예술종합학교
                      영화과 졸업. Netflix 시리즈 「센스8」(2015)과 영화
                      「옥자」(2017) 참여. 2017년 독립 장편영화 「Fairytale in
                      Life」 제작.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <hr className="border-t-2 border-black" />
      </div>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-gray-700">
            <p>
              <strong>March 2013:</strong> Company Founded
            </p>
            <p>
              <strong>2017:</strong> Merry Christmas Mr. Mo - NETPAC Award
            </p>
            <p>
              <strong>2019:</strong> Moonlit Winter - Best Director & Screenplay
            </p>
            <p>
              <strong>2020 - Present:</strong> Expanding International
              Co-Productions
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <hr className="border-t-2 border-black" />
      </div>

      {/* Filmography */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                Merry Christmas Mr. Mo
              </h4>
              <p className="text-gray-600 mb-4">
                메리 크리스마스 미스터 모 (2017)
              </p>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Director:</strong> LIM Dae-Hyung
                </p>
                <p>
                  <strong>Awards:</strong> NETPAC Award - 21st Busan
                  International Film Festival
                </p>
                <p>
                  <strong>Festivals:</strong> 52nd Karlovy Vary International
                  Film Festival
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-2">
                Moonlit Winter
              </h4>
              <p className="text-gray-600 mb-4">윤희에게 (2019)</p>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Director:</strong> LIM Dae-Hyung
                </p>
                <p>
                  <strong>Awards:</strong> Best Director & Screenplay - 41st
                  Blue Dragon Film Award
                </p>
                <p>
                  <strong>Festivals:</strong> Closing Film - 24th Busan
                  International Film Festival
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <hr className="border-t-2 border-black" />
      </div>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Address
              </h4>
              <p className="text-gray-700 leading-6">
                (04521) 서울시 중구 청계천로 40 CKL기업지원센터 1404호
                <br />
                Room 1404, 40, Cheonggyecheon-ro, Jung-gu, Seoul, Republic of
                Korea (04521)
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Contact
              </h4>
              <div className="text-gray-700 space-y-1">
                <p>
                  <strong>Tel:</strong> +82 2.511.4301
                </p>
                <p>
                  <strong>CEO:</strong> pdh@filmrun.co.kr
                </p>
                <p>
                  <strong>Producer:</strong> gomkkidang@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
