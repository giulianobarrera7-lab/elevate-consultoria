import { Code2, LineChart, Check } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    subtitle: "Sitios modernos, rápidos y orientados a conversión",
    features: [
      "Páginas web corporativas y landing pages",
      "Tiendas e-commerce a medida",
      "Optimización SEO y rendimiento",
      "Diseño responsive y experiencia de usuario",
    ],
  },
  {
    icon: LineChart,
    title: "Planificación Financiera",
    subtitle: "Estrategia financiera para personas y empresas",
    features: [
      "Presupuestos y control de gastos",
      "Estrategias de inversión personalizadas",
      "Asesoramiento estratégico empresarial",
      "Análisis de flujo y rentabilidad",
    ],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Nuestros servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Dos áreas. Un mismo compromiso.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluciones especializadas que se complementan para potenciar tu proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 md:p-10 rounded-2xl gradient-card border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-smooth" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition-smooth">
                  <s.icon size={28} className="text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{s.subtitle}</p>

                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-accent" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
