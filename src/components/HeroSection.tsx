import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforma tu empresa con{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>{" "}
              segura y productiva
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ayudo a directivos y equipos a adoptar IA de forma estratégica, 
              eliminando riesgos y maximizando la rentabilidad de cada proceso automatizado.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default HeroSection
