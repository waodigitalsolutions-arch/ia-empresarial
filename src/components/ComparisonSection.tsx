import { Card, CardContent } from "@/components/ui/card";
import { X, CheckCircle, AlertTriangle, Target, Clock, Shield } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      old: {
        icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
        title: "Uso improvisado de IA",
        points: [
          "Herramientas sin estrategia",
          "Datos corporativos en riesgo", 
          "Pérdida de tiempo y recursos",
          "Resultados inconsistentes"
        ]
      },
      new: {
        icon: <Target className="h-6 w-6 text-success" />,
        title: "IA estratégica y segura",
        points: [
          "Implementación planificada",
          "Políticas de privacidad claras",
          "ROI medible y sustancial", 
          "Procesos optimizados"
        ]
      }
    },
    {
      old: {
        icon: <Clock className="h-6 w-6 text-destructive" />,
        title: "Adopción lenta y costosa",
        points: [
          "Meses de prueba y error",
          "Capacitación desordenada",
          "Resistencia del equipo",
          "Inversión sin retorno"
        ]
      },
      new: {
        icon: <CheckCircle className="h-6 w-6 text-success" />,
        title: "Transformación acelerada", 
        points: [
          "Resultados en 30 días",
          "Entrenamiento estructurado",
          "Equipo comprometido",
          "ROI desde el primer mes"
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tu empresa sigue usando IA{" "}
            <span className="text-destructive">sin estrategia</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mientras tus competidores pierden tiempo y dinero con herramientas 
            mal implementadas, tú podrías estar liderando con IA estratégica.
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-destructive mb-2">Antes</h3>
            <p className="text-muted-foreground">Así trabajan la mayoría de empresas</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-success mb-2">Ahora</h3>
            <p className="text-muted-foreground">Así trabajas con nuestra metodología</p>
          </div>
        </div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              {/* Old Way - Left */}
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      {comparison.old.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {comparison.old.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {comparison.old.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* New Way - Right */}
              <Card className="border-success/20 bg-success/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-success/10 rounded-lg">
                      {comparison.new.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {comparison.new.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {comparison.new.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50 max-w-2xl mx-auto">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              No permitas que tu empresa se quede atrás
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada día que pasas sin una estrategia de IA clara es una oportunidad perdida 
              frente a tu competencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Agenda tu Diagnóstico Gratuito
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors">
                Descarga la Guía IA Empresarial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;