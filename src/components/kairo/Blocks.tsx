import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { ANIME, GENRES, PLATFORMS, PRODUCTS, type Genre } from "@/data/kairo";

export function AnimeFinder({ initialQuery = "" }: { initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [tags, setTags] = useState<Genre[]>([]);
  const list = useMemo(() => ANIME.filter((a) =>
    (q === "" || a.title.toLowerCase().includes(q.toLowerCase())) &&
    tags.every((t) => a.genres.includes(t))), [q, tags]);
  const toggle = (g: Genre) => setTags((t) => t.includes(g) ? t.filter((x) => x !== g) : [...t, g]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-border py-5 md:flex-row md:items-center">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter by title…"
          className="border border-border bg-transparent px-3 py-2 text-sm outline-none focus:border-primary md:w-64" />
        <div className="flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <button key={g} onClick={() => toggle(g)}
              className={`chip ${tags.includes(g) ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`}>
              {g}
            </button>
          ))}
          {tags.length > 0 && <button onClick={() => setTags([])} className="chip border-0 underline">Clear</button>}
        </div>
        <span className="eyebrow md:ml-auto">{list.length} titles</span>
      </div>
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a, i) => (
          <article key={a.id} className="flex flex-col bg-background p-6">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")} — {a.year}</span>
              <span className="text-xs text-muted-foreground">{a.episodes} ep</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold">{a.title}</h3>
            <p className="text-sm text-primary">{a.jp}</p>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{a.genres.map((g) => <span key={g} className="chip">{g}</span>)}</div>
            <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
              {a.streams.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-primary">
                  {s.name} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </article>
        ))}
        {list.length === 0 && <p className="bg-background p-10 text-muted-foreground sm:col-span-2 lg:col-span-3">No titles match those filters.</p>}
      </div>
    </div>
  );
}

export function StreamingDirectory() {
  return (
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
      {PLATFORMS.map((p) => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-background p-6 hover:bg-card">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold">{p.name}</span>
            <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary" />
          </div>
          <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.note}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.models.map((m) => <span key={m} className={`chip ${m === "Free with Ads" ? "border-primary text-primary" : ""}`}>{m}</span>)}
          </div>
        </a>
      ))}
    </div>
  );
}

export function ProductGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.slice(0, limit).map((p) => (
        <div key={p.name} className="flex flex-col bg-background p-6">
          <span className="eyebrow">{p.category}</span>
          <h3 className="mt-3 flex-1 text-xl font-bold">{p.name}</h3>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-sm">{p.price}</span>
            <a href={p.url} target="_blank" rel="sponsored noopener noreferrer" className="btn btn-ghost py-2">View on Amazon <ArrowUpRight size={14} /></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SectionTitle({ n, title, children }: { n: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{n}</p>
        <h2 className="mt-2 text-4xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}
