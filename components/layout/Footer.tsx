import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/films"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            Films
          </Link>
          <Link
            href="/directors"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            Directors
          </Link>
          <Link
            href="/news"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2025 Film Run. All rights reserved.
          </p>
          <p className="text-center text-xs leading-5 text-gray-400 mt-2">
            <Link
              href="https://www.filmrun.co.kr"
              className="hover:text-gray-300"
            >
              www.filmrun.co.kr
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
