import Hero from "@/components/home/Hero";
import NewsCarousel from "@/components/home/NewsCarousel";
import ProductGrid from "@/components/product/ProductGrid";
import Manifesto from "@/components/home/Manifesto";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsCarousel />
      <ProductGrid products={products} />
      <Manifesto />
    </>
  );
}
