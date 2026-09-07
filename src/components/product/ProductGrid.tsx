"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="bg-zenji-gray/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-zenji-gray-light mb-2 text-xs tracking-[0.2em] uppercase">
              COLLECTION // THE_ORIGIN_DROP
            </p>
            <h2 className="font-display text-3xl tracking-wider uppercase">
              LATEST_DROPS
            </h2>
          </div>
          <Link
            href="/drop"
            className="hover:text-zenji-red text-sm tracking-wider uppercase transition-colors"
          >
            VIEW_ALL
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
