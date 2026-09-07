import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Large ZENJI Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[20vw] tracking-wider text-white/[0.03] select-none">
          ZENJI
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Brand */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="mb-6">
              <svg
                className="h-12 w-12 text-white"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8L40 8L28 24L40 40H8L20 24L8 8Z" fill="currentColor" />
              </svg>
            </div>

            {/* Description */}
            <p className="mb-8 max-w-xs font-mono text-sm leading-relaxed text-gray-400">
              Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every drop
              limited. No restocks. Ever.
            </p>

            {/* Follow the Lore */}
            <p className="mb-4 text-xs tracking-[0.2em] text-gray-500 uppercase">
              FOLLOW THE LORE
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.tiktok.com/@zenji_.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
                </svg>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/zenji_.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/ZENJI/61592433253702/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-8">
            {/* NAVIGATION */}
            <div>
              <h4 className="mb-6 text-xs tracking-[0.2em] text-gray-500 uppercase">
                NAVIGATION
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/drop"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                  >
                    Drop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collection"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                  >
                    Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lookbook"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                  >
                    Lookbook
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-story"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                  >
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="mb-6 text-xs tracking-[0.2em] text-gray-500 uppercase">
                CONNECT
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.tiktok.com/@zenji_.shop"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zenji_.shop"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/ZENJI/61592433253702/"
                    className="text-sm text-white transition-colors hover:text-[#8CC63F]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-mono text-xs text-gray-500">
            © 2026 ZENJI. All drops are final. No restocks. Ever.
          </p>
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full bg-[#8CC63F]" />
            Anime-inspired. Gamer-built. Community-owned.
          </span>
        </div>
      </div>
    </footer>
  );
}
