"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Size } from "@/types/product";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-zenji-gray-light">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-zenji-gray rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} ${selectedImage}`}
                fill
                className="object-cover"
                priority
              />
              {product.isSale && (
                <div className="absolute top-4 left-4 bg-zenji-red text-zenji-white px-3 py-1 text-sm font-medium">
                  SALE {product.salePercentage}% OFF
                </div>
              )}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedImage("front")}
                className={`flex-1 aspect-square relative bg-zenji-gray rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === "front"
                    ? "border-zenji-white"
                    : "border-transparent"
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
                className={`flex-1 aspect-square relative bg-zenji-gray rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === "back"
                    ? "border-zenji-white"
                    : "border-transparent"
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
              <p className="text-xs uppercase tracking-[0.2em] text-zenji-gray-light mb-2">
                COLLECTION // {product.collection}
              </p>
              <h1 className="text-4xl font-display uppercase tracking-wider">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {product.isSale ? (
                <>
                  <span className="text-2xl font-medium text-zenji-red">
                    A${product.salePrice?.toFixed(2)}
                  </span>
                  <span className="text-lg text-zenji-gray-light line-through">
                    A${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium">
                  A${product.price.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-zenji-gray-light leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border transition-colors ${
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
              <h3 className="text-sm uppercase tracking-wider mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-zenji-gray-dark hover:border-zenji-white transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-zenji-gray-dark hover:border-zenji-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-zenji-white text-zenji-black py-4 text-sm uppercase tracking-wider font-medium hover:bg-zenji-gray-light transition-colors"
            >
              ADD TO CART
            </button>

            {/* Product Info */}
            <div className="border-t border-zenji-gray-dark/30 pt-6 space-y-4">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-display uppercase tracking-wider mb-8">
            YOU_MAY_ALSO_LIKE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/drop/${item.slug}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-zenji-gray rounded-lg mb-3 overflow-hidden relative">
                  <Image
                    src={item.images.front}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm uppercase tracking-wider">{item.name}</h3>
                <p className="text-sm text-zenji-gray-light mt-1">
                  {item.isSale ? (
                    <>
                      <span className="text-zenji-red">A${item.salePrice?.toFixed(2)}</span>
                      <span className="line-through ml-2">A${item.price.toFixed(2)}</span>
                    </>
                  ) : (
                    `A${item.price.toFixed(2)}`
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
