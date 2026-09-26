"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { hospital, publicSpecialties } from "@/data/hospital";
const groups = [
  {
    label: "Hospital",
    href: "/hospital",
    description: "Conoce Hospital SMI y nuestra presencia en Rincón de Romos.",
    links: [
      { label: "Nuestro hospital", href: "/hospital" },
      { label: "Instalaciones", href: "/hospital/instalaciones" },
      { label: "Contacto y ubicación", href: "/contacto" },
    ],
  },
  {
    label: "Especialidades",
    href: "/especialidades",
    description: "Encuentra la especialidad que necesitas.",
    links: publicSpecialties.map((s) => ({
      label: s.name,
      href: `/especialidades/${s.slug}`,
    })),
  },
  {
    label: "Servicios",
    href: "/servicios",
    description: "Atención médica y capacidad hospitalaria.",
    links: [
      { label: "Atención hospitalaria", href: "/servicios" },
      { label: "Cirugía", href: "/cirugia" },
      { label: "Ginecología y Obstetricia", href: "/ginecologia-obstetricia" },
      { label: "Pediatría", href: "/pediatria" },
    ],
  },
];
const links = [
  { label: "Médicos", href: "/medicos" },
  { label: "Pacientes", href: "/pacientes" },
  { label: "Seguros y convenios", href: "/seguros-convenios" },
  { label: "Contacto", href: "/contacto" },
];
export function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  function closeMobile() {
    dialog.current?.close();
    setOpen(false);
    toggle.current?.focus();
  }
  useEffect(() => {
    if (!active) return;
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setActive(null);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        header.current
          ?.querySelector<HTMLButtonElement>('[aria-expanded="true"]')
          ?.focus();
        setActive(null);
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [active]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  return (
    <>
      <div className="topline">
        <div className="wrap topline-inner">
          <span>
            <i className="live-dot" />
            Abierto 24 horas
          </span>
          <a href={`tel:${hospital.phoneHref}`}>
            <Phone size={13} />
            {hospital.phone}
          </a>
          <span className="top-location">
            <MapPin size={14} />
            Rincón de Romos, Aguascalientes
          </span>
        </div>
      </div>
      <header
        ref={header}
        className="site-header"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setActive(null);
        }}
      >
        <div className="wrap nav-row">
          <Link className="brand" href="/" aria-label="Hospital SMI, inicio">
            <Image
              src="/brand/hospital-smi-official.png"
              alt="Hospital SMI"
              width={105}
              height={70}
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {groups.map((group) => (
              <div
                className="nav-group"
                key={group.label}
                onMouseEnter={() => setActive(group.label)}
                onMouseLeave={() => setActive(null)}
              >
                <button
                  className="nav-trigger"
                  aria-expanded={active === group.label}
                  aria-controls={`menu-${group.href.slice(1)}`}
                  onClick={() => setActive(group.label)}
                >
                  {group.label}
                  <ChevronDown size={13} />
                </button>
                {active === group.label && (
                  <div
                    className="mega-panel"
                    id={`menu-${group.href.slice(1)}`}
                  >
                    <div className="mega-heading">
                      <div>
                        <h2>{group.label}</h2>
                        <p>{group.description}</p>
                      </div>
                      <Link
                        className="text-link"
                        href={group.href}
                        onClick={() => setActive(null)}
                      >
                        Ver todo <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="mega-links">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setActive(null)}
                        >
                          {link.label}
                          <ArrowRight size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {links.map((link) => (
              <Link key={link.href} className="nav-trigger" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            className="button button-dark header-call"
            href={`tel:${hospital.phoneHref}`}
          >
            <Phone size={17} />
            Llamar
          </a>
          <button
            ref={toggle}
            className="mobile-menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
            }}
          >
            <Menu />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-dialog"
        aria-label="Menú principal"
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <div className="mobile-dialog-head">
          <Image
            src="/brand/hospital-smi-official.png"
            alt="Hospital SMI"
            width={90}
            height={60}
          />
          <button
            className="icon-button"
            onClick={closeMobile}
            aria-label="Cerrar menú"
          >
            <X />
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          {groups.map((group) => (
            <details key={group.label}>
              <summary>
                {group.label}
                <ChevronDown size={19} />
              </summary>
              <div>
                <Link href={group.href} onClick={closeMobile}>
                  Ver {group.label.toLowerCase()}
                </Link>
                {group.links
                  .filter((l) => l.href !== group.href)
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </details>
          ))}
          {links.map((link) => (
            <Link
              className="mobile-link"
              href={link.href}
              key={link.href}
              onClick={closeMobile}
            >
              {link.label}
              <ArrowRight size={18} />
            </Link>
          ))}
        </nav>
        <div className="mobile-contact">
          <span className="hours">
            <i className="live-dot" />
            Hospital abierto 24 horas
          </span>
          <a className="button button-dark" href={`tel:${hospital.phoneHref}`}>
            <Phone size={18} />
            {hospital.phone}
          </a>
          <p>Rincón de Romos, Aguascalientes</p>
        </div>
      </dialog>
    </>
  );
}
