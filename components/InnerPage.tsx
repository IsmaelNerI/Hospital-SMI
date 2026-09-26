import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";

export function InnerPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: React.ReactNode }) {
  return <><section className="inner-hero"><div className="wrap"><div className="breadcrumbs"><Link href="/">Inicio</Link><span>/</span><span>{eyebrow}</span></div><span className="eyebrow"><i />{eyebrow}</span><h1>{title}</h1><p>{intro}</p><div className="hero-actions"><a className="button button-dark" href={`tel:${hospital.phoneHref}`}><Phone size={16} /> Llamar al hospital</a><Link className="button button-plain" href="/contacto">Contacto y ubicación <ArrowUpRight size={16} /></Link></div></div></section><main>{children ?? <section className="section"><div className="wrap"><div className="note-panel"><span className="micro-label">HOSPITAL SMI</span><h2>Información clara, atención cercana.</h2><p>Comunícate con nuestro equipo para conocer la información vigente y la disponibilidad correspondiente a tu necesidad.</p><Link className="text-link" href="/contacto"><ArrowLeft size={15} /> Ir a contacto</Link></div></div></section>}</main></>;
}
