"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface VerticalCarouselProps {
  products: Product[];
}

export default function VerticalCarousel({ products }: VerticalCarouselProps) {
  const saleProducts = products.filter((p) => p.isSale);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const cardHeight = container.clientHeight;
      const index = Math.round(scrollTop / cardHeight);
      setActiveIndex(Math.min(index, saleProducts.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [saleProducts.length]);

  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cardHeight = container.clientHeight;
    container.scrollTo({
      top: cardHeight * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
              COLLECTION // THE_ORIGIN_DROP
            </p>
            <h2 className="text-3xl font-display uppercase tracking-wider">
              SALE
            </h2>
          </div>
          <Link
            href="/collection"
            className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
          >
            VIEW_ALL
          </Link>
        </div>

        {/* Vertical Carousel Container */}
        <div className="relative flex gap-8">
          {/* Main Carousel */}
          <div
            ref={containerRef}
            className="flex-1 h-[60vh] md:h-[70vh] overflow-y-auto snap-y snap-mandatory scrollbar-hide rounded-lg"
            style={{ scrollBehavior: "smooth" }}
          >
            {saleProducts.map((product) => (
              <div
                key={product.id}
                className="h-full snap-center snap-always pb-4"
              >
                <div className="relative h-full bg-zenji-gray rounded-lg overflow-hidden group">
                  <Image
                    src={product.images.front}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Sale Badge */}
                  <div className="absolute top-6 left-6 bg-zenji-red text-zenji-white px-4 py-2 text-sm font-medium uppercase tracking-wider">
                    SALE {product.salePercentage}% OFF
                  </div>

                  {/* Product Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
                      COLLECTION // {product.collection}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-display uppercase tracking-wider mb-3">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl md:text-2xl font-medium text-zenji-red">
                        A${product.salePrice?.toFixed(2)}
                      </span>
                      <span className="text-base md:text-lg text-zenji-gray-light line-through">
                        A${product.price.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href={`/drop/${product.slug}`}
                      className="inline-block bg-zenji-white text-zenji-black px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-zenji-gray-light transition-colors"
                    >
                      SHOP {product.name} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side Navigation */}
          <div className="hidden md:flex flex-col justify-center gap-3">
            {saleProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => scrollToCard(index)}
                className="relative group"
              >
                <div
                  className={`w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === activeIndex
                      ? "ring-2 ring-zenji-white scale-110"
                      : "opacity-40 hover:opacity-70 grayscale group-hover:grayscale-0"
                  }`}
                >
                  <Image
                    src={product.images.front}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                {/* Active Indicator */}
                {index === activeIndex && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-zenji-red rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-2 ml-4">
            <span className="text-sm font-medium text-zenji-white">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="w-px h-20 bg-zenji-gray-dark relative">
              <div
                className="absolute top-0 left-0 w-full bg-zenji-red transition-all duration-300"
                style={{
                  height: `${
                    ((activeIndex + 1) / saleProducts.length) * 100
                  }%`,
                }}
              />
            </div>
            <span className="text-sm text-zenji-gray-light">
              {String(saleProducts.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="mt-6 flex md:hidden justify-center gap-2">
          {saleProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-zenji-white"
                  : "w-2 bg-zenji-gray-dark"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2 text-zenji-gray-light animate-bounce">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
