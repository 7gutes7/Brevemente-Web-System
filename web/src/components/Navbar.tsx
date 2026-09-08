"use client";

import { useState } from "react";
import { Icon } from "./icons";

const links = [
  { href: "#brifi", label: "Brifi" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-digital-bright/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        {/* Margen Izquierdo - Brifi y Contacto */}
        <div className="flex flex-1 items-center justify-start">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-neural"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Centro - Logo */}
        <div className="flex shrink-0 items-center justify-center">
          <a href="#inicio" className="flex items-center py-1" aria-label="BreveMente inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/BrevementeHeader.png"
              alt="BreveMente"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </a>
        </div>

        {/* Margen Derecho - Abrir Prototipo */}
        <div className="flex flex-1 items-center justify-end">
          <div className="hidden items-center md:flex">
            <a
              href="/prototipo"
              className="rounded-lg bg-neural px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neural-dark"
            >
              Abrir Prototipo
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-digital md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border-soft bg-digital-bright px-5 pb-6 pt-2 md:hidden"
          aria-label="Móvil"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-digital hover:text-neural"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="/prototipo"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-neural px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Abrir Prototipo
          </a>
        </nav>
      )}
    </header>
  );
}
