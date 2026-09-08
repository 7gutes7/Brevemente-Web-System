import { Icon, type IconName } from "./icons";

type Feature = {
  icon: IconName;
  title: string;
  description: string;
  tag?: string;
  span: string;
  tone?: "neural" | "conciencia";
};

const features: Feature[] = [
  {
    icon: "sparkles",
    title: "Rellenado con IA",
    description:
      "Brifi escucha la sesión y documenta el expediente completo: historia clínica, prescripciones, cumplimiento, evolución del cambio, efectos terapéuticos. Tú solo revisas y apruebas.",
    tag: "Expediente en segundos",
    span: "md:col-span-7",
  },
  {
    icon: "clipboard",
    title: "Modo manual guiado",
    description:
      "Cuando tú o tu paciente prefieran la documentación a mano, se despliegan menús de rellenado con un solo clic según el padecimiento / protocolo DXOP seleccionado.",
    tag: "Flexibilidad total",
    span: "md:col-span-5",
    tone: "conciencia",
  },
  {
    icon: "book",
    title: "Biblioteca digital",
    description:
      "CIE-11, DSM-5-TR, Manuales TBE y 32 Protocolos TBE al alcance de un clic y para consultar, integrados al flujo de trabajo clínico.",
    span: "md:col-span-5",
  },
  {
    icon: "certificate",
    title: "Reportes y constancias",
    description:
      "Constancias psiquiátricas y psicoterapéuticas en formato PDF, con firma y envío digital directo al paciente.",
    span: "md:col-span-7",
    tone: "conciencia",
  },
  {
    icon: "users",
    title: "Bitácora de supervisión",
    description:
      "Registro estructurado de supervisión de casos para terapeutas en formación, con observaciones y recomendaciones del supervisor.",
    span: "md:col-span-6",
  },
  {
    icon: "chart",
    title: "Tu desempeño",
    description:
      "Analíticas de citas, demografía de pacientes y resolución de casos para tomar mejores decisiones en tu práctica y estar apegado a los requerimientos de la normatividad que garantizan una práctica clínica formal y segura.",
    span: "md:col-span-6",
    tone: "conciencia",
  },
];

const tones = {
  neural: { bg: "bg-white", iconBg: "bg-neural-soft text-neural", badge: "bg-conciencia-soft text-conciencia-deep" },
  conciencia: { bg: "bg-neural text-white", iconBg: "bg-white/10 text-white", badge: "bg-white/15 text-white" },
};

export function Features() {
  return (
    <section id="plataforma" className="bg-digital py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-conciencia-dark">
            Para el profesional clínico
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neural-deep sm:text-4xl">
            Una plataforma que piensa como clínico, no como papeleo.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            BreveMente se integra a tu flujo de trabajo actual y actúa como una extensión
            cognitiva: sintetiza datos en tiempo real, apoya la decisión clínica y elimina
            el agotamiento administrativo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {features.map((f) => {
            const t = tones[f.tone ?? "neural"];
            return (
              <article
                key={f.title}
                className={`${f.span} flex flex-col justify-between rounded-3xl p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${t.bg}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${t.iconBg}`}>
                      <Icon name={f.icon} className="h-6 w-6" />
                    </span>
                    {f.tag && (
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.badge}`}>
                        {f.tag}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`mt-6 text-xl font-semibold ${
                      f.tone === "conciencia" ? "text-white" : "text-ink"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-2.5 max-w-lg text-[15px] leading-relaxed ${
                      f.tone === "conciencia" ? "text-white/80" : "text-ink-soft"
                    }`}
                  >
                    {f.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
