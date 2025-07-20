'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Film Run Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center space-x-2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 relative">
                    {/* Abstract logo shapes */}
                    <div className="absolute top-1 left-1 w-4 h-4 bg-blue-600 rounded-full" />
                    <div className="absolute top-0 right-2 w-3 h-3 bg-blue-600 rounded-full" />
                    <div className="absolute bottom-1 left-3 w-5 h-5 bg-blue-600 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              영화사 달리기
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Film Run</h2>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              감정을 움직이는 이야기로
              <br />
              세상과 소통하는 영화를 만듭니다
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 space-x-4"
            >
              <Link href="/films">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600"
                >
                  작품 보기
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  회사 소개
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Films Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              최신 작품
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    영화 제목 {item}
                  </h3>
                  <p className="text-gray-600">2025년 개봉 예정</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/films">
                <Button variant="outline" size="lg">
                  모든 작품 보기
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                영화사 달리기
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                우리는 단순히 영화를 만드는 것이 아니라, 인간의 깊은 감정과
                복잡한 이야기를 담아내는 의미 있는 작품을 만들어갑니다.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                각각의 프로젝트는 독특한 시각과 창의적인 접근으로 관객들에게
                새로운 경험을 선사합니다.
              </p>
              <Link href="/about">
                <Button variant="primary" size="lg">
                  더 알아보기
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-square bg-gray-200 rounded-lg"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Line Up 2025 Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Line Up 2025</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              2025년 영화사 달리기의 새로운 도전과 더욱 다양한 이야기들을
              만나보세요
            </p>
            <Link href="/news">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                최신 소식 보기
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
