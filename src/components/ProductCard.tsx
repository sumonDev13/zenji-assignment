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
    <Link href={`/drop/${product.slug}`} className="group cursor-pointer">
      <div className="bg-zenji-gray relative mb-3 aspect-square overflow-hidden rounded-lg">
        {imageHover === "crossfade" ? (
          <>
            <Image
              src={product.images.front}
              alt={`${product.name} front`}
              fill
              className="object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-0"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <Image
              src={product.images.back}
              alt={`${product.name} back`}
              fill
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </>
        ) : (
          <Image
            src={product.images.front}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {product.isSale && (
          <div className="bg-zenji-red text-zenji-white absolute top-2 left-2 px-2 py-1 text-[10px] font-medium tracking-wider uppercase sm:text-xs">
            SALE {product.salePercentage}% OFF
          </div>
        )}

        {showQuickView && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="bg-zenji-white text-zenji-black px-4 py-2 text-xs font-medium tracking-wider uppercase">
              QUICK VIEW →
            </span>
          </div>
        )}
      </div>

      {showCollection && (
        <p className="text-zenji-gray-light mb-1 text-xs tracking-wider uppercase">
          COLLECTION // {product.collection}
        </p>
      )}

      <h3 className="group-hover:text-zenji-red truncate text-sm tracking-wider uppercase transition-colors">
        {product.name}
      </h3>

      <div className="mt-1 flex items-center gap-2">
        {product.isSale ? (
          <>
            <span className="text-zenji-red text-sm">
              A${product.salePrice?.toFixed(2)}
            </span>
            <span className="text-zenji-gray-light text-sm line-through">
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
