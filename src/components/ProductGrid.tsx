"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zenji-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
              COLLECTION // THE_ORIGIN_DROP
            </p>
            <h2 className="text-3xl font-display uppercase tracking-wider">
              LATEST_DROPS
            </h2>
          </div>
          <Link
            href="/drop"
            className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
          >
            VIEW_ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/drop/${product.slug}`}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-square relative bg-zenji-gray rounded-lg mb-3 overflow-hidden">
                {/* Front Image */}
                <Image
                  src={product.images.front}
                  alt={`${product.name} front`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Back Image on Hover */}
                <Image
                  src={product.images.back}
                  alt={`${product.name} back`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {product.isSale && (
                  <div className="absolute top-2 left-2 bg-zenji-red text-zenji-white px-2 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                    SALE {product.salePercentage}% OFF
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-zenji-white text-zenji-black px-4 py-2 text-xs uppercase tracking-wider font-medium">
                    QUICK VIEW →
                  </span>
                </div>
              </div>
              <h3 className="text-sm uppercase tracking-wider truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                {product.isSale ? (
                  <>
                    <span className="text-sm text-zenji-red">
                      A${product.salePrice?.toFixed(2)}
                    </span>
                    <span className="text-sm text-zenji-gray-light line-through">
                      A${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-sm">A${product.price.toFixed(2)}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
