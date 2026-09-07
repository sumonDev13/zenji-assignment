import { Metadata } from "next";
import LookbookPage from "@/components/lookbook/LookbookPage";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Lookbook — ZENJI",
  description:
    "The Origin Drop visual archive. Anime streetwear lookbook featuring our latest collection.",
};

export default function Lookbook() {
  return <LookbookPage products={products} />;
}
