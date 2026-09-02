"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface DropPageProps {
  products: Product[];
}

export default function DropPage({ products }: DropPageProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zenji-gray-light mb-4">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <h1 className="text-5xl md:text-7xl font-display uppercase tracking-wider mb-6">
            LATEST_DROPS
          </h1>
          <p className="text-zenji-gray-light max-w-2xl mx-auto">
            Every drop is limited edition. No restocks. Ever. Shop the latest
            anime-inspired streetwear from ZENJI.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/drop/${product.slug}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-square relative bg-zenji-gray rounded-lg overflow-hidden mb-4">
                <Image
                  src={
                    hoveredProduct === product.id
                      ? product.images.back
                      : product.images.front
                  }
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
                {product.isSale && (
                  <div className="absolute top-4 left-4 bg-zenji-red text-zenji-white px-3 py-1 text-sm font-medium">
                    SALE {product.salePercentage}% OFF
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-zenji-white text-zenji-black px-6 py-3 text-sm uppercase tracking-wider font-medium">
                    QUICK VIEW →
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-zenji-gray-light">
                  COLLECTION // {product.collection}
                </p>
                <h2 className="text-lg uppercase tracking-wider group-hover:text-zenji-red transition-colors">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-3">
                  {product.isSale ? (
                    <>
                      <span className="text-zenji-red font-medium">
                        A${product.salePrice?.toFixed(2)}
                      </span>
                      <span className="text-zenji-gray-light line-through">
                        A${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span>A${product.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
