export default function ProductGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zenji-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
              COLLECTION // THE_ORIGIN_DROP
            </p>
            <h2 className="text-3xl font-display uppercase tracking-wider">
              ALL_PRODUCTS
            </h2>
          </div>
          <a
            href="/collection"
            className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
          >
            VIEW_ALL
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-zenji-gray rounded-lg mb-3 overflow-hidden relative">
                <div className="w-full h-full bg-zenji-gray-light/50 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-zenji-white text-zenji-black px-4 py-2 text-xs uppercase tracking-wider">
                    QUICK VIEW →
                  </span>
                </div>
              </div>
              <h3 className="text-sm uppercase tracking-wider">
                PRODUCT_{String(i).padStart(3, "0")}
              </h3>
              <p className="text-sm text-zenji-gray-light mt-1">A$39.99</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
