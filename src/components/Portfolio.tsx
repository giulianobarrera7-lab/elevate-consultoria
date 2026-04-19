import { useState } from "react";
import {
  ExternalLink,
  Globe,
  ShoppingBag,
  LineChart,
  Briefcase,
  PiggyBank,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "todos" | "web" | "finanzas";

type Project = {
  icon: typeof Globe;
  title: string;
  category: Exclude<Category, "todos">;
  categoryLabel: string;
  description: string;
  tags: string[];
  link: string;
  gradient: string;
  mockup: "browser" | "dashboard" | "chart";
};

const projects: Project[] = [
  {
    icon: Globe,
    title: "Nexum Consulting",
    category: "web",
    categoryLabel: "Sitio Corporativo",
    description:
      "Sitio web institucional con foco en conversión, SEO y experiencia de usuario para captar clientes calificados.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    gradient: "from-blue-500 to-indigo-600",
    mockup: "browser",
  },
  {
    icon: ShoppingBag,
    title: "Tienda Lumen",
    category: "web",
    categoryLabel: "E-commerce",
    description:
      "Plataforma e-commerce a medida con catálogo dinámico, carrito y pasarela de pagos integrada.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    gradient: "from-purple-500 to-pink-500",
    mockup: "browser",
  },
  {
    icon: Briefcase,
    title: "Estudio Jurídico Vega",
    category: "web",
    categoryLabel: "Landing Page",
    description:
      "Landing page de alta conversión con formulario inteligente y optimización SEO técnica para destacar en búsquedas locales.",
    tags: ["Astro", "SEO", "Analytics"],
    link: "#",
    gradient: "from-cyan-500 to-blue-600",
    mockup: "browser",
  },
  {
    icon: LineChart,
    title: "Plan Financiero TechRio",
    category: "finanzas",
    categoryLabel: "Asesoría Empresarial",
    description:
      "Reorganización de flujo de caja, planificación de inversiones y proyecciones financieras a 3 años.",
    tags: ["Análisis", "KPIs", "Reportes"],
    link: "#",
    gradient: "from-emerald-500 to-teal-600",
    mockup: "dashboard",
  },
  {
    icon: PiggyBank,
    title: "Estrategia Personal Patrimonial",
    category: "finanzas",
    categoryLabel: "Planificación Personal",
    description:
      "Diseño de presupuesto familiar, fondo de emergencia y cartera de inversión diversificada para profesional independiente.",
    tags: ["Presupuesto", "Inversión", "Ahorro"],
    link: "#",
    gradient: "from-amber-500 to-orange-600",
    mockup: "chart",
  },
  {
    icon: Building2,
    title: "Reestructuración PyME",
    category: "finanzas",
    categoryLabel: "Consultoría Estratégica",
    description:
      "Análisis de rentabilidad por línea de negocio, optimización de costos y plan de financiamiento para expansión.",
    tags: ["Rentabilidad", "Costos", "Financiamiento"],
    link: "#",
    gradient: "from-rose-500 to-red-600",
    mockup: "dashboard",
  },
];

const filters: { value: Category; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "web", label: "Desarrollo Web" },
  { value: "finanzas", label: "Finanzas" },
];

const Mockup = ({
  type,
  gradient,
}: {
  type: Project["mockup"];
  gradient: string;
}) => {
  return (
    <div
      className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />

      <div className="absolute inset-x-6 top-6 bottom-0 rounded-t-lg bg-white/95 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5 border-b border-gray-200 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <div className="ml-3 h-2 flex-1 rounded-full bg-gray-100" />
        </div>

        <div className="space-y-2 p-4">
          {type === "browser" && (
            <>
              <div className="h-3 w-2/3 rounded bg-gray-300" />
              <div className="h-2 w-full rounded bg-gray-200" />
              <div className="h-2 w-5/6 rounded bg-gray-200" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-10 rounded bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="h-10 rounded bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="h-10 rounded bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
            </>
          )}

          {type === "dashboard" && (
            <>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-8 rounded bg-blue-100" />
                <div className="h-8 rounded bg-emerald-100" />
                <div className="h-8 rounded bg-amber-100" />
              </div>
              <div className="mt-3 flex h-14 items-end gap-1.5">
                {[40, 70, 50, 85, 60, 95, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-blue-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </>
          )}

          {type === "chart" && (
            <>
              <div className="h-3 w-1/2 rounded bg-gray-300" />
              <svg
                viewBox="0 0 200 60"
                className="mt-2 h-16 w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,45 L30,38 L60,42 L90,25 L120,30 L150,15 L180,20 L200,8 L200,60 L0,60 Z"
                  fill="url(#lineGrad)"
                />
                <path
                  d="M0,45 L30,38 L60,42 L90,25 L120,30 L150,15 L180,20 L200,8"
                  fill="none"
                  stroke="rgb(16 185 129)"
                  strokeWidth="1.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [active, setActive] = useState<Category>("todos");

  const filtered =
    active === "todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portafolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                active === f.value
                  ? "gradient-hero text-primary-foreground border-transparent shadow-glow"
                  : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-2 overflow-hidden flex flex-col animate-fade-in-up"
            >
              <Mockup type={p.mockup} gradient={p.gradient} />

              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-glow flex-shrink-0">
                    <p.icon size={18} className="text-primary-foreground" />
                  </div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                    {p.categoryLabel}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1 text-sm">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
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
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-foreground hover:text-accent transition-smooth group/link"
                >
                  Ver proyecto
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">
            No hay proyectos en esta categoría todavía.
          </p>
        )}

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
