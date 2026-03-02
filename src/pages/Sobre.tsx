import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import { CalendarCheck } from "lucide-react";

const timeline = [
  { year: "2014–2019", text: "Graduação em Medicina – Faculdade de Medicina de Jundiaí" },
  { year: "2021–2023", text: "Residência em Clínica Médica – Irmandade Santa Casa de Misericórdia de São Paulo" },
  { year: "2023–2025", text: "Residência em Nefrologia – Hospital Israelita Albert Einstein" },
  { year: "2025", text: "Título de Especialista em Nefrologia – Sociedade Brasileira de Nefrologia" },
  { year: "2026–", text: "Mestrado em andamento – Hospital Israelita Albert Einstein" },
];

const Sobre = () => (
  <main className="pt-24">
    {/* Bio */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle title="Sobre Mim" />
        <p className="text-foreground leading-relaxed mb-6">
          Sou médica nefrologista com formação pelo Hospital Israelita Albert Einstein e título de
          especialista pela Sociedade Brasileira de Nefrologia. Minha prática combina rigor científico
          com um olhar acolhedor, focando em prevenção e tratamento personalizado das doenças renais
          e condições clínicas.
        </p>
        <p className="text-foreground leading-relaxed">
          Acredito que a medicina mais eficaz é aquela que coloca o paciente no centro, compreendendo
          seu contexto de vida para oferecer orientações claras e baseadas em evidência.
        </p>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl">
        <SectionTitle title="Trajetória" />
        <div className="space-y-8">
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

    {/* Como trabalho */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle title="Como Trabalho" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Escuta Ativa", desc: "Entender o paciente como um todo: histórico, hábitos, preocupações e expectativas." },
            { title: "Investigação Criteriosa", desc: "Exames direcionados e interpretação cuidadosa para diagnósticos precisos." },
            { title: "Plano Individualizado", desc: "Tratamentos personalizados, adaptados à realidade de cada paciente." },
            { title: "Acompanhamento Contínuo", desc: "Monitoramento regular com foco em resultados de longo prazo." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-primary font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-secondary text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Vamos cuidar da sua saúde juntos?</h2>
        <Link
          to="/contato"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-sans font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <CalendarCheck size={18} />
          Agendar consulta
        </Link>
      </div>
    </section>
  </main>
);

export default Sobre;
