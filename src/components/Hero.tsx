import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fondo abstracto consultoría"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 mb-8 animate-fade-in">
          <TrendingUp size={14} className="text-primary-foreground" />
          <span className="text-xs font-medium text-primary-foreground tracking-wide uppercase">
            Consultoría estratégica
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] max-w-5xl mx-auto animate-fade-in-up">
          Impulsamos tu negocio con{" "}
          <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            estrategia y tecnología
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Desarrollo web profesional y planificación financiera a medida.
          Soluciones integrales para personas y empresas que buscan crecer con confianza.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant hover:shadow-glow transition-smooth text-base font-semibold px-8 h-14 group"
          >
            <a href="#contacto">
              Solicitar asesoramiento
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8 h-14"
          >
            <a href="#servicios">Ver servicios</a>
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up">
          {[
            { value: "+150", label: "Clientes satisfechos" },
            { value: "10 años", label: "De experiencia" },
            { value: "98%", label: "Tasa de retención" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
