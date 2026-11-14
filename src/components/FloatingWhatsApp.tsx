import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { professional } from "@/lib/professional";

const FloatingWhatsApp = () => (
  <div className="floating-whatsapp fixed right-4 z-40">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild size="icon" className="h-14 w-14 rounded-full shadow-lg">
          <a href={professional.appointmentUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp" title="Agendar consulta pelo WhatsApp"><MessageCircle className="!h-6 !w-6" aria-hidden="true" /></a>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">Agendar consulta pelo WhatsApp</TooltipContent>
    </Tooltip>
  </div>
);

export default FloatingWhatsApp;