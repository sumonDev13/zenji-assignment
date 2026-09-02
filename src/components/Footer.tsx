import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zenji-gray-dark/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display tracking-wider mb-4">ZENJI</h3>
            <p className="text-sm text-zenji-gray-light leading-relaxed">
              Anime-inspired streetwear for gamers and otaku. Every drop limited.
              No restocks. Ever.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">DROPS</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/drop"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                >
                  Drop
                </Link>
              </li>
              <li>
                <Link
                  href="/collection"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                >
                  Collection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">EXPLORE</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/lookbook"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                >
                  Lookbook
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/collection"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                >
                  Collection
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">COMMUNITY</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.tiktok.com/@zenji_.shop"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zenji_.shop"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/ZENJI/61592433253702/"
                  className="text-sm text-zenji-gray-light hover:text-zenji-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zenji-gray-dark/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zenji-gray-light">
            © 2026 ZENJI. All drops are final. No restocks. Ever.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-xs text-zenji-gray-light hover:text-zenji-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-zenji-gray-light hover:text-zenji-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
