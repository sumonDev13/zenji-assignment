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
