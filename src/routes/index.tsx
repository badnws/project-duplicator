import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Audience } from "@/components/landing/Audience";
import { Deliverables } from "@/components/landing/Deliverables";
import { About } from "@/components/landing/About";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Faq } from "@/components/landing/Faq";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Deliverables />
        <About />
        <HowItWorks />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
}
