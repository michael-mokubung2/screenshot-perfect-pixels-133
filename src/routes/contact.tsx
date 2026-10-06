import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KAIRO" },
      { name: "description", content: "Get in touch with the Kairo editorial team." },
      { property: "og:title", content: "Contact — KAIRO" },
      { property: "og:description", content: "Get in touch with the Kairo editorial team." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Write to us." intro="Recommendations, corrections and partnerships welcome." />
      <section className="mx-auto mt-10 max-w-2xl px-5">
        {sent ? <p className="font-display text-2xl">Thank you — we read everything.</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
            <input required placeholder="Name" className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            <input required type="email" placeholder="Email" className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            <textarea required rows={5} placeholder="Message" className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary" />
            <button className="btn btn-primary">Send message</button>
          </form>
        )}
      </section>
    </Layout>
  );
}
