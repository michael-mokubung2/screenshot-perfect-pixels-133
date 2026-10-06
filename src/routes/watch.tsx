import { createFileRoute } from "@tanstack/react-router";
import { StreamingDirectory } from "@/components/kairo/Blocks";
import { AdSlot } from "@/components/kairo/Layout";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "Where to Watch — KAIRO" },
      { name: "description", content: "Compare legal anime streaming platforms and pricing models." },
      { property: "og:title", content: "Where to Watch — KAIRO" },
      { property: "og:description", content: "Compare legal anime streaming platforms and pricing models." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Watch" title="Stream it the right way." intro="Legal streams pay the studios and animators who make the shows you love." />
      <section className="mx-auto mt-10 max-w-7xl px-5"><StreamingDirectory /></section>
      <div className="mx-auto mt-12 max-w-7xl px-5"><AdSlot /></div>
    </Layout>
  );
}
