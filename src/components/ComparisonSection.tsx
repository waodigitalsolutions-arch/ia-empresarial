import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const antes = [
    "Procesos manuales y fragmentados",
    "Decisiones basadas en intuición",
    "Riesgos de privacidad sin control",
    "Implementaciones sin medición",
  ];

  const ahora = [
    "Automatización y orquestación de procesos",
    "Decisiones guiadas por datos y IA",
    "Gobierno y privacidad con políticas claras",
    "KPIs y ROI medibles desde el primer mes",
  ];

  return (
    <section id="comparacion" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Evoluciona de <span className="bg-gradient-primary bg-clip-text text-transparent">“Antes”</span> a <span className="bg-gradient-primary bg-clip-text text-transparent">“Ahora”</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
            Pasos claros para migrar de prácticas reactivas a una operación
            moderna, segura y productiva con IA.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <X className="h-5 w-5 text-destructive" />
                Antes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {antes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="h-4 w-4 mt-1 text-destructive flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Ahora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {ahora.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
