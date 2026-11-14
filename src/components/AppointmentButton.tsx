import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professional } from "@/lib/professional";

const AppointmentButton = ({ className = "" }: { className?: string }) => (
  <Button asChild size="lg" className={`h-auto min-h-14 px-5 py-3 whitespace-normal bg-accent text-accent-foreground hover:bg-accent/90 ${className}`}>
    <a href={professional.appointmentUrl} target="_blank" rel="noopener noreferrer">
      <MessageCircle aria-hidden="true" />
      <span className="flex flex-col items-center leading-snug">
        <span>Agendar consulta</span>
        <span className="text-xs">WhatsApp: {professional.whatsapp}</span>
      </span>
    </a>
  </Button>
);

export default AppointmentButton;