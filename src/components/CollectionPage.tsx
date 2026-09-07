"use client";

import { useState } from "react";
import { Collection } from "@/types/product";
import ProductCard from "./ProductCard";

interface CollectionPageProps {
  collections: Collection[];
}

export default function CollectionPage({ collections }: CollectionPageProps) {
  const [activeCollection, setActiveCollection] = useState<string>(
    collections[0]?.id || ""
  );

  const currentCollection = collections.find((c) => c.id === activeCollection);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-zenji-gray-light mb-4 text-xs tracking-[0.3em] uppercase">
            EXPLORE
          </p>
          <h1 className="font-display mb-6 text-5xl tracking-wider uppercase md:text-7xl">
            COLLECTION
          </h1>
          <p className="text-zenji-gray-light mx-auto max-w-2xl">
            Discover our curated collections of anime-inspired streetwear. Each piece
            tells a story.
          </p>
        </div>
      </div>

      {/* Collection Tabs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setActiveCollection(collection.id)}
              className={`px-6 py-3 text-sm tracking-wider uppercase transition-colors ${
                activeCollection === collection.id
                  ? "bg-zenji-white text-zenji-black"
                  : "border-zenji-gray-dark hover:border-zenji-white border"
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* Collection Description */}
        {currentCollection && (
          <div className="mb-12 text-center">
            <h2 className="font-display mb-4 text-2xl tracking-wider uppercase">
              {currentCollection.name}
            </h2>
            <p className="text-zenji-gray-light mx-auto max-w-xl">
              {currentCollection.description}
            </p>
          </div>
        )}

        {/* Products Grid */}
        {currentCollection && (
          <div className="grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
            {currentCollection.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showCollection
                imageHover="scale"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
