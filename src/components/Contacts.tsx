import Link from "next/link";
import type { ReactNode } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="min-h-screen bg-cream px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">
            {siteConfig.labels.contacts}
          </p>
          <h2 className="font-display mt-4 text-5xl uppercase leading-none sm:text-7xl">
            {siteConfig.contacts.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg font-bold leading-8">
            {siteConfig.contacts.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={siteConfig.contacts.routeHref}>
                {siteConfig.contacts.routeLabel}
              </Link>
            </Button>
            <Button asChild>
              <Link href={siteConfig.business.phoneHref}>{siteConfig.labels.call}</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden border border-[var(--line)]">
            <iframe
              title={siteConfig.contacts.mapTitle}
              src={siteConfig.contacts.mapSrc}
              className="h-[360px] w-full border-0 sm:h-[460px]"
              loading="lazy"
            />
          </div>

          <div className="border border-[var(--line)] p-6">
            <ContactItem icon={<MapPin size={22} />} title={siteConfig.labels.address}>
              {siteConfig.business.address}
            </ContactItem>
            <ContactItem icon={<Phone size={22} />} title={siteConfig.labels.phone}>
              <Link href={siteConfig.business.phoneHref}>
                {siteConfig.business.phone}
              </Link>
            </ContactItem>
            <ContactItem icon={<Clock size={22} />} title={siteConfig.labels.hours}>
              {siteConfig.business.hours}
            </ContactItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-[var(--line)] py-5 first:pt-0 last:border-b-0 last:pb-0">
      <span className="mt-1 text-terracotta">{icon}</span>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">
          {title}
        </p>
        <div className="mt-2 text-lg font-bold">{children}</div>
      </div>
    </div>
  );
}
