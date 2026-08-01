import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-cream sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl uppercase tracking-[0.1em]">
            {siteConfig.business.name}
          </p>
          <p className="mt-2 text-cream/70">{siteConfig.business.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.08em]">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
