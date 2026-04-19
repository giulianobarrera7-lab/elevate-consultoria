import { Award, Users, Zap, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Award, title: "Experiencia comprobada", text: "Más de una década entregando proyectos exitosos en distintos sectores." },
  { icon: Users, title: "Atención personalizada", text: "Cada cliente recibe un trato cercano y soluciones adaptadas a su realidad." },
  { icon: Zap, title: "Resultados medibles", text: "Trabajamos con KPIs claros y reportes transparentes en cada etapa." },
  { icon: ShieldCheck, title: "Confianza y ética", text: "Confidencialidad absoluta y un compromiso real con tu éxito." },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 md:py-32 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Resultados que respaldan cada decisión
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shadow-glow mx-auto">
                <b.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mt-5">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
