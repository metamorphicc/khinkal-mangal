import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="min-h-screen bg-cream px-4 py-24 text-ink sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl flex-col justify-center">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-label text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
              {siteConfig.labels.reviews}
            </p>
            <h2 className="font-display text-5xl uppercase leading-none sm:text-7xl">
              {siteConfig.reviews.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-bold leading-8 lg:pb-2">
            {siteConfig.reviews.text}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {siteConfig.reviews.items.map((review) => (
            <article
              key={review.name}
              className="lift-card flex min-h-80 flex-col justify-between border border-[var(--line)] p-6"
            >
              <div>
                <Quote className="quote-mark text-terracotta" size={30} />
                <div className="mt-6 flex gap-1 text-terracotta">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-7 text-xl font-bold leading-8">
                  {review.text}
                </p>
              </div>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.12em] text-terracotta">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
