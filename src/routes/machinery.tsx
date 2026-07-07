import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { FabricPattern } from "@/components/FabricPattern";
import { fabric } from "@/lib/fabric-presets";
import { CATEGORIES } from "@/lib/site";
import { useState } from "react";

const TITLE = "Machinery — Full Fleet Catalogue | QianTron";
const DESC =
  "Explore QianTron's full machinery catalogue: excavators, bulldozers, wheel loaders, motor graders, compaction rollers, industrial forklifts and heavy trucks.";

export const Route = createFileRoute("/machinery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/machinery" },
    ],
    links: [{ rel: "canonical", href: "/machinery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "QianTron Machinery Catalogue",
          itemListElement: CATEGORIES.map((c, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: c.name,
            url: `/category/${c.slug}`,
          })),
        }),
      },
    ],
  }),
  component: MachineryPage,
});

function MachineryPage() {
  const [active, setActive] = useState(CATEGORIES[0].slug);
  const cat = CATEGORIES.find((c) => c.slug === active) ?? CATEGORIES[0];

  return (
    <main className="min-h-screen bg-arch-white">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-32 pt-40 text-arch-white">
        <FabricPattern className="absolute -bottom-24 -right-24 h-[540px] w-[540px]" {...fabric("hero-gold")} />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="section-eyebrow !text-dragon">Volume MMXXV · Machinery Register</div>
          <h1 className="text-display mt-4 text-5xl font-black leading-[0.95] md:text-7xl">
            The full <span className="text-dragon">machinery</span> catalogue.
          </h1>
          <p className="text-editorial mt-8 max-w-2xl text-xl text-arch-white/80">
            Seven fleets. One accountable house. Tap any tab to open the category register.
          </p>
        </div>
      </section>

      {/* Graphic tabs */}
      <section className="relative bg-arch-white py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {CATEGORIES.map((c) => {
              const isActive = c.slug === active;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActive(c.slug)}
                  onMouseEnter={() => setActive(c.slug)}
                  className={`group relative overflow-hidden border text-left transition ${
                    isActive ? "border-dragon" : "border-border hover:border-dragon"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                    <img
                      src={c.hero}
                      alt={c.name}
                      className={`h-full w-full object-cover transition duration-700 ${
                        isActive ? "scale-105 opacity-95" : "opacity-70 group-hover:opacity-95 group-hover:scale-105"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                    <div className={`absolute left-0 top-0 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.25em] ${
                      isActive ? "bg-dragon text-arch-white" : "bg-charcoal/70 text-arch-white/80"
                    }`}>
                      {c.ref}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <div className="text-display text-sm font-black leading-tight text-arch-white">
                        {c.name}
                      </div>
                      <div className={`mt-2 h-[2px] transition-all ${isActive ? "w-10 bg-dragon" : "w-4 bg-arch-white/50 group-hover:w-8 group-hover:bg-dragon"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active category detail */}
      <section className="relative overflow-hidden bg-concrete py-20">
        <FabricPattern className="absolute -bottom-16 -right-16 h-[460px] w-[460px]" {...fabric("hero-bronze")} />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="section-eyebrow">Series {cat.ref}</div>
              <h2 className="text-display mt-3 text-4xl font-black leading-[0.95] md:text-6xl">{cat.name}</h2>
              <p className="text-editorial mt-6 text-xl leading-snug text-graphite">{cat.tagline}</p>
              <p className="mt-6 text-[14px] leading-relaxed text-graphite">{cat.intro}</p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {cat.highlights.map((h) => (
                  <div key={h.k}>
                    <div className="text-display text-xl font-black text-dragon">{h.k}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-steel">{h.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="section-eyebrow">Applications</div>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {cat.applications.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-[13px] text-graphite">
                      <span className="h-2 w-2 rotate-45 bg-dragon" /> {a}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/category/$slug"
                params={{ slug: cat.slug }}
                className="mt-10 inline-flex items-center gap-3 bg-dragon px-6 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-arch-white transition hover:bg-dragon-deep"
              >
                Open {cat.name} Register →
              </Link>
            </div>

            <div className="md:col-span-7">
              <div className="section-eyebrow">Catalogue · {cat.machines.length} models</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cat.machines.map((m) => (
                  <Link
                    key={m.code}
                    to="/category/$slug/$machine"
                    params={{ slug: cat.slug, machine: m.code.toLowerCase() }}
                    className="group flex overflow-hidden border border-border bg-arch-white transition hover:border-dragon"
                  >
                    <div className="relative w-1/2 overflow-hidden bg-charcoal">
                      <img src={m.image} alt={m.name} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div>
                        <div className="text-[9px] uppercase tracking-[0.3em] text-steel">{m.code}</div>
                        <div className="text-display mt-2 text-base font-black leading-tight">{m.name}</div>
                        <div className="mt-1 text-[11px] text-steel">{m.tag}</div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-3">
                        {m.specs.map((s) => (
                          <div key={s.k}>
                            <div className="text-display text-xs font-black text-charcoal">{s.k}</div>
                            <div className="text-[8px] uppercase tracking-[0.2em] text-steel">{s.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
