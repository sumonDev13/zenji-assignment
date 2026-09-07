import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/components/product/ProductPage";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} — ZENJI`,
    description: product.description,
  };
}

export default async function DropProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return <ProductPage product={product} relatedProducts={relatedProducts} />;
}
