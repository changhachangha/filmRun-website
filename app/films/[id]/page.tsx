'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFilmById, Film } from '@/lib/data/films';
import { VideoModal } from '@/components/ui/VideoModal';
import { useState, useEffect } from 'react';

interface FilmDetailProps {
  params: Promise<{ id: string }>;
}


export default function FilmDetailPage({ params }: FilmDetailProps) {
  const [film, setFilm] = useState<Film | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    async function loadFilm() {
      const resolvedParams = await params;
      const { id } = resolvedParams;
      const filmData = getFilmById(id);
      if (!filmData) {
        notFound();
      }
      setFilm(filmData);
    }
    loadFilm();
  }, [params]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white flex items-center">
      {/* Main Content with Navigation */}
      <section className="w-full py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-4 absolute top-4 left-6 lg:left-8 flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
              ← Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/films" className="text-gray-600 hover:text-gray-900 text-sm">
              Films
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Poster Image */}
            <div className="flex justify-center lg:justify-start">
              {film.posterUrl && (
                <div className="max-w-md w-full">
                  <img 
                    src={film.posterUrl} 
                    alt={film.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>

            {/* Right Column - Film Information */}
            <div className="space-y-4 lg:space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {film.title.toUpperCase()}
                </h1>
                <h2 className="text-xl font-light text-gray-600">
                  {film.titleKo}
                </h2>
              </div>

              {/* Director */}
              <div className="text-base text-gray-600">
                <strong>by {film.director}</strong>
              </div>

              {/* Film Info */}
              <div className="text-sm text-gray-700">
                {film.genre.join(', ')} | {film.country} | {film.duration} | {film.year}
              </div>

              {/* Budget */}
              {film.budget && (
                <div className="text-sm">
                  <span className="text-gray-500">Budget:</span> <span className="font-medium text-gray-700">{film.budget}</span>
                </div>
              )}

              {/* Production Status for Upcoming Films */}
              {film.status === 'upcoming' && (film.productionStatus || film.productionPeriod) && (
                <div className="space-y-1">
                  {film.productionStatus && (
                    <div className="text-sm">
                      <span className="text-gray-500">Status:</span> <span className="font-medium text-gray-700">{film.productionStatus}</span>
                    </div>
                  )}
                  {film.productionPeriod && (
                    <div className="text-sm">
                      <span className="text-gray-500">Production:</span> <span className="font-medium text-gray-700">{film.productionPeriod}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Synopsis */}
              <div className="text-sm text-gray-700 leading-relaxed">
                {film.synopsis}
              </div>

              {/* Notes for Upcoming Films */}
              {film.note && film.note.length > 0 && (
                <div className="space-y-1">
                  {film.note.map((noteItem, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      • {noteItem}
                    </div>
                  ))}
                </div>
              )}

              {/* Awards & Festivals */}
              {(film.awards && film.awards.length > 0) || (film.festivals && film.festivals.length > 0) ? (
                <div className="space-y-2">
                  {film.awards && film.awards.length > 0 && (
                    <div className="space-y-1">
                      {film.awards.map((award, index) => (
                        <div key={index} className="text-xs text-gray-600">
                          {award}
                        </div>
                      ))}
                    </div>
                  )}

                  {film.festivals && film.festivals.length > 0 && (
                    <div className="space-y-1">
                      {film.festivals.map((festival, index) => (
                        <div key={index} className="text-xs text-gray-600">
                          {festival}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
              
              {/* Status */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {film.status === 'released' ? 'Released' : 
                   film.status === 'upcoming' ? 'Coming Soon' : 
                   'In Production'}
                </div>
              </div>
            </div>
          </div>

          {/* Cast Section for Upcoming Films */}
          {film.cast && film.cast.length > 0 && (
            <div className="mt-8 lg:mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Cast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {film.cast.map((actor, index) => (
                  <div key={index} className="text-center">
                    {actor.image && (
                      <div className="mb-3 aspect-[3/4] overflow-hidden flex items-center justify-center bg-gray-100 p-4">
                        <img 
                          src={actor.image} 
                          alt={actor.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <h4 className="font-medium text-gray-900 text-sm">{actor.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{actor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Director's Statement */}
          {film.directorStatement && (
            <div className="mt-8 lg:mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Director&apos;s Statement</h3>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {film.directorStatement}
              </p>
            </div>
          )}

          {/* Producer's Statement */}
          {film.producerStatement && (
            <div className="mt-8 lg:mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Producer&apos;s Statement</h3>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {film.producerStatement}
              </p>
            </div>
          )}

          {/* Director Profile */}
          {film.directorProfile && (
            <div className="mt-8 lg:mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Director Profile</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {film.directorProfile}
              </p>
            </div>
          )}

          {/* YouTube Trailer */}
          {film.trailerUrl && (
            <div className="mt-8 lg:mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Trailer</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute top-0 left-0 w-full h-full group cursor-pointer"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${film.trailerUrl.split('/').pop()?.split('?')[0]}/maxresdefault.jpg`}
                    alt={`${film.title} Trailer Thumbnail`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-black transition-colors">
                      <svg 
                        className="w-10 h-10 ml-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="sr-only">동영상 재생</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {film.trailerUrl && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={film.trailerUrl}
          title={film.title}
        />
      )}
    </div>
  );
}