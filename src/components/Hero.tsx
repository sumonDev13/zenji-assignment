import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-zenji-gray-light">
          System // ZENJI
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-wider mb-6">
          WEAR YOUR
          <br />
          STORY
        </h1>
        <Link
          href="/drop"
          className="inline-block border border-zenji-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-zenji-white hover:text-zenji-black transition-all duration-300"
        >
          SHOP THE DROP →
        </Link>
      </div>
    </section>
  );
}
