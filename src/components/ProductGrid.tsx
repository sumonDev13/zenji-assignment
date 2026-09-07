"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
