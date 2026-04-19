import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    text: "Brindar soluciones digitales y financieras que potencien el crecimiento sostenible de cada cliente.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser la consultora de referencia que une tecnología y finanzas para transformar negocios.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Transparencia, excelencia, compromiso y atención personalizada en cada proyecto.",
  },
];

export const About = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Sobre nosotros
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground leading-tight">
              Estrategia, tecnología y resultados que perduran
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              En <strong className="text-foreground">Nexum Consulting</strong> combinamos años
              de experiencia en desarrollo web y planificación financiera para ofrecer
              soluciones integrales. Trabajamos junto a emprendedores, profesionales y
              empresas que buscan claridad estratégica y herramientas digitales sólidas.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Cada proyecto se aborda con metodología, atención al detalle y un enfoque
              centrado en generar resultados medibles a corto y largo plazo.
            </p>
          </div>

          <div className="space-y-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="gradient-card p-6 rounded-xl border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shadow-glow">
                    <v.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{v.title}</h3>
                    <p className="text-muted-foreground mt-1 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
