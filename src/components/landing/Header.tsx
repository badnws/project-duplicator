import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/contact";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <img src={logo} alt="Perícia IA" className="h-10 w-10" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-700 text-foreground sm:text-lg">
              Matheus Barbosa
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Perito judicial · Imagens de IA
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a href="#servicos" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline">Serviços</a>
          <a href="#sobre" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline">Sobre</a>
          <a href="#contato" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline">Contato</a>
          <Button asChild size="sm" className="ml-2 gap-2">
            <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_top">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}