import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-cream px-4 py-24 text-ink sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="section-label text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
            {siteConfig.labels.photos}
          </p>
          <h2 className="font-display mt-5 text-5xl uppercase leading-none sm:text-7xl">
            {siteConfig.labels.galleryTitle}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {siteConfig.gallery.map((item, index) => (
            <article
              key={item.title}
              className={[
                "photo-frame relative min-h-[330px] overflow-hidden border border-[var(--line)]",
                index === 0 ? "sm:col-span-2 sm:min-h-[380px]" : "",
              ].join(" ")}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="image-drift object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-5 text-cream">
                <h3 className="font-display text-3xl uppercase tracking-[0.08em]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
