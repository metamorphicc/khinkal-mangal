import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

type BookingRequest = {
  name?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data = (await request.json().catch(() => null)) as BookingRequest | null;
  const name = clean(data?.name);
  const phone = clean(data?.phone);
  const message = clean(data?.message);

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Укажите имя и телефон" },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local" },
      { status: 500 },
    );
  }

  const text = [
    `<b>Новая заявка: ${escapeHtml(siteConfig.business.name)}</b>`,
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    message ? `<b>Комментарий:</b> ${escapeHtml(message)}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Telegram не принял заявку" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function clean(value?: string) {
  return value?.trim().slice(0, 800) || "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
