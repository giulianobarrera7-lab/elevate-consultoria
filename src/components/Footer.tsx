import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 backdrop-blur flex items-center justify-center">
                <span className="font-display font-bold text-lg">N</span>
              </div>
              <span className="font-display font-bold text-xl">Nexum Consulting</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Consultora especializada en desarrollo web y planificación financiera.
              Estrategia y tecnología para potenciar tu negocio.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-smooth hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#nosotros" className="hover:text-primary-foreground transition-smooth">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-primary-foreground transition-smooth">Servicios</a></li>
              <li><a href="#portafolio" className="hover:text-primary-foreground transition-smooth">Portafolio</a></li>
              <li><a href="#beneficios" className="hover:text-primary-foreground transition-smooth">Beneficios</a></li>
              <li><a href="#contacto" className="hover:text-primary-foreground transition-smooth">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>contacto@nexum.com</li>
              <li>+54 11 5555-1234</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Nexum Consulting. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
