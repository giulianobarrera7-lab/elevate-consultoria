import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Fundadora, Estudio Lumen",
    text: "Renovaron por completo nuestra web y duplicamos las consultas en tres meses. Profesionalismo absoluto.",
  },
  {
    name: "Carlos Méndez",
    role: "Director Financiero, TechRio",
    text: "Su asesoramiento financiero nos permitió reorganizar el flujo de caja y planificar inversiones con claridad.",
  },
  {
    name: "Lucía Fernández",
    role: "Emprendedora",
    text: "Acompañamiento real y resultados concretos. Entendieron mi proyecto desde el primer minuto.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative p-8 rounded-2xl gradient-card border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 text-accent/15" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed relative z-10">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
