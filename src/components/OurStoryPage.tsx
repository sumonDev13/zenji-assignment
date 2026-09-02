import Link from "next/link";

const brandInfo = [
  {
    label: "What ZENJI is",
    value: "ZENJI is an Australian anime streetwear brand.",
  },
  {
    label: "Founded",
    value: "ZENJI was founded in 2024.",
  },
  {
    label: "What we make",
    value:
      "ZENJI makes limited-edition anime-inspired graphic tees in 100% heavyweight 240gsm cotton.",
  },
  {
    label: "Shipping",
    value:
      "ZENJI ships Australia-wide, with free shipping on orders over A$100 and standard delivery in 5-10 business days.",
  },
  {
    label: "Restocks",
    value:
      "ZENJI products are limited edition. There are no restocks, ever — once a piece sells out it is gone for good.",
  },
  {
    label: "Pricing",
    value:
      "ZENJI tees are A$39.99, with selected pieces on sale at A$33.99.",
  },
  {
    label: "Influences",
    value:
      "ZENJI draws on samurai discipline, Japanese iconography and modern anime art.",
  },
  {
    label: "Based in",
    value:
      "ZENJI is based in Australia and ships to every Australian state and territory, including Sydney, Melbourne, Brisbane, Perth and Adelaide.",
  },
  {
    label: "Anime inspiration",
    value:
      "ZENJI designs are inspired by series including Jujutsu Kaisen, Demon Slayer, Naruto, One Piece and Dragon Ball, alongside original samurai artwork. Every design is ZENJI's own — no artwork is licensed from a studio.",
  },
  {
    label: "Next drop",
    value:
      "The Origin Drop is in stock and shipping now, with selected pieces on sale at 15% off.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-zenji-gray-dark/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-zenji-gray-light mb-6">
            ABOUT // ZENJI
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-wider mb-8 leading-tight">
            ANIME STREETWEAR AUSTRALIA —
            <br />
            BORN FROM THE
            <br />
            WARRIOR SPIRIT.
          </h1>
        </div>
      </div>

      {/* Brand Story */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg md:text-xl text-zenji-gray-light leading-relaxed">
            <p>
              ZENJI began with one belief: what you wear should tell a story.
            </p>
            <p>
              Inspired by samurai discipline, anime art and modern street
              culture, we create premium streetwear for those who choose their
              own path.
            </p>
            <p>
              Every ZENJI piece combines Japanese-inspired artwork, powerful
              symbolism and oversized silhouettes to express courage, creativity
              and individuality.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-2 border-zenji-red pl-6 py-2 my-12">
              <p className="text-xl md:text-2xl text-zenji-white italic leading-relaxed">
                ZENJI is more than a name on a shirt. It represents the warrior
                within, the part of us that keeps moving forward, stays true to
                itself and refuses to fade into the crowd.
              </p>
            </blockquote>

            <p>
              We design for the dreamers, fighters, creators and outsiders
              shaping their own future.
            </p>
            <p className="text-zenji-white font-medium text-xl md:text-2xl">
              Wear your story. Wear your spirit. Wear ZENJI.
            </p>
            <p className="text-zenji-gray-light">
              For the dreamers. Fighters. Creators. Outsiders.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <Link
              href="/collection"
              className="inline-block border border-zenji-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-zenji-white hover:text-zenji-black transition-all duration-300"
            >
              EXPLORE THE COLLECTION →
            </Link>
          </div>
        </div>
      </div>

      {/* About ZENJI Info Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zenji-gray/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display uppercase tracking-wider mb-12">
            About ZENJI
          </h2>

          <div className="space-y-0">
            {brandInfo.map((item, index) => (
              <div
                key={item.label}
                className={`py-6 ${
                  index !== brandInfo.length - 1
                    ? "border-b border-zenji-gray-dark/30"
                    : ""
                }`}
              >
                <dt className="text-sm uppercase tracking-wider text-zenji-gray-light mb-2">
                  {item.label}
                </dt>
                <dd className="text-base text-zenji-white leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
