export default function Manifesto() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-zenji-black/80 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-5.webp')",
        }}
      />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-zenji-gray-light mb-4">
          MANIFESTO_001
        </p>
        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wider mb-8">
          THE ZENJI ETHOS
        </h2>
        <p className="text-lg md:text-xl text-zenji-gray-light leading-relaxed max-w-2xl mx-auto">
          We exist at the intersection of technical precision and cultural
          expression. Our garments are engineered for those navigating an
          increasingly fragmented world, built from Japanese craftsmanship, anime
          culture and modern Australian streetwear.
        </p>
      </div>
    </section>
  );
}
