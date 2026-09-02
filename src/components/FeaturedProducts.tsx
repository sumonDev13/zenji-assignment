"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const saleProducts = products.filter((p) => p.isSale);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        {/* Horizontal scrollable product cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/drop/${product.slug}`}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] snap-center group"
            >
              <div className="relative aspect-[3/4] bg-zenji-gray rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images.front}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 30vw"
                />
                {product.isSale && (
                  <div className="absolute top-4 left-4 bg-zenji-red text-zenji-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
                    SALE {product.salePercentage}% OFF
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-zenji-gray-light">
                  COLLECTION // {product.collection}
                </p>
                <h3 className="text-lg uppercase tracking-wider">
                  {product.name}
                </h3>
                <p className="text-sm uppercase tracking-wider text-zenji-red">
                  SHOP {product.name} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
