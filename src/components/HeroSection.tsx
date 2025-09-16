import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ai-consulting.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Consultoría IA Empresarial Colombia - Transformación digital con inteligencia artificial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Star className="h-4 w-4 text-accent" />
              Experta #1 en IA Empresarial
            </Badge>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforma tu empresa con{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>{" "}
                segura y productiva
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Ayudo a directivos y equipos a adoptar IA de forma estratégica, 
                eliminando riesgos y maximizando la rentabilidad de cada proceso automatizado.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                Agenda tu Consultoría Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary/20 hover:border-primary"
              >
                Descarga tu Guía Gratuita
              </Button>
            </div>

            {/* Social proof metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Aumento productividad</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-success mr-2" />
                  <span className="text-2xl font-bold text-foreground">85%</span>
                </div>
                <p className="text-sm text-muted-foreground">Implementación segura</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">ROI comprobado</p>
              </div>
            </div>
          </div>

          {/* Trust indicators / Logos placeholder */}
          <div className="hidden lg:block">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-lg font-semibold mb-6 text-center">Empresas que confían en nuestra experiencia</h3>
              <div className="grid grid-cols-2 gap-6 opacity-60">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Logo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;