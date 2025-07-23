'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Logo } from '@/components/ui/Logo';
import { films } from '@/lib/data/films';
import { directors } from '@/lib/data/directors';
import { useTheme } from '@/hooks/useTheme';

const navigation = [
  { name: 'About', href: '/about', kr: '소개' },
  // { name: 'News', href: '/news', kr: '소식' },
  // { name: 'Contact', href: '/contact', kr: '연락처' },
];

// Get directors from database
const getDirectors = () => {
  return directors.map(director => ({
    name: director.name,
    slug: director.id,
    films: films.filter(film => film.director === director.name)
  }));
};

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ko' | 'en'>('en');
  const { theme, toggleTheme, mounted } = useTheme();

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'ko' | 'en' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage and trigger storage event
  const handleLanguageChange = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    // Trigger storage event for other components
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'language',
      newValue: newLanguage,
      oldValue: language
    }));
  };


  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
      <nav
        className="flex items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <Logo size="sm" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">영화사 달리기</span>
              <span className="ml-2 text-sm font-light text-gray-600 dark:text-gray-400">Film Run</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="메인 메뉴 열기"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const displayText = language === 'ko' ? item.kr : item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className="text-sm font-medium leading-6 relative group transition-all duration-300 focus:outline-none px-1 py-2 inline-block"
              >
                {/* Invisible twin to reserve space for bold text */}
                <span className="font-bold invisible absolute inset-0" aria-hidden="true">
                  {displayText}
                </span>
                {/* Visible text */}
                <span className={cn(
                  "relative transition-all duration-300",
                  isActive 
                    ? "font-bold text-gray-900 dark:text-gray-100" 
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900/60 dark:hover:text-gray-100/60"
                )}>
                  {displayText}
                </span>
                <span className="absolute bottom-0 left-0 h-px bg-gray-900 dark:bg-gray-100 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            );
          })}
          
          {/* Filmography Dropdown */}
          <div className="relative group">
            <div
              className="flex items-center space-x-1 text-sm font-medium leading-6 relative transition-all duration-300 focus:outline-none px-1 py-2 cursor-pointer"
            >
              {/* Invisible twin for filmography text */}
              <span className="font-bold invisible absolute left-1 top-2" aria-hidden="true">
                {language === 'ko' ? '필모그래피' : 'Filmography'}
              </span>
              {/* Visible content */}
              <span className={cn(
                "transition-all duration-300",
                pathname.startsWith('/films') 
                  ? "font-bold text-gray-900 " 
                  : "text-gray-700  hover:text-gray-900/60 "
              )}>
                {language === 'ko' ? '필모그래피' : 'Filmography'}
              </span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-200 origin-top opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible z-50">
              <div>
                <div className="px-4 py-1.5 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {language === 'ko' ? '개봉작' : 'Released'}
                  </p>
                </div>
                {films.filter(film => film.status === 'released' && film.category === 'filmography').map((film) => (
                  <Link
                    key={film.id}
                    href={`/films/${film.id}`}
                    className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group/item"
                  >
                    <div className="font-medium">
                      <span className="inline-block relative">
                        {film.title}
                        <span className="absolute bottom-0 left-0 h-px bg-gray-900  w-0 group-hover/item:w-full transition-all duration-300 ease-out"></span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{film.titleKo} ({film.year})</div>
                  </Link>
                ))}
                
                <div className="px-4 py-1.5 border-b border-gray-100 dark:border-gray-700 mt-2 border-t border-gray-100 dark:border-gray-700 pt-2">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {language === 'ko' ? '개봉예정작' : 'Upcoming'}
                  </p>
                </div>
                {films.filter(film => film.status === 'upcoming' && film.category === 'filmography').map((film) => (
                  <Link
                    key={film.id}
                    href={`/films/${film.id}`}
                    className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group/item"
                  >
                    <div className="font-medium">
                      <span className="inline-block relative">
                        {film.title}
                        <span className="absolute bottom-0 left-0 h-px bg-gray-900  w-0 group-hover/item:w-full transition-all duration-300 ease-out"></span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{film.titleKo} ({film.year})</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Films Dropdown */}
          <div className="relative group">
            <div
              className="flex items-center space-x-1 text-sm font-medium leading-6 relative transition-all duration-300 focus:outline-none px-1 py-2 cursor-pointer"
            >
              {/* Invisible twin for films text */}
              <span className="font-bold invisible absolute left-1 top-2" aria-hidden="true">
                {language === 'ko' ? '필름' : 'Films'}
              </span>
              {/* Visible content */}
              <span className={cn(
                "transition-all duration-300",
                pathname.startsWith('/films') 
                  ? "font-bold text-gray-900 " 
                  : "text-gray-700  hover:text-gray-900/60 "
              )}>
                {language === 'ko' ? '필름' : 'Films'}
              </span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            
            {/* Films Dropdown Menu */}
            <div className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-200 origin-top opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible z-50">
              <div>
                {films.filter(film => film.status === 'released' && film.category === 'film').length > 0 && (
                  <>
                    <div className="px-4 py-1.5 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {language === 'ko' ? '개봉작' : 'Released'}
                      </p>
                    </div>
                    {films.filter(film => film.status === 'released' && film.category === 'film').map((film) => (
                      <Link
                        key={film.id}
                        href={`/films/${film.id}`}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group/item"
                      >
                        <div className="font-medium">
                          <span className="inline-block relative">
                            {film.title}
                            <span className="absolute bottom-0 left-0 h-px bg-gray-900  w-0 group-hover/item:w-full transition-all duration-300 ease-out"></span>
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{film.titleKo} ({film.year})</div>
                      </Link>
                    ))}
                  </>
                )}
                
                {films.filter(film => film.status === 'upcoming' && film.category === 'film').length > 0 && (
                  <>
                    <div className={`px-4 py-1.5 border-b border-gray-100  ${films.filter(film => film.status === 'released' && film.category === 'film').length > 0 ? 'mt-2 border-t border-gray-100  pt-2' : ''}`}>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {language === 'ko' ? '개봉예정작' : 'Upcoming'}
                      </p>
                    </div>
                    {films.filter(film => film.status === 'upcoming' && film.category === 'film').map((film) => (
                      <Link
                        key={film.id}
                        href={`/films/${film.id}`}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group/item"
                      >
                        <div className="font-medium">
                          <span className="inline-block relative">
                            {film.title}
                            <span className="absolute bottom-0 left-0 h-px bg-gray-900  w-0 group-hover/item:w-full transition-all duration-300 ease-out"></span>
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{film.titleKo} ({film.year})</div>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Directors Dropdown */}
          <div className="relative group">
            <div
              className="flex items-center space-x-1 text-sm font-medium leading-6 relative transition-all duration-300 focus:outline-none px-1 py-2 cursor-pointer"
            >
              {/* Invisible twin for directors text */}
              <span className="font-bold invisible absolute left-1 top-2" aria-hidden="true">
                {language === 'ko' ? '감독' : 'Directors'}
              </span>
              {/* Visible content */}
              <span className={cn(
                "transition-all duration-300",
                pathname.startsWith('/director') 
                  ? "font-bold text-gray-900 " 
                  : "text-gray-700  hover:text-gray-900/60 "
              )}>
                {language === 'ko' ? '감독' : 'Directors'}
              </span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            
            {/* Directors Dropdown Menu */}
            <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-200 origin-top opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible z-50">
              <div>
                {getDirectors().map((director) => (
                  <Link
                    key={director.slug}
                    href={`/director/${director.slug}`}
                    className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group/item"
                  >
                    <div className="font-medium">
                      <span className="inline-block relative">
                        {director.name}
                        <span className="absolute bottom-0 left-0 h-px bg-gray-900  w-0 group-hover/item:w-full transition-all duration-300 ease-out"></span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {language === 'ko' ? `${director.films.length}편의 작품` : `${director.films.length} Films`}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary p-1 focus:outline-none transition-colors"
            aria-label={`테마를 ${theme === 'light' ? '다크' : '라이트'} 모드로 변경`}
          >
            {mounted ? (
              <>
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Sun className="w-4 h-4" aria-hidden="true" />
                )}
                <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" aria-hidden="true" />
                <span>Dark</span>
              </>
            )}
          </button>
          <button
            onClick={handleLanguageChange}
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary p-1 focus:outline-none transition-colors"
            aria-label={`언어를 ${language === 'ko' ? '영어' : '한국어'}로 변경`}
          >
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span>{language === 'ko' ? 'EN' : '한국어'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden',
          mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'
        )}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <Logo size="sm" />
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">Film Run</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  const displayText = language === 'ko' ? item.kr : item.name;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className="-mx-3 block px-4 py-3 text-base font-medium leading-7 transition-all duration-300 focus:outline-none relative"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* Invisible twin for mobile navigation */}
                      <span className="font-bold invisible absolute inset-0 px-4 py-3" aria-hidden="true">
                        {displayText}
                      </span>
                      {/* Visible text */}
                      <span className={cn(
                        "relative transition-all duration-300",
                        isActive 
                          ? "font-bold text-gray-900 dark:text-gray-100" 
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900/60 dark:hover:text-gray-100/60"
                      )}>
                        {displayText}
                      </span>
                      {isActive && (
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-900 dark:bg-gray-100 rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
                
                {/* Mobile Filmography Section */}
                <div className="-mx-3">
                  <div className="px-4 py-3 text-base font-medium leading-7 text-gray-900 dark:text-gray-100">
                    {language === 'ko' ? '필모그래피' : 'Filmography'}
                  </div>
                  <div className="ml-4 space-y-1">
                    <div className="px-4 py-1">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {language === 'ko' ? '개봉작' : 'Released'}
                      </p>
                    </div>
                    {films.filter(film => film.status === 'released' && film.category === 'filmography').map((film) => (
                      <Link
                        key={film.id}
                        href={`/films/${film.id}`}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{film.title}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{film.titleKo} ({film.year})</div>
                      </Link>
                    ))}
                    
                    <div className="px-4 py-1 mt-3">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {language === 'ko' ? '개봉예정작' : 'Upcoming'}
                      </p>
                    </div>
                    {films.filter(film => film.status === 'upcoming' && film.category === 'filmography').map((film) => (
                      <Link
                        key={film.id}
                        href={`/films/${film.id}`}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{film.title}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{film.titleKo} ({film.year})</div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Films Section */}
                <div className="-mx-3">
                  <div className="px-4 py-3 text-base font-medium leading-7 text-gray-900 dark:text-gray-100">
                    {language === 'ko' ? '필름' : 'Films'}
                  </div>
                  <div className="ml-4 space-y-1">
                    {films.filter(film => film.status === 'released' && film.category === 'film').length > 0 && (
                      <>
                        <div className="px-4 py-1">
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {language === 'ko' ? '개봉작' : 'Released'}
                          </p>
                        </div>
                        {films.filter(film => film.status === 'released' && film.category === 'film').map((film) => (
                          <Link
                            key={film.id}
                            href={`/films/${film.id}`}
                            className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="font-medium">{film.title}</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{film.titleKo} ({film.year})</div>
                          </Link>
                        ))}
                      </>
                    )}
                    
                    {films.filter(film => film.status === 'upcoming' && film.category === 'film').length > 0 && (
                      <>
                        <div className={`px-4 py-1 ${films.filter(film => film.status === 'released' && film.category === 'film').length > 0 ? 'mt-3' : ''}`}>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {language === 'ko' ? '개봉예정작' : 'Upcoming'}
                          </p>
                        </div>
                        {films.filter(film => film.status === 'upcoming' && film.category === 'film').map((film) => (
                          <Link
                            key={film.id}
                            href={`/films/${film.id}`}
                            className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="font-medium">{film.title}</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{film.titleKo} ({film.year})</div>
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* Mobile Directors Section */}
                <div className="-mx-3">
                  <div className="px-4 py-3 text-base font-medium leading-7 text-gray-900 dark:text-gray-100">
                    {language === 'ko' ? '감독' : 'Directors'}
                  </div>
                  <div className="ml-4 space-y-1">
                    {getDirectors().map((director) => (
                      <Link
                        key={director.slug}
                        href={`/director/${director.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{director.name}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {language === 'ko' ? `${director.films.length}편의 작품` : `${director.films.length} Films`}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-6 space-y-1">
                <button
                  onClick={toggleTheme}
                  className="-mx-3 flex items-center space-x-2 px-3 py-3 text-base font-medium leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors"
                  aria-label={`테마를 ${theme === 'light' ? '다크' : '라이트'} 모드로 변경`}
                >
                  {mounted ? (
                    <>
                      {theme === 'light' ? (
                        <Moon className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <Sun className="w-5 h-5" aria-hidden="true" />
                      )}
                      <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5" aria-hidden="true" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleLanguageChange}
                  className="-mx-3 flex items-center space-x-2 px-3 py-3 text-base font-medium leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors"
                  aria-label={`언어를 ${language === 'ko' ? '영어' : '한국어'}로 변경`}
                >
                  <Globe className="w-5 h-5" aria-hidden="true" />
                  <span>{language === 'ko' ? 'English' : '한국어'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
