"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 border border-cream/20 bg-ink/88 text-cream backdrop-blur">
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center">
          <Button
            asChild
            variant="light"
            className="hidden h-16 border-y-0 border-l-0 sm:inline-flex"
          >
            <Link href="#booking">{siteConfig.labels.order}</Link>
          </Button>

          <Link
            href="#top"
            className="px-5 text-center font-display text-2xl uppercase tracking-[0.18em] sm:text-3xl"
          >
            {siteConfig.business.name}
          </Link>

          <div className="flex items-center gap-3 pr-3">
            <Link
              href={siteConfig.business.phoneHref}
              className="grid h-10 w-10 place-items-center border border-cream/25 sm:hidden"
              aria-label={siteConfig.labels.call}
            >
              <Phone size={18} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 items-center gap-2 border border-cream/25 px-3 text-sm font-bold uppercase tracking-[0.08em] transition hover:bg-cream hover:text-ink"
            >
              <Menu size={20} />
              <span className="hidden sm:inline">{siteConfig.labels.menu}</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/96 px-4 py-4 text-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto flex min-h-full max-w-7xl flex-col justify-between border border-cream/18 p-5 sm:p-8"
              initial={{ y: -24 }}
              animate={{ y: 0 }}
              exit={{ y: -24 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-3xl uppercase tracking-[0.18em]">
                  {siteConfig.business.name}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center gap-2 border border-cream/25 px-4 text-sm font-bold uppercase tracking-[0.08em] transition hover:bg-cream hover:text-ink"
                >
                  <X size={18} />
                  {siteConfig.labels.close}
                </button>
              </div>

              <nav className="my-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex min-h-28 items-end justify-between border border-cream/18 p-5 text-left transition hover:border-gold hover:bg-cream hover:text-ink"
                  >
                    <span className="font-display text-3xl uppercase leading-none sm:text-4xl">
                      {item.label}
                    </span>
                    <span className="text-2xl transition group-hover:translate-x-1">
                      /
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-cream/18 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm font-bold uppercase tracking-[0.12em] text-cream/70">
                  {siteConfig.business.tagline}
                </p>
                <Link
                  href={siteConfig.business.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 bg-cream px-6 text-sm font-bold uppercase tracking-[0.08em] text-ink"
                >
                  <Phone size={18} />
                  {siteConfig.labels.call}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!open ? (
        <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 sm:hidden">
          <Link
            href="#booking"
            className="flex h-12 items-center justify-center bg-terracotta px-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-cream shadow-lg"
          >
            {siteConfig.labels.bookTable}
          </Link>
          <Link
            href="#booking"
            className="flex h-12 items-center justify-center bg-ink px-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-cream shadow-lg"
          >
            {siteConfig.labels.delivery}
          </Link>
        </div>
      ) : null}
    </>
  );
}
