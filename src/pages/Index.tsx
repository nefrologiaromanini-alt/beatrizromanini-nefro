import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Brain, Microscope, MessageCircle, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import SectionTitle from "@/components/SectionTitle";

const areas = [
  { icon: Heart, title: "Doença Renal Crônica", desc: "Acompanhamento especializado para preservação da função renal.", path: "/areas#drc" },
  { icon: Microscope, title: "Nefrolitíase", desc: "Investigação e prevenção de cálculos renais.", path: "/areas#nefrolitiase" },
  { icon: ShieldCheck, title: "Infecção Urinária de Repetição", desc: "Abordagem completa para infecções recorrentes.", path: "/areas#itu" },
  { icon: Brain, title: "Medicina Preventiva", desc: "Cuidado integral focado na prevenção.", path: "/areas#preventiva" },
];

const timeline = [
  { year: "2014–2019", text: "Médica pela Faculdade de Medicina de Jundiaí" },
  { year: "2021–2023", text: "Residência em Clínica Médica – Irmandade Santa Casa de Misericórdia de São Paulo" },
  { year: "2023–2025", text: "Residência em Nefrologia – Hospital Israelita Albert Einstein" },
  { year: "2025", text: "Título de Especialista – Sociedade Brasileira de Nefrologia" },
];

const diferenciais = [
  { icon: Heart, title: "Olhar Humano", desc: "Cada paciente é único. Escuta ativa e empatia são pilares da minha prática." },
  { icon: ShieldCheck, title: "Medicina Baseada em Evidência", desc: "Decisões clínicas fundamentadas na melhor ciência disponível." },
  { icon: Brain, title: "Prevenção Inteligente", desc: "Foco em identificar riscos antes que se tornem doenças." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="relative z-10 container mx-auto px-4 py-32 lg:py-40">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-accent font-sans text-sm font-semibold uppercase tracking-widest mb-4">
              Nefrologia · Clínica Médica
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6">
              Beatriz Romanini
            </h1>
            <p className="text-foreground/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Medicina baseada em evidência com olhar humano e preventivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-sans font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <CalendarCheck size={18} />
                Agendar consulta
              </Link>
              <a
                href="https://wa.me/55119700842045"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md border border-primary text-primary font-sans font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle title="Áreas de Atuação" subtitle="Cuidado especializado em nefrologia e saúde integral." />
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
