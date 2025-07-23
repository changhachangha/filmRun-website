'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { films } from '@/lib/data/films';

export default function FilmsPage() {
  const [filter, setFilter] = useState<'all' | 'released' | 'upcoming'>('all');

  // Only show 'film' category (exclude 'filmography')
  const filmCategoryFilms = films.filter((film) => film.category === 'film');
  const filteredFilms = filmCategoryFilms.filter(
    (film) => filter === 'all' || film.status === filter
  );

  const filterOptions = [
    { value: 'all' as const, label: '전체' },
    { value: 'released' as const, label: '개봉작' },
    { value: 'upcoming' as const, label: '개봉예정작' },
  ];

  return (
    <div className="min-h-screen bg-white  pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900  mb-4">
            필름
          </h1>
          <p className="text-lg text-gray-600  max-w-2xl mx-auto">
            영화사 달리기의 다양한 필름 프로젝트들을 만나보세요
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 text-sm font-medium transition-colors border border-gray-200  ${
                  filter === option.value
                    ? 'bg-gray-900 text-white '
                    : 'bg-white  text-gray-700  hover:bg-gray-50 '
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilms.map((film) => (
            <Link
              key={film.id}
              href={`/films/${film.id}`}
              className="group block"
            >
              <div className="aspect-[3/4] mb-4 overflow-hidden bg-gray-100 ">
                {film.posterUrl ? (
                  <Image
                    src={film.posterUrl}
                    alt={film.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 ">
                    포스터 준비중
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="font-light text-gray-900  group-hover:text-gray-600  transition-colors">
                  {film.title}
                </h3>
                {film.titleKo && (
                  <p className="text-sm text-gray-500  font-light">{film.titleKo}</p>
                )}
                <div className="flex items-center justify-between text-sm text-gray-600 ">
                  <span>{film.director}</span>
                  <span>{film.year}</span>
                </div>
                <span className="inline-block text-xs text-gray-400  uppercase tracking-wide">
                  {Array.isArray(film.genre) ? film.genre.join(', ') : film.genre}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredFilms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500  text-lg">선택된 조건에 맞는 영화가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}