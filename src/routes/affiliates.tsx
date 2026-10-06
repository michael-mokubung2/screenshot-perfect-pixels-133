import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { ProductGrid } from "@/components/kairo/Blocks";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/affiliates")({
  head: () => ({
    meta: [
      { title: "Products — KAIRO" },
      { name: "description", content: "Manga, Blu-rays, artbooks and gear picked by Kairo editors." },
      { property: "og:title", content: "Products — KAIRO" },
      { property: "og:description", content: "Manga, Blu-rays, artbooks and gear picked by Kairo editors." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="The Shelf" title="Things we would buy again." />
      <section className="mx-auto mt-10 max-w-7xl px-5">
        <div role="alert" className="mb-8 flex gap-3 border-l-2 border-primary bg-card p-4 text-sm">
          <Info size={18} className="shrink-0 text-primary" />
          <p><strong>Affiliate disclosure.</strong> Some links on this page are affiliate links. If you buy through them, Kairo may earn a small commission at no extra cost to you. We only list things we genuinely recommend.</p>
        </div>
        <ProductGrid />
      </section>
    </Layout>
  );
}
