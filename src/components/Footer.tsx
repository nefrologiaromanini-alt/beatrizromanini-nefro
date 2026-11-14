import { Link } from "react-router-dom";
import { professional, fullAddress } from "@/lib/professional";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-primary-foreground text-lg font-semibold mb-3">{professional.name}</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Nefrologia e Clínica Médica<br />
            {professional.crm}<br />
            Clínica Médica — RQE {professional.specialties[0].rqe}<br />
            Nefrologia — RQE {professional.specialties[1].rqe}
          </p>
          <div className="mt-3">
            <a
              href={professional.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
            >
              {professional.instagram}
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-primary-foreground text-sm font-semibold mb-3 font-sans uppercase tracking-wider">Navegação</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Início", path: "/" },
              { label: "Sobre", path: "/sobre" },
              { label: "Áreas de Atuação", path: "/areas" },
              { label: "Conteúdos", path: "/conteudos" },
              { label: "Contato", path: "/contato" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-primary-foreground text-sm font-semibold mb-3 font-sans uppercase tracking-wider">{professional.clinic}</h4>
          <address className="not-italic text-primary-foreground/80 text-sm leading-relaxed mb-4">{fullAddress}</address>
          <div className="flex flex-col items-start gap-3 mb-6 text-sm text-primary-foreground/80">
            <a href={professional.phoneHref} className="hover:text-primary-foreground hover:underline">Telefone: {professional.phone}</a>
            <a href={professional.appointmentUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground hover:underline">WhatsApp: {professional.whatsapp}</a>
          </div>
          <h4 className="text-primary-foreground text-sm font-semibold mb-3 font-sans uppercase tracking-wider">Aviso Legal</h4>
          <p className="text-primary-foreground/60 text-xs leading-relaxed">
            As informações deste site são educativas e não substituem consulta médica.
            Em caso de urgência, procure atendimento imediato.
          </p>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} {professional.name}. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
