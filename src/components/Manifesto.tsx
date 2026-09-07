export default function Manifesto() {
  return (
    <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
      {/* Background with overlay */}
      <div className="bg-zenji-black/80 absolute inset-0 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-5.webp')",
        }}
      />

      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <p className="text-zenji-gray-light mb-4 text-xs tracking-[0.3em] uppercase">
          MANIFESTO_001
        </p>
        <h2 className="font-display mb-8 text-4xl tracking-wider uppercase md:text-6xl">
          THE ZENJI ETHOS
        </h2>
        <p className="text-zenji-gray-light mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
          We exist at the intersection of technical precision and cultural expression. Our
          garments are engineered for those navigating an increasingly fragmented world,
          built from Japanese craftsmanship, anime culture and modern Australian
          streetwear.
        </p>
      </div>
    </section>
  );
}
