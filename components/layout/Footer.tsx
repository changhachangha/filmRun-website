import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-6 lg:px-16 xl:px-24 py-8">
        {/* Company and Contact Information - Horizontal Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Company Info */}
            <div className="lg:flex-1">
              <h3 className="text-base font-bold mb-3">
                영화사 달리기 Film Run
              </h3>
              <div className="space-y-0.5 text-xs">
                <p>
                  <span className="font-bold text-white">A.</span>{' '}
                  <span className="font-bold text-gray-300">
                    (04521) 서울시 중구 청계천로 40 CKL기업지원센터 1404호
                  </span>
                </p>
                <p className="ml-4 font-bold text-gray-300">
                  Room 1404, 40, Cheonggyecheon-ro, Jung-gu,
                </p>
                <p className="ml-4 font-bold text-gray-300">
                  Seoul, Republic of Korea (04521)
                </p>
                <p className="pt-1">
                  <span className="font-bold text-white">T.</span>{' '}
                  <span className="font-bold text-gray-300">
                    +82 2.511.4301
                  </span>
                </p>
              </div>
            </div>

            {/* People Info Container */}
            <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* CEO/Producer */}
              <div>
                <h4 className="text-xs font-medium mb-3 text-gray-400">
                  대표 CEO / 프로듀서 Producer
                </h4>
                <div className="text-xs space-y-1">
                  <p className="font-bold text-white">박두희 PARK Doo-hee</p>
                  <p>
                    <span className="font-bold text-white">M.</span>{' '}
                    <span className="font-bold text-gray-300">
                      +82.10.3113.3001
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-white">E.</span>{' '}
                    <Link
                      href="mailto:pdh@filmrun.co.kr"
                      className="font-bold text-gray-300 hover:text-white"
                    >
                      pdh@filmrun.co.kr
                    </Link>
                  </p>
                </div>
              </div>

              {/* Producer */}
              <div>
                <h4 className="text-xs font-medium mb-3 text-gray-400">
                  프로듀서 Producer
                </h4>
                <div className="text-xs space-y-1">
                  <p className="font-bold text-white">최찬 CHOI Chan</p>
                  <p>
                    <span className="font-bold text-white">M.</span>{' '}
                    <span className="font-bold text-gray-300">
                      +82.10.7227.4502
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-white">E.</span>{' '}
                    <Link
                      href="mailto:gomkkidang@gmail.com"
                      className="font-bold text-gray-300 hover:text-white"
                    >
                      gomkkidang@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex justify-center">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2025 Film Run. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
