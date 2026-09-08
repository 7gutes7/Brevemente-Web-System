import { Icon, type IconName } from "./icons";

const steps: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "calendar",
    title: "Agenda la cita",
    description:
      "Al generar la cita, el paciente recibe el formulario de historia clínica directamente por WhatsApp, con consentimientos y privacidad de datos.",
  },
  {
    icon: "clipboard",
    title: "Se abre el expediente",
    description:
      "Al llegar el paciente, su expediente aparece listo en «Pacientes para hoy». No hay búsquedas ni relleno previo.",
  },
  {
    icon: "mic",
    title: "Graba la sesión",
    description:
      "Presiona play y dedícate por completo a tu paciente. Brifi escucha y procesa la sesión en tiempo real.",
  },
  {
    icon: "sparkles",
    title: "Brifi rellena el expediente",
    description:
      "Al detener, un solo clic y el expediente queda documentado: historial estructurado, PX y valoraciones. Tú solo apruebas.",
  },
  {
    icon: "clipboard",
    title: "Modo manual",
    description:
      "Documentación manual, fácil y sencilla si tú o tu paciente no quieren IA.",
  },
];

export function HowItWorks() {
  return (
    <section id="funciona" className="bg-neural py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-conciencia">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Del consultorio al expediente en minutos.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Un flujo pensado para que la tecnología acompañe, nunca interrumpa, tu práctica clínica.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="absolute right-5 top-5 text-4xl font-bold leading-none text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-conciencia text-neural-deep">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
