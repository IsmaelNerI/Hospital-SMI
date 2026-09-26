"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { hospital, publicSpecialties } from "@/data/hospital";

const groups = [
  { label: "Hospital", href: "/hospital", links: [{ label: "Quiénes somos", href: "/hospital" }, { label: "Historia", href: "/hospital/historia" }, { label: "Instalaciones", href: "/hospital/instalaciones" }, { label: "Contacto y ubicación", href: "/contacto" }] },
  { label: "Especialidades", href: "/especialidades", links: publicSpecialties.map((item) => ({ label: item.name, href: `/especialidades/${item.slug}` })) },
  { label: "Servicios", href: "/servicios", links: [{ label: "Atención médica", href: "/servicios" }, { label: "Cirugía", href: "/cirugia" }, { label: "Ginecología y Obstetricia", href: "/ginecologia-obstetricia" }, { label: "Pediatría", href: "/pediatria" }] },
  { label: "Médicos", href: "/medicos", links: [{ label: "Directorio médico", href: "/medicos" }, { label: "Buscar por especialidad", href: "/especialidades" }] },
  { label: "Pacientes", href: "/pacientes", links: [{ label: "Antes de tu visita", href: "/pacientes" }, { label: "Seguros y convenios", href: "/seguros-convenios" }, { label: "Aviso de privacidad", href: "/aviso-de-privacidad" }] }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="topline"><div className="wrap topline-inner"><span><i className="live-dot" /> Hospital abierto 24 horas</span><a href={`tel:${hospital.phoneHref}`}><Phone size={14} /> {hospital.phone}</a><span className="top-location"><MapPin size={14} /> Rincón de Romos, Aguascalientes</span></div></div>
      <header className="site-header">
        <div className="wrap nav-row">
          <Link href="/" className="brand" aria-label="Hospital SMI, inicio"><span className="brand-symbol"><span /><span /><span /><span /></span><span className="brand-words"><b>HOSPITAL <em>SMI</em></b><small>SERVICIOS MÉDICOS INTEGRADOS</small></span></Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {groups.map((group) => <div className="nav-group" key={group.label} onMouseEnter={() => setActive(group.label)} onMouseLeave={() => setActive(null)}>
              <button className={active === group.label ? "nav-trigger active" : "nav-trigger"} aria-expanded={active === group.label} onClick={() => setActive(active === group.label ? null : group.label)}>{group.label}<ChevronDown size={14} /></button>
              {active === group.label && <div className="mega-panel"><div className="mega-intro"><span className="micro-label">HOSPITAL SMI</span><h3>{group.label}</h3><p>Información clara para encontrar el camino de atención adecuado.</p><Link href={group.href} onClick={() => setActive(null)}>Explorar sección <ArrowDown size={14} /></Link></div><div className="mega-links">{group.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setActive(null)}>{link.label}<span>↗</span></Link>)}</div></div>}
            </div>)}
            <Link className="nav-contact" href="/contacto">Contacto</Link>
          </nav>
          <a className="button button-dark header-call" href={`tel:${hospital.phoneHref}`}><Phone size={16} /> Llamar al hospital</a>
          <button className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="mobile-menu"><div className="mobile-menu-top"><span>¿Qué necesitas encontrar?</span><a href={`tel:${hospital.phoneHref}`}><Phone size={16} /> Llamar</a></div>{groups.map((group) => <details key={group.label}><summary>{group.label}<ChevronDown size={16} /></summary><div>{group.links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</div></details>)}<Link className="mobile-feature-link" href="/contacto" onClick={() => setOpen(false)}>Contacto y ubicación <span>↗</span></Link></div>}
      </header>
    </>
  );
}
