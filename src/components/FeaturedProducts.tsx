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
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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

        {/* Horizontal scrollable product cards */}
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {saleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/drop/${product.slug}`}
              className="group w-[85vw] flex-shrink-0 snap-center sm:w-[60vw] md:w-[45vw] lg:w-[30vw]"
            >
              <div className="bg-zenji-gray relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={product.images.front}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, (max-width: 1024px) 45vw, 30vw"
                />
                {product.isSale && (
                  <div className="bg-zenji-red text-zenji-white absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-wider uppercase">
                    SALE {product.salePercentage}% OFF
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-zenji-gray-light text-xs tracking-wider uppercase">
                  COLLECTION // {product.collection}
                </p>
                <h3 className="text-lg tracking-wider uppercase">{product.name}</h3>
                <p className="text-zenji-red text-sm tracking-wider uppercase">
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
