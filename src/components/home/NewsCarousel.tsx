"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  date: string;
  headline: string;
  excerpt: string;
  link: string;
  bgImage: string;
  accentImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    date: "JULY 2024",
    headline: "THE ORIGIN DROP IS LIVE",
    excerpt:
      "Our debut collection has arrived. 10 pieces of anime-inspired streetwear built for those who choose their own path.",
    link: "/drop",
    bgImage:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-4.webp",
    accentImage:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp",
  },
  {
    id: 2,
    date: "AUGUST 2024",
    headline: "LIMITED STOCK ON SELECTED PIECES",
    excerpt:
      "Several designs are running low. Once they sell out, there are no restocks. Ever. Grab yours before they're gone.",
    link: "/collection",
    bgImage:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-4.webp",
    accentImage:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-1.webp",
  },
  {
    id: 3,
    date: "SEPTEMBER 2024",
    headline: "FREE SHIPPING ON ORDERS OVER A$100",
    excerpt:
      "Australia-wide delivery on us when you spend over A$100. Premium streetwear delivered straight to your door.",
    link: "/collection",
    bgImage:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-5.webp",
    accentImage:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-2.webp",
  },
];

const SLIDE_DURATION = 6000;

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setProgress(0);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black md:h-[80vh]">
      {/* Background Images with Crossfade */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.bgImage}
            alt={s.headline}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-12 lg:p-16">
        {/* Main Content */}
        <div className="flex flex-1 items-center">
          <div className="flex max-w-6xl flex-col items-start gap-8 md:flex-row md:gap-12">
            {/* Shield/Crest Image */}
            <div className="hidden flex-shrink-0 md:block">
              <div className="relative h-56 w-48 lg:h-64 lg:w-56">
                {/* Shield Shape */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Image
                    src={slide.accentImage}
                    alt={slide.headline}
                    fill
                    className="object-cover transition-all duration-1000"
                    sizes="224px"
                  />
                  {/* Green tint overlay */}
                  <div className="absolute inset-0 bg-[#8CC63F]/20 mix-blend-overlay" />
                </div>
                {/* Shield Border */}
                <div
                  className="absolute inset-0 border-2 border-[#8CC63F]/50"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="max-w-2xl flex-1">
              {/* Date */}
              <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#8CC63F] uppercase">
                {slide.date}
              </p>

              {/* Headline */}
              <h2 className="mb-4 max-w-xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
                {slide.headline}
              </h2>

              {/* Green Double Underline */}
              <div className="mb-6 flex w-16 flex-col gap-1">
                <div className="h-[2px] bg-[#8CC63F]" />
                <div className="h-[2px] bg-[#8CC63F]" />
              </div>

              {/* Excerpt */}
              <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
                {slide.excerpt}
              </p>

              {/* Read More */}
              <Link
                href={slide.link}
                className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white uppercase transition-colors hover:text-[#8CC63F]"
              >
                READ MORE
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-end justify-between">
          {/* Left: Play/Pause + Progress Bar */}
          <div className="flex items-center gap-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-[#8CC63F]"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  className="ml-0.5 h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Progress Bar */}
            <div className="flex gap-1">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className="h-1 w-16 overflow-hidden rounded-full bg-white/20 md:w-24"
                >
                  <div
                    className="h-full bg-[#8CC63F] transition-all duration-100"
                    style={{
                      width:
                        index < currentSlide
                          ? "100%"
                          : index === currentSlide
                            ? `${progress}%`
                            : "0%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Prev/Next Button */}
          <div className="flex items-center overflow-hidden rounded-full bg-[#8CC63F]">
            <button
              onClick={prevSlide}
              className="px-4 py-3 transition-colors hover:bg-[#7ab535]"
              aria-label="Previous slide"
            >
              <svg
                className="h-5 w-5 text-black"
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
            {/* Vertical Divider */}
            <div className="h-6 w-px bg-black/20" />
            <button
              onClick={nextSlide}
              className="px-4 py-3 transition-colors hover:bg-[#7ab535]"
              aria-label="Next slide"
            >
              <svg
                className="h-5 w-5 text-black"
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
        </div>
      </div>
    </section>
  );
}
