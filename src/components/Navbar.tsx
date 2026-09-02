export default function Navbar() {
  return (
    <nav className="border-b border-zenji-gray-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-display tracking-wider">
              ZENJI
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="/drop"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Drop
              </a>
              <a
                href="/collection"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Collection
              </a>
              <a
                href="/lookbook"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Lookbook
              </a>
              <a
                href="/our-story"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm uppercase tracking-wider">
              Search
            </button>
            <button className="text-sm uppercase tracking-wider">
              Cart (0)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
