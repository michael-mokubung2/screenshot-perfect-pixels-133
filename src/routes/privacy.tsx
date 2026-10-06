import { createFileRoute } from "@tanstack/react-router";

import { Layout, PageHeader } from "@/components/kairo/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — KAIRO" },
      { name: "description", content: "How Kairo handles your data, cookies, ads and affiliate links." },
      { property: "og:title", content: "Privacy Policy — KAIRO" },
      { property: "og:description", content: "How Kairo handles your data, cookies, ads and affiliate links." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Last updated October 2026." />
      <section className="mx-auto mt-10 max-w-3xl space-y-8 px-5 text-muted-foreground">
        {[
          ["Information we collect", "We do not require accounts. If you join the newsletter or contact us, we store only the email and message you send."],
          ["Cookies & advertising", "We may display ads served by Google AdSense, which uses cookies to show relevant ads. You can opt out via Google Ad Settings."],
          ["Affiliate links", "Some product links contain affiliate tracking (e.g. Amazon Associates). Retailers may set cookies when you click them."],
          ["Your choices", "Email us at any time to delete your data or unsubscribe."],
        ].map(([h, p]) => (<div key={h}><h2 className="text-2xl font-bold text-foreground">{h}</h2><p className="mt-2">{p}</p></div>))}
      </section>
    </Layout>
  );
}
