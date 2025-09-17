import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  BookOpen, 
  Users, 
  Target, 
  Linkedin, 
  Mail,
  GraduationCap,
  Building,
  Globe
} from "lucide-react";

const AboutSection = () => {
  const credentials = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Educación Especializada",
      description: "Growth Marketing e Inteligencia Artificial"
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Experiencia Corporativa",
      description: "8+ años en transformación digital en empresas"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Certificaciones Internacionales",
      description: "American Business College"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Empresas Transformadas",
      description: "Organizaciones de LATAM con IA implementada"
    }
  ];

  const achievements = [
    { number: "500+", label: "Tareas automatizadas" },
    { number: "85%", label: "Aumento productividad" },
    { number: "250%", label: "ROI promedio generado" },
    { number: "98%", label: "Índice de satisfacción" }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Award className="h-4 w-4" />
                Experta Certificada en IA Empresarial
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                La consultoría que las empresas{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  necesitan para liderar con IA
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Como consultores especializados 100% en implementación 
                segura y rentable de IA para empresas. Nuestra misión es democratizar el acceso 
                a estas tecnologías y hacer que cada organización las use de forma estratégica.
              </p>
            </div>

            {/* Why me */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">¿Por qué elegir nuestra consultoría?</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Enfoque 100% práctico",
                    description: "No teoría académica. Solo estrategias que funcionan en empresas reales."
                  },
                  {
                    title: "Resultados medibles",
                    description: "Cada implementación incluye KPIs claros y ROI demostrable desde el primer mes."
                  },
                  {
                    title: "Soporte continuo",
                    description: "Acompañamiento completo durante todo el proceso de transformación."
                  },
                  {
                    title: "Adaptado a LATAM",
                    description: "Metodología diseñada específicamente para empresas latinoamericanas."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botón LinkedIn */}
              <a
                href="https://www.linkedin.com/in/cata-torresg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="cta" size="lg" className="w-full">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Conectar en LinkedIn
                </Button>
              </a>

              {/* Botón Correo */}
              <a
                href="mailto:catalina@digitalwao.com"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar mensaje
                </Button>
              </a>
            </div>
          </div>

          {/* Credentials Card */}
          <div className="space-y-6">
            {/* Main credentials */}
            <Card className="shadow-card border-primary/20 bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Credenciales y experiencia</h3>
                
                <div className="grid gap-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {credential.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{credential.title}</p>
                        <p className="text-sm text-muted-foreground">{credential.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Resultados comprobados</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold">{achievement.number}</div>
                      <div className="text-white/80 text-sm">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="shadow-card bg-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-success" />
                  <h3 className="text-lg font-semibold">Mi misión</h3>
                </div>
                <p className="text-muted-foreground">
                  Hacer que Latinoamérica sea líder en adopción empresarial de IA, 
                  ayudando a cada organización a implementar estas tecnologías de forma 
                  segura, ética y rentable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
