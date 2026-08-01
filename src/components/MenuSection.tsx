import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function MenuSection() {
  return (
    <section
      id="menu"
      className="min-h-screen bg-cream px-4 py-24 text-ink sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              {siteConfig.labels.popular}
            </p>
            <h2 className="font-display mt-5 text-5xl uppercase leading-none sm:text-7xl">
              {siteConfig.menu.title}
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg font-bold leading-8">
              {siteConfig.menu.text}
            </p>
            <Link
              href="#booking"
              className="mt-7 inline-flex items-center gap-2 bg-terracotta px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-cream transition hover:-translate-y-1 hover:bg-ink"
            >
              {siteConfig.labels.delivery}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.menu.items.map((item) => (
            <article
              key={item.title}
              className="lift-card group border border-[var(--line)] bg-cream"
            >
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="image-drift object-cover"
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl uppercase leading-none">
                    {item.title}
                  </h3>
                  <p className="shrink-0 text-sm font-bold uppercase tracking-[0.08em] text-terracotta">
                    {item.price}
                  </p>
                </div>
                <p className="mt-4 text-base font-bold leading-7 text-ink/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
