import { Icon } from "./icons";

const chips = ["PX del paranoico", "Diferencia entre SPR", "Protocolo Ataque de Pánico"];

function BrifiChat() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-neural-tint via-conciencia-soft to-transparent opacity-70 blur-2xl"
      />

      <div className="overflow-hidden rounded-3xl border border-border-soft bg-white shadow-card">
        <div className="flex items-center gap-3 border-b border-border-soft bg-digital-bright px-5 py-4">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neural to-conciencia text-white">
            <Icon name="sparkles" className="h-5 w-5" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-conciencia" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Brifi</p>
            <p className="text-xs text-ink-muted">Tu asistente clínico con IA</p>
          </div>
          <span className="ml-auto rounded-full bg-conciencia-soft px-3 py-1 text-xs font-semibold text-conciencia-deep">
            TBE · CIE-11 · DSM-5-TR
          </span>
        </div>

        <div className="space-y-3.5 bg-digital-bright p-5">
          <div className="flex gap-2.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neural-soft text-neural">
              <Icon name="users" className="h-3.5 w-3.5" />
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border-soft bg-white px-4 py-3 text-sm text-ink">
              Doctora, ¿cómo distinguir un SPR fóbico de uno obsesivo-fóbico en este caso de
              ataques de pánico?
            </div>
          </div>

          <div className="flex gap-2.5">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neural to-conciencia text-white">
              <Icon name="sparkles" className="h-3.5 w-3.5" />
            </span>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border-soft bg-white px-4 py-3 text-sm leading-relaxed text-ink-soft">
              En el SPR fóbico (FOB) el miedo se activa ante estímulos externos; en el
              obsesivo-fóbico (OF) predomina la anticipación catastrófica sobre sensaciones
              internas. Según el protocolo de Ataque de Pánico, el indicador clave es la
              evitación progresiva de situaciones y la toma de precauciones. ¿Deseas aplicarlo al expediente?
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded-lg bg-neural px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-neural-dark">
                  Aplicar al expediente
                </button>
                <button className="rounded-lg border border-border-soft px-3.5 py-1.5 text-xs font-semibold text-neural transition-colors hover:bg-digital">
                  Solo consulta
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-soft bg-white p-4">
          <div className="flex gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="cursor-pointer rounded-full border border-border-soft bg-digital px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-conciencia hover:text-conciencia-deep"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-border-soft bg-digital px-4 py-3">
            <span className="text-sm text-ink-muted">Pregúntale a Brifi…</span>
            <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg bg-neural text-white">
              <Icon name="arrow-right" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Brifi() {
  return (
    <section id="brifi" className="relative overflow-hidden border-y border-border-soft bg-white py-20 lg:py-28">
      {/* Video Background en la mitad derecha con bordes difuminados */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 -z-0 w-full lg:w-3/5 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80 filter brightness-105 contrast-105"
        >
          <source src="/Glass_discs_in_diagonal_cascade.mp4" type="video/mp4" />
        </video>
        {/* Difuminado suave progresivo en los extremos (izquierda, superior, inferior y derecha) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_35%,rgba(255,255,255,0.95)_95%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <BrifiChat />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-conciencia-dark">
            Brifi · Tu inteligencia artificial clínica
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neural-deep sm:text-4xl">
            La IA que documenta, consulta y aprende del método TBE.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Brifi no es un chatbot genérico: está entrenada en la Terapia Breve Estratégica y
            en los manuales de referencia. Escucha la sesión, rellena el expediente y responde
            tus consultas sobre casos y contenido clínico.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              {
                title: "Rellena expedientes",
                description:
                  "Con un clic documenta la sesión completa: historial, PX, evaluación del cambio, valoraciones y observaciones.",
              },
              {
                title: "Consulta sobre casos",
                description:
                  "Analiza SPR, diagnósticos diferenciales y sugiere el protocolo adecuado para cada paciente.",
              },
              {
                title: "Consulta contenido",
                description:
                  "Acceso directo a CIE-11, DSM-5-TR, manuales y protocolos TBE desde el mismo panel.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-conciencia-soft text-conciencia-deep">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
