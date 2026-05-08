import { ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
            <img src={logo} alt="Logotipo Perícia IA" className="h-7 w-7" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-700">Matheus Barbosa</p>
            <p className="text-xs text-white/70">Perito judicial e assistente técnico em imagens de IA</p>
          </div>
        </div>

        <div className="text-sm text-white/70">
          <ShieldCheck className="mr-2 inline h-4 w-4 align-text-bottom" />
          <span>© {year} Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}