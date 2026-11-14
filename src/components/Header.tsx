import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professional } from "@/lib/professional";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Áreas de Atuação", path: "/areas" },
  { label: "Conteúdos", path: "/conteudos" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 gap-4 px-4 lg:px-8">
        <Link to="/" className="font-serif text-base sm:text-lg font-semibold text-primary leading-snug max-w-[17rem] sm:max-w-none">
          {professional.name}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-sans font-medium transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden shrink-0 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-navigation" aria-label="Navegação móvel" className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path ? "text-accent" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
