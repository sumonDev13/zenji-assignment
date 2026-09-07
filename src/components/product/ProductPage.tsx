"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Size } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductPageProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPage({ product, relatedProducts }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedImage, setSelectedImage] = useState<"front" | "back">("front");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    alert(`Added ${quantity}x ${product.name} (Size: ${selectedSize}) to cart`);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="text-zenji-gray-light flex items-center space-x-2 text-sm">
          <Link href="/" className="hover:text-zenji-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/drop" className="hover:text-zenji-white transition-colors">
            Drop
          </Link>
          <span>/</span>
          <span className="text-zenji-white">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-zenji-gray relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} ${selectedImage}`}
                fill
                className="object-cover"
                priority
              />
              {product.isSale && (
                <div className="bg-zenji-red text-zenji-white absolute top-4 left-4 px-3 py-1 text-sm font-medium">
                  SALE {product.salePercentage}% OFF
                </div>
              )}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedImage("front")}
                className={`bg-zenji-gray relative aspect-square flex-1 overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === "front" ? "border-zenji-white" : "border-transparent"
                }`}
              >
                <Image
                  src={product.images.front}
                  alt={`${product.name} front`}
                  fill
                  className="object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage("back")}
                className={`bg-zenji-gray relative aspect-square flex-1 overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === "back" ? "border-zenji-white" : "border-transparent"
                }`}
              >
                <Image
                  src={product.images.back}
                  alt={`${product.name} back`}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-zenji-gray-light mb-2 text-xs tracking-[0.2em] uppercase">
                COLLECTION // {product.collection}
              </p>
              <h1 className="font-display text-4xl tracking-wider uppercase">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {product.isSale ? (
                <>
                  <span className="text-zenji-red text-2xl font-medium">
                    A${product.salePrice?.toFixed(2)}
                  </span>
                  <span className="text-zenji-gray-light text-lg line-through">
                    A${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium">A${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-zenji-gray-light leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="mb-3 text-sm tracking-wider uppercase">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-12 w-12 items-center justify-center border transition-colors ${
                      selectedSize === size
                        ? "border-zenji-white bg-zenji-white text-zenji-black"
                        : "border-zenji-gray-dark hover:border-zenji-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="mb-3 text-sm tracking-wider uppercase">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border-zenji-gray-dark hover:border-zenji-white flex h-10 w-10 items-center justify-center border transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-zenji-gray-dark hover:border-zenji-white flex h-10 w-10 items-center justify-center border transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-zenji-white text-zenji-black hover:bg-zenji-gray-light w-full py-4 text-sm font-medium tracking-wider uppercase transition-colors"
            >
              ADD TO CART
            </button>

            {/* Product Info */}
            <div className="border-zenji-gray-dark/30 space-y-4 border-t pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zenji-gray-light">Collection</span>
                <span>{product.collection}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zenji-gray-light">Free Shipping</span>
                <span>Australia-wide on orders over A$100</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zenji-gray-light">Returns</span>
                <span>All sales final</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display mb-8 text-2xl tracking-wider uppercase">
            YOU_MAY_ALSO_LIKE
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {relatedProducts.slice(0, 4).map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                showQuickView={false}
                imageHover="scale"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
