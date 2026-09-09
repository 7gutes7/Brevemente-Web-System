import { Icon } from "./icons";

const trustPoints = [
  "Datos protegidos y consentimiento del paciente",
  "Método validado clínicamente",
  "IA entrenada en TBE",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
      {/* Background Video with Glassmorphic Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-70 scale-105 filter brightness-105 contrast-105"
        >
          <source src="/Liquid_glass_wave_transitioning.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-digital/65 via-digital/40 to-digital" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(117,175,188,0.2),rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-neural-deep sm:text-5xl lg:text-6xl">
          El futuro del TRATAMIENTO DE SALUD MENTAL es{" "}
          <span className="text-conciencia-dark">humano</span>, potenciado por IA.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          BreveMente asume la carga administrativa del expediente clínico.{" "}
          <strong className="font-semibold text-ink">Brifi</strong> escucha la sesión y
          documenta por ti, devolviéndote el tiempo invaluable para centrarte en lo que
          realmente importa: el cuidado directo y empático del paciente.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/prototipo"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-neural px-8 py-4 text-base font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-neural-dark hover:shadow-card-hover"
          >
            Explorar la plataforma
            <Icon name="arrow-right" className="h-4.5 w-4.5" />
          </a>
          <a
            href="#brifi"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-neural-tint bg-white/90 px-8 py-4 text-base font-semibold text-neural backdrop-blur-sm transition-all hover:border-conciencia hover:text-conciencia-deep"
          >
            <Icon name="play" className="h-4 w-4" />
            Ver demostración
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {trustPoints.map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-conciencia-soft text-conciencia-deep">
                <Icon name="check" className="h-3 w-3" strokeWidth={2.4} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
