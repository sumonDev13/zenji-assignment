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
    setCurrentIndex(
      (prev) => (prev - 1 + saleProducts.length) % saleProducts.length
    );
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

        {/* Main Carousel */}
        <div className="relative">
          {/* Large Product Display */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-zenji-gray rounded-lg overflow-hidden group">
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
            <div className="absolute top-6 left-6 bg-zenji-red text-zenji-white px-4 py-2 text-sm font-medium uppercase tracking-wider">
              SALE {currentProduct.salePercentage}% OFF
            </div>

            {/* Product Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
                COLLECTION // {currentProduct.collection}
              </p>
              <h3 className="text-3xl md:text-5xl font-display uppercase tracking-wider mb-4">
                {currentProduct.name}
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl md:text-3xl font-medium text-zenji-red">
                  A${currentProduct.salePrice?.toFixed(2)}
                </span>
                <span className="text-lg md:text-xl text-zenji-gray-light line-through">
                  A${currentProduct.price.toFixed(2)}
                </span>
              </div>
              <Link
                href={`/drop/${currentProduct.slug}`}
                className="inline-block bg-zenji-white text-zenji-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-zenji-gray-light transition-colors"
              >
                SHOP {currentProduct.name} →
              </Link>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
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
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-zenji-white scale-110"
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
                    ? "w-8 bg-zenji-white"
                    : "w-2 bg-zenji-gray-dark hover:bg-zenji-gray-light"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs uppercase tracking-wider text-zenji-gray-light hover:text-zenji-white transition-colors flex items-center gap-2"
            >
              {isAutoPlaying ? (
                <>
                  <span className="w-2 h-2 bg-zenji-red rounded-full animate-pulse" />
                  AUTOPLAY ON
                </>
              ) : (
                <>
                  <span className="w-2 h-2 bg-zenji-gray-dark rounded-full" />
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
