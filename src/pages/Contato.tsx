import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { toast } from "sonner";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", cidade: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
    setForm({ nome: "", email: "", cidade: "", mensagem: "" });
  };

  return (
    <main className="pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-xl">
          <SectionTitle title="Contato" subtitle="Entre em contato para agendar sua consulta." />

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Nome", name: "nome", type: "text" },
              { label: "E-mail", name: "email", type: "email" },
              { label: "Cidade", name: "cidade", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-1.5">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-sans font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Enviar mensagem
            </button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/55119700842045"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border border-primary text-primary font-sans font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground/70">
            Este canal não deve ser utilizado para urgências médicas.<br />
            Em caso de emergência, procure atendimento imediato.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contato;
