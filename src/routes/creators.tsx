import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CREATORS } from "@/data/kairo";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Creators — KAIRO" },
      { name: "description", content: "Anime YouTube creators worth subscribing to." },
      { property: "og:title", content: "Creators — KAIRO" },
      { property: "og:description", content: "Anime YouTube creators worth subscribing to." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Creators" title="Voices worth following." intro="Essayists, analysts and critics who make watching richer." />
      <section className="mx-auto mt-10 grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-5">
        {CREATORS.map((c, i) => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-background p-6">
            <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
            <span className="mt-10 font-display text-2xl font-bold group-hover:text-primary">{c.name}</span>
            <span className="mt-2 text-sm text-muted-foreground">{c.focus}</span>
            <span className="mt-6 inline-flex items-center gap-1 text-sm">YouTube <ArrowUpRight size={14} /></span>
          </a>
        ))}
      </section>
    </Layout>
  );
}
