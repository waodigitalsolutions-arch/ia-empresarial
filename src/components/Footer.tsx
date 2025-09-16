import { Brain, Linkedin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    servicios: [
      { name: "Capacitaciones", href: "#servicios" },
      { name: "Auditorías de IA", href: "#servicios" },
      { name: "Políticas de uso", href: "#servicios" },
      { name: "Implementación", href: "#servicios" }
    ],
    recursos: [
      { name: "Guía gratuita", href: "#recursos" },
      { name: "Casos de éxito", href: "#testimonios" },
      { name: "Blog IA", href: "#" },
      { name: "Webinars", href: "#" }
    ],
    empresa: [
      { name: "Sobre mí", href: "#sobre-mi" },
      { name: "Metodología", href: "#sobre-mi" },
      { name: "Certificaciones", href: "#sobre-mi" },
      { name: "Contacto", href: "#contacto" }
    ]
  };

  return (
    <footer className="bg-secondary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">IA Empresarial</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              La consultora líder en implementación estratégica de 
              Inteligencia Artificial para empresas colombianas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {links.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {links.recursos.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {links.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} IA Empresarial Colombia. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;