"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string>(siteConfig.booking.error);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(siteConfig.booking.error);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.error || siteConfig.booking.error);
      }

      setForm({ name: "", phone: "", message: "" });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : siteConfig.booking.error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--line)] bg-cream p-5 text-ink sm:p-8"
    >
      <p className="section-label text-sm font-bold uppercase tracking-[0.16em] text-terracotta">
        {siteConfig.labels.request}
      </p>
      <h2 className="font-display mt-4 text-4xl uppercase leading-none sm:text-6xl">
        {siteConfig.booking.title}
      </h2>
      <p className="mt-5 max-w-xl text-base font-bold leading-7">
        {siteConfig.booking.text}
      </p>

      <div className="mt-8 grid gap-4">
        <input
          required
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          placeholder={siteConfig.booking.fields.name}
          className="h-12 border border-[var(--line)] bg-transparent px-4 text-ink outline-none transition placeholder:text-ink/45 focus:-translate-y-0.5 focus:border-terracotta"
        />
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(event) =>
            setForm((current) => ({ ...current, phone: event.target.value }))
          }
          placeholder={siteConfig.booking.fields.phone}
          className="h-12 border border-[var(--line)] bg-transparent px-4 text-ink outline-none transition placeholder:text-ink/45 focus:-translate-y-0.5 focus:border-terracotta"
        />
        <textarea
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          placeholder={siteConfig.booking.fields.message}
          rows={4}
          className="resize-none border border-[var(--line)] bg-transparent px-4 py-3 text-ink outline-none transition placeholder:text-ink/45 focus:-translate-y-0.5 focus:border-terracotta"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="dark"
          disabled={status === "loading"}
          className="w-full hover:-translate-y-1 sm:w-auto"
        >
          {status === "loading" ? siteConfig.labels.sending : siteConfig.booking.button}
          <Send size={17} />
        </Button>
        {status === "success" ? (
          <p className="text-sm font-bold text-terracotta">{siteConfig.booking.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-bold text-terracotta-dark">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
