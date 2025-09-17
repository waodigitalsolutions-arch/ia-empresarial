import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Linkedin, 
  Clock,
  CheckCircle,
  Calendar,
  Zap
} from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp Business",
      description: "Respuesta inmediata en horario laboral",
      action: "Enviar mensaje",
      highlight: "Más rápido",
      color: "border-success/20 bg-success/5",
      link: "https://wa.me/573213212121"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Conecta y agenda tu consultoría",
      action: "Conectar",
      highlight: "Profesional",
      color: "border-primary/20 bg-primary/5",
      link: "https://www.linkedin.com/in/cata-torresg/"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Corporativo",
      description: "Para consultas detalladas",
      action: "Enviar email",
      highlight: "Formal",
      color: "border-accent/20 bg-accent/5",
      link: "mailto:catalina@digitalwao.com"
    }
  ];

  const benefits = [
    "Consultoría inicial de 30 minutos sin costo",
    "Diagnóstico gratuito de madurez de IA",
    "Propuesta personalizada para tu empresa",
    "Roadmap de implementación detallado"
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Contacto Directo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              transformar tu empresa
            </span>{" "}
            con IA?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda tu consultoría gratuita y descubre exactamente cómo la IA 
            puede multiplicar los resultados de tu organización.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Elige tu método de contacto preferido</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`${method.color} transition-all duration-300 hover:shadow-card group`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-background rounded-lg shadow-sm">
                        {method.icon}
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="mb-3">
                      {method.highlight}
                    </Badge>
                    
                    <h4 className="font-semibold mb-2">{method.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                      >
                        {method.action}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  O envía tu consulta directamente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Formulario conectado a Netlify */}
                <form 
                  name="contacto" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contacto" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre completo *</label>
                      <Input placeholder="Tu nombre" name="nombre" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email corporativo *</label>
                      <Input placeholder="tu@empresa.com" type="email" name="email" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa</label>
                      <Input placeholder="Nombre de tu empresa" name="empresa" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Cargo</label>
                      <Input placeholder="Tu posición" name="cargo" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">¿Qué te gustaría lograr con IA? *</label>
                    <Textarea 
                      placeholder="Cuéntame sobre tus objetivos, desafíos actuales o qué procesos te gustaría automatizar..."
                      rows={4}
                      name="mensaje"
                      required
                    />
                  </div>

                  <Button variant="cta" size="lg" type="submit" className="w-full">
                    <Calendar className="mr-2 h-5 w-5" />
                    Enviar consulta y agendar llamada
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            {/* What you get */}
            <Card className="shadow-card border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Lo que obtienes al contactarme:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response time */}
            <Card className="shadow-card bg-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-success" />
                  <h3 className="text-lg font-semibold">Tiempo de respuesta</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span className="font-semibold">&lt; 2 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email/Formulario:</span>
                    <span className="font-semibold">&lt; 24 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LinkedIn:</span>
                    <span className="font-semibold">&lt; 4 horas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urgency */}
            <Card className="shadow-card bg-destructive/5 border-destructive/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">⚡ Agenda limitada</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Solo acepto 5 nuevos clientes por mes para garantizar 
                  el máximo resultado en cada implementación.
                </p>
                <Button variant="destructive" size="sm" className="w-full">
                  Reservar mi cupo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

