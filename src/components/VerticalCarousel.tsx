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
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-zenji-gray-light mb-2 text-xs tracking-[0.2em] uppercase">
              COLLECTION // THE_ORIGIN_DROP
            </p>
            <h2 className="font-display text-3xl tracking-wider uppercase">SALE</h2>
          </div>
          <Link
            href="/collection"
            className="hover:text-zenji-red text-sm tracking-wider uppercase transition-colors"
          >
            VIEW_ALL
          </Link>
        </div>

        {/* Vertical Carousel Container */}
        <div className="relative flex gap-8">
          {/* Main Carousel */}
          <div
            ref={containerRef}
            className="scrollbar-hide h-[60vh] flex-1 snap-y snap-mandatory overflow-y-auto rounded-lg md:h-[70vh]"
            style={{ scrollBehavior: "smooth" }}
          >
            {saleProducts.map((product) => (
              <div key={product.id} className="h-full snap-center snap-always pb-4">
                <div className="bg-zenji-gray group relative h-full overflow-hidden rounded-lg">
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
                  <div className="bg-zenji-red text-zenji-white absolute top-6 left-6 px-4 py-2 text-sm font-medium tracking-wider uppercase">
                    SALE {product.salePercentage}% OFF
                  </div>

                  {/* Product Info */}
                  <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                    <p className="text-zenji-gray-light mb-2 text-xs tracking-[0.2em] uppercase">
                      COLLECTION // {product.collection}
                    </p>
                    <h3 className="font-display mb-3 text-2xl tracking-wider uppercase md:text-4xl">
                      {product.name}
                    </h3>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-zenji-red text-xl font-medium md:text-2xl">
                        A${product.salePrice?.toFixed(2)}
                      </span>
                      <span className="text-zenji-gray-light text-base line-through md:text-lg">
                        A${product.price.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href={`/drop/${product.slug}`}
                      className="bg-zenji-white text-zenji-black hover:bg-zenji-gray-light inline-block px-6 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
                    >
                      SHOP {product.name} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side Navigation */}
          <div className="hidden flex-col justify-center gap-3 md:flex">
            {saleProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => scrollToCard(index)}
                className="group relative"
              >
                <div
                  className={`h-20 w-20 overflow-hidden rounded-lg transition-all duration-300 ${
                    index === activeIndex
                      ? "ring-zenji-white scale-110 ring-2"
                      : "opacity-40 grayscale group-hover:grayscale-0 hover:opacity-70"
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
                  <div className="bg-zenji-red absolute top-1/2 -right-4 h-2 w-2 -translate-y-1/2 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="ml-4 hidden flex-col items-center justify-center gap-2 lg:flex">
            <span className="text-zenji-white text-sm font-medium">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="bg-zenji-gray-dark relative h-20 w-px">
              <div
                className="bg-zenji-red absolute top-0 left-0 w-full transition-all duration-300"
                style={{
                  height: `${((activeIndex + 1) / saleProducts.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-zenji-gray-light text-sm">
              {String(saleProducts.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {saleProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-zenji-white w-8" : "bg-zenji-gray-dark w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="mt-6 flex justify-center">
          <div className="text-zenji-gray-light flex animate-bounce items-center gap-2">
            <svg
              className="h-4 w-4"
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
            <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
