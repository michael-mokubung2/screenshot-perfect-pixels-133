import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/discover", label: "Discover" },
  { to: "/watch", label: "Watch" },
  { to: "/communities", label: "Communities" },
  { to: "/creators", label: "Creators" },
  { to: "/guides", label: "Guides" },
  { to: "/affiliates", label: "Products" },
] as const;

export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="flex h-20 w-full items-center justify-center border border-dashed border-border">
      <span className="eyebrow">{label} · AdSense slot</span>
    </div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("kairo-theme");
    const d = saved ? saved === "dark" : true;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    localStorage.setItem("kairo-theme", d ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme" className="p-2 hover:text-primary">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    navigate({ to: "/discover", search: { q } });
  };
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold tracking-tight">KAIRO</span>
          <span className="text-xs text-primary">回路</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground underline decoration-primary underline-offset-8" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <form onSubmit={submit} className="ml-auto hidden items-center border border-border px-3 md:flex">
          <Search size={14} className="text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search titles…"
            className="w-40 bg-transparent px-2 py-2 text-sm outline-none" />
        </form>
        <ThemeToggle />
        <button className="p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex h-16 items-center justify-between border-b border-border px-5">
            <span className="font-display text-2xl font-bold">KAIRO</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
          </div>
          <form onSubmit={submit} className="m-5 flex items-center border border-border px-3">
            <Search size={14} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search titles…" className="flex-1 bg-transparent px-2 py-3 outline-none" />
          </form>
          <nav className="flex flex-col px-5">
            {[{ to: "/", label: "Home" }, ...NAV, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border py-4 font-display text-2xl">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-3xl font-bold">KAIRO</p>
          <p className="mt-3 text-sm text-muted-foreground">An editorial guide to anime — always pointing you toward legal streams.</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Kairo</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">The weekly dispatch</p>
          {done ? <p className="text-sm">Thank you — see you Sunday.</p> : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex border border-border">
              <input type="email" required placeholder="you@email.com" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none" />
              <button className="btn btn-primary border-0 py-2">Join</button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 py-5 text-xs text-muted-foreground">
          <span>© 2026 Kairo. All titles are property of their respective owners.</span>
          <span>As an Amazon Associate, Kairo earns from qualifying purchases.</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="mx-auto max-w-7xl border-b border-border px-5 pb-12 pt-16">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">{title}</h1>
      {intro && <p className="mt-5 max-w-xl text-muted-foreground">{intro}</p>}
    </section>
  );
}
