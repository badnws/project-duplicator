import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "O laudo tem validade em juízo?", a: "Sim. O laudo é elaborado com metodologia técnica documentada, descrição das ferramentas utilizadas e cadeia de custódia, podendo ser apresentado como prova em processos judiciais e administrativos." },
  { q: "Atende casos eleitorais com urgência?", a: "Sim. Casos envolvendo deepfakes e ataques em campanhas costumam exigir resposta rápida, e há disponibilidade para atendimento em regime de urgência mediante combinação prévia." },
  { q: "Quais formatos de imagem são aceitos?", a: "Os principais formatos (JPG, PNG, WEBP, HEIC, TIFF), além de prints, vídeos curtos e capturas de tela. Sempre que possível, envie o arquivo original — ele preserva metadados importantes para a análise." },
  { q: "Qual o prazo médio de entrega?", a: "Casos simples costumam ser entregues entre 3 e 7 dias úteis. Casos complexos ou com grande volume de material são dimensionados na proposta inicial." },
  { q: "Atende fora do Paraná?", a: "Sim. O trabalho é totalmente remoto e atende clientes em todo o Brasil, atuando como perito judicial e assistente técnico em diferentes jurisdições." },
  { q: "Como é tratado o sigilo do material?", a: "Todo material recebido é tratado sob sigilo profissional, armazenado em ambiente controlado e descartado conforme acordado ao final do trabalho." },
];

export function Faq() {
  return (
    <section className="bg-mist py-8 sm:py-10">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue">Perguntas frequentes</p>
          <h2 className="mt-3 font-display text-3xl font-700 tracking-tight text-foreground sm:text-4xl">Dúvidas comuns</h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-600 text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}