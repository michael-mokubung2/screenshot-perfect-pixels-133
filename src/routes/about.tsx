import { createFileRoute } from "@tanstack/react-router";

import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KAIRO" },
      { name: "description", content: "Kairo is an independent editorial guide to anime." },
      { property: "og:title", content: "About — KAIRO" },
      { property: "og:description", content: "Kairo is an independent editorial guide to anime." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="About" title="回路 — a circuit between you and your next show." />
      <section className="mx-auto mt-12 grid max-w-7xl gap-10 px-5 md:grid-cols-12">
        <p className="text-2xl leading-relaxed md:col-span-7">Kairo is a small, independent guide. We pick fewer titles, write shorter notes, and only ever send you to legal streams — because the industry runs on people who deserve to be paid.</p>
        <ul className="space-y-4 text-sm text-muted-foreground md:col-span-4 md:col-start-9">
          <li className="border-t border-border pt-4">Editorial first. No algorithmic feeds.</li>
          <li className="border-t border-border pt-4">Legal links only. Always.</li>
          <li className="border-t border-border pt-4">Transparent about affiliates and ads.</li>
        </ul>
      </section>
    </Layout>
  );
}
