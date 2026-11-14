import { MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentButton from "@/components/AppointmentButton";
import SectionTitle from "@/components/SectionTitle";
import { directionsUrl, getMapEmbedUrl, professional } from "@/lib/professional";

const ClinicLocation = () => {
  const embedUrl = getMapEmbedUrl(import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]);
  return (
    <section id="onde-atender" className="bg-secondary/40 py-16 lg:py-20 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle title="Local de Atendimentos" subtitle="Nefrologia e Clínica Médica em Rio Verde – GO." />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{professional.clinic}</h3>
            <address className="not-italic flex gap-3 text-foreground leading-relaxed">
              <MapPin className="shrink-0 mt-1 text-accent" size={22} aria-hidden="true" />
              <div>{professional.street}<br />{professional.neighborhood}<br />{professional.city} – {professional.state}<br />CEP {professional.postalCode}</div>
            </address>
            <a href={professional.phoneHref} className="inline-flex items-center gap-3 text-primary hover:underline"><Phone size={18} aria-hidden="true" />{professional.phone}</a>
            <div className="flex flex-col sm:flex-row gap-3">
              <AppointmentButton />
              <Button asChild variant="outline" size="lg" className="border-primary text-primary">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation aria-hidden="true" />Como chegar</a>
              </Button>
            </div>
          </div>
          <div className="h-80 md:h-96 overflow-hidden rounded-lg border border-border bg-muted">
            {embedUrl ? <iframe src={embedUrl} title="Mapa da Center Clínica em Rio Verde – GO" className="h-full w-full border-0" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> :
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-center gap-2 text-primary"><MapPin aria-hidden="true" />Ver localização no Google Maps</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocation;