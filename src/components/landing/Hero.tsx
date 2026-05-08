import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/contact";
import { MessageCircle, ScanSearch } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 scan-grid opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 mx-auto h-[420px] w-[820px] rounded-full bg-[color-mix(in_oklab,var(--brand-blue)_45%,transparent)] blur-[120px]" aria-hidden />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-12 text-center sm:px-8 sm:pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur"
        >
          <ScanSearch className="h-3.5 w-3.5" />
          Perícia técnica · Validade processual
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="mt-6 text-balance font-display text-4xl font-700 leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Perícia Forense de Imagens{" "}
          <span className="bg-gradient-to-r from-white to-[color-mix(in_oklab,var(--brand-blue)_70%,white)] bg-clip-text text-transparent">
            Geradas ou Manipuladas por IA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Análises técnicas e laudos periciais para advogados, bancos, financeiras,
          associações de proteção veicular e campanhas políticas. Detecção de deepfakes,
          montagens e imagens sintéticas com metodologia rastreável e cadeia de custódia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-7 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_top"
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <MessageCircle className="h-5 w-5" />
            Entrar em contato no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-white/70"
        >
          <span className="font-semibold text-white">Matheus Barbosa</span>
          <span className="h-4 w-px bg-white/20" />
          <span>Perito judicial e assistente técnico em imagens de IA</span>
        </motion.div>
      </div>
    </section>
  );
}