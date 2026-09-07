"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface SaleCarouselProps {
  products: Product[];
}

export default function SaleCarousel({ products }: SaleCarouselProps) {
  const saleProducts = products.filter((p) => p.isSale);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % saleProducts.length);
  }, [saleProducts.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + saleProducts.length) % saleProducts.length);
  }, [saleProducts.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentProduct = saleProducts[currentIndex];

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

        {/* Main Carousel */}
        <div className="relative">
          {/* Large Product Display */}
          <div className="bg-zenji-gray group relative aspect-[16/9] overflow-hidden rounded-lg md:aspect-[21/9]">
            <Image
              src={currentProduct.images.front}
              alt={currentProduct.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* Sale Badge */}
            <div className="bg-zenji-red text-zenji-white absolute top-6 left-6 px-4 py-2 text-sm font-medium tracking-wider uppercase">
              SALE {currentProduct.salePercentage}% OFF
            </div>

            {/* Product Info */}
            <div className="absolute right-0 bottom-0 left-0 p-6 md:p-10">
              <p className="text-zenji-gray-light mb-2 text-xs tracking-[0.2em] uppercase">
                COLLECTION // {currentProduct.collection}
              </p>
              <h3 className="font-display mb-4 text-3xl tracking-wider uppercase md:text-5xl">
                {currentProduct.name}
              </h3>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-zenji-red text-2xl font-medium md:text-3xl">
                  A${currentProduct.salePrice?.toFixed(2)}
                </span>
                <span className="text-zenji-gray-light text-lg line-through md:text-xl">
                  A${currentProduct.price.toFixed(2)}
                </span>
              </div>
              <Link
                href={`/drop/${currentProduct.slug}`}
                className="bg-zenji-white text-zenji-black hover:bg-zenji-gray-light inline-block px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors"
              >
                SHOP {currentProduct.name} →
              </Link>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 opacity-0 transition-colors group-hover:opacity-100 hover:bg-black/70"
              aria-label="Previous slide"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 opacity-0 transition-colors group-hover:opacity-100 hover:bg-black/70"
              aria-label="Next slide"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex justify-center gap-3">
            {saleProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => goToSlide(index)}
                className={`relative h-16 w-16 overflow-hidden rounded-lg transition-all duration-300 md:h-20 md:w-20 ${
                  index === currentIndex
                    ? "ring-zenji-white scale-110 ring-2"
                    : "opacity-50 hover:opacity-75"
                }`}
              >
                <Image
                  src={product.images.front}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {saleProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-zenji-white w-8"
                    : "bg-zenji-gray-dark hover:bg-zenji-gray-light w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-zenji-gray-light hover:text-zenji-white flex items-center gap-2 text-xs tracking-wider uppercase transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <span className="bg-zenji-red h-2 w-2 animate-pulse rounded-full" />
                  AUTOPLAY ON
                </>
              ) : (
                <>
                  <span className="bg-zenji-gray-dark h-2 w-2 rounded-full" />
                  AUTOPLAY OFF
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
