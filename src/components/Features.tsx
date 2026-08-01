import { Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Features() {
  return (
    <section
      id="features"
      className="min-h-screen bg-cream px-4 py-24 text-ink sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-center">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              {siteConfig.labels.features}
            </p>
            <h2 className="font-display mt-5 text-5xl uppercase leading-none sm:text-7xl">
              {siteConfig.labels.featuresTitle}
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {siteConfig.features.map((item) => (
              <div
                key={item}
                className="flex min-h-24 items-start gap-4 border border-[var(--line)] p-5"
              >
                <Check className="mt-1 shrink-0 text-terracotta" size={20} />
                <span className="text-lg font-bold leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-0 border-y border-[var(--line)] md:grid-cols-3">
          <Info label={siteConfig.labels.averageBill} value={siteConfig.business.averageBill} />
          <Info label={siteConfig.labels.cuisine} value={siteConfig.labels.cuisineValue} />
          <Info label={siteConfig.labels.tables} value={siteConfig.business.tables} />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--line)] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">
        {label}
      </p>
      <p className="mt-3 font-display text-4xl uppercase leading-none">{value}</p>
    </div>
  );
}
