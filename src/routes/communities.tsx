import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { COMMUNITIES } from "@/data/kairo";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "Communities — KAIRO" },
      { name: "description", content: "The best Reddit and Discord anime communities." },
      { property: "og:title", content: "Communities — KAIRO" },
      { property: "og:description", content: "The best Reddit and Discord anime communities." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Communities" title="Find your people." intro="Five places where the conversation is worth joining." />
      <section className="mx-auto mt-10 max-w-7xl px-5">
        {COMMUNITIES.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="group grid items-baseline gap-2 border-b border-border py-6 md:grid-cols-12">
            <span className="chip w-fit md:col-span-2">{c.platform}</span>
            <span className="font-display text-3xl font-bold group-hover:text-primary md:col-span-4">{c.name}</span>
            <span className="text-sm text-muted-foreground md:col-span-4">{c.desc}</span>
            <span className="flex items-center gap-1 font-mono text-sm md:col-span-2 md:justify-end">{c.members} <ArrowUpRight size={14} /></span>
          </a>
        ))}
      </section>
    </Layout>
  );
}
