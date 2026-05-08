import { ShieldCheck, Lock, Microscope, FileCheck2 } from "lucide-react";
import matheusPhoto from "@/assets/matheus.jpg";

const credentials = [
  { icon: ShieldCheck, label: "Perito judicial" },
  { icon: FileCheck2, label: "Assistente técnico" },
  { icon: Microscope, label: "Metodologia forense rastreável" },
  { icon: Lock, label: "Sigilo e cadeia de custódia" },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-mist py-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-blue/30 to-primary/20 blur-2xl" aria-hidden />
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            <img src={matheusPhoto} alt="Matheus Barbosa" className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Sobre</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-foreground sm:text-4xl">Matheus Barbosa</h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            Perito judicial e assistente técnico em imagens de IA
          </p>

          <div className="mt-6 space-y-4 text-foreground/80">
            <p>
              Atuo na interseção entre Direito e tecnologia, especializado em perícia
              forense de imagens digitais — com foco em conteúdos gerados ou manipulados
              por inteligência artificial.
            </p>
            <p>
              Cada caso é tratado com metodologia técnica documentada, ferramentas
              especializadas e total sigilo, garantindo um laudo robusto o suficiente
              para sustentar decisões em processos judiciais, investigações internas
              e disputas eleitorais.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
                <Icon className="h-4 w-4 text-blue" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}