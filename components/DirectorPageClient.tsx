'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Film } from '@/lib/data/films';
import { Director } from '@/lib/data/directors';

interface DirectorPageClientProps {
  directorData: Director;
  releasedFilms: Film[];
  upcomingFilms: Film[];
  totalFilms: number;
}

export default function DirectorPageClient({ 
  directorData, 
  releasedFilms, 
  upcomingFilms, 
  totalFilms 
}: DirectorPageClientProps) {
  const [language, setLanguage] = useState<'ko' | 'en'>('en');
  
  // Get language from localStorage or Header state
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'ko' | 'en' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    
    // Listen for language changes from Header
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'language' && e.newValue) {
        setLanguage(e.newValue as 'ko' | 'en');
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Translation object
  const translations = {
    ko: {
      currentStatus: '현재 상태',
      introduction: '소개',
      birth: '출생',
      education: '학력',
      career: '경력',
      filmography: '필모그래피',
      awards: '수상 경력',
      released: '개봉작',
      upcoming: '개봉예정작',
      totalFilms: '편의 작품',
      yearSuffix: '년',
      photoPreparation: '감독 사진 준비중',
      posterPreparation: '포스터 준비중',
      developmentStage: '작품 개발 단계'
    },
    en: {
      currentStatus: 'Current Status',
      introduction: 'Introduction',
      birth: 'Birth',
      education: 'Education',
      career: 'Career',
      filmography: 'Filmography',
      awards: 'Awards',
      released: 'Released',
      upcoming: 'Upcoming',
      totalFilms: ' Films',
      yearSuffix: '',
      photoPreparation: 'Director Photo Coming Soon',
      posterPreparation: 'Poster Coming Soon',
      developmentStage: 'In Development'
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Director Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Director Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                {directorData.photoUrl ? (
                  <Image
                    src={directorData.photoUrl}
                    alt={directorData.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {t.photoPreparation}
                  </div>
                )}
              </div>
            </div>
            
            {/* Director Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl font-light text-gray-900 mb-1">
                  {directorData.name}
                </h1>
                <h2 className="text-xl font-light text-gray-600 mb-4">
                  {directorData.nameKo}
                </h2>
                <div className="h-px bg-gray-200 my-4"></div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {language === 'ko' ? `총 ${totalFilms}${t.totalFilms}` : `${totalFilms}${t.totalFilms}`}
                </p>
              </div>

              {/* Status */}
              {directorData.status && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{t.currentStatus}</h3>
                  <div className="inline-flex items-center px-3 py-1.5 bg-gray-50 text-gray-700 text-sm font-light border border-gray-200">
                    {directorData.status === '작품 개발 단계' ? t.developmentStage : directorData.status}
                  </div>
                </div>
              )}

              {/* Bio */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{t.introduction}</h3>
                <p className="text-gray-900 leading-relaxed font-light">
                  {directorData.bio}
                </p>
              </div>

              {/* Birth Year */}
              {directorData.birthYear && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{t.birth}</h3>
                  <p className="text-gray-900 font-light">{directorData.birthYear}{t.yearSuffix}</p>
                </div>
              )}

              {/* Education */}
              {directorData.education && directorData.education.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{t.education}</h3>
                  <div className="space-y-2">
                    {directorData.education.map((edu, index) => (
                      <div key={index} className="text-gray-900 font-light flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        {edu}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career */}
              {directorData.career && directorData.career.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{t.career}</h3>
                  <div className="space-y-2">
                    {directorData.career.map((career, index) => (
                      <div key={index} className="text-gray-900 font-light flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        {career}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Filmography */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{t.filmography}</h3>
                <div className="space-y-2">
                  {directorData.filmography.map((film, index) => (
                    <div key={index} className="text-gray-900 font-light flex items-start">
                      <span className="w-1 h-1 bg-gray-900 mt-2.5 mr-3 flex-shrink-0"></span>
                      {film}
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              {directorData.awards && directorData.awards.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{t.awards}</h3>
                  <div className="space-y-2">
                    {directorData.awards.map((award, index) => (
                      <div key={index} className="text-gray-900 font-light flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2.5 mr-3 flex-shrink-0"></span>
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Released Films Section */}
        {releasedFilms.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">{t.released}</h2>
              <div className="flex-1 h-px bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {releasedFilms.map((film) => (
                <Link
                  key={film.id}
                  href={`/films/${film.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                    {film.posterUrl ? (
                      <Image
                        src={film.posterUrl}
                        alt={film.title}
                        width={400}
                        height={533}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        {t.posterPreparation}
                      </div>
                    )}
                  </div>
                  <h3 className="font-light text-gray-900 group-hover:text-gray-600 transition-colors mb-1">
                    {film.title}
                  </h3>
                  {film.titleKo && (
                    <p className="text-sm text-gray-500 font-light mb-1">{film.titleKo}</p>
                  )}
                  <p className="text-xs text-gray-400 font-light uppercase tracking-wide">
                    {film.year} • {Array.isArray(film.genre) ? film.genre.join(', ') : film.genre}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Films Section */}
        {upcomingFilms.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide">{t.upcoming}</h2>
              <div className="flex-1 h-px bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingFilms.map((film) => (
                <Link
                  key={film.id}
                  href={`/films/${film.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                    {film.posterUrl ? (
                      <Image
                        src={film.posterUrl}
                        alt={film.title}
                        width={400}
                        height={533}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        {t.posterPreparation}
                      </div>
                    )}
                  </div>
                  <h3 className="font-light text-gray-900 group-hover:text-gray-600 transition-colors mb-1">
                    {film.title}
                  </h3>
                  {film.titleKo && (
                    <p className="text-sm text-gray-500 font-light mb-1">{film.titleKo}</p>
                  )}
                  <p className="text-xs text-gray-400 font-light uppercase tracking-wide">
                    {film.year} • {Array.isArray(film.genre) ? film.genre.join(', ') : film.genre}
                  </p>
                  {film.productionStatus && (
                    <div className="inline-flex items-center px-2 py-1 bg-gray-50 text-gray-600 text-xs font-light mt-2 border border-gray-200">
                      {film.productionStatus === '작품 개발 단계' ? t.developmentStage : film.productionStatus}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}