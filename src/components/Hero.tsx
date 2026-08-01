import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink text-cream">
      <Image
        src={siteConfig.hero.image}
        alt=""
        fill
        priority
        className="hero-photo object-cover opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="hero-copy max-w-4xl">
          <p className="section-label text-sm font-bold uppercase tracking-[0.16em] text-gold">
            {siteConfig.hero.label}
          </p>
          <h1 className="font-display mt-6 text-5xl uppercase leading-none sm:text-7xl lg:text-8xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/85">
            {siteConfig.hero.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="light">
              <Link href="#booking">
                {siteConfig.hero.cta}
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="light" className="sm:hidden">
              <Link href={siteConfig.business.phoneHref}>
                <Phone size={18} />
                {siteConfig.labels.call}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
