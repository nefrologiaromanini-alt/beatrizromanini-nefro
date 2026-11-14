import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { professional } from "@/lib/professional";

const AppointmentButton = ({ className = "" }: { className?: string }) => (
  <Button asChild size="lg" className={`bg-accent text-accent-foreground hover:bg-accent/90 ${className}`}>
    <a href={professional.appointmentUrl} target="_blank" rel="noopener noreferrer">
      <CalendarCheck aria-hidden="true" />
      Agendar consulta
    </a>
  </Button>
);

export default AppointmentButton;