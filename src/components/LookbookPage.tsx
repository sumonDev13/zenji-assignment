"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

type FilterType = "ALL" | "FRONT" | "BACK" | "ON_MODEL";

interface LookbookPageProps {
  products: Product[];
}

interface LookbookItem {
  product: Product;
  imageType: "front" | "back" | "onModel";
  imageUrl: string;
  label: string;
}

export default function LookbookPage({ products }: LookbookPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const lookbookItems: LookbookItem[] = products.flatMap((product) => {
    const items: LookbookItem[] = [];

    if (activeFilter === "ALL" || activeFilter === "FRONT") {
      items.push({
        product,
        imageType: "front",
        imageUrl: product.images.front,
        label: "FRONT",
      });
    }

    if (activeFilter === "ALL" || activeFilter === "BACK") {
      items.push({
        product,
        imageType: "back",
        imageUrl: product.images.back,
        label: "BACK",
      });
    }

    if (
      product.images.onModel &&
      (activeFilter === "ALL" || activeFilter === "ON_MODEL")
    ) {
      items.push({
        product,
        imageType: "onModel",
        imageUrl: product.images.onModel,
        label: "ON MODEL",
      });
    }

    return items;
  });

  const filters: FilterType[] = ["ALL", "FRONT", "BACK", "ON_MODEL"];

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-zenji-gray-dark/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-zenji-gray-light mb-4">
            THE_ORIGIN_DROP // EDITORIAL
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase tracking-wider mb-6">
            ANIME STREETWEAR —
            <br />
            LOOKBOOK
          </h1>
          <p className="text-zenji-gray-light max-w-xl">
            The Origin Drop, The Full Visual Archive
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-zenji-gray-dark/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 md:gap-12 text-sm">
            <span className="font-medium">2024</span>
            <span className="text-zenji-gray-light">
              {products.length} PIECES // THE_ORIGIN_DROP
            </span>
            <span className="text-zenji-gray-light">
              ANIME STREETWEAR // AUSTRALIA
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Image Count */}
      <div className="border-b border-zenji-gray-dark/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                    activeFilter === filter
                      ? "bg-zenji-white text-zenji-black"
                      : "text-zenji-gray-light hover:text-zenji-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="text-sm text-zenji-gray-light">
              {lookbookItems.length} IMAGES
            </span>
          </div>
        </div>
      </div>

      {/* Lookbook Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {lookbookItems.map((item) => (
            <Link
              key={`${item.product.id}-${item.imageType}`}
              href={`/drop/${item.product.slug}`}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] relative bg-zenji-gray rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`${item.product.name} ${item.label}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
                {item.product.lookbookBadge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                        item.product.lookbookBadge === "SALE"
                          ? "bg-zenji-red text-zenji-white"
                          : item.product.lookbookBadge === "LIMITED"
                          ? "bg-zenji-white text-zenji-black"
                          : item.product.lookbookBadge === "NEW_ARRIVAL"
                          ? "bg-zenji-orange text-zenji-white"
                          : "bg-zenji-gray-dark text-zenji-white"
                      }`}
                    >
                      {item.product.lookbookBadge === "THE_ORIGIN_DROP"
                        ? "THE_ORIGIN_DROP"
                        : item.product.lookbookBadge}
                    </span>
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-wider text-zenji-gray-light mb-1">
                      {item.product.name}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-zenji-white mb-3">
                      {item.label}
                    </p>
                    <span className="text-sm uppercase tracking-wider text-zenji-white border-b border-zenji-white pb-0.5">
                      VIEW PRODUCT →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Shop CTA */}
      <div className="border-t border-zenji-gray-dark/30 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display uppercase tracking-wider mb-4">
            SHOP THE COLLECTION
          </h2>
          <p className="text-zenji-gray-light mb-8 max-w-md mx-auto">
            Every piece from The Origin Drop, limited stock.
          </p>
          <Link
            href="/collection"
            className="inline-block bg-zenji-white text-zenji-black px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-zenji-gray-light transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
