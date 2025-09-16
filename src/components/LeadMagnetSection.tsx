import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, AlertTriangle, TrendingDown } from "lucide-react";

const LeadMagnetSection = () => {
  const mistakes = [
    "Usar ChatGPT para datos confidenciales sin políticas claras",
    "Implementar IA sin capacitar adecuadamente al equipo",
    "No establecer métricas para medir el ROI de la IA",
    "Automatizar procesos sin optimizarlos primero",
    "Ignorar los riesgos de privacidad y compliance",
    "Adoptar herramientas IA sin estrategia empresarial",
    "No involucrar a directivos en la transformación digital",
    "Usar IA para tareas que no agregan valor real",
    "No documentar procesos automatizados",
    "Implementar IA sin considerar el factor humano"
  ];

  return (
    <section id="recursos" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="destructive" className="inline-flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Recurso Gratuito Exclusivo
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-destructive">10 Errores Críticos</span> que 
                cometen las empresas al usar IA en la oficina
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Evita los costosos errores que están cometiendo el 90% de las empresas 
                en su adopción de IA. Descarga esta guía gratuita y asegura 
                una implementación exitosa desde el primer día.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Lo que aprenderás:</h3>
              <div className="grid gap-3">
                {[
                  "Los 10 errores más costosos y cómo evitarlos",
                  "Framework de implementación segura paso a paso", 
                  "Checklist de compliance y privacidad de datos",
                  "Métricas clave para medir el ROI de tu IA",
                  "Casos reales de empresas latinoamericanas"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button variant="cta" size="xl" className="w-full md:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Descargar Guía Gratuita (PDF)
              </Button>
              <p className="text-sm text-muted-foreground">
                ✓ Sin spam ✓ Descarga inmediata ✓ 100% gratuito
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <TrendingDown className="h-8 w-8 text-destructive" />
              <div>
                <p className="font-semibold text-foreground">Empresas que no siguen estas prácticas</p>
                <p className="text-sm text-muted-foreground">pierden hasta $50.000 USD en el primer año</p>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="lg:order-first">
            <Card className="shadow-glow border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-10 w-10 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Vista previa del contenido</h3>
                  <Badge variant="outline">Guía de 32 páginas</Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-destructive">Los 10 errores más comunes:</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {mistakes.slice(0, 5).map((mistake, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-destructive font-bold">{index + 1}.</span>
                        <span className="text-muted-foreground">{mistake}</span>
                      </div>
                    ))}
                    <div className="text-center py-2">
                      <span className="text-muted-foreground text-xs">+ 5 errores más en la guía completa</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Valorado en <span className="line-through">$39 USD</span>
                  </p>
                  <div className="text-2xl font-bold text-success mb-2">GRATIS</div>
                  <p className="text-xs text-muted-foreground">
                    Por tiempo limitado
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;