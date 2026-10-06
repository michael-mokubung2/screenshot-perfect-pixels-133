import { createFileRoute } from "@tanstack/react-router";
import { GUIDES } from "@/data/kairo";
import { AdSlot } from "@/components/kairo/Layout";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Guides — KAIRO" },
      { name: "description", content: "Calm, practical guides to getting into anime." },
      { property: "og:title", content: "Guides — KAIRO" },
      { property: "og:description", content: "Calm, practical guides to getting into anime." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Guides" title="Field notes for watchers." />
      <section className="mx-auto mt-10 grid max-w-7xl gap-10 px-5 lg:grid-cols-12">
        <div className="lg:col-span-9">
          {GUIDES.map((g, i) => (
            <article key={g.title} className="grid gap-4 border-b border-border py-8 md:grid-cols-12">
              <span className="font-mono text-sm text-primary md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <div className="md:col-span-9"><h2 className="text-3xl font-bold">{g.title}</h2><p className="mt-2 text-muted-foreground">{g.excerpt}</p></div>
              <span className="eyebrow md:col-span-2 md:text-right">{g.read} read</span>
            </article>
          ))}
        </div>
        <aside className="lg:col-span-3"><div className="sticky top-24"><AdSlot label="Sidebar" /></div></aside>
      </section>
    </Layout>
  );
}
