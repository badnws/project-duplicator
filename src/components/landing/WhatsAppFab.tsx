import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_top"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.16_150)] text-white shadow-elegant ring-4 ring-[oklch(0.65_0.16_150)]/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}