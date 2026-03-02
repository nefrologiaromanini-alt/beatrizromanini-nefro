import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-primary-foreground text-lg font-semibold mb-3">Dra. Beatriz Romanini</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Nefrologia e Clínica Médica<br />
            CRM-SP 207270 · RQE 139795 · RQE 125772
          </p>
          <div className="mt-3">
            <a
              href="https://instagram.com/beatrizromanini.nefro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
            >
              @beatrizromanini.nefro
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
          <h4 className="text-primary-foreground text-sm font-semibold mb-3 font-sans uppercase tracking-wider">Aviso Legal</h4>
          <p className="text-primary-foreground/60 text-xs leading-relaxed">
            As informações deste site são educativas e não substituem consulta médica.
            Em caso de urgência, procure atendimento imediato.
          </p>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} Dra. Beatriz Romanini. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
