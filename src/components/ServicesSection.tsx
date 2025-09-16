import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Search, 
  FileText, 
  Cog, 
  ArrowRight,
  Users,
  Shield,
  BookOpen,
  Zap
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Capacitaciones Empresariales",
      description: "Programas especializados para directivos, equipos y certificaciones oficiales en IA empresarial.",
      features: [
        "Workshops para directivos y gerentes",
        "Entrenamiento práctico para equipos",
        "Programas de certificación oficial",
        "Sesiones personalizadas por departamento"
      ],
      highlight: "Resultados desde la primera sesión",
      color: "border-primary/20 hover:border-primary bg-primary/5"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Auditorías de IA",
      description: "Diagnóstico completo de madurez digital, gestión de riesgos y análisis de privacidad de datos.",
      features: [
        "Evaluación de madurez digital",
        "Análisis de riesgos y vulnerabilidades", 
        "Auditoría de privacidad de datos",
        "Roadmap personalizado de implementación"
      ],
      highlight: "Diagnóstico en 48 horas",
      color: "border-accent/20 hover:border-accent bg-accent/5"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Políticas de Uso de IA",
      description: "Documentos oficiales y marcos regulatorios para el uso seguro y ético de IA en tu organización.",
      features: [
        "Políticas corporativas de IA",
        "Marcos de ética y compliance",
        "Protocolos de privacidad de datos",
        "Documentación legal especializada"
      ],
      highlight: "100% adaptado a normativa",
      color: "border-success/20 hover:border-success bg-success/5"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Implementación Práctica",
      description: "Automatización de procesos, desarrollo de copilots internos y optimización de marketing, ventas y operaciones.",
      features: [
        "Automatización de procesos clave",
        "Copilots y asistentes internos",
        "IA en marketing y ventas",
        "Optimización de operaciones"
      ],
      highlight: "ROI medible desde el primer mes",
      color: "border-orange-500/20 hover:border-orange-500 bg-orange-500/5"
    }
  ];

  const stats = [
    { icon: <Users />, value: "500+", label: "Profesionales capacitados" },
    { icon: <Shield />, value: "100%", label: "Implementación segura" },
    { icon: <BookOpen />, value: "50+", label: "Empresas auditadas" },
    { icon: <Zap />, value: "3x", label: "Aumento productividad promedio" }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios especializados para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              empresas líderes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde capacitación hasta implementación completa, te acompaño en cada etapa 
            de tu transformación digital con IA.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.color} transition-all duration-300 hover:shadow-card group cursor-pointer`}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-background rounded-lg shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                      {service.highlight}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para transformar tu empresa con IA?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Agenda una consultoría gratuita de 30 minutos y descubre exactamente 
              qué servicio necesita tu empresa para liderar su industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90"
              >
                Agenda tu Consultoría Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Ver casos de éxito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;