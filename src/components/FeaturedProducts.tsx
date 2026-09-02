export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
              COLLECTION // THE_ORIGIN_DROP
            </p>
            <h2 className="text-3xl font-display uppercase tracking-wider">
              LATEST_DROPS
            </h2>
          </div>
          <a
            href="/drop"
            className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
          >
            VIEW_ALL
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-zenji-gray rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-zenji-gray-light/50 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs uppercase tracking-wider text-zenji-gray-light mb-1">
                COLLECTION // THE_ORIGIN_DROP
              </p>
              <h3 className="text-lg uppercase tracking-wider">
                PRODUCT_{String(i).padStart(3, "0")}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
