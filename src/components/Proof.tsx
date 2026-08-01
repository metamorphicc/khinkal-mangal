import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Proof() {
  return (
    <section
      id="proof"
      className="min-h-screen bg-ink/88 px-4 py-24 text-cream sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
            {siteConfig.labels.features}
          </p>
          <h2 className="font-display mt-5 text-5xl uppercase leading-none sm:text-7xl">
            {siteConfig.proof.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg font-bold leading-8">
            {siteConfig.proof.text}
          </p>
          <Link
            href="#booking"
            className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-cream transition hover:bg-terracotta"
          >
            {siteConfig.labels.bookTable}
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {siteConfig.proof.items.map((item) => (
            <div
              key={item}
              className="flex min-h-44 flex-col justify-between border border-[var(--line)] p-5"
            >
              <span className="h-3 w-3 rounded-full bg-terracotta" />
              <p className="font-display text-3xl uppercase leading-none">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
