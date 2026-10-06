import { createFileRoute } from "@tanstack/react-router";
import { AnimeFinder } from "@/components/kairo/Blocks";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover — KAIRO" },
      { name: "description", content: "Filter curated anime by genre, year and mood." },
      { property: "og:title", content: "Discover — KAIRO" },
      { property: "og:description", content: "Filter curated anime by genre, year and mood." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): { q?: string } => (typeof s["q"] === "string" ? { q: s["q"] } : {}),
  component: Page,
});

function Page() {
  const { q } = Route.useSearch();
  return (
    <Layout>
      <PageHeader eyebrow="Discover" title="The full catalogue." intro="Twelve curated titles to start. Combine tags to narrow it down." />
      <section className="mx-auto mt-10 max-w-7xl px-5"><AnimeFinder initialQuery={q ?? ""} key={q} /></section>
    </Layout>
  );
}
