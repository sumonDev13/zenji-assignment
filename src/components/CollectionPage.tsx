"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Collection } from "@/types/product";

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
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zenji-gray-light mb-4">
            EXPLORE
          </p>
          <h1 className="text-5xl md:text-7xl font-display uppercase tracking-wider mb-6">
            COLLECTION
          </h1>
          <p className="text-zenji-gray-light max-w-2xl mx-auto">
            Discover our curated collections of anime-inspired streetwear. Each
            piece tells a story.
          </p>
        </div>
      </div>

      {/* Collection Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setActiveCollection(collection.id)}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-colors ${
                activeCollection === collection.id
                  ? "bg-zenji-white text-zenji-black"
                  : "border border-zenji-gray-dark hover:border-zenji-white"
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* Collection Description */}
        {currentCollection && (
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display uppercase tracking-wider mb-4">
              {currentCollection.name}
            </h2>
            <p className="text-zenji-gray-light max-w-xl mx-auto">
              {currentCollection.description}
            </p>
          </div>
        )}

        {/* Products Grid */}
        {currentCollection && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
            {currentCollection.products.map((product) => (
              <Link
                key={product.id}
                href={`/drop/${product.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square relative bg-zenji-gray rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.images.front}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <h3 className="text-lg uppercase tracking-wider group-hover:text-zenji-red transition-colors">
                    {product.name}
                  </h3>
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
        )}
      </div>
    </div>
  );
}
