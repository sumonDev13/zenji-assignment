import Hero from "@/components/Hero";
import NewsCarousel from "@/components/NewsCarousel";
import ProductGrid from "@/components/ProductGrid";
import Manifesto from "@/components/Manifesto";
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
