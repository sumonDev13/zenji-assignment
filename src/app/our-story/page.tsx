import { Metadata } from "next";
import OurStoryPage from "@/components/OurStoryPage";

export const metadata: Metadata = {
  title: "Our Story — ZENJI",
  description:
    "ZENJI began with one belief: what you wear should tell a story. Learn about our anime streetwear brand.",
};

export default function OurStory() {
  return <OurStoryPage />;
}
