import { Scale, Landmark, ShieldCheck, Vote, Building2, Car } from "lucide-react";

const items = [
  { icon: Scale, title: "Advogados e processos judiciais", desc: "Assistência técnica e laudos periciais para sustentar ou impugnar provas envolvendo imagens." },
  { icon: Landmark, title: "Bancos e financeiras", desc: "Detecção de fraudes em selfies de onboarding, documentos, comprovantes e prova de vida." },
  { icon: ShieldCheck, title: "Seguradoras", desc: "Análise de sinistros suspeitos, vistorias, fotos de danos e documentos visuais manipulados." },
  { icon: Vote, title: "Partidos políticos e candidatos", desc: "Identificação de deepfakes, montagens e manipulações usadas em ataques de campanha." },
  { icon: Building2, title: "Empresas e compliance", desc: "Investigação interna de imagens, comunicações e provas digitais com rigor metodológico." },
  { icon: Car, title: "Proteção veicular", desc: "Verificação técnica de imagens de colisões, avarias e vistorias para associações de proteção veicular." },
];

export function Audience() {
  return (
    <section id="servicos" className="relative bg-mist py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Para quem atendo</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-foreground sm:text-4xl">
            Áreas em que a perícia técnica faz a diferença
          </h2>
          <p className="mt-4 text-muted-foreground">
            Casos em que uma imagem mal interpretada — ou maliciosamente fabricada —
            pode definir um processo, um contrato ou uma eleição.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-elegant">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/5 text-primary ring-1 ring-primary/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-700 text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}