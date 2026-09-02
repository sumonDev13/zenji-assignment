import { Metadata } from "next";
import DropPage from "@/components/DropPage";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Drop — ZENJI",
  description:
    "Shop the latest drops from ZENJI. Anime-inspired streetwear. Limited edition. No restocks.",
};

export default function Drop() {
  return <DropPage products={products} />;
}
