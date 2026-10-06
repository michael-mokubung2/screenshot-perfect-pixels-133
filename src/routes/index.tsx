import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { AdSlot, Layout } from "@/components/kairo/Layout";
import { AnimeFinder, ProductGrid, SectionTitle, StreamingDirectory } from "@/components/kairo/Blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAIRO — Your next anime obsession starts here" },
      { name: "description", content: "An editorial anime discovery guide with curated picks and legal streaming links." },
      { property: "og:title", content: "KAIRO — Anime discovery, edited" },
      { property: "og:description", content: "Curated anime picks, filters by genre, and where to watch legally." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-14 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-7 md:pt-10">
          <p className="eyebrow">Issue 26 · Autumn season</p>
          <h1 className="mt-6 text-6xl font-bold leading-[1.02] md:text-8xl">
            Your next obsession <span className="text-primary">starts</span> here.
          </h1>
          <p className="mt-8 max-w-md text-lg text-muted-foreground">
            Hand-picked anime, honest notes, and only legal places to watch. No noise — just the next thing worth your evenings.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/discover" className="btn btn-primary">Find something to watch <ArrowRight size={16} /></Link>
            <Link to="/watch" className="btn btn-ghost">Where to stream</Link>
          </div>
        </div>
        <figure className="relative md:col-span-5">
          <img src={hero} alt="Figure with a red umbrella over a rainy Tokyo skyline" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
          <figcaption className="absolute -left-4 bottom-8 hidden bg-background px-4 py-3 md:block">
            <span className="eyebrow">Featured</span>
            <p className="font-display text-lg">雨の街 — The rain city</p>
          </figcaption>
          <span className="absolute right-0 top-0 h-16 w-1 bg-primary" />
        </figure>
      </section>

      <div className="mx-auto mt-16 max-w-7xl px-5"><AdSlot /></div>

      <section className="mx-auto mt-20 max-w-7xl px-5">
        <SectionTitle n="01 — The Finder" title="Filter by mood" />
        <AnimeFinder />
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5">
        <SectionTitle n="02 — Directory" title="Watch it legally">
          <Link to="/watch" className="text-sm underline underline-offset-4 hover:text-primary">Full comparison</Link>
        </SectionTitle>
        <StreamingDirectory />
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-5">
        <SectionTitle n="03 — The Shelf" title="Editor's picks">
          <Link to="/affiliates" className="text-sm underline underline-offset-4 hover:text-primary">All products</Link>
        </SectionTitle>
        <ProductGrid limit={3} />
      </section>
    </Layout>
  );
}
