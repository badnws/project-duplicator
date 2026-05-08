import { FileSearch, Fingerprint, FileBadge2, Gavel } from "lucide-react";

const items = [
  { icon: FileSearch, title: "Análise de autenticidade", desc: "Verificação técnica de origem, metadados, consistência física e indícios de adulteração." },
  { icon: Fingerprint, title: "Detecção de IA e deepfake", desc: "Identificação de imagens sintéticas, montagens e troca de rostos com ferramentas forenses atualizadas." },
  { icon: FileBadge2, title: "Laudo pericial completo", desc: "Documento técnico fundamentado, com metodologia descrita e validade para uso processual." },
  { icon: Gavel, title: "Assistência técnica", desc: "Pareceres, quesitos e atuação como assistente técnico em processos judiciais e administrativos." },
];

export function Deliverables() {
  return (
    <section className="bg-background py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">O que é entregue</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-foreground sm:text-4xl">
            Provas técnicas que sustentam decisões
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-7 transition-colors hover:bg-muted/40">
              <Icon className="h-6 w-6 text-blue" />
              <h3 className="mt-4 font-display text-lg font-700 text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}