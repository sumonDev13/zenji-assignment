import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  showCollection?: boolean;
  imageHover?: "crossfade" | "scale";
  showQuickView?: boolean;
}

export default function ProductCard({
  product,
  showCollection = false,
  imageHover = "crossfade",
  showQuickView = true,
}: ProductCardProps) {
  return (
    <Link
      href={`/drop/${product.slug}`}
      className="group cursor-pointer"
    >
      <div className="aspect-square relative bg-zenji-gray rounded-lg overflow-hidden mb-3">
        {imageHover === "crossfade" ? (
          <>
            <Image
              src={product.images.front}
              alt={`${product.name} front`}
              fill
              className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <Image
              src={product.images.back}
              alt={`${product.name} back`}
              fill
              className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </>
        ) : (
          <Image
            src={product.images.front}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {product.isSale && (
          <div className="absolute top-2 left-2 bg-zenji-red text-zenji-white px-2 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
            SALE {product.salePercentage}% OFF
          </div>
        )}

        {showQuickView && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-zenji-white text-zenji-black px-4 py-2 text-xs uppercase tracking-wider font-medium">
              QUICK VIEW →
            </span>
          </div>
        )}
      </div>

      {showCollection && (
        <p className="text-xs uppercase tracking-wider text-zenji-gray-light mb-1">
          COLLECTION // {product.collection}
        </p>
      )}

      <h3 className="text-sm uppercase tracking-wider truncate group-hover:text-zenji-red transition-colors">
        {product.name}
      </h3>

      <div className="flex items-center gap-2 mt-1">
        {product.isSale ? (
          <>
            <span className="text-sm text-zenji-red">
              A${product.salePrice?.toFixed(2)}
            </span>
            <span className="text-sm text-zenji-gray-light line-through">
              A${product.price.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-sm">A${product.price.toFixed(2)}</span>
        )}
      </div>
    </Link>
  );
}
