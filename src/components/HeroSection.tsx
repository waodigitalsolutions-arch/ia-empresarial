import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
              Transforma tu empresa con{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>{" "}
              segura y productiva
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ayudo a directivos y equipos a adoptar IA de forma estratégica,
              eliminando riesgos y maximizando la rentabilidad de cada proceso
              automatizado.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Calendly CTA */}
            <Button asChild variant="hero" size="xl" className="group">
              <a
                href="https://calendly.com/wao-digital-solutions/diagnostico-ia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu Consultoría Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            {/* Guía descargable (Drive) */}
            <a
              href="https://drive.google.com/file/d/1rsI_9XBWwREtj6R_ZHnz3DxSs6Qp-faS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="xl"
                className="border-primary/20 hover:border-primary"
              >
                Descarga tu Guía Gratuita
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decoración opcional */}
      <div className="pointer-events-none absolute top-20 right-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
