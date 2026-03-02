import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

const categories = ["Todos", "Nefrologia", "Prevenção", "Qualidade de Vida"];

const articles = [
  {
    id: 1,
    title: "Doença renal crônica: sinais que você não deve ignorar",
    excerpt: "Conheça os principais sinais de alerta e saiba quando procurar um nefrologista.",
    category: "Nefrologia",
    date: "2025-02-15",
  },
  {
    id: 2,
    title: "Hidratação e saúde renal: o que realmente importa",
    excerpt: "Nem sempre beber mais água é a resposta. Entenda a relação entre hidratação e rins.",
    category: "Prevenção",
    date: "2025-01-20",
  },
  {
    id: 3,
    title: "Cálculos renais: prevenção baseada em evidência",
    excerpt: "Estratégias comprovadas para reduzir o risco de formação de pedras nos rins.",
    category: "Nefrologia",
    date: "2025-01-05",
  },
  {
    id: 4,
    title: "Cuidando dos rins na terceira idade",
    excerpt: "O envelhecimento renal e como manter a função dos rins ao longo dos anos.",
    category: "Qualidade de Vida",
    date: "2024-12-10",
  },
];

const Conteudos = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? articles : articles.filter((a) => a.category === active);

  return (
    <main className="pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Conteúdos"
            subtitle="Artigos educativos sobre saúde renal, prevenção e bem-estar."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-colors ${
                  active === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground border border-border hover:border-accent/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all cursor-pointer"
              >
                <span className="text-accent text-xs font-sans font-semibold uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-primary text-lg font-serif font-semibold mt-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <p className="text-muted-foreground/60 text-xs">
                  {new Date(article.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Conteudos;
