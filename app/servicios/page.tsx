import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Scissors, Stethoscope } from "lucide-react";
import { InnerPage } from "@/components/InnerPage";
import { institutionalServices } from "@/data/hospital";

export const metadata: Metadata = { title: "Servicios médicos", description: "Información sobre atención y capacidad hospitalaria confirmada de Hospital SMI." };
const icons = [Stethoscope, Clock3, Scissors, Stethoscope];
export default function ServicesPage() { return <InnerPage eyebrow="Servicios" title="Atención médica con respaldo hospitalario" intro="Consulta la información institucional sustentada y contacta al hospital para confirmar disponibilidad."><section className="section"><div className="wrap"><div className="service-list">{institutionalServices.map((service, index) => { const Icon = icons[index]; return <Link href={service.href} className="service-row" key={service.name}><span><Icon/></span><b>{service.name}</b><small>Información confirmada</small><ArrowRight/></Link>; })}</div><div className="note-panel compact-note"><span className="micro-label">IMPORTANTE</span><h2>Consulta disponibilidad con el hospital.</h2><p>Que el hospital permanezca abierto 24 horas no confirma por sí mismo la disponibilidad de un servicio de urgencias. Llama para orientación e información actual.</p></div><p className="fine-print">Los servicios o procedimientos realizados por especialistas se confirman con cada profesional. Este listado no sustituye un catálogo institucional actualizado.</p></div></section></InnerPage>; }
