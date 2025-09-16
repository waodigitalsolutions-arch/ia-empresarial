import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users, Clock } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Director General",
      company: "TechCorp Colombia",
      industry: "Tecnología",
      content: "En 6 meses implementamos IA en ventas y marketing. Aumentamos conversiones 40% y redujimos tiempo de respuesta al cliente en 60%. La consultoría fue fundamental para nuestro éxito.",
      rating: 5,
      metric: "40% más conversiones",
      avatar: "CM"
    },
    {
      name: "Ana Patricia Ruiz",
      role: "Gerente de Operaciones", 
      company: "LogiService S.A.S",
      industry: "Logística",
      content: "Automatizamos procesos operativos críticos sin perder el control. El equipo ahora es 3x más productivo y tenemos visibilidad total de nuestros indicadores. Excelente acompañamiento.",
      rating: 5,
      metric: "3x productividad",
      avatar: "AR"
    },
    {
      name: "Miguel Torres",
      role: "CEO",
      company: "InnovateBiz",
      industry: "Consultoría",
      content: "Las capacitaciones transformaron la mentalidad de todo nuestro equipo. Ahora todos usan IA estratégicamente en sus funciones. ROI del 300% en el primer trimestre.",
      rating: 5,
      metric: "300% ROI",
      avatar: "MT"
    }
  ];

  const stats = [
    { icon: <TrendingUp />, value: "250%", label: "ROI promedio" },
    { icon: <Users />, value: "98%", label: "Satisfacción cliente" },
    { icon: <Clock />, value: "30 días", label: "Primeros resultados" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Casos de Éxito Reales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresas que ya están{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              liderando con IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo estas empresas colombianas transformaron sus resultados 
            con nuestra metodología de implementación de IA.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-success/10 rounded-lg text-success">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Metric Highlight */}
                <div className="bg-success/10 rounded-lg p-3 mb-4 text-center">
                  <div className="text-lg font-bold text-success">{testimonial.metric}</div>
                  <div className="text-xs text-muted-foreground">Resultado clave</div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company} • {testimonial.industry}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Coverage */}
        <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Experiencia comprobada en múltiples industrias
          </h3>
          <p className="text-muted-foreground mb-6">
            Hemos implementado IA exitosamente en empresas de diferentes sectores
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Tecnología", "Logística", "Retail", "Manufactura", 
              "Servicios Financieros", "Salud", "Educación", "Consultoría"
            ].map((industry, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;