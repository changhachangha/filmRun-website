'use client';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">ABOUT</h1>
            <h2 className="text-xl text-gray-700 mb-12">회사 소개</h2>
          </div>
        </div>
      </section>

      {/* Company Information Section - Visual Cards */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">COMPANY OVERVIEW</h2>
            <p className="text-lg text-gray-600">회사 기본 정보</p>
          </div>
          
          {/* Key Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-sm text-gray-500">Directors</div>
            </div>
            <div className="text-center p-6 bg-white shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-sm text-gray-500">Employees</div>
            </div>
            <div className="text-center p-6 bg-white shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-500">Writers</div>
            </div>
            <div className="text-center p-6 bg-white shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">2013</div>
              <div className="text-sm text-gray-500">Founded</div>
            </div>
          </div>

          {/* Company Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Company Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Company</span>
                  <span className="font-medium text-gray-900">Film Run Co., Ltd.</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Founder/CEO</span>
                  <span className="font-medium text-gray-900">PARK Doo-Hee</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium text-gray-900">March 1st, 2013</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shareholder</span>
                  <span className="font-medium text-gray-900">PARK Doo-Hee (100%)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Business Information</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 block mb-2">Primary Business</span>
                  <span className="font-medium text-gray-900">Film Development & Production<br/>Original Story IP Development</span>
                </div>
                <div>
                  <span className="text-gray-600 block mb-2">Filmography</span>
                  <span className="font-medium text-gray-900">&lt;Merry Christmas Mr. Mo&gt;<br/>&lt;Moonlit Winter&gt;</span>
                </div>
                <div>
                  <span className="text-gray-600 block mb-2">Website</span>
                  <span className="font-medium text-gray-900">www.filmrun.co.kr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-gray-600 block mb-2">Headquarters</span>
                  <span className="font-medium text-gray-900">Room 1404, 40, Cheonggyecheon-ro,<br/>Jung-gu, Seoul, Republic of Korea (04521)</span>
                </div>
                <div>
                  <span className="text-gray-600 block mb-2">Contact</span>
                  <span className="font-medium text-gray-900">+82 2-511-4301</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">VISION</h2>
            <p className="text-lg text-gray-600">비전</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 md:p-12 text-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-800 leading-relaxed font-light">
                  Film Run is a production company focused on creating intimate genre 
                  films that balance distinctive creative voices and accessibility, with the 
                  primary target of producing original films made under 5 MIL USD.
                </p>
                <div className="w-12 h-px bg-gray-300 mx-auto"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  And with the lesson learned from the success of our second feature film 
                  &lt;Moonlit Winter&gt;, a Korea-Japan Int. Co-Production, we look forward to 
                  bringing our creative voices to a global audience by collaborating on further 
                  international co-production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">COMPANY HISTORY</h2>
            <p className="text-lg text-gray-600">회사 연혁</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-32">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-4">
                        <span className="text-sm font-bold">1.0</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">2013-2014</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Short Film Distribution and Film Magazine Publishing
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Established in 2013, Film Run started as a distribution company of short films that won numerous awards at both domestic and international film festivals. With a total of 36 shorts, notable projects include award-winning films from various directors.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Published film magazine &lt;anno.&gt; with 3 issues covering Montage, Sound, and Mise-en-scène, with Issue No. 3 topping Aladdin&apos;s monthly best seller list in 2014.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-32">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-4">
                        <span className="text-sm font-bold">2.0</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">2015-2019</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Feature Film Production with Director LIM Dae-Hyung
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      First feature-length film &lt;Merry Christmas Mr. Mo&gt; (2017) was invited to the 53rd Karlovy Vary International Film Festival and won the Netpac Award at the 21st Busan International Film Festival. The second project &lt;Moonlit Winter&gt; (2019) won Best Director & Screenplay at the 41st Blue Dragon Film Award.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="bg-white p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-32">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-4">
                        <span className="text-sm font-bold">3.0</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">2020-Present</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      A Diverse, Distinctive Film Brand
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Putting the emphasis on the importance of storytelling at its utmost core, Film Run seeks to produce diverse and distinctive feature films within the Korean film industry. Harmonizing the filmmaker and audience&apos;s needs, the company specializes in low to mid-budget genre projects.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      A truthful and humble point of view toward the world, Film Run hopes to give the audience an opportunity to experience quintessential original stories with their creatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">TEAM</h2>
            <p className="text-lg text-gray-600">팀</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* CEO Profile */}
            <div className="bg-gray-50 p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-40 bg-gray-200 overflow-hidden mb-6">
                  <img
                    src="/images/img36.jpg"
                    alt="PARK DOO-HEE"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  PARK DOO-HEE
                </h3>
                <p className="text-primary font-medium text-sm mb-6">
                  CEO / PRODUCER
                </p>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Film producer and founder/CEO of Film Run. Former studio executive at CJ E&M and Little Big Pictures with 10+ years of experience in Korean film industry, specializing in financing, distribution, and marketing.
                  </p>
                  <p>
                    His feature films &lt;Merry Christmas Mr. Mo&gt; (2016) and &lt;Moonlit Winter&gt; (2019) have won multiple international awards including the Netpac Award and Best Director & Screenplay at Blue Dragon Film Award.
                  </p>
                </div>
              </div>
            </div>

            {/* Producer Profile */}
            <div className="bg-gray-50 p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-40 bg-gray-200 overflow-hidden mb-6">
                  <img
                    src="/images/img40.jpg"
                    alt="CHOI CHAN"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  CHOI CHAN
                </h3>
                <p className="text-primary font-medium text-sm mb-6">
                  PRODUCER
                </p>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Producer in charge of creative development at Film Run. Graduate from Korea National University of Arts Film Department. Participated in Netflix series &lt;Sense8&gt; (2015) and film &lt;Okja&gt; (2017).
                  </p>
                  <p>
                    Produced independent feature film &lt;Fairytale in Life-inspired by DISNEY&gt; in 2017, bringing unique creative vision to diverse film projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}