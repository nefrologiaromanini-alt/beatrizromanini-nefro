import { Instagram, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import fotoContato from "@/assets/foto-contato.jpeg";
import AppointmentButton from "@/components/AppointmentButton";
import ClinicLocation from "@/components/ClinicLocation";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { professional } from "@/lib/professional";

const Contato = () => {
  return (
    <main className="pt-24">
      <Seo path="/contato" />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle as="h1" title="Contato" subtitle="Entre em contato para agendar sua consulta." />
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="hidden md:block shrink-0">
              <img
                src={fotoContato}
                alt="Dra. Beatriz Romanini Fernandes em atendimento no consultório em Rio Verde – GO"
                className="w-52 rounded-2xl shadow-md object-cover aspect-[3/4] sticky top-28"
                width={640}
                height={960}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex-1 max-w-xl">

          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Agendamento de consultas</h2>
            <p className="text-foreground">{professional.clinic} · Rio Verde – GO</p>
            <AppointmentButton className="w-full" />
            <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary"><a href={professional.phoneHref}><Phone aria-hidden="true" />{professional.phone}</a></Button>
            <a href={professional.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm hover:underline"><Instagram size={18} aria-hidden="true" />{professional.instagram}</a>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground/70">
            Este canal não deve ser utilizado para urgências médicas.<br />
            Em caso de emergência, procure atendimento imediato.
          </p>
            </div>
          </div>
        </div>
      </section>
      <ClinicLocation />
    </main>
  );
};

export default Contato;
