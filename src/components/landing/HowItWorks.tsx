const steps = [
  { n: "01", title: "Você envia o caso", desc: "Pelo WhatsApp ou pelo formulário, com a imagem e contexto da demanda." },
  { n: "02", title: "Avaliação e orçamento", desc: "Análise preliminar de viabilidade, definição de escopo, prazo e honorários." },
  { n: "03", title: "Laudo entregue", desc: "Emissão do laudo técnico no prazo combinado, pronto para uso processual." },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Como funciona</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-foreground sm:text-4xl">
            Três passos do contato ao laudo
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-card p-7 shadow-card">
              <span className="font-display text-5xl font-800 text-blue/15">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-700 text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}