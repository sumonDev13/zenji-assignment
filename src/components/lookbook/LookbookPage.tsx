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
      <div className="border-zenji-gray-dark/30 relative border-b px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-zenji-gray-light mb-4 text-xs tracking-[0.3em] uppercase">
            THE_ORIGIN_DROP // EDITORIAL
          </p>
          <h1 className="font-display mb-6 text-5xl tracking-wider uppercase md:text-7xl lg:text-8xl">
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
      <div className="border-zenji-gray-dark/30 border-b py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6 text-sm md:gap-12">
            <span className="font-medium">2024</span>
            <span className="text-zenji-gray-light">
              {products.length} PIECES // THE_ORIGIN_DROP
            </span>
            <span className="text-zenji-gray-light">ANIME STREETWEAR // AUSTRALIA</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Image Count */}
      <div className="border-zenji-gray-dark/30 border-b py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm tracking-wider uppercase transition-colors ${
                    activeFilter === filter
                      ? "bg-zenji-white text-zenji-black"
                      : "text-zenji-gray-light hover:text-zenji-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="text-zenji-gray-light text-sm">
              {lookbookItems.length} IMAGES
            </span>
          </div>
        </div>
      </div>

      {/* Lookbook Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {lookbookItems.map((item) => (
            <Link
              key={`${item.product.id}-${item.imageType}`}
              href={`/drop/${item.product.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-zenji-gray relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={item.imageUrl}
                  alt={`${item.product.name} ${item.label}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
                {item.product.lookbookBadge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium tracking-wider uppercase ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <p className="text-zenji-gray-light mb-1 text-xs tracking-wider uppercase">
                      {item.product.name}
                    </p>
                    <p className="text-zenji-white mb-3 text-xs tracking-wider uppercase">
                      {item.label}
                    </p>
                    <span className="text-zenji-white border-zenji-white border-b pb-0.5 text-sm tracking-wider uppercase">
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
      <div className="border-zenji-gray-dark/30 border-t px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display mb-4 text-3xl tracking-wider uppercase md:text-4xl">
            SHOP THE COLLECTION
          </h2>
          <p className="text-zenji-gray-light mx-auto mb-8 max-w-md">
            Every piece from The Origin Drop, limited stock.
          </p>
          <Link
            href="/collection"
            className="bg-zenji-white text-zenji-black hover:bg-zenji-gray-light inline-block px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
