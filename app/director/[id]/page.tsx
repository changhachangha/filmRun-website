import { notFound } from 'next/navigation';
import { films } from '@/lib/data/films';
import { directors, getDirectorById } from '@/lib/data/directors';
import DirectorPageClient from '@/components/DirectorPageClient';

interface DirectorPageProps {
  params: Promise<{
    id: string;
  }>;
}

function getDirectorBySlug(slug: string) {
  const directorData = getDirectorById(slug);
  if (!directorData) return null;
  
  const directorFilms = films.filter(film => film.director === directorData.name);
  return {
    name: directorData.name,
    films: directorFilms
  };
}

export async function generateStaticParams() {
  return directors.map(director => ({
    id: director.id
  }));
}

export default async function DirectorPage({ params }: DirectorPageProps) {
  const { id } = await params;
  const directorData = getDirectorById(id);
  const director = getDirectorBySlug(id);
  
  if (!director || !directorData) {
    notFound();
  }

  const releasedFilms = director.films.filter(film => film.status === 'released');
  const upcomingFilms = director.films.filter(film => film.status === 'upcoming');

  return (
    <DirectorPageClient 
      directorData={directorData}
      releasedFilms={releasedFilms}
      upcomingFilms={upcomingFilms}
      totalFilms={director.films.length}
    />
  );
}