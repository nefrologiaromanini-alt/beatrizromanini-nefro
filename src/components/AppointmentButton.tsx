import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professional } from "@/lib/professional";

const AppointmentButton = ({ className = "", compact = false, label = "Agendar consulta" }: { className?: string; compact?: boolean; label?: string }) => (
  <Button asChild size="lg" className={`${compact ? "h-11 px-4 rounded-lg text-xs bg-editorial-blue text-primary-foreground hover:bg-editorial-blue/90" : "h-auto min-h-14 px-5 py-3 whitespace-normal bg-accent text-accent-foreground hover:bg-accent/90"} ${className}`}>
    <a href={professional.appointmentUrl} target="_blank" rel="noopener noreferrer">
      <MessageCircle aria-hidden="true" />
      <span className="flex flex-col items-center leading-snug">
        <span>{label}</span>
        {!compact && <span className="text-xs">WhatsApp: {professional.whatsapp}</span>}
      </span>
    </a>
  </Button>
);

export default AppointmentButton;