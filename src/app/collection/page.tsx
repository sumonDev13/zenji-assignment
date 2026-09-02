import { Metadata } from "next";
import CollectionPage from "@/components/CollectionPage";
import { collections } from "@/data/products";

export const metadata: Metadata = {
  title: "Collection — ZENJI",
  description:
    "Explore ZENJI collections. Anime-inspired streetwear for gamers and otaku.",
};

export default function Collection() {
  return <CollectionPage collections={collections} />;
}
