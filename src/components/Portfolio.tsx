import { ExternalLink, Globe, ShoppingBag, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Globe,
    title: "Nexum Consulting",
    category: "Sitio Corporativo",
    description:
      "Sitio web institucional para consultora de desarrollo y planificación financiera, con enfoque en conversión y experiencia de usuario.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    icon: ShoppingBag,
    title: "Tienda Online",
    category: "E-commerce",
    description:
      "Plataforma e-commerce a medida con catálogo dinámico, carrito de compras y pasarela de pagos integrada.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    icon: LineChart,
    title: "Dashboard Financiero",
    category: "Aplicación Web",
    description:
      "Panel de control financiero con KPIs en tiempo real, reportes personalizados y análisis de rentabilidad.",
    tags: ["React", "Recharts", "Node.js"],
    link: "#",
  },
];

export const Portfolio = () => {
  return (
    <section id="portafolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Portafolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Proyectos que generan resultados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una muestra de los trabajos que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-2xl gradient-card border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-smooth" />

              <div className="relative flex-1 flex flex-col">
                <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition-smooth">
                  <p.icon size={24} className="text-primary-foreground" />
                </div>

                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  {p.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-foreground hover:text-accent transition-smooth"
                >
                  Ver proyecto
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="gradient-hero border-0 shadow-elegant hover:shadow-glow transition-smooth"
          >
            <a href="#contacto">¿Tienes un proyecto en mente?</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
