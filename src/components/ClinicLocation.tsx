import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentButton from "@/components/AppointmentButton";
import { directionsUrl, getMapEmbedUrl, professional } from "@/lib/professional";

const ClinicLocation = () => {
  const embedUrl = getMapEmbedUrl(import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]);
  return (
    <section id="onde-atender" className="bg-card py-12 md:py-16 lg:py-20 scroll-mt-24 border-t border-border/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center lg:gap-20">
          <div>
            <p className="text-[11px] font-sans font-medium text-editorial-text mb-4">ONDE ATENDO</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-medium text-editorial-blue leading-snug max-w-sm mb-7">Um espaço dedicado ao seu cuidado.</h2>
            <h3 className="text-base font-sans font-semibold text-editorial-blue mb-3">{professional.clinic}</h3>
            <address className="not-italic font-sans text-sm text-editorial-text leading-relaxed">
              {professional.street.replace(", nº ", ", ")}<br />
              {professional.neighborhood}, {professional.city} – {professional.state}<br />
              CEP {professional.postalCode}
            </address>
            <a href={professional.phoneHref} className="inline-block mt-3 text-xs font-sans text-editorial-text hover:underline">Telefone: {professional.phone}</a>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <AppointmentButton compact label="Agendar pelo WhatsApp" />
              <Button asChild variant="outline" size="lg" className="h-11 px-4 rounded-lg text-xs border-border bg-transparent text-editorial-blue hover:bg-editorial-background">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="text-editorial-lilac" aria-hidden="true" />Como chegar</a>
              </Button>
            </div>
          </div>
          <div className="h-72 md:h-80 lg:h-[340px] overflow-hidden rounded-lg bg-editorial-background">
            {embedUrl ? <iframe src={embedUrl} title="Mapa da Center Clínica em Rio Verde – GO" className="h-full w-full border-0" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> :
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-center gap-2 text-primary"><MapPin aria-hidden="true" />Ver localização no Google Maps</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocation;