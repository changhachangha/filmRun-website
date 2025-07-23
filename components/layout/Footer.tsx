import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="w-full px-6 lg:px-16 xl:px-24 py-16">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12 w-full">
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h4 className="text-white dark:text-gray-100 font-medium mb-2 text-sm">Company</h4>
              <p className="text-gray-400 dark:text-gray-500 text-sm">Film Run Co., Ltd.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h4 className="text-white dark:text-gray-100 font-medium mb-2 text-sm">
                Headquarters
              </h4>
              <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed">
                Room 1404, 40, Cheonggyecheon-ro,
                <br />
                Jung-gu, Seoul, Republic of Korea (04521)
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-left">
              <h4 className="text-white dark:text-gray-100 font-medium mb-2 text-sm">Contact</h4>
              <p className="text-gray-400 dark:text-gray-500 text-sm mb-1">+82 2-511-4301</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                <Link
                  href="https://www.filmrun.co.kr"
                  className="hover:text-gray-300 dark:hover:text-gray-400"
                >
                  www.filmrun.co.kr
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation and Copyright */}
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 md:flex md:items-center md:justify-between w-full">
          <div className="flex justify-center space-x-8 md:order-2">
            <Link
              href="/about"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 text-base"
            >
              About
            </Link>
            {/* <Link
              href="/films"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 text-base"
            >
              Films
            </Link> */}
            <Link
              href="/directors"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 text-base"
            >
              Directors
            </Link>
            {/* <Link
              href="/news"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 text-base"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400 text-base"
            >
              Contact
            </Link> */}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-gray-400 dark:text-gray-500">
              &copy; 2025 Film Run. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
