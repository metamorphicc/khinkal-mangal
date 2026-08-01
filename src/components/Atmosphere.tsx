import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function Atmosphere() {
  const [mainImage, sideImage] = siteConfig.atmosphere.images;

  return (
    <section
      id="atmosphere"
      className="min-h-screen bg-ink/88 px-4 py-24 text-cream sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden border border-[var(--line)]">
          <Image
            src={mainImage.image}
            alt={mainImage.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
            {siteConfig.labels.photos}
          </p>
          <h2 className="font-display mt-5 text-5xl uppercase leading-none sm:text-7xl">
            {siteConfig.atmosphere.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg font-bold leading-8">
            {siteConfig.atmosphere.text}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-end">
            <div className="relative min-h-[230px] overflow-hidden border border-[var(--line)]">
              <Image
                src={sideImage.image}
                alt={sideImage.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 100vw"
              />
            </div>
            <div className="border border-[var(--line)] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">
                {siteConfig.labels.tables}
              </p>
              <p className="mt-3 font-display text-4xl uppercase leading-none">
                {siteConfig.business.tables}
              </p>
              <p className="mt-4 text-base font-bold leading-7 text-cream">
                {siteConfig.business.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
