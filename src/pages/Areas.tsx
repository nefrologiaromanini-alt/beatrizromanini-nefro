import SectionTitle from "@/components/SectionTitle";

const areas = [
  {
    id: "drc",
    title: "Doença Renal Crônica",
    what: "A doença renal crônica é a perda progressiva da função dos rins ao longo do tempo, muitas vezes silenciosa nas fases iniciais.",
    when: "Alterações em exames de sangue (creatinina, ureia) ou urina, inchaço persistente, hipertensão de difícil controle, histórico familiar.",
    how: "Investigação completa, estadiamento da doença, controle de fatores de risco e acompanhamento individualizado para retardar a progressão.",
  },
  {
    id: "nefrolitiase",
    title: "Nefrolitíase",
    what: "Formação de cálculos (pedras) nos rins ou vias urinárias, que podem causar dor intensa e complicações.",
    when: "Cólica renal, sangue na urina, cálculos recorrentes, histórico familiar de litíase.",
    how: "Investigação metabólica completa, orientação dietética específica e estratégias de prevenção para evitar novos episódios.",
  },
  {
    id: "itu",
    title: "Infecção Urinária de Repetição",
    what: "Infecções urinárias recorrentes que impactam significativamente a qualidade de vida.",
    when: "Três ou mais episódios em um ano, infecções que não respondem ao tratamento habitual.",
    how: "Avaliação de fatores predisponentes, investigação estrutural quando necessário e plano de prevenção personalizado.",
  },
  {
    id: "preventiva",
    title: "Medicina Preventiva",
    what: "Abordagem focada em identificar riscos e promover saúde antes do surgimento de doenças.",
    when: "Check-ups, fatores de risco cardiovascular, histórico familiar relevante, busca por qualidade de vida.",
    how: "Avaliação clínica completa, rastreamento baseado em evidência e orientações práticas de saúde.",
  },
  {
    id: "hipertensao",
    title: "Hipertensão Arterial",
    what: "Pressão arterial elevada de forma sustentada, um dos principais fatores de risco para doenças renais e cardiovasculares.",
    when: "Diagnóstico recente, hipertensão resistente, necessidade de ajuste terapêutico.",
    how: "Investigação de causas secundárias, ajuste medicamentoso e orientação sobre estilo de vida.",
  },
  {
    id: "diabetes",
    title: "Diabetes e o Rim",
    what: "O diabetes é a principal causa de doença renal crônica no mundo, exigindo atenção renal precoce.",
    when: "Diagnóstico de diabetes, alterações em exames de função renal, proteinúria.",
    how: "Monitoramento renal, controle glicêmico integrado e estratégias de nefroproteção.",
  },
];

const Areas = () => (
  <main className="pt-24">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Áreas de Atuação"
          subtitle="Conheça as condições que acompanho com dedicação e embasamento científico."
        />
        <div className="space-y-16 max-w-3xl mx-auto">
          {areas.map((area) => (
            <article
              key={area.id}
              id={area.id}
              className="bg-card rounded-lg p-8 border border-border shadow-sm scroll-mt-24"
            >
              <h3 className="text-primary text-2xl font-serif font-semibold mb-6">{area.title}</h3>
              <div className="space-y-5">
                <div>
                  <h4 className="text-purple-deep font-sans font-semibold text-sm uppercase tracking-wider mb-1">O que é</h4>
                  <p className="text-foreground text-sm leading-relaxed">{area.what}</p>
                </div>
                <div>
                  <h4 className="text-purple-deep font-sans font-semibold text-sm uppercase tracking-wider mb-1">Quando procurar</h4>
                  <p className="text-foreground text-sm leading-relaxed">{area.when}</p>
                </div>
                <div>
                  <h4 className="text-purple-deep font-sans font-semibold text-sm uppercase tracking-wider mb-1">Como posso ajudar</h4>
                  <p className="text-foreground text-sm leading-relaxed">{area.how}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Areas;
