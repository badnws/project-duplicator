import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contato" className="bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Fale comigo</p>
        <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-foreground sm:text-4xl">
          Vamos conversar sobre o seu caso
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Envie um resumo pelo WhatsApp e receba uma avaliação preliminar. O
          retorno costuma sair no mesmo dia útil.
        </p>

        <a
          href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_top"
          className="mt-8 inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <MessageCircle className="h-5 w-5" />
          Entrar em contato no WhatsApp
        </a>
      </div>
    </section>
  );
}