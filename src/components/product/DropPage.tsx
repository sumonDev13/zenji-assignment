"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface DropPageProps {
  products: Product[];
}

export default function DropPage({ products }: DropPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-zenji-gray-light mb-4 text-xs tracking-[0.3em] uppercase">
            COLLECTION // THE_ORIGIN_DROP
          </p>
          <h1 className="font-display mb-6 text-5xl tracking-wider uppercase md:text-7xl">
            LATEST_DROPS
          </h1>
          <p className="text-zenji-gray-light mx-auto max-w-2xl">
            Every drop is limited edition. No restocks. Ever. Shop the latest
            anime-inspired streetwear from ZENJI.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showCollection
              imageHover="scale"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
