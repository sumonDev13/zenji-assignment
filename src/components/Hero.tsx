import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <p className="text-zenji-gray-light mb-4 text-sm tracking-[0.3em] uppercase">
          System // ZENJI
        </p>
        <h1 className="font-display mb-6 text-6xl tracking-wider uppercase md:text-8xl lg:text-9xl">
          WEAR YOUR
          <br />
          STORY
        </h1>
        <Link
          href="/drop"
          className="border-zenji-white hover:bg-zenji-white hover:text-zenji-black inline-block border px-8 py-4 text-sm tracking-wider uppercase transition-all duration-300"
        >
          SHOP THE DROP →
        </Link>
      </div>
    </section>
  );
}
