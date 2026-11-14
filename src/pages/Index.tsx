import { Link } from "react-router-dom";
import {
  Activity,
  Brain,
  Droplets,
  FlaskConical,
  Heart,
  MapPin,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import fotoHero from "@/assets/foto-hero.jpeg";
import SectionTitle from "@/components/SectionTitle";
import AppointmentButton from "@/components/AppointmentButton";
import ClinicLocation from "@/components/ClinicLocation";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { professional } from "@/lib/professional";

const areas = [
  { icon: Heart, title: "Doença Renal Crônica", desc: "Tratamento e acompanhamento da doença renal crônica para preservar a função renal.", path: "/areas#drc" },
  { icon: Microscope, title: "Nefrolitíase", desc: "Investigação e prevenção de cálculos renais.", path: "/areas#nefrolitiase" },
  { icon: ShieldCheck, title: "Infecção Urinária de Repetição", desc: "Abordagem completa para infecções recorrentes.", path: "/areas#itu" },
  { icon: Brain, title: "Medicina Preventiva", desc: "Cuidado integral focado na prevenção.", path: "/areas#preventiva" },
  { icon: Activity, title: "Hipertensão Arterial", desc: "Investigação de hipertensão arterial e do risco cardiovascular associado.", path: "/areas#hipertensao" },
  { icon: Droplets, title: "Creatinina Elevada", desc: "Avaliação de creatinina elevada para identificar causa e gravidade.", path: "/areas#creatinina-elevada" },
  { icon: FlaskConical, title: "Proteinúria e Hematúria", desc: "Investigação de albuminúria, proteinúria e sangue na urina.", path: "/areas#proteinuria-hematuria" },
];

const timeline = [
  { year: "2014–2019", text: "Médica pela Faculdade de Medicina de Jundiaí" },
  { year: "2021–2023", text: "Residência em Clínica Médica – Irmandade Santa Casa de Misericórdia de São Paulo" },
  { year: "2023–2025", text: "Residência em Nefrologia – Hospital Israelita Albert Einstein" },
  { year: "2025", text: "Título de Especialista – Sociedade Brasileira de Nefrologia" },
  { year: "2026–", text: "Mestrado em andamento – Hospital Israelita Albert Einstein" },
];

const diferenciais = [
  { icon: Heart, title: "Olhar Humano", desc: "Cada paciente é único. Escuta ativa e empatia são pilares da minha prática." },
  { icon: ShieldCheck, title: "Medicina Baseada em Evidência", desc: "Decisões clínicas fundamentadas na melhor ciência disponível." },
  { icon: Brain, title: "Prevenção Inteligente", desc: "Foco em identificar riscos antes que se tornem doenças." },
];

const Index = () => {
  return (
    <main>
      <Seo path="/" />

      {/* Hero */}
      <section id="apresentacao" className="bg-editorial-background pt-20">
        <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14 lg:py-16">
          <div className="grid md:grid-cols-[minmax(0,1fr)_auto] items-center gap-8 md:gap-12 lg:gap-20">
            <div className="max-w-xl animate-fade-in">
              <p className="text-editorial-text font-sans text-xs font-medium mb-5">
                Clínica Médica e Nefrologia
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-editorial-blue leading-tight mb-5">
                Dra. Beatriz Romanini — Nefrologista em Rio Verde
              </h1>
              <div className="text-xs text-editorial-text leading-relaxed mb-5">
                <p className="font-semibold">{professional.crm}</p>
                <p>Clínica Médica — RQE {professional.specialties[0].rqe}</p>
                <p>Nefrologia — RQE {professional.specialties[1].rqe}</p>
              </div>
              <p className="text-editorial-text text-base leading-relaxed mb-7 max-w-md">
                Medicina baseada em evidência com olhar humano e preventivo. Consulta com
                nefrologista em Rio Verde para doença renal crônica, hipertensão arterial,
                cálculos renais e prevenção de doenças.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <AppointmentButton compact />
                <Button asChild variant="outline" size="lg" className="h-11 px-4 rounded-lg text-xs border-border bg-transparent text-editorial-blue hover:bg-card">
                  <a href="#onde-atender"><MapPin className="text-editorial-lilac" aria-hidden="true" />Localização</a>
                </Button>
              </div>
              <p className="mt-5 text-xs text-editorial-text">{professional.clinic} · {professional.city} – {professional.state}</p>
            </div>
            <div className="justify-self-center animate-fade-in">
              <div>
                <img
                  src={fotoHero}
                  alt="Dra. Beatriz Romanini Fernandes, nefrologista em Rio Verde – GO, em atendimento na Center Clínica"
                  className="w-52 md:w-60 lg:w-64 rounded-lg object-cover object-top aspect-[3/4]"
                  width={640}
                  height={960}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClinicLocation />

      {/* Áreas de Atuação */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Áreas de Atuação"
            subtitle="Atendimento com especialista em rins em Rio Verde — da prevenção ao acompanhamento das doenças renais."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link
                key={area.title}
                to={area.path}
                className="group bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-accent/40 transition-all"
              >
                <area.icon size={28} className="text-purple-deep mb-4" />
                <h3 className="text-primary text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/areas" className="text-accent text-sm font-medium hover:underline">
              Ver todas as áreas →
            </Link>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle title="Formação" subtitle="Trajetória acadêmica e profissional." />
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start opacity-0 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-accent/30 mt-1" />}
                </div>
                <div className="pb-6">
                  <p className="text-accent font-sans font-semibold text-sm mb-1">{item.year}</p>
                  <p className="text-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle title="Diferenciais" subtitle="O que define minha prática médica." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((d) => (
              <div key={d.title} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <d.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-primary text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Conteúdos */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-primary mb-4">
            Conteúdos Educativos
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Artigos sobre saúde renal, prevenção e qualidade de vida.
          </p>
          <Link
            to="/conteudos"
            className="inline-flex items-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-sans font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Acessar conteúdos
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
