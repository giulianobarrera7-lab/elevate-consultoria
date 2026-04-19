import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor completá todos los campos.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("¡Mensaje enviado! Te contactaremos en breve.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Conversemos sobre tu proyecto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "contacto@nexum.com" },
              { icon: Phone, label: "Teléfono", value: "+54 11 5555-1234" },
              { icon: MapPin, label: "Oficina", value: "Buenos Aires, Argentina" },
            ].map((c) => (
              <div
                key={c.label}
                className="p-5 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shadow-glow flex-shrink-0">
                  <c.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {c.label}
                  </div>
                  <div className="font-display font-semibold text-foreground">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-8 md:p-10 rounded-2xl bg-card border border-border shadow-elegant space-y-5"
          >
            <div>
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 h-12"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 h-12"
              />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Contanos sobre tu proyecto..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full gradient-hero border-0 shadow-elegant hover:shadow-glow transition-smooth h-14 text-base font-semibold group"
            >
              {loading ? "Enviando..." : (
                <>
                  Enviar mensaje
                  <Send size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
