// app/explore/page.tsx  (SERVER COMPONENT — no "use client")
import type { Metadata } from "next";
import exploreContent from "@/content/explore.json";
import ExploreClient from "@/components/ExploreClient";

export const metadata: Metadata = {
  title: "Explore Featured Shops | Thrifts",
  description:
    "Browse curated products across categories from trusted sellers on Thrifts.",
};

export default function ExplorePage() {
  return <ExploreClient content={exploreContent} />;
}
